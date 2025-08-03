export function getProjectEmoji(type: string): string {
  const emojiMap: Record<string, string> = {
    'cli': '🔧',
    'web-app': '🌐',
    'mobile-app': '📱',
    'library': '📚',
    'api': '🚀',
    'desktop': '🖥️',
    'game': '🎮',
    'extension': '🔌',
    'plugin': '⚡',
    'documentation': '📖',
    'template': '📋',
    'other': '🔮'
  };
  return emojiMap[type] || '🔮';
}
