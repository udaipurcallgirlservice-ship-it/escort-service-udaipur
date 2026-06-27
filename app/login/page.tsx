import ClientShell from '../../src/next/ClientShell';
import { seoPages } from '../seoPages';

export const metadata = {
  ...seoPages.login,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ClientShell page="login" />;
}
