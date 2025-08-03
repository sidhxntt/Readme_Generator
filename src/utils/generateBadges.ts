import { ProjectInfo } from "./types_and_varaibles";

export function generateBadges(info: ProjectInfo): string {
  if (!info.badges.length) return '';

  const repoUrl = info.githubUsername ? `https://github.com/${info.githubUsername}/${info.name}` : '';
  const badges: string[] = [];

  info.badges.forEach(badge => {
    switch (badge) {
      case 'version':
        badges.push(`![Version](https://img.shields.io/badge/version-${info.version}-blue.svg)`);
        break;
      case 'license':
        badges.push(`![License](https://img.shields.io/badge/license-${info.license}-green.svg)`);
        break;
      case 'build':
        if (repoUrl) badges.push(`![Build Status](${repoUrl}/workflows/CI/badge.svg)`);
        break;
      case 'coverage':
        if (repoUrl) badges.push(`![Coverage](https://img.shields.io/codecov/c/github/${info.githubUsername}/${info.name})`);
        break;
      case 'downloads':
        badges.push(`![Downloads](https://img.shields.io/npm/dt/${info.name})`);
        break;
      case 'stars':
        if (repoUrl) badges.push(`![GitHub stars](https://img.shields.io/github/stars/${info.githubUsername}/${info.name})`);
        break;
      case 'forks':
        if (repoUrl) badges.push(`![GitHub forks](https://img.shields.io/github/forks/${info.githubUsername}/${info.name})`);
        break;
      case 'issues':
        if (repoUrl) badges.push(`![GitHub issues](https://img.shields.io/github/issues/${info.githubUsername}/${info.name})`);
        break;
      case 'prs':
        if (repoUrl) badges.push(`![GitHub pull requests](https://img.shields.io/github/issues-pr/${info.githubUsername}/${info.name})`);
        break;
      case 'contributors':
        if (repoUrl) badges.push(`![Contributors](https://img.shields.io/github/contributors/${info.githubUsername}/${info.name})`);
        break;
    }
  });

  return badges.length ? badges.join(' ') + '\n\n' : '';
}