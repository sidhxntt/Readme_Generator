import { text, select, multiselect, confirm, cancel, isCancel } from '@clack/prompts';
import { PROJECT_TYPES, LICENSES, BADGE_OPTIONS, ProjectInfo } from './types_and_varaibles';

export async function collectProjectInfo(): Promise<ProjectInfo> {
  // Basic project information
  const name = await text({
    message: 'What is your project name?',
    placeholder: 'my-awesome-project',
    validate: value => !value.trim() ? 'Project name is required' : undefined
  }) as string;

  if (isCancel(name)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const description = await text({
    message: 'Describe your project in one line:',
    placeholder: 'A brief description of what your project does',
    validate: value => !value.trim() ? 'Description is required' : undefined
  }) as string;

  if (isCancel(description)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const type = await select({
    message: 'What type of project is this?',
    options: PROJECT_TYPES
  }) as string;

  if (isCancel(type)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const author = await text({
    message: 'Author name:',
    placeholder: 'Your Name'
  }) as string;

  if (isCancel(author)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const email = await text({
    message: 'Author email (optional):',
    placeholder: 'your.email@example.com'
  }) as string;

  if (isCancel(email)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const githubUsername = await text({
    message: 'GitHub username (optional):',
    placeholder: 'yourusername'
  }) as string;

  if (isCancel(githubUsername)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const license = await select({
    message: 'Choose a license:',
    options: LICENSES
  }) as string;

  if (isCancel(license)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const version = await text({
    message: 'Current version:',
    placeholder: '1.0.0',
    initialValue: '1.0.0'
  }) as string;

  if (isCancel(version)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  // Features
  const featuresInput = await text({
    message: 'List key features (comma-separated):',
    placeholder: 'Feature 1, Feature 2, Feature 3'
  }) as string;

  if (isCancel(featuresInput)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const features = featuresInput.split(',').map(f => f.trim()).filter(Boolean);

  // Technologies
  const techInput = await text({
    message: 'Technologies used (comma-separated):',
    placeholder: 'TypeScript, Node.js, React'
  }) as string;

  if (isCancel(techInput)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const technologies = techInput.split(',').map(t => t.trim()).filter(Boolean);

  // Prerequisites
  const prereqInput = await text({
    message: 'Prerequisites (comma-separated, optional):',
    placeholder: 'Node.js >= 16, Git'
  }) as string;

  if (isCancel(prereqInput)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const prerequisites = prereqInput ? prereqInput.split(',').map(p => p.trim()).filter(Boolean) : [];

  // Installation instructions
  const installation = await text({
    message: 'Installation command:',
    placeholder: 'npm install my-project'
  }) as string;

  if (isCancel(installation)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  // Usage example
  const usage = await text({
    message: 'Basic usage example:',
    placeholder: 'npm start'
  }) as string;

  if (isCancel(usage)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  // Badges
  const badges = await multiselect({
    message: 'Select badges to include:',
    options: BADGE_OPTIONS,
    required: false
  }) as string[];

  if (isCancel(badges)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  // Optional sections
  const demo = await text({
    message: 'Demo URL (optional):',
    placeholder: 'https://your-demo.com'
  }) as string;

  if (isCancel(demo)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const screenshots = await confirm({
    message: 'Include screenshots section?'
  });

  if (isCancel(screenshots)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const contributing = await confirm({
    message: 'Include contributing guidelines?'
  });

  if (isCancel(contributing)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const issues = await confirm({
    message: 'Include issues/bug reporting section?'
  });

  if (isCancel(issues)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const changelog = await confirm({
    message: 'Include changelog section?'
  });

  if (isCancel(changelog)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const roadmap = await confirm({
    message: 'Include roadmap section?'
  });

  if (isCancel(roadmap)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const faq = await confirm({
    message: 'Include FAQ section?'
  });

  if (isCancel(faq)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const support = await text({
    message: 'Support information (optional):',
    placeholder: 'Email, Discord, etc.'
  }) as string;

  if (isCancel(support)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  const acknowledgments = await text({
    message: 'Acknowledgments (optional):',
    placeholder: 'Thanks to...'
  }) as string;

  if (isCancel(acknowledgments)) {
    cancel('Operation cancelled');
    process.exit(0);
  }

  // Build the return object with proper handling of optional properties
  const projectInfo: ProjectInfo = {
    name,
    description,
    type,
    author,
    email,
    githubUsername,
    license,
    version,
    features,
    installation,
    usage,
    technologies,
    prerequisites,
    contributing,
    issues,
    changelog,
    badges,
    screenshots,
    roadmap,
    faq
  };

  // Only add optional properties if they have values
  if (demo && demo.trim()) {
    projectInfo.demo = demo.trim();
  }

  if (support && support.trim()) {
    projectInfo.support = support.trim();
  }

  if (acknowledgments && acknowledgments.trim()) {
    projectInfo.acknowledgments = acknowledgments.trim();
  }

  return projectInfo;
}