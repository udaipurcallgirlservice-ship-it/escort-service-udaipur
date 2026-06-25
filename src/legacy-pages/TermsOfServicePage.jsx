import React from 'react';
    import { useLocation } from 'react-router-dom';
    import MetaUpdater from '@/components/seo/MetaUpdater';
    import PageHero from '@/components/layout/PageHero';
    import { FileText, AlertTriangle, CheckCircle, UserCheck, Scale, XCircle, Mail } from 'lucide-react';

    const TermsOfServicePage = ({ siteUrl }) => {
      const location = useLocation();
      const pageUrl = `${siteUrl}${location.pathname}`;
      const pageTitle = "Terms of Service - Escort Service Udaipur";
      const pageDescription = "Review the official Terms of Service for Escort Service Udaipur. By using our services, you agree to these terms regarding bookings, conduct, payment, and legalities for our call girls and escorts.";
      const keywords = "terms of service, escort service terms, booking conditions, client conduct, legal terms, udaipur escorts, call girl terms";

      return (
        <div className="pt-16 lg:pt-20">
          <MetaUpdater
            title={pageTitle}
            description={pageDescription}
            keywords={keywords}
            path={pageUrl}
            noIndex={true}
          />
          <PageHero
            title={<>Terms of <span className="gradient-text">Service</span></>}
            subtitle="Please read our terms carefully before using our escort services."
            imageSrc="/assets/a98099e2f64a96da870cca70d497e9ef.webp"
          />

          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose lg:prose-lg max-w-none">
                <p className="text-gray-500 text-sm">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                
                <h2 className="flex items-center text-3xl font-bold mb-4">Terms of Service for Escort Service Udaipur</h2>

                <h2 className="flex items-center mt-8"><FileText className="mr-2" /> 1. Agreement to Terms</h2>
                <p>This document constitutes a legally binding agreement governing the services provided by Escort Service Udaipur ("Agency," "we," "our," "us"). By accessing our website, communicating with us, or booking our services, you ("Client," "you") acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must immediately cease using our services. Our services are intended for adult companionship and entertainment for consenting adults only.</p>

                <h2 className="flex items-center mt-8"><UserCheck className="mr-2" /> 2. Client Eligibility and Conduct</h2>
                <p>To engage our services, you must meet strict eligibility criteria and adhere to professional conduct standards:</p>
                <ul>
                  <li><strong>Legal Age:</strong> You must be at least 18 years of age. By using our services, you confirm that you meet this age requirement. We reserve the right to request age verification at any time.</li>
                  <li><strong>Respectful Conduct:</strong> You agree to treat our companions and agency staff with the highest level of respect, dignity, and courtesy. Any form of abuse, harassment (verbal, physical, or emotional), disrespectful behavior, or illegal activity is strictly forbidden and will not be tolerated.</li>
                  <li><strong>Right to Refuse/Terminate Service:</strong> We reserve the absolute right to refuse or terminate service to any individual at any time, for any reason, without explanation. Violation of our conduct policy will result in the immediate termination of any ongoing service without a refund and will lead to a permanent ban from using our services in the future.</li>
                  <li><strong>Compliance with Laws:</strong> You are solely responsible for your own conduct and agree to comply with all applicable local, state, and national laws throughout your engagement with our companions.</li>
                </ul>

                <h2 className="flex items-center mt-8"><CheckCircle className="mr-2" /> 3. Booking, Payment, and Cancellation Policy</h2>
                <p>Our booking and payment procedures are designed to be clear, professional, and discreet:</p>
                <ul>
                  <li><strong>Official Bookings:</strong> All bookings for our escort and call girl services must be made exclusively through the official communication channels provided on our website (phone number, WhatsApp, or contact form).</li>
                  <li><strong>Scope of Service & Rates:</strong> Our rates compensate our companions for their time and companionship only. The fees are agreed upon for a specific duration and do not include any illegal services. Any activities beyond companionship are a private matter between two consenting adults and are not part of our official service offering.</li>
                  <li><strong>Payment Procedures:</strong> Payment terms will be clearly communicated and agreed upon during the booking process. We accept cash on delivery (COD) and may require a deposit to secure bookings, especially for new clients, extended durations, or special requests. All payments are non-refundable once the service has commenced.</li>
                  <li><strong>Cancellation Policy:</strong> We require a minimum of 24 hours' notice for any cancellation. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee or the forfeiture of any deposit made. Clients who "no-show" for an appointment will be permanently blacklisted from our agency.</li>
                </ul>

                <h2 className="flex items-center mt-8"><XCircle className="mr-2" /> 4. Prohibited Activities</h2>
                <p>To ensure the safety, legality, and integrity of our services, the following activities are strictly prohibited:</p>
                <ul>
                    <li>Engaging in, soliciting, or negotiating any illegal acts or services. Our service is for companionship only.</li>
                    <li>The use, possession, or distribution of illegal substances during an appointment.</li>
                    <li>Filming, photographing, or recording our companions in any form without their explicit, prior written consent.</li>
                    <li>Involving any person under the legal age of 18 in any capacity.</li>
                </ul>
                <p>Any violation of these rules will result in the immediate termination of the service without refund and may be reported to the appropriate law enforcement authorities.</p>

                <h2 className="flex items-center mt-8"><AlertTriangle className="mr-2" /> 5. Disclaimer and Limitation of Liability</h2>
                <ul>
                  <li><strong>Introductory Agency Role:</strong> Our agency functions as an introductory and booking service, connecting clients with independent adult companions. The companions are independent contractors, not employees of the agency. We are not liable for the personal conduct or actions of companions or clients that fall outside the agreed-upon scope of legal companionship.</li>
                  <li><strong>No Illegal Services:</strong> We explicitly state that we do not condone, promote, or facilitate any form of prostitution or illegal activity. All services are provided with the strict understanding that they will be used in a lawful manner.</li>
                  <li><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Escort Service Udaipur, its owners, and staff shall not be held liable for any direct, indirect, incidental, special, or consequential damages, including personal injury, emotional distress, or financial loss, resulting from the use of our services.</li>
                </ul>

                <h2 className="flex items-center mt-8">6. Privacy Commitment</h2>
                <p>We are deeply committed to your privacy. Our practices for handling your data are detailed in our <a href="/privacy-policy" className="text-pink-600 hover:underline">Privacy Policy</a>, which is incorporated by reference and forms an integral part of these Terms of Service. Please review it carefully to understand how we collect, use, and rigorously protect your personal information.</p>

                <h2 className="flex items-center mt-8">7. Amendments to Terms</h2>
                <p>We reserve the right to update, modify, or revise these Terms of Service at any time without prior notice. Any changes will be effective immediately upon being posted on our website. Your continued use of our services following any such changes constitutes your binding acceptance of the new terms.</p>

                <h2 className="flex items-center mt-8"><Scale className="mr-2" /> 8. Governing Law and Jurisdiction</h2>
                <p>These Terms of Service and any dispute arising from them shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding related to our services shall be brought exclusively in the courts located in Udaipur, Rajasthan.</p>
                
                <h2 className="flex items-center mt-8"><Mail className="mr-2" /> 9. Contact Information</h2>
                <p>If you have any questions or concerns regarding these Terms of Service, please contact us through the official channels listed on our <a href="/contact" className="text-pink-600 hover:underline">Contact Page</a>.</p>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default TermsOfServicePage;