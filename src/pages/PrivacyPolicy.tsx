import { useEffect, useMemo, useState } from "react";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');

  
  const sections = useMemo(() => [
    { id: 'scope', label: 'Scope of Privacy Notice' },
    { id: 'collection', label: 'Collection Of Personal Information' },
    { id: 'use', label: 'Use Of Personal Information' },
    { id: 'sharing', label: 'Sharing Of Personal Information' },
    { id: 'sms', label: 'SMS Communication & Compliance Policy' },
    { id: 'information', label: 'What Information Do We Collect?' },
    { id: 'process', label: 'How Do We Process Your Information?' },
    { id: 'share-info', label: 'When and With Whom Do We Share Your Personal Information?' },
    { id: 'retain', label: 'How Long Do We Keep Your Information?' },
    { id: 'safe', label: 'How Do We Keep Your Information Safe?' },
    { id: 'minors', label: 'Do We Collect Information From Minors?' },
    { id: 'rights', label: 'What Are Your Privacy Rights?' },
    { id: 'dnt', label: 'Controls For Do-Not-Track Features' },
    { id: 'us-residents', label: 'Do United States Residents Have Specific Privacy Rights?' },
    { id: 'updates', label: 'Do We Make Updates To This Notice?' },
    { id: 'contact', label: 'How Can You Contact Us About This Notice?' },
    { id: 'review-update', label: 'How Can You Review, Update, Or Delete The Data We Collect From You?' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (
          sectionElement &&
          sectionElement.offsetTop <= scrollPosition + 100 &&
          sectionElement.offsetTop + sectionElement.clientHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div>
      {/* <h2 className="text-6xl font-light text-center">Contents</h2> */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 py-16 bg-white text-gray-800">
      
        {/* Sidebar Table of Contents */}

        <aside className="md:w-1/5 md:sticky md:top-24 mb-10 md:mb-0 overflow-y-auto max-h-[calc(100vh-6rem)] pr-4">
          <ul className="space-y-4 text-base">
            {sections.map((item) => (
              <li
                key={item.id}
                className={`pl-2 border-l-4 ${
                  activeSection === item.id ? 'border-[#FF9202]' : 'border-transparent'
                }`}
              >
                <a
                  href={`#${item.id}`}
                  className="text-gray-600 py-1 hover:text-black block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      
      {/* Main Content */}
        <main className="md:w-3/4 md:pl-16 space-y-10">
          <section id="scope">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              1. Scope of Privacy Notice
            </h2>
            <p>
              This Privacy Notice for Lakeland Home Management LLC (referred to as
              "Lakeland Home," "we," "us," or "our"), describes how and why we might
              access, collect, store, use, and/or share ("process") your personal
              information when you use our services ("Services"), including when
              you:
            </p>
            <ul className="list-disc list-inside mt-6 mb-12">
              <li>
                Visit our website at{" "}
                <a
                  href="https://www.lakelandhomemgt.com/"
                  className="text-[#936C00] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.lakelandhomemgt.com/
                </a>
                , or any website of ours that links to this Privacy Notice.
              </li>
              <li>
                Our skilled professionals are committed to providing outstanding
                Preservation, Occupied Maintenance (OM), and Renovation services,
                ensuring the protection and allure of your properties. Our history
                of excellence is established on a basis of trust, quality, and
                customer contentment. We provide comprehensive on-site field
                services for tenants and vacant properties of mortgage companies.
                Services include property preservation, turnkey maintenance,
                renovation, and all sorts of handyman maintenance works. Our
                services emphasize quick turnaround times and professional
                execution to meet client needs efficiently.
              </li>
            </ul>
            <p>
              <strong>Questions or concerns?</strong> Reading this Privacy Notice
              will help you understand your privacy rights and choices. We are
              responsible for making decisions about how your personal information
              is processed. If you do not agree with our policies and practices,
              please do not use our Services. If you still have any questions or
              concerns, please contact us at{" "}
              <a
                href="mailto:jobs@lakelandhomemgt.com"
                className="text-[#936C00] hover:underline"
              >
                jobs@lakelandhomemgt.com
              </a>
              .
            </p>
            <h3 className="text-xl font-semibold  my-6">Summary of Key Points</h3>
            <strong className="">
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by reading the
              full notice or using our menu to navigate.
            </strong>
            <ul className="list-disc list-inside space-y-6 mt-4">
              <li>
                <strong>What personal information do we process?</strong> When you
                visit, use, or navigate our Services, we may process personal
                information depending on how you interact with us and the
                Services, the choices you make, and the products and features you
                use.
              </li>
              <li>
                <strong>Do we process any sensitive personal information?</strong>{" "}
                We do not process sensitive personal information.
              </li>
              <li className="my-6">
                <strong>Do we collect any information from third parties?</strong>{" "}
                We do not collect information from third parties.
              </li>
              <li>
                <strong>How do we process your information?</strong> We process
                your information to provide, improve, and administer our Services,
                communicate with you, ensure security, and comply with law. We may
                also process your information for other purposes with your
                consent.
              </li>
              <li>
                <strong>
                  In what situations and with which parties do we share personal
                  information?
                </strong>{" "}
                We may share information in specific situations and with specific
                third parties.
              </li>
              <li>
                <strong>How do we keep your information safe?</strong> We have
                appropriate organizational and technical safeguards in place to
                protect your personal information, but no method of internet
                transmission or electronic storage is 100% secure.
              </li>
              <li>
                <strong>What are your rights?</strong> Depending on where you are
                located, privacy laws may give you certain rights regarding your
                personal information.
              </li>
              <li>
                <strong>How do you exercise your rights?</strong> The easiest way
                is by visiting our contact page or contacting us directly. We will
                respond in accordance with applicable data protection laws.
              </li>
              <li>
                <strong>Want to learn more?</strong> Please review the full
                Privacy Notice for further details.
              </li>
            </ul>
          </section>

          <section id="collection">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              2. Collection of Personal Information
            </h2>
            <p>
              Lakeland Home  is committed to protecting your privacy and ensuring
              compliance with{" "}
              <strong>The Campaign Registry (TCR) regulations</strong> regarding
              personal data collection and usage.
            </p>

            <h3 className="text-xl font-semibold my-6">
              Personal Information Collected
            </h3>
            <p>
              We collect the following personal information when you engage with
              our services, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-4 mt-4 mb-8">
              <li>
                <strong>Contact Information:</strong> Name, phone number, email
                address, and company name.
              </li>
              <li>
                <strong>Communication Preferences:</strong> SMS opt-in and opt-out
                history, consent records, and messaging preferences.
              </li>
              <li>
                <strong>Service Transactions:</strong> Details related to service
                appointments, work orders, and payments.
              </li>
            </ul>

            <h3 className="text-xl font-semibold my-6">
              How We Collect Information
            </h3>
            <p>We collect this information through:</p>
            <ul className="list-disc list-inside space-y-4 mt-4 mb-8">
              <li>
                Direct input when you fill out forms on our website, contact us,
                or register for services.
              </li>
              <li>
                SMS opt-in during service inquiries or appointment scheduling.
              </li>
              <li>
                Customer support interactions, email, and phone communications.
              </li>
            </ul>

            <h3 className="text-xl font-semibold my-6">
              Compliance with TCR Regulations
            </h3>
            <p>To ensure compliance with TCR, TCPA, and CTIA regulations:</p>
            <ul className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <strong>Explicit Consent:</strong> We do not send SMS messages
                without prior <strong>express written consent</strong> from the
                recipient.
              </li>
              <li>
                <strong>No Third-Party Marketing:</strong> We do not share or sell
                phone numbers to third parties for marketing purposes.
              </li>
              <li>
                <strong>Clear Opt-Out Mechanism:</strong> Users can opt out
                anytime by replying <strong>STOP</strong>, and we honor all
                opt-out requests immediately.
              </li>
              <li>
                <strong>Accessible Privacy Policy:</strong> This privacy policy is{" "}
                <strong>publicly available on our website</strong> and linked in
                all SMS messages.
              </li>
              <li>
                <strong>Transparency in Use Cases:</strong> We clearly disclose
                the types of messages (account notifications, customer care,
                appointment reminders, promotions, and two-factor authentication).
              </li>
            </ul>
          </section>

          <section id="use">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              3. Use Of Personal Information
            </h2>
            <p>Your personal information is used for:</p>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li>
                Account notifications, Customer Care, Delivery notifications
              </li>
              <li>
                Service notifications, appointment confirmations, and updates.
              </li>
              <li>Customer support and account-related communications.</li>
              <li>Compliance with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section id="sharing">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              4. Sharing of Personal Information
            </h2>
            <p>
              Lakeland Home is committed to protecting your privacy. We do{" "}
              <strong>not</strong> share, sell, lease, or distribute your SMS
              consent or phone number (mobile opt-in) with any third parties or
              affiliates for marketing purposes.
            </p>
            <p>
              However, we may share personal data, including phone numbers, under
              the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li>
                <strong>Service Providers:</strong> We may share personal
                information with <strong>trusted third-party vendors</strong> who
                assist in order fulfillment, operational support, and service
                execution. These providers{" "}
                <strong>
                  are contractually bound to use this data solely for Lakeland Home ’s
                  service-related purposes and not for independent marketing.
                </strong>
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose personal
                information when required by law, legal proceedings, or to protect
                the rights, safety, and security of our customers and business.
              </li>
            </ul>
          </section>

          <section id="sms">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              5. SMS Communication & Compliance Policy
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Business Summary & SMS Usage in Campaign
            </h3>
            <p>
              Lakeland Home  provides comprehensive on-site field services for tenants
              and vacant properties of mortgage companies. Our services include
              property preservation, turnkey maintenance, renovations, and all
              types of handyman maintenance work. We focus on quick turnaround
              times and professional execution to meet client needs efficiently.
            </p>
            <p>
              We plan to use <strong>SMS communications</strong> to enhance
              customer engagement and service efficiency by:
            </p>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li>
                <strong>Account Notifications:</strong> Sending appointment
                confirmations, service updates, and account-related alerts.
              </li>
              <li>
                <strong>Customer Support:</strong> Providing quick responses to
                inquiries and service-related queries.
              </li>
              <li>
                <strong>Delivery Notifications:</strong> Informing clients of
                technician arrivals and work order completions.
              </li>
            </ul>

            <strong></strong>
            <p>
              Customers can opt-in to receive SMS updates and easily opt-out by
              replying <strong>STOP</strong> at any time.{" "}
              <strong>
                Message frequency varies (1-4 messages per day), and message &
                data rates may apply.
              </strong>
            </p>
            <p>
              By opting in to receive text messages from Lakeland Home , you acknowledge
              and agree to the terms outlined below.
            </p>

            <section id="message-types">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                1. Types of Messages We Send
              </h3>
              <p>Lakeland Home  may send SMS messages for the following purposes:</p>
              <ul className="list-decimal list-inside space-y-4 mt-4">
                <li>
                  <strong>Account Notifications:</strong> Important updates
                  regarding your account, appointments, or service requests.
                </li>
                <li>
                  <strong>Customer Support:</strong> Responses to inquiries,
                  support requests, or service confirmations.
                </li>
                <li>
                  <strong>Delivery Notifications:</strong> Appointment reminders,
                  technician arrival notifications, and work order confirmations.
                </li>
              </ul>
              <h4 className=" mt-4">Example Messages:</h4>
              <ul className="list-inside space-y-4 mt-2">
                <li>
                  <strong>Lakeland Home: Account Notification (Appointment Reminder) </strong>
                  Hi Tylor, Kayla from Lakeland Home will arrive on Tue, September 20, between 10:00 AM - 12:00 PM. Message frequency varies (1-4/day). 
                  Message & data rates may apply. Reply HELP for support or Reply STOP to opt-out any time.
                </li>
                <li>
                  <strong>Lakeland Home: Customer Care (Service Request Acknowledgment)</strong> 
                  We’ve received your service request and are reviewing it. Our team will contact you shortly. For urgent support, call (863) 614-0369 or email jobs@lakelandhomemgt.com or visit: https://www.lakelandhomemgt.com/. Message frequency varies (1-4/day). 
                  Message & data rates may apply. Reply HELP for support or Reply STOP to opt-out any time.
                </li>
                <li>
                  <strong>Lakeland Home: Delivery Notification </strong>
                  Hello Mr. John, Your service at 15210 Amberly Drive, Apt. 1834, Tampa, Florida 33647 has been completed on September 20, at 2 PM. If you need any further assistance, contact us at (863) 614-0369. Thank you for choosing Lakeland Home! Message frequency varies (1-4/day). 
                  Message & data rates may apply. Reply HELP for support or Reply STOP to opt-out any time.  
                </li>
              </ul>
            </section>

            <section id="sms-consent">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                2. SMS Consent & Opt-In
              </h3>
              <p>
                By providing your mobile number, you consent to receive SMS
                messages from Lakeland Home  at the number provided. Message frequency
                may vary, typically between 1-4 messages per day depending on the
                nature of services requested.
              </p>

              <h4 className="text-lg font-semibold mt-4">Example:</h4>
              <ul className="list-inside space-y-4 mt-2">
                <li>
                  <strong>Opt-in Keywords:</strong> <code><b>Start</b></code>
                </li>
              </ul>
              <p>
                Messaging frequency may vary for Lakeland Home. To opt-out, text{" "}
                <code>STOP</code>. For assistance, text <code>HELP</code> or visit{" "}
                <a
                  className="text-[#936C00] hover:underline"
                  href="https://www.lakelandhomemgt.com/"
                >
                  https://www.lakelandhomemgt.com/
                </a>
                .{" "}
              </p>

              <ul className="list-inside mt-4">
                <li>
                  <a
                    className="text-[#936C00] hover:underline"
                    href="https://www.lakelandhomemgt.com/privacy-policy"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#936C00] hover:underline"
                    href="https://www.lakelandhomemgt.com/terms-conditions"
                    target="_blank"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>

              <p>Message and data rates may apply.</p>
            </section>

            <section id="optout-unsubscribe">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                3. Opt-Out & Unsubscribe
              </h3>
              <p>
                Thank you for opting out of SMS messages from Lakeland Home . You will
                not receive any further SMS communications. To opt back in at any
                time reply <strong>START</strong>.
              </p>

              <h4 className="mt-4">Example:</h4>
              <ul className="list-inside space-y-4 mt-2">
                <li>
                  <strong>Opt-out keyword:</strong> Stop
                </li>
                <li>
                  You will no longer receive messages from Lakeland Home . To opt back
                  in at any time reply <strong>START</strong>.
                </li>
              </ul>
            </section>

            <section id="help-support">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                4. Help & Support
              </h3>
              <p>
                For assistance, reply <strong>HELP</strong> to any SMS, or contact
                us via:
              </p>

              <ul className="list-inside space-y-4 mt-4">
                <li>
                  <span>📧 Email:</span>{" "}
                  <a
                    href="mailto:jobs@lakelandhomemgt.com"
                    className="text-[#936C00] hover:underline"
                  >
                    jobs@lakelandhomemgt.com
                  </a>
                </li>
                <li>
                  <span>📞 Phone:</span>{" "}
                  <a href="tel:+17188781443" className="text-[#936C00] hover:underline">
                    (863) 614-0369
                  </a>
                </li>
                <li>
                  <span>🌐 Visit:</span>{" "}
                  <a
                    href="https://www.lakelandhomemgt.com"
                    className="text-[#936C00] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.lakelandhomemgt.com
                  </a>
                </li>
              </ul>

              <h4 className=" mt-4">Example:</h4>
              <ul className="list-inside space-y-4 mt-2">
                <li>
                  <strong>Help keywords:</strong> Help
                </li>
                <li>
                  Thank you for contacting Lakeland Home . You can find help online at{" "}
                  <a
                    href="https://www.lakelandhomemgt.com/"
                    className="text-[#936C00] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lakeland Home Help
                  </a>
                  . Visit:{" "}
                  <a
                    href="https://www.lakelandhomemgt.com/privacy-policy"
                    className="text-[#936C00] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.lakelandhomemgt.com/terms-conditions"
                    className="text-[#936C00] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section id="message-rates">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                5. Message & Data Rates
              </h3>
              <p>
                Message and data rates may apply based on your mobile carrier
                plan. Lakeland Home  is not responsible for any carrier charges
                incurred.
              </p>
            </section>

            <section id="messaging-frequency">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                6. Messaging Frequency Disclosure
              </h3>
              <p>
                By opting in to receive SMS communications from Lakeland Home , you
                acknowledge and agree to the following messaging frequency terms:
              </p>
              <ul className="list-disc list-inside space-y-4 mt-4">
                <li>
                  Message frequency varies based on your interaction with our
                  services.
                </li>
                <li>
                  Typical message volume is 1-4 messages per day, but this may
                  change depending on account notifications or service updates (if
                  opted in).
                </li>
                <li>
                  You may receive messages related to Account Notifications,
                  Customer Care, and Delivery notifications.
                </li>
              </ul>
            </section>

            <section id="sms-disclosure">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                7. SMS Disclosure Statement
              </h3>
              <p>
                By opting in to receive SMS messages from Lakeland Home , you agree to
                receive Account notifications, Customer Care, and Delivery
                notifications.
              </p>

              <p className="mt-4">
                <span>📩 Standard SMS Terms:</span>
              </p>

              <ul className="list-inside space-y-2 mt-2">
                <li>
                  • Reply <strong>STOP</strong> to opt-out at any time.
                </li>
                <li>
                  • Reply <strong>HELP</strong> for assistance.
                </li>
                <li>• Message & data rates may apply.</li>
                <li>
                  • Message frequency may vary (typically 1-4 messages/day).
                </li>
                <li>
                  • Visit 
                  <a
                    href="https://www.lakelandhomemgt.com/privacy-policy"
                    className="text-[#936C00] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  to see our privacy practices and 
                  <a
                    href="https://www.lakelandhomemgt.com/terms-conditions"
                    className="text-[#936C00] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  > 
                    Terms of Service
                  </a>
                  for terms and conditions.
                </li>
              </ul>
            </section>

            <section id="data-security">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                8. Data Privacy & Security
              </h3>
              <p>
                Lakeland Home  values your privacy. We do not sell, rent, or distribute
                your phone number to third-party marketers. Your information is
                securely stored and handled in compliance with:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>The Campaign Registry (TCR) Requirements</li>
                <li>Telephone Consumer Protection Act (TCPA)</li>
                <li>CTIA Messaging Principles & Best Practices</li>
              </ul>
              <p>
                For more details, please review our full{" "}
                <a
                  className="text-[#936C00] hover:underline"
                  href="https://www.lakelandhomemgt.com/privacy-policy"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section id="policy-changes">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                9. Changes to SMS Policy
              </h3>
              <p>
                Lakeland Home  reserves the right to modify this SMS policy at any time.
                Continued use of our SMS services constitutes agreement to the
                latest terms. Updates will be communicated via our website and SMS
                notifications when applicable.
              </p>
            </section>
          </section>

          <section id="information">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              6. What Information Do We Collect?
            </h2>

            <h4 className="text-lg font-semibold mt-2 mb-2">
              Personal information you disclose to us
            </h4>
            <p className="mb-4">
              <i>
                <strong>In Short:</strong> We collect personal information that
                you provide to us.
              </i>
            </p>

            <p className="mb-4">
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in obtaining
              information about us or our products and Services, when you
              participate in activities on the Services, or otherwise when you
              contact us.
            </p>

            <h4 className="text-lg font-semibold mt-2 mb-2">
              Personal Information Provided by You
            </h4>
            <p className="mb-4">
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Mailing addresses</li>
              <li>Company</li>
            </ul>

            <h4 className="text-lg font-semibold mt-2 mb-2">
              Sensitive Information
            </h4>
            <p className="mb-4">We do not process sensitive information.</p>

            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </section>

          <section id="process">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              7. How Do We Process Your Information?
            </h2>
            <p className="mb-4">
              <strong>
                <i>In Short:</i>
              </strong>{" "}
              We process your information to provide, improve, and administer our
              Services, communicate with you, for security and fraud prevention,
              and to comply with law. We may also process your information for
              other purposes with your consent.
            </p>

            <p className="mb-4">
              <strong>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </strong>
            </p>

            <ul className="list-disc list-inside space-y-4 mb-4">
              <li>
                <strong>
                  To facilitate account creation and authentication and otherwise
                  manage user accounts:
                </strong>
                We may process your information so you can create and log in to
                your account, as well as keep your account in working order.
              </li>

              <li>
                <strong>
                  To deliver and facilitate delivery of services to the user:
                </strong>
                We may process your information to provide you with the requested
                service.
              </li>

              <li>
                <strong>
                  To respond to user inquiries/offer support to users:
                </strong>
                We may process your information to respond to your inquiries and
                solve any potential issues you might have with the requested
                service.
              </li>

              <li>
                <strong>To send administrative information to you:</strong>
                We may process your information to send you details about our
                products and services, changes to our terms and policies, and
                other similar information.
              </li>

              <li>
                <strong>To fulfill and manage your orders:</strong>
                We may process your information to fulfill and manage your orders,
                payments, returns, and exchanges made through the Services.
              </li>

              <li>
                <strong>To enable user-to-user communications:</strong>
                We may process your information if you choose to use any of our
                offerings that allow for communication with another user.
              </li>

              <li>
                <strong>To request feedback:</strong>
                We may process your information when necessary to request feedback
                and to contact you about your use of our Services.
              </li>

              <li>
                <strong>To deliver targeted advertising to you:</strong>
                We may process your information to develop and display
                personalized content and advertising tailored to your interests,
                location, and more.
              </li>

              <li>
                <strong>To protect our Services:</strong>
                We may process your information as part of our efforts to keep our
                Services safe and secure, including fraud monitoring and
                prevention.
              </li>

              <li>
                <strong>To identify usage trends:</strong>
                We may process information about how you use our Services to
                better understand how they are being used so we can improve them.
              </li>
            </ul>
          </section>

          <section id="share-info">
            <h3 className="text-3xl font-semibold text-primary mb-4">8. When and With Whom Do We Share Your Personal Information?</h3>

            <p className="mb-4">
              <i><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</i>
            </p>

            <p className="mb-4">
              We may need to share your personal information in the following situations:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Business Transfers:</strong> 
                We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, 
                financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>
          </section>

          <section id="retain">
            <h3 className="text-3xl text-primary font-semibold mt-4 mb-4">9. How Long Do We Keep Your Information?</h3>

            <p className="mb-6">
              <i><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</i>
            </p>

            <p className="mb-6">
              We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
            </p>

            <p className="mb-4">
              When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            </p>
          </section>

          <section id="safe">
            <h3 className="text-3xl text-primary font-semibold mt-4 mb-4">10. How Do We Keep Your Information Safe?</h3>

            <p className="mb-4">
              <i><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</i>
            </p>

            <p className="mb-4">
              We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
            </p>

            <p className="mb-4">
              Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
            </p>
          </section>

          <section id="minors">
            <h3 className="text-3xl text-primary font-semibold mt-4 mb-4">11. Do We Collect Information From Minors?</h3>

            <p className="mb-4">
              <i><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</i>
            </p>

            <p className="mb-4">
              We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services.
            </p>

            <p className="mb-4">
              If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:jobs@lakelandhomemgt.com" className="text-[#936C00] hover:underline">jobs@lakelandhomemgt.com</a>.
            </p>
          </section>


          <section id="rights">
            <h3 className="text-3xl text-primary font-semibold mt-4 mb-4">12. What Are Your Privacy Rights?</h3>

            <p className="mb-4">
              <i><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</i>
            </p>

            <p className="mb-4">
              <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent by contacting us using the contact details provided in the section "<strong>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>" below.
            </p>

            <p className="mb-4">
              However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
            </p>

            <p className="mb-4">
              <strong>Opting out of Lakeland Home  communications:</strong> You can unsubscribe from all types of communications at any time. 
              You may opt out of SMS by following the confirmation message:
              <em>"SMS Opt-Out Confirmation: You have successfully opted out of SMS messages from Lakeland Home . You will no longer receive further SMS communications. To opt back in, reply START at any time."</em> 
              Alternatively, you can contact us using the details provided in the section "<strong>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>" below.
            </p>

            <p className="mb-4">
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.
            </p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Account Information</h4>

            <p className="mb-4">
              If you would at any time like to review or change the information in your account or terminate your account, you can:
            </p>

            <ul className="list-disc list-inside mb-4">
              <li>Contact us using the contact information provided.</li>
            </ul>

            <p className="mb-4">
              Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms, and/or comply with applicable legal requirements.
            </p>

            <p className="mb-4">
              If you have questions or comments about your privacy rights, you may email us at  
              <a href="mailto:jobs@lakelandhomemgt.com" className="text-[#936C00] hover:underline"> jobs@lakelandhomemgt.com</a>.
            </p>
          </section>

          <section id="dnt">
            <h2 className="text-3xl text-primary font-semibold my-6">13. Controls For Do-Not-Track Features</h2>
            <p className="my-6">
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT")
              feature or setting you can activate to signal your privacy preference not to have data about your online
              browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing
              and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals
              or any other mechanism that automatically communicates your choice not to be tracked online. If a standard
              for online tracking is adopted that we must follow in the future, we will inform you about that practice in
              a revised version of this Privacy Notice.
            </p>
            <p>
              California law requires us to let you know how we respond to web browser DNT signals. Because there currently
              is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at
              this time.
            </p>
          </section>







<section  id="us-residents">
  <h2  className="text-3xl text-primary font-semibold mt-4 mb-4">Do United States Residents Have Specific Privacy Rights?</h2>
  <p><strong><i>In Short:</i></strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>

  <h3 className="my-6 font-semibold">Categories of Personal Information We Collect</h3>
  <p className="mb-6">We have collected the following categories of personal information in the past twelve (12) months:</p>

  <table className="w-full border border-gray-200 text-gray-700 mb-12" border={1} cellPadding={10} cellSpacing={0} style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead className="border">
      <tr>
        <th className="text-left px-4 py-3 border-b border-gray-200">Category</th>
        <th className="text-left px-4 py-3 border-b border-gray-200">Examples</th>
        <th className="text-left px-4 py-3 border-b border-gray-200">Collected</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">A. Identifiers</td>
        <td className="px-4 py-3 border-b border-gray-100">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
        <td className="px-4 py-3 border-b border-gray-100">YES</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">B. Personal information as defined in the California Customer Records statute</td>
        <td className="px-4 py-3 border-b border-gray-100">Name, contact information, education, employment, employment history, and financial information</td>
        <td className="px-4 py-3 border-b border-gray-100">YES</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">C. Protected classification characteristics under state or federal law</td>
        <td className="px-4 py-3 border-b border-gray-100">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">D. Commercial information</td>
        <td className="px-4 py-3 border-b border-gray-100">Transaction information, purchase history, financial details, and payment information</td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">E. Biometric information</td>
        <td className="px-4 py-3 border-b border-gray-100">Fingerprints and voiceprints</td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">F. Internet or other similar network activity</td>
        <td className="px-4 py-3 border-b border-gray-100">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">G. Geolocation data</td>
        <td className="px-4 py-3 border-b border-gray-100">Device location</td>
        <td className="px-4 py-3 border-b border-gray-100">YES</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">H. Audio, electronic, sensory, or similar information</td>
        <td className="px-4 py-3 border-b border-gray-100">Images and audio, video or call recordings created in connection with our business activities</td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">I. Professional or employment-related information</td>
        <td className="px-4 py-3 border-b border-gray-100">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
        <td className="px-4 py-3 border-b border-gray-100">YES</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">J. Education Information</td>
        <td className="px-4 py-3 border-b border-gray-100">Student records and directory information</td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">K. Inferences drawn from collected personal information</td>
        <td className="px-4 py-3 border-b border-gray-100">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border-b border-gray-100">L. Sensitive personal Information</td>
        <td className="px-4 py-3 border-b border-gray-100"></td>
        <td className="px-4 py-3 border-b border-gray-100">NO</td>
      </tr>
    </tbody>
  </table>

  <p className="mb-4">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
  <ul className="list-disc list-inside">
    <li>Receiving help through our customer support channels;</li>
    <li>Participation in customer surveys or contests; and</li>
    <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
  </ul>

  <p className="mt-6 mb-4">We will use and retain the collected personal information as needed to provide the Services or for:</p>
  <ul className="list-disc list-inside">
    <li>Category A - As long as the user has an account with us</li>
    <li>Category B - As long as the user has an account with us</li>
    <li>Category G - As long as the user has an account with us</li>
    <li>Category H - As long as the user has an account with us</li>
    <li>Category I - As long as the user has an account with us</li>
  </ul>

  <p className="my-6"><strong>Sources of Personal Information</strong></p>
  <p>Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"</p>

  <p className="my-6"><strong>How We Use and Share Personal Information</strong></p>
  <p>Learn more about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</p>

  <p className="my-6"><strong>Will your information be shared with anyone else?</strong></p>
  <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</p>
  <p className="my-4">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
  <p>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</p>

  <p className="my-6"><strong>Your Rights</strong></p>
  <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
  <ul className="list-disc list-inside my-6">
    <li><strong>Right to know</strong> whether or not we are processing your personal data</li>
    <li><strong>Right to access</strong> your personal data</li>
    <li><strong>Right to correct</strong> inaccuracies in your personal data</li>
    <li><strong>Right to request</strong> the deletion of your personal data</li>
    <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
    <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
    <li><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
  </ul>

  <p>Depending upon the state where you live, you may also have the following rights:</p>
  <ul className="list-disc list-inside my-6">
    <li>Right to access the categories of personal data being processed (as permitted by applicable law, including Minnesota’s privacy law)</li>
    <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)</li>
    <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Minnesota's and Oregon's privacy law)</li>
    <li>Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including Minnesota’s privacy law)</li>
    <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California’s privacy law)</li>
    <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida’s privacy law)</li>
  </ul>

  <p className="my-6"><strong>How to Exercise Your Rights</strong></p>
  <p>To exercise these rights, you can contact us by visiting <a className="text-[#936C00] hover:underline" href="https://www.lakelandhomemgt.com/#contact" target="_blank">Contact Us</a>, by emailing us at <a className="text-[#936C00] hover:underline" href="mailto:jobs@lakelandhomemgt.com">jobs@lakelandhomemgt.com</a>, or by referring to the contact details at the bottom of this document.</p>

  <p>Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>

  <p className="my-6"><strong>Request Verification</strong></p>
  <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>

  <p>If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>

  <p className="my-6"><strong>Appeals</strong></p>
  <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:jobs@lakelandhomemgt.com">jobs@lakelandhomemgt.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>

  <p className="my-6"><strong>California "Shine The Light" Law</strong></p>
  <p className="mb-12">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "How Can You Contact Us About This Notice?"</p>
</section>




          <section id="updates">
            <h2 className="text-3xl text-primary font-semibold my-6">15. Do We Make Updates To This Notice?</h2>
            <p className="mb-4"><i><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</i></p>
            <p>
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated
              "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we
              may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
              We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-3xl text-primary font-semibold mt-4 mb-4">How Can You Contact Us About This Notice?</h2>
            <p>
              If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO)
              by email at <a href="mailto:jobs@lakelandhomemgt.com" className="text-[#936C00] hover:underline">jobs@lakelandhomemgt.com</a>,
              by phone at <a href="tel:+17188781443" className="text-[#936C00] hover:underline">(863) 614-0369</a>, or contact us by post at:
            </p>
            <address className="not-italic mt-2">
              Lakeland Home  Management LLC<br />
              Data Protection Officer<br />
              15210 Amberly DR Apt#1834<br />
              Tampa, FL 33647<br />
              United States
            </address>
          </section>

          <section id="review-update">
            <h2 className="text-3xl text-primary font-semibold mt-4 mb-4">How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
            <p>
              Based on the applicable laws of your country or state of residence in the US, you may have the right to request
              access to the personal information we collect from you, details about how we have processed it, correct inaccuracies,
              or delete your personal information. You may also have the right to withdraw your consent to our processing of your
              personal information. These rights may be limited in some circumstances by applicable law. To request to review,
              update, or delete your personal information, please visit:&nbsp;
              <a href="https://www.lakelandhomemgt.com/contact" target="_blank" rel="noopener noreferrer" className="text-[#936C00] hover:underline">
                https://www.lakelandhomemgt.com/#contact
              </a>.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
