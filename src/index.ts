#!/usr/bin/env node

import { intro, outro, confirm, spinner, cancel, isCancel } from '@clack/prompts';
import chalk from 'chalk';
import fs from 'fs';
import { collectProjectInfo } from './utils/collect_project_info';
import { generateReadme } from './utils/generateReadme';

async function main(): Promise<void> {
  console.clear();
  intro(chalk.bgMagenta(' README Generator '));

  console.log(chalk.dim('Generate a professional README.md for any project\n'));

  const info = await collectProjectInfo();

  const s = spinner();
  s.start('Generating README.md...');

  try {
    const readmeContent = generateReadme(info);
    
    // Write to file
    fs.writeFileSync('README.md', readmeContent, 'utf-8');
    
    s.stop('✅ README.md generated successfully!');
    
    console.log(chalk.green('\n📁 Generated files:'));
    console.log(chalk.dim('  - README.md'));
    
    const openFile = await confirm({
      message: 'Would you like to preview the generated README?'
    });

    if (!isCancel(openFile) && openFile) {
      console.log(chalk.dim('\nREADME.md preview:\n'));
      console.log(chalk.gray('─'.repeat(60)));
      console.log(readmeContent.split('\n').slice(0, 20).join('\n'));
      console.log(chalk.gray('... (truncated)'));
      console.log(chalk.gray('─'.repeat(60)));
    }

    outro(chalk.green('🎉 Your README.md is ready! Happy coding!'));
    
  } catch (error) {
    s.stop('❌ Failed to generate README');
    cancel(`Error: ${error}`);
    process.exit(1);
  }
}

// Handle process interruption
process.on('SIGINT', () => {
  cancel('Operation cancelled by user');
  process.exit(0);
});

main().catch((error) => {
  cancel('An unexpected error occurred');
  console.error(error);
  process.exit(1);
});