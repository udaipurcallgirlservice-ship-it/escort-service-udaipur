import ClientShell from '../../../src/next/ClientShell';

export const metadata = {
  title: 'Admin Dashboard | Escort Service Udaipur',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ClientShell page="admin" />;
}
