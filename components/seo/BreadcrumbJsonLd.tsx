import { breadcrumbSchema } from '../../lib/schema';
import JsonLd from './JsonLd';

interface BreadcrumbJsonLdProps {
  items: Array<{ name: string; url: string }>;
}

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return <JsonLd data={breadcrumbSchema(items)} />;
}
