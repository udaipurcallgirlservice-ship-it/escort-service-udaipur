import ClientShell from '../../src/next/ClientShell';
import { seoPages } from '../seoPages';

export const metadata = seoPages.terms;

export default function Page() {
  return <ClientShell page="terms" />;
}
