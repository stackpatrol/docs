import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Globe, Github, Send } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Root Layout: app/layout.tsx (includes docs layout)
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <>StackPatrol Docs</>,
    },
    links: [
      {
        type: 'icon',
        label: 'Website',
        text: 'Website',
        icon: <Globe size={16} />,
        url: 'https://stackpatrol.dev',
        external: true,
      },
      {
        type: 'icon',
        label: 'Telegram bot',
        text: 'Telegram bot',
        icon: <Send size={16} />,
        url: 'https://t.me/StackPatrolBot',
        external: true,
      },
      {
        type: 'icon',
        label: 'GitHub',
        text: 'GitHub',
        icon: <Github size={16} />,
        url: 'https://github.com/stackpatrol/stackpatrol',
        external: true,
      },
    ],
    themeSwitch: {
      enabled: true,
      mode: 'light-dark',
    },
  };
}
