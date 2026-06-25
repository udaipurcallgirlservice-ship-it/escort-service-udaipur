import ClientShell from '../../src/next/ClientShell';
import { seoPages } from '../seoPages';

export const metadata = seoPages.contact;

export default function Page() {
  return <ClientShell page="contact" />;
}
