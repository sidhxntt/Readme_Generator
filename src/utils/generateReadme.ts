import { generateBadges } from "./generateBadges";
import { getProjectEmoji } from "./getProjectEmoji";
import { ProjectInfo } from "./types_and_varaibles";

export function generateReadme(info: ProjectInfo): string {
  const emoji = getProjectEmoji(info.type);
  const badges = generateBadges(info);
  
  let readme = `# ${emoji} ${info.name}\n\n`;
  
  if (badges) {
    readme += badges;
  }
  
  readme += `${info.description}\n\n`;

  if (info.demo) {
    readme += `🌟 **[Live Demo](${info.demo})**\n\n`;
  }

  // Table of Contents
  readme += `## 📋 Table of Contents\n\n`;
  readme += `- [Features](#-features)\n`;
  if (info.screenshots) readme += `- [Screenshots](#-screenshots)\n`;
  if (info.prerequisites.length) readme += `- [Prerequisites](#-prerequisites)\n`;
  readme += `- [Installation](#-installation)\n`;
  readme += `- [Usage](#-usage)\n`;
  if (info.technologies.length) readme += `- [Tech Stack](#-tech-stack)\n`;
  if (info.roadmap) readme += `- [Roadmap](#-roadmap)\n`;
  if (info.contributing) readme += `- [Contributing](#-contributing)\n`;
  if (info.issues) readme += `- [Issues](#-issues)\n`;
  if (info.changelog) readme += `- [Changelog](#-changelog)\n`;
  if (info.faq) readme += `- [FAQ](#-faq)\n`;
  readme += `- [License](#-license)\n`;
  if (info.support) readme += `- [Support](#-support)\n`;
  if (info.acknowledgments) readme += `- [Acknowledgments](#-acknowledgments)\n`;
  readme += `\n`;

  // Features
  readme += `## ✨ Features\n\n`;
  info.features.forEach(feature => {
    readme += `- ✅ ${feature}\n`;
  });
  readme += `\n`;

  // Screenshots
  if (info.screenshots) {
    readme += `## 📸 Screenshots\n\n`;
    readme += `<!-- Add your screenshots here -->\n`;
    readme += `![Screenshot 1](docs/images/screenshot1.png)\n`;
    readme += `![Screenshot 2](docs/images/screenshot2.png)\n\n`;
  }

  // Prerequisites
  if (info.prerequisites.length) {
    readme += `## 📋 Prerequisites\n\n`;
    readme += `Before running this project, make sure you have:\n\n`;
    info.prerequisites.forEach(prereq => {
      readme += `- ${prereq}\n`;
    });
    readme += `\n`;
  }

  // Installation
  readme += `## 🚀 Installation\n\n`;
  readme += `\`\`\`bash\n${info.installation}\n\`\`\`\n\n`;

  // Usage
  readme += `## 🎯 Usage\n\n`;
  readme += `\`\`\`bash\n${info.usage}\n\`\`\`\n\n`;

  // Add usage examples based on project type
  if (info.type === 'cli') {
    readme += `### Command Line Options\n\n`;
    readme += `\`\`\`bash\n`;
    readme += `# Basic usage\n${info.name} [options]\n\n`;
    readme += `# Help\n${info.name} --help\n\n`;
    readme += `# Version\n${info.name} --version\n`;
    readme += `\`\`\`\n\n`;
  } else if (info.type === 'library') {
    readme += `### API Example\n\n`;
    readme += `\`\`\`javascript\nimport { ${info.name.replace(/-/g, '')} } from '${info.name}';\n\n`;
    readme += `// Basic usage example\nconst result = ${info.name.replace(/-/g, '')}();\nconsole.log(result);\n\`\`\`\n\n`;
  } else if (info.type === 'web-app') {
    readme += `### Development\n\n`;
    readme += `\`\`\`bash\n# Start development server\nnpm run dev\n\n# Build for production\nnpm run build\n\n# Run tests\nnpm test\n\`\`\`\n\n`;
  }

  // Tech Stack
  if (info.technologies.length) {
    readme += `## 🛠️ Tech Stack\n\n`;
    info.technologies.forEach(tech => {
      readme += `- **${tech}**\n`;
    });
    readme += `\n`;
  }

  // Roadmap
  if (info.roadmap) {
    readme += `## 🗺️ Roadmap\n\n`;
    readme += `- [ ] Feature 1\n`;
    readme += `- [ ] Feature 2\n`;
    readme += `- [ ] Feature 3\n`;
    readme += `- [ ] Feature 4\n\n`;
    readme += `See the [open issues](https://github.com/${info.githubUsername}/${info.name}/issues) for a full list of proposed features and known issues.\n\n`;
  }

  // Contributing
  if (info.contributing) {
    readme += `## 🤝 Contributing\n\n`;
    readme += `Contributions are welcome! Here's how you can help:\n\n`;
    readme += `1. Fork the project\n`;
    readme += `2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n`;
    readme += `3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n`;
    readme += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`;
    readme += `5. Open a Pull Request\n\n`;
    readme += `Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.\n\n`;
  }

  // Issues
  if (info.issues) {
    readme += `## 🐛 Issues\n\n`;
    readme += `Found a bug or have a feature request? Please check the [issues page](https://github.com/${info.githubUsername}/${info.name}/issues) and create a new issue if needed.\n\n`;
    readme += `When reporting bugs, please include:\n`;
    readme += `- Your operating system and version\n`;
    readme += `- Node.js version (if applicable)\n`;
    readme += `- Steps to reproduce the issue\n`;
    readme += `- Expected vs actual behavior\n\n`;
  }

  // Changelog
  if (info.changelog) {
    readme += `## 📝 Changelog\n\n`;
    readme += `All notable changes to this project will be documented in the [CHANGELOG.md](CHANGELOG.md) file.\n\n`;
    readme += `### [${info.version}] - ${new Date().toISOString().split('T')[0]}\n`;
    readme += `- Initial release\n\n`;
  }

  // FAQ
  if (info.faq) {
    readme += `## ❓ FAQ\n\n`;
    readme += `### Q: How do I get started?\n`;
    readme += `A: Follow the installation and usage instructions above.\n\n`;
    readme += `### Q: Is this project maintained?\n`;
    readme += `A: Yes, this project is actively maintained.\n\n`;
    readme += `### Q: Can I contribute?\n`;
    readme += `A: Absolutely! See the contributing section above.\n\n`;
  }

  // License
  readme += `## 📄 License\n\n`;
  readme += `This project is licensed under the ${info.license} License - see the [LICENSE](LICENSE) file for details.\n\n`;

  // Support
  if (info.support) {
    readme += `## 💬 Support\n\n`;
    readme += `${info.support}\n\n`;
  }

  // Acknowledgments
  if (info.acknowledgments) {
    readme += `## 🙏 Acknowledgments\n\n`;
    readme += `${info.acknowledgments}\n\n`;
  }

  // Footer
  readme += `---\n\n`;
  readme += `**Made with ❤️ by ${info.author}`;
  if (info.email) readme += ` (${info.email})`;
  readme += `**\n\n`;
  if (info.githubUsername) {
    readme += `⭐ Don't forget to star this repo if you found it helpful!\n`;
  }

  return readme;
}
