import ClientShell from '../../src/next/ClientShell';
import { seoPages } from '../seoPages';

export const metadata = seoPages.about;

export default function Page() {
  return <ClientShell page="about" />;
}
