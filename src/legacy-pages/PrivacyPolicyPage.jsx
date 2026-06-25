import React from 'react';
    import { useLocation } from 'react-router-dom';
    import MetaUpdater from '@/components/seo/MetaUpdater';
    import PageHero from '@/components/layout/PageHero';
    import { Shield, Lock, User, FileText, Globe, Server, UserCheck, Mail } from 'lucide-react';

    const PrivacyPolicyPage = ({ siteUrl }) => {
      const location = useLocation();
      const pageUrl = `${siteUrl}${location.pathname}`;
      const pageTitle = "Privacy Policy - Escort Service Udaipur";
      const pageDescription = "Read the detailed privacy policy for Escort Service Udaipur. We are committed to protecting your personal information and ensuring complete confidentiality for all our escort and call girl clients.";
      const keywords = "privacy policy, escort service privacy, client confidentiality, data protection, udaipur escorts privacy, call girl data safety";

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
            title={<>Privacy <span className="gradient-text">Policy</span></>}
            subtitle="Your privacy and confidentiality are our highest priorities."
            imageSrc="/assets/a98099e2f64a96da870cca70d497e9ef.webp"
          />

          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose lg:prose-lg max-w-none">
                <p className="text-gray-500 text-sm">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                
                <h1 className="flex items-center text-3xl font-bold mb-4">Privacy Policy for Escort Service Udaipur</h1>
                
                <h2 className="flex items-center mt-8"><FileText className="mr-2" /> Introduction</h2>
                <p>Welcome to Escort Service Udaipur ("we," "our," or "us"). This Privacy Policy outlines our steadfast commitment to protecting the privacy and personal data of our clients ("you"). It details our practices concerning the collection, use, protection, and disclosure of your information when you visit our website, book our escort or call girl services, or communicate with our team. By engaging with our services, you consent to the data practices described in this statement.</p>

                <h2 className="flex items-center mt-8"><User className="mr-2" /> 1. Information We Collect</h2>
                <p>To provide our bespoke escort and call girl companionship services in Udaipur, we collect specific information necessary for a seamless and professional experience. The information collected is strictly limited to what is required for service fulfillment and client safety.</p>
                <ul>
                  <li><strong>Personal Identification Information:</strong> When you book our services, we collect your name and a contact phone number. This is essential for confirming your booking and for our companions to communicate with you regarding the appointment. An email address may be collected for booking confirmations and communication records.</li>
                  <li><strong>Booking and Preference Details:</strong> We record details of your booking, including the chosen companion, preferred date, time, duration of service, and location (incall/outcall). We also note any specific, non-explicit preferences you provide to help us tailor the companionship experience.</li>
                  <li><strong>Communication Records:</strong> For quality assurance and to maintain a professional record of service agreements, we may keep records of our communications with you, including phone calls, SMS, WhatsApp messages, and emails.</li>
                   <li><strong>Technical Data (Non-Personal):</strong> We may automatically collect non-personally identifiable information like your IP address, browser type, device type, and operating system when you visit our website. This anonymous data is used for analytical purposes to improve website performance, user experience, and our marketing efforts. It is never linked to your personal identity.</li>
                </ul>

                <h2 className="flex items-center mt-8"><Shield className="mr-2" /> 2. How We Use Your Information</h2>
                <p>Your information is handled with the utmost discretion and is used exclusively for the following purposes:</p>
                <ul>
                  <li><strong>To Fulfill Services:</strong> To process, manage, and confirm your escort or call girl bookings in Udaipur. This includes coordinating with the selected companion and arranging logistics for the appointment.</li>
                  <li><strong>For Client Communication:</strong> To communicate essential information regarding your booking, provide confirmations, send reminders (if requested), and offer high-quality customer support throughout the process.</li>
                  <li><strong>To Improve Our Services:</strong> We analyze service patterns and client feedback (anonymously) to enhance our offerings, refine our roster of companions, and better tailor our services to your preferences.</li>
                  <li><strong>For Safety and Security:</strong> Your basic information is used to ensure the safety and security of both our clients and our companions. This is a non-negotiable aspect of our professional commitment.</li>
                </ul>

                <h2 className="flex items-center mt-8"><Lock className="mr-2" /> 3. Data Protection and Confidentiality</h2>
                <p>We implement a variety of robust security measures to maintain the safety of your personal information. Our commitment to confidentiality is absolute.</p>
                <ul>
                  <li><strong>Secure Systems:</strong> Your personal information is contained within secured networks and is only accessible by a limited number of authorized personnel who have special access rights to such systems and are required to keep the information strictly confidential.</li>
                  <li><strong>Data Encryption:</strong> All sensitive information you supply is transmitted via Secure Socket Layer (SSL) technology, ensuring that data exchanged between your browser and our server is encrypted.</li>
                  <li><strong>Data Minimization and Deletion:</strong> We only collect information that is strictly necessary for the provision of our services. Client data is securely and permanently deleted from our active systems after a reasonable retention period to minimize risk and protect your privacy.</li>
                  <li><strong>Strict No-Sale Policy:</strong> We do not sell, trade, or rent your personally identifiable information to third parties for marketing or any other purpose. This is a core principle of our privacy commitment.</li>
                </ul>

                <h2 className="flex items-center mt-8"><Globe className="mr-2" /> 4. Third-Party Disclosure</h2>
                <p>Your privacy is paramount. We do not share your personally identifiable information with any outside parties, except under the following limited circumstances:
                <ul>
                  <li>To trusted partners who assist us in operating our website or servicing you (e.g., a secure communication provider), so long as those parties agree to keep this information confidential.</li>
                  <li>When we believe release is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
                </ul>
                </p>

                <h2 className="flex items-center mt-8"><UserCheck className="mr-2" /> 5. Your Consent and Rights</h2>
                <p>By using our website and engaging our services, you explicitly consent to this privacy policy. You have the right to request access to the personal data we hold about you and to ask for it to be corrected or deleted. Please contact us to make such a request.</p>

                <h2 className="flex items-center mt-8"><Server className="mr-2" /> 6. Changes to Our Privacy Policy</h2>
                <p>We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such modifications will constitute your acknowledgment of the modified policy.</p>

                <h2 className="flex items-center mt-8"><Mail className="mr-2" /> 7. Contacting Us</h2>
                <p>If you have any questions regarding this privacy policy, our data handling practices, or your personal information, please do not hesitate to contact us. You can find our contact details on our <a href="/contact" className="text-pink-600 hover:underline">Contact Page</a>. We are committed to addressing your concerns promptly and transparently.</p>
              </div>
            </div>
          </section>
        </div>
      );
    };

    export default PrivacyPolicyPage;