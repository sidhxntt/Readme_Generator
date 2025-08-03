export interface ProjectInfo {
  name: string;
  description: string;
  type: string;
  author: string;
  email: string;
  githubUsername: string;
  license: string;
  version: string;
  features: string[];
  installation: string;
  usage: string;
  technologies: string[];
  prerequisites: string[];
  contributing: boolean;
  issues: boolean;
  changelog: boolean;
  badges: string[];
  demo?: string;
  screenshots?: boolean;
  roadmap?: boolean;
  faq?: boolean;
  support?: string;
  acknowledgments?: string;
}

export const PROJECT_TYPES = [
  { value: 'cli', label: '🔧 CLI Tool' },
  { value: 'web-app', label: '🌐 Web Application' },
  { value: 'mobile-app', label: '📱 Mobile App' },
  { value: 'library', label: '📚 Library/Package' },
  { value: 'api', label: '🚀 API/Backend Service' },
  { value: 'desktop', label: '🖥️ Desktop Application' },
  { value: 'game', label: '🎮 Game' },
  { value: 'extension', label: '🔌 Browser Extension' },
  { value: 'plugin', label: '⚡ Plugin/Add-on' },
  { value: 'documentation', label: '📖 Documentation Site' },
  { value: 'template', label: '📋 Template/Boilerplate' },
  { value: 'other', label: '🔮 Other' }
];

export const LICENSES = [
  { value: 'MIT', label: 'MIT License' },
  { value: 'Apache-2.0', label: 'Apache License 2.0' },
  { value: 'GPL-3.0', label: 'GNU General Public License v3.0' },
  { value: 'BSD-3-Clause', label: 'BSD 3-Clause License' },
  { value: 'ISC', label: 'ISC License' },
  { value: 'Unlicense', label: 'The Unlicense' },
  { value: 'Custom', label: 'Custom License' }
];

export const BADGE_OPTIONS = [
  { value: 'version', label: '📦 Version' },
  { value: 'license', label: '📄 License' },
  { value: 'build', label: '🔨 Build Status' },
  { value: 'coverage', label: '📊 Coverage' },
  { value: 'downloads', label: '⬇️ Downloads' },
  { value: 'stars', label: '⭐ GitHub Stars' },
  { value: 'forks', label: '🍴 Forks' },
  { value: 'issues', label: '🐛 Issues' },
  { value: 'prs', label: '🔄 Pull Requests' },
  { value: 'contributors', label: '👥 Contributors' }
];