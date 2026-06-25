import ClientShell from '../../src/next/ClientShell';
import { seoPages } from '../seoPages';

export const metadata = seoPages.services;

export default function Page() {
  return <ClientShell page="services" />;
}
