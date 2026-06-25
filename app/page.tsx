import ClientShell from '../src/next/ClientShell';
import { seoPages } from './seoPages';

export const metadata = seoPages.home;

export default function Page() {
  return <ClientShell page="home" />;
}
