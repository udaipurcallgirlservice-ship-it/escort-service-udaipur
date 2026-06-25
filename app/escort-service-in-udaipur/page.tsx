import ClientShell from '../../src/next/ClientShell';
import { seoPages } from '../seoPages';

export const metadata = seoPages.udaipurLocation;

export default function Page() {
  return <ClientShell page="udaipurLocation" />;
}
