import { docs } from '../.source/server';
import { loader } from 'fumadocs-core/source';
import {
  Globe,
  Home,
  Server,
  Terminal,
  Boxes,
  Activity,
  Bell,
  ShieldCheck,
  FileText,
  Settings,
  Package,
  Database,
  BookOpen,
  Rocket,
  Network,
  Cpu,
  HardDrive,
  Send,
  MessageSquare,
  CreditCard,
  Crown,
  KeyRound,
  Code,
} from 'lucide-react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  url: (slugs) => {
    // Introduction pages use clean URLs without /introduction prefix
    if (slugs[0] === 'introduction') {
      const rest = slugs.slice(1);
      return rest.length === 0 ? '/' : '/' + rest.join('/');
    }
    return '/' + slugs.join('/');
  },
  icon: (icon) => {
    switch (icon) {
      case 'Globe':
        return <Globe size={16} />;
      case 'Home':
        return <Home size={16} />;
      case 'Server':
        return <Server size={16} />;
      case 'Terminal':
        return <Terminal size={16} />;
      case 'Boxes':
        return <Boxes size={16} />;
      case 'Activity':
        return <Activity size={16} />;
      case 'Bell':
        return <Bell size={16} />;
      case 'ShieldCheck':
        return <ShieldCheck size={16} />;
      case 'FileText':
        return <FileText size={16} />;
      case 'Settings':
        return <Settings size={16} />;
      case 'Package':
        return <Package size={16} />;
      case 'Database':
        return <Database size={16} />;
      case 'BookOpen':
        return <BookOpen size={16} />;
      case 'Rocket':
        return <Rocket size={16} />;
      case 'Network':
        return <Network size={16} />;
      case 'Cpu':
        return <Cpu size={16} />;
      case 'HardDrive':
        return <HardDrive size={16} />;
      case 'Send':
        return <Send size={16} />;
      case 'MessageSquare':
        return <MessageSquare size={16} />;
      case 'CreditCard':
        return <CreditCard size={16} />;
      case 'Crown':
        return <Crown size={16} />;
      case 'KeyRound':
        return <KeyRound size={16} />;
      case 'Code':
        return <Code size={16} />;
      default:
        return null;
    }
  },
});
