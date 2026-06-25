import { faqSchema } from '../../lib/schema';
import JsonLd from './JsonLd';

interface FAQJsonLdProps {
  faqs: Array<{ question: string; answer: string }>;
}

export default function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  return <JsonLd data={faqSchema(faqs)} />;
}
