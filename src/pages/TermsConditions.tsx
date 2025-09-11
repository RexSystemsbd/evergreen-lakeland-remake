import { useEffect, useMemo, useState } from "react";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(
    () => [
      { id: "agreement", label: "Agreement To Our Legal Terms" },
      { id: "services", label: "Our Services" },
      { id: "ip-rights", label: "Intellectual Property Rights" },
      { id: "collection", label: "Collection of Personal Information" },
      { id: "use", label: "Use Of Personal Information" },
      { id: "sharing", label: "Sharing Of Personal Information" },
      { id: "sms", label: "SMS Communication & Compliance Policy" },
      { id: "use-of-services", label: "Your Use Of Our Services" },
      { id: "submissions", label: "Your Submissions" },
      { id: "representations", label: "User Representations" },
      { id: "prohibited", label: "Prohibited Activities" },
      { id: "ugc", label: "User Generated Contributions" },
      { id: "license", label: "Contribution License" },
      { id: "management", label: "Services Management" },
      { id: "modifications", label: "Modifications and Interruptions" },
      { id: "law", label: "Governing Law" },
      { id: "dispute", label: "Dispute Resolution" },
      { id: "corrections", label: "Corrections" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "liability", label: "Limitations Of Liability" },
      { id: "indemnification", label: "Indemnification" },
      { id: "user-data", label: "User Data" },
      {
        id: "electronic",
        label: "Electronic Communications, Transactions, And Signatures",
      },
      { id: "misc", label: "Miscellaneous" },
      { id: "amendments", label: "Amendments" },
      { id: "contact", label: "Contact Us" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (
          sectionElement &&
          sectionElement.offsetTop <= scrollPosition + 100 &&
          sectionElement.offsetTop + sectionElement.clientHeight >
            scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
                  activeSection === item.id
                    ? "border-[#FF9202]"
                    : "border-transparent"
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
          <section id="agreement">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Agreement To Our Legal terms
            </h2>
            <p>
              We are Lakeland Home Management LLC (referred to as{" "}
              <strong>" Lakeland Home," "we," "us,"</strong> or <strong>"our"</strong>
              ).
            </p>
            <p>
              We operate the website at{" "}
              <a
                href="https://www.lakelandhomemgt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#936C00] hover:underline"
              >
                https://www.lakelandhomemgt.com/
              </a>
              , as well as any other related products and services that refer or
              link to these legal terms (collectively, the{" "}
              <strong>"Services"</strong>).
            </p>
            <p>
              These Legal Terms explain how and why we may access, collect,
              store, use, and/or share (<strong>"process"</strong>) your
              personal information when you use our Services, including when
              you:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Visit our website or any of our websites that link to this
                Privacy Notice
              </li>

              <li>
                {" "}
                Our skilled professionals are committed to delivering
                outstanding Preservation, Occupied Maintenance (OM), and
                Renovation services to ensure the protection and appeal of your
                properties. Our reputation for excellence is built on a
                foundation of trust, quality, and customer satisfaction. We
                provide comprehensive on-site field services for both
                tenant-occupied and vacant properties for mortgage companies.
                These services include property preservation, turn-key
                maintenance, renovations, and all types of handyman maintenance
                work. We focus on quick turnaround times and professional
                execution to meet our clients’ needs efficiently.
              </li>
              <li>
                Engage with us through other related ways, including sales,
                marketing, or events
              </li>
            </ul>

            <p className="mt-4">You can contact us by:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:jobs@lakelandhomemgt.com"
                  className="text-[#936C00] hover:underline"
                >
                  jobs@lakelandhomemgt.com
                </a>
              </li>
              <li>
                <strong>Mail:</strong> 15210 AMBERLY DR APT 1834, Tampa, FL 33647
              </li>
            </ul>
            <p>
              These Legal Terms constitute a legally binding agreement between
              you (whether personally or on behalf of an entity —{" "}
              <strong>"you"</strong>) and
              <strong> Lakeland Home Management LLC </strong>, regarding your access to
              and use of the Services.
            </p>
            <p>
              By accessing or using the Services, you acknowledge that you have{" "}
              <strong>read, understood, and agreed to be bound</strong> by all
              of these Legal Terms.
            </p>
            <p className="text-red-600 font-semibold">
              IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SERVICES AND MUST DISCONTINUE
              USE IMMEDIATELY.
            </p>
            <p>
              Supplemental terms and conditions or documents that may be posted
              on the Services from time to time are hereby expressly
              incorporated by reference.
            </p>
            <p>
              We reserve the right, at our sole discretion, to modify or update
              these Legal Terms at any time and for any reason. We will notify
              you of changes by updating the <strong>"Last updated"</strong>{" "}
              date of these Legal Terms, and you waive any right to receive
              specific notice of each change.
            </p>
            <p>
              It is your responsibility to periodically review these Legal Terms
              to stay informed of updates. Your continued use of the Services
              after the date such revised Legal Terms are posted constitutes
              your acceptance of those changes.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mt-4">
              We recommend that you print a copy of these Legal Terms for your
              records.
            </blockquote>
          </section>

          <section id="services">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Our Services
            </h2>
            <p className="mb-4">
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
          </section>
          <section id="ip-rights">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Intellectual Property Rights
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              Our Intellectual Property
            </h3>
            <p className="mb-4">
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively, the{" "}
              <strong>"Content"</strong>), as well as the trademarks, service
              marks, and logos contained therein (the <strong>"Marks"</strong>).
            </p>
            <p className="mb-4">
              Our Content and Marks are protected by copyright and trademark
              laws (and various other intellectual property rights and unfair
              competition laws) and treaties around the world.
            </p>
            <p className="mb-4">
              The Content and Marks are provided in or through the Services{" "}
              <strong>"AS IS"</strong> for your personal, non-commercial use or
              internal business purpose only.
            </p>
          </section>

          <section id="collection">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Collection of Personal Information
            </h2>
            <p className="mb-4">
              Lakeland Home is committed to protecting your privacy and ensuring
              compliance with The Campaign Registry (TCR) regulations regarding
              personal data collection and usage.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Personal Information Collected
            </h3>
            <p className="mb-2">
              We collect the following personal information when you engage with
              our services, including but not limited to:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Contact Information: Name, phone number, email address, and
                company name.
              </li>
              <li>
                Communication Preferences: SMS opt-in and opt-out history,
                consent records, and messaging preferences.
              </li>
              <li>
                Service Transactions: Details related to service appointments,
                work orders, and payments.
              </li>
            </ul>

            <h3 className="text-xl font-semibold  mb-2">
              How We Collect Information
            </h3>
            <p className="mb-2">We collect this information through:</p>
            <ul className="list-disc ml-6 mb-4">
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

            <h3 className="text-xl font-semibold mb-2">
              Compliance with TCR Regulations
            </h3>
            <p>To ensure compliance with TCR, TCPA, and CTIA regulations:</p>
            <ul className="list-decimal ml-6 mb-4">
              <li>
                <strong>Explicit Consent:</strong> We do not send SMS messages
                without prior express written consent from the recipient.
              </li>
              <li>
                <strong>No Third-Party Marketing:</strong> We do not share or
                sell phone numbers to third parties for marketing purposes.
              </li>
              <li>
                <strong>Clear Opt-Out Mechanism:</strong> Users can opt out
                anytime by replying STOP, and we honor all opt-out requests
                immediately.
              </li>
              <li>
                <strong>Accessible Privacy Policy:</strong> This privacy policy
                is publicly available on our website and linked in all SMS
                messages.
              </li>
              <li>
                <strong>Transparency in Use Cases:</strong> We clearly disclose
                the types of messages (account notifications, customer care,
                appointment reminders, promotions, and two-factor
                authentication).
              </li>
            </ul>
          </section>

          <section id="use">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Use Of Personal Information
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
              Sharing of Personal Information
            </h2>
            <p>
              Lakeland Home is committed to protecting your privacy. We do{" "}
              <strong>not</strong> share, sell, lease, or distribute your SMS
              consent or phone number (mobile opt-in) with any third parties or
              affiliates for marketing purposes.
            </p>
            <p>
              However, we may share personal data, including phone numbers,
              under the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li>
                <strong>Service Providers:</strong> We may share personal
                information with <strong>trusted third-party vendors</strong>{" "}
                who assist in order fulfillment, operational support, and
                service execution. These providers{" "}
                <strong>
                  are contractually bound to use this data solely for  Lakeland Home ’s
                  service-related purposes and not for independent marketing.
                </strong>
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose personal
                information when required by law, legal proceedings, or to
                protect the rights, safety, and security of our customers and
                business.
              </li>
            </ul>
          </section>
          <section id="sms">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              SMS Communication & Compliance Policy
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-4">
              Business Summary & SMS Usage in Campaign
            </h3>
            <p>
              Lakeland Home provides comprehensive on-site field services for tenants
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
              By opting in to receive text messages from  Lakeland Home , you
              acknowledge and agree to the terms outlined below.
            </p>

            <section id="message-types">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                1. Types of Messages We Send
              </h3>
              <p> Lakeland Home  may send SMS messages for the following purposes:</p>
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
                  <strong>Delivery Notifications:</strong> Appointment
                  reminders, technician arrival notifications, and work order
                  confirmations.
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
                  <strong>Lakeland Home: Customer Care (Service Request Acknowledgment):</strong> We’ve received your service request and are reviewing it. Our team will contact you shortly. For urgent support, call (863) 614-0369 or email jobs@lakelandhomemgt.com or visit: https://www.lakelandhomemgt.com/. Message frequency varies (1-4/day). 
                  Message & data rates may apply. Reply HELP for support or Reply STOP to opt-out any time.
                </li>
                <li>
                  <strong>Lakeland Home: Delivery Notification:</strong> Hello Mr. John, Your service at 15210 Amberly Drive, Apt. 1834, Tampa, Florida 33647 has been completed on September 20, at 2 PM. If you need any further assistance, contact us at (863) 614-0369. Thank you for choosing Lakeland Home! Message frequency varies (1-4/day).
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
                messages from Lakeland Home at the number provided. Message frequency
                may vary, typically between 1-4 messages per day depending on
                the nature of services requested.
              </p>

              <h4 className="text-lg font-semibold mt-4">Example:</h4>
              <ul className="list-inside space-y-4 mt-2">
                <li>
                  <strong>Opt-in Keywords:</strong> <code>Start</code>
                </li>
              </ul>

              <p>
                Messaging frequency may vary for  Lakeland Home . To opt-out, text{" "}
                <code>STOP</code>. For assistance, text <code>HELP</code> or
                visit{" "}
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
                Thank you for opting out of SMS messages from  Lakeland Home . You will
                not receive any further SMS communications. To opt back in at
                any time reply <strong>START</strong>.
              </p>

              <h4 className="mt-4">Example:</h4>
              <ul className="list-inside space-y-4 mt-2">
                <li>
                  <strong>Opt-out keyword:</strong> Stop
                </li>
                <li>
                  You will no longer receive messages from  Lakeland Home . To opt back
                  in at any time reply <strong>START</strong>.
                </li>
              </ul>
            </section>

            <section id="help-support">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                4. Help & Support
              </h3>
              <p>
                For assistance, reply <strong>HELP</strong> to any SMS, or
                contact us via:
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
                  <a
                    href="tel:+17188781443"
                    className="text-[#936C00] hover:underline"
                  >
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
                  Thank you for contacting  Lakeland Home . You can find help online at{" "}
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
                plan. Lakeland Home is not responsible for any carrier charges
                incurred.
              </p>
            </section>

            <section id="messaging-frequency">
              <h3 className="text-xl font-semibold mt-4 mb-4">
                6. Messaging Frequency Disclosure
              </h3>
              <p>
                By opting in to receive SMS communications from  Lakeland Home , you
                acknowledge and agree to the following messaging frequency
                terms:
              </p>
              <ul className="list-disc list-inside space-y-4 mt-4">
                <li>
                  Message frequency varies based on your interaction with our
                  services.
                </li>
                <li>
                  Typical message volume is 1-4 messages per day, but this may
                  change depending on account notifications or service updates
                  (if opted in).
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
                By opting in to receive SMS messages from  Lakeland Home , you agree to
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
                Lakeland Home values your privacy. We do not sell, rent, or
                distribute your phone number to third-party marketers. Your
                information is securely stored and handled in compliance with:
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
                Lakeland Home reserves the right to modify this SMS policy at any
                time. Continued use of our SMS services constitutes agreement to
                the latest terms. Updates will be communicated via our website
                and SMS notifications when applicable.
              </p>
            </section>
          </section>

          <section id="use-of-services">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Your Use of Our Services
            </h2>
            <p className="mb-4">
              Subject to your compliance with these Legal Terms, including the{" "}
              <strong>"PROHIBITED ACTIVITIES"</strong> section below, we grant
              you a non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Access the Services; and</li>
              <li>
                Download or print a copy of any portion of the Content to which
                you have properly gained access, solely for your personal,
                non-commercial use or internal business purpose.
              </li>
            </ul>

            <p className="mb-4">
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>

            <p className="mb-4">
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section or elsewhere in our Legal
              Terms, please address your request to:{" "}
              <span className="italic text-gray-500">
                [Insert contact information]
              </span>
              . If we ever grant you the permission to post, reproduce, or
              publicly display any part of our Services or Content, you must
              identify us as the owners or licensors of the Services, Content,
              or Marks and ensure that any copyright or proprietary notice
              appears or is visible on posting, reproducing, or displaying our
              Content.
            </p>

            <p className="mb-4">
              We reserve all rights not expressly granted to you in and to the
              Services, Content, and Marks.
            </p>

            <p className="mb-4 font-semibold text-red-600">
              Any breach of these Intellectual Property Rights will constitute a
              material breach of our Legal Terms and your right to use our
              Services will terminate immediately.
            </p>
          </section>
          <section id="submissions">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Your Submissions
            </h2>

            <p className="mb-4">
              Please review this section and the{" "}
              <strong>"PROHIBITED ACTIVITIES"</strong> section carefully prior
              to using our Services to understand the (a) rights you give us and
              (b) obligations you have when you post or upload any content
              through the Services.
            </p>

            <h3 className="text-xl font-semibold mb-2">Submissions</h3>
            <p className="mb-4">
              By directly sending us any question, comment, suggestion, idea,
              feedback, or other information about the Services ("Submissions"),
              you agree to assign to us all intellectual property rights in such
              Submission. You agree that we shall own this Submission and be
              entitled to its unrestricted use and dissemination for any lawful
              purpose, commercial or otherwise, without acknowledgment or
              compensation to you.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              You are responsible for what you post or upload
            </h3>
            <p className="mb-4">
              By sending us Submissions through any part of the Services you:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>
                Confirm that you have read and agree with our{" "}
                <strong>"PROHIBITED ACTIVITIES"</strong> and will not post,
                send, publish, upload, or transmit any Submission that is
                illegal, harassing, hateful, harmful, defamatory, obscene,
                bullying, abusive, discriminatory, threatening, sexually
                explicit, false, misleading, or otherwise inappropriate.
              </li>
              <li>
                To the extent permissible by applicable law, waive any and all
                moral rights to any such Submission.
              </li>
              <li>
                Warrant that any such Submissions are original to you or that
                you have the necessary rights and licenses to submit such
                Submissions.
              </li>
              <li>
                Warrant and represent that your Submissions do not constitute
                confidential information and that you have the full authority to
                grant us rights in relation to them.
              </li>
            </ul>

            <p className="mb-4">
              You are solely responsible for your Submissions and you expressly
              agree to reimburse us for any and all losses we may suffer due to
              your breach of (a) this section, (b) any third party’s
              intellectual property rights, or (c) applicable law.
            </p>
          </section>
          <section id="representations">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              User Representations
            </h2>

            <p className="mb-4">
              By using the Services, you represent and warrant that:
            </p>

            <ul className="list-decimal ml-6 mb-4 space-y-2">
              <li>
                You have the legal capacity and you agree to comply with these
                Legal Terms.
              </li>
              <li>
                You are not a minor in the jurisdiction in which you reside.
              </li>
              <li>
                You will not access the Services through automated or non-human
                means (e.g., bot, script).
              </li>
              <li>
                You will not use the Services for any illegal or unauthorized
                purpose.
              </li>
              <li>
                Your use of the Services will not violate any applicable law or
                regulation.
              </li>
            </ul>

            <p className="mb-4">
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Services (or any portion thereof).
            </p>
          </section>

          <section id="prohibited">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Prohibited Activities
            </h2>
            <p>
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. The Services may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us.
            </p>
            <p>As a user of the Services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Systematically retrieve data or content from the Services to
                create or compile a collection, database, or directory without
                written permission from us.
              </li>
              <li>
                Trick, defraud, or mislead us or other users, especially to
                obtain sensitive information such as passwords.
              </li>
              <li>
                Circumvent or interfere with security-related features of the
                Services.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm us or the Services in our
                opinion.
              </li>
              <li>
                Use information from the Services to harass, abuse, or harm
                another person.
              </li>
              <li>
                Misuse our support services or submit false reports of abuse or
                misconduct.
              </li>
              <li>
                Use the Services in violation of applicable laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing or linking to the Services.
              </li>
              <li>
                Upload or transmit viruses, Trojan horses, spamming, or
                disruptive material.
              </li>
              <li>
                Use scripts, bots, or automated tools to extract data or
                interact with the Services.
              </li>
              <li>Delete copyright or proprietary notices from Content.</li>
              <li>Impersonate another user or use someone else's username.</li>
              <li>
                Upload or transmit spyware, tracking pixels, web bugs, or
                passive data collection tools.
              </li>
              <li>Disrupt or overload the Services or related networks.</li>
              <li>Harass or threaten our staff or agents.</li>
              <li>
                Bypass access restrictions or security measures of the Services.
              </li>
              <li>
                Copy or adapt the Services' software or code (HTML, JS, PHP,
                Flash, etc.).
              </li>
              <li>
                Reverse engineer, decompile, or disassemble the software except
                as allowed by law.
              </li>
              <li>
                Use spiders, cheat tools, scrapers, or unauthorized scripts to
                access the Services.
              </li>
              <li>
                Use buying agents or purchasing agents to make transactions.
              </li>
              <li>
                Collect usernames or emails for unsolicited communication or
                create fake accounts.
              </li>
              <li>
                Use the Services for competing with us or for commercial
                exploitation.
              </li>
            </ul>
          </section>

          <section id="ugc">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              User Generated Contributions
            </h2>
            <p>
              The Services does not offer users to submit or post content.
              However, we may provide you with the opportunity to create,
              submit, post, display, transmit, perform, publish, distribute, or
              broadcast content and materials to us or on the Services. This
              includes, but is not limited to, text, writings, video, audio,
              photographs, graphics, comments, suggestions, personal
              information, or other materials (collectively,{" "}
              <strong>"Contributions"</strong>).
            </p>
            <p>
              Contributions may be viewable by other users of the Services and
              through third-party websites. When you create or make available
              any Contributions, you thereby represent and warrant that:
            </p>
          </section>
          <section id="license">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Contribution License
            </h2>
            <p>
              You and the Services agree that we may access, store, process, and
              use any information and personal data that you provide and your
              choices (including settings).
            </p>
            <br />
            <p>
              By submitting suggestions or other feedback regarding the
              Services, you agree that we can use and share such feedback for
              any purpose without compensation to you.
            </p>
            <br />
            <p>
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Services. You are solely responsible for your Contributions
              to the Services and you expressly agree to exonerate us from any
              and all responsibility and to refrain from any legal action
              against us regarding your Contributions.
            </p>
          </section>
          <section id="management">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Services Management
            </h2>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in
              any way burdensome to our systems; and (5) otherwise manage the
              Services in a manner designed to protect our rights and property
              and to facilitate the proper functioning of the Services.
            </p>

            <h2 className="text-xl font-semibold my-4">
              Terms and Termination
            </h2>
            <p>
              These legal terms shall remain in full force and effect while you
              use the Services. Without limiting any other provision of these
              legal terms, we reserve the right to, in our sole discretion and
              without notice or liability, deny access to and use of the
              Services (including blocking certain IP addresses), to any person
              for any reason or for no reason, including without limitation for
              breach of any representation, warranty, or covenant contained in
              these legal terms or of any applicable law or regulation. We may
              terminate your use or participation in the Services or delete any
              content or information that you posted at any time, without
              warning, in our sole discretion.
            </p>
            <br />
            <p>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </section>
          <section id="modifications">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Modifications and Interruptions
            </h2>
            <p>
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Services. We will not be liable to you or any
              third party for any modification, price change, suspension, or
              discontinuance of the Services.
            </p>
            <br />
            <p>
              We cannot guarantee the Services will be available at all times.
              We may experience hardware, software, or other problems or need to
              perform maintenance related to the Services, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You
              agree that we have no liability whatsoever for any loss, damage,
              or inconvenience caused by your inability to access or use the
              Services during any downtime or discontinuance of the Services.
              Nothing in these Legal Terms will be construed to obligate us to
              maintain and support the Services or to supply any corrections,
              updates, or releases in connection therewith.
            </p>
          </section>

          <section id="law">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Governing Law
            </h2>
            <p>
              These Legal Terms shall be governed by and defined following the
              laws of State of Florida, United States. Lakeland Home and
              yourself irrevocably consent that the courts of State of Florida,
              United States shall have exclusive jurisdiction to resolve any
              dispute which may arise in connection with these Legal Terms.
            </p>
          </section>

          <section id="dispute">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Dispute Resolution
            </h2>
            <h3 className="text-xl font-medium mt-4 mb-2">
              Informal Negotiations
            </h3>
            <p>
              To expedite resolution and control the cost of any dispute,
              controversy, or claim related to these Legal Terms (each a
              "Dispute" and collectively, the "Disputes") brought by either you
              or us (individually, a "Party" and collectively, the "Parties"),
              the Parties agree to first attempt to negotiate any Dispute
              (except those Disputes expressly provided below) informally for at
              least 30 days before initiating arbitration. Such informal
              negotiations commence upon written notice from one Party to the
              other Party.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">
              Binding Arbitration
            </h3>
            <p>
              Any dispute arising out of or in connection with these Legal
              Terms, including any question regarding its existence, validity,
              or termination, shall be referred to and finally resolved by the
              International Commercial Arbitration Court under the European
              Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
              according to the Rules of this ICAC, which, as a result of
              referring to it, is considered as the part of this clause.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">Restrictions</h3>
            <p>
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law, (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there is no right or authority
              for any Dispute to be brought in a purported representative
              capacity on behalf of the general public or any other persons.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2">
              Exceptions to Informal Negotiations and Arbitration
            </h3>
            <p>
              The Parties agree that the following Disputes are not subject to
              the above provisions concerning informal negotiations and binding
              arbitration: (a) any Disputes seeking to enforce or protect, or
              concerning the validity of, any of the intellectual property
              rights of a Party; (b) any Dispute related to, or arising from,
              allegations of theft, piracy, invasion of privacy, or unauthorized
              use; and (c) any claim for injunctive relief. If this provision is
              found to be illegal or unenforceable, then neither Party will
              elect to arbitrate any Dispute falling within that portion of this
              provision found to be illegal or unenforceable and such Dispute
              shall be decided by a court of competent jurisdiction within the
              courts listed for jurisdiction above, and the Parties agree to
              submit to the personal jurisdiction of that court.
            </p>
          </section>

          <section id="corrections">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Corrections
            </h2>
            <p>
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the Services at any time, without prior notice.
            </p>
          </section>
          <section id="disclaimer">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Disclaimer
            </h2>
            <p>
              The services are provided on an as-is and as-available basis. You
              agree that your use of the services will be at your sole risk. To
              the fullest extent permitted by law, we disclaim all warranties,
              express or implied, in connection with the services and your use
              thereof, including, without limitation, the implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. We make no warranties or representations about
              the accuracy or completeness of the services' content or the
              content of any websites or mobile applications linked to the
              services and we will assume no liability or responsibility for any
              (1) errors, mistakes, or inaccuracies of content and materials,
              (2) personal injury or property damage, of any nature whatsoever,
              resulting from your access to and use of the services, (3) any
              unauthorized access to or use of our secure servers and/or any and
              all personal information and/or financial information stored
              therein, (4) any interruption or cessation of transmission to or
              from the services, (5) any bugs, viruses, trojan horses, or the
              like which may be transmitted to or through the services by any
              third party, and/or (6) any errors or omissions in any content and
              materials or for any loss or damage of any kind incurred as a
              result of the use of any content posted, transmitted, or otherwise
              made available via the services. We do not warrant, endorse,
              guarantee, or assume responsibility for any product or service
              advertised or offered by a third party through the services, any
              hyperlinked website, or any website or mobile application featured
              in any banner or other advertising, and we will not be a party to
              or in any way be responsible for monitoring any transaction
              between you and any third-party providers of products or services.
              As with the purchase of a product or service through any medium or
              in any environment, you should use your best judgment and exercise
              caution where appropriate.
            </p>
          </section>

          <section id="liability">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Limitations of Liability
            </h2>
            <p>
              In no event will we or our directors, employees, or agents be
              liable to you or any third party for any direct, indirect,
              consequential, exemplary, incidental, special, or punitive
              damages, including lost profit, lost revenue, loss of data, or
              other damages arising from your use of the services, even if we
              have been advised of the possibility of such damages.
              Notwithstanding anything to the contrary contained herein, our
              liability to you for any cause whatsoever and regardless of the
              form of the action, will at all times be limited to the lesser of
              the amount paid, if any, by you to us or certain U.S. state laws
              and international laws do not allow limitations on implied
              warranties or the exclusion or limitation of certain damages. If
              these laws apply to you, some or all of the above disclaimers or
              limitations may not apply to you, and you may have additional
              rights.
            </p>
          </section>
          <section id="indemnification">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of: (1) use of the Services; (2) breach of these Legal
              Terms; (3) any breach of your representations and warranties set
              forth in these Legal Terms; (4) your violation of the rights of a
              third party, including but not limited to intellectual property
              rights; or (5) any overt harmful act toward any other user of the
              Services with whom you connected via the Services. Notwithstanding
              the foregoing, we reserve the right, at your expense, to assume
              the exclusive defense and control of any matter for which you are
              required to indemnify us, and you agree to cooperate, at your
              expense, with our defense of such claims. We will use reasonable
              efforts to notify you of any such claim, action, or proceeding
              which is subject to this indemnification upon becoming aware of
              it.
            </p>
          </section>

          <section id="user-data">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              User Data
            </h2>
            <p>
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data, and you hereby waive any right of action against us
              arising from any such loss or corruption of such data.
            </p>
          </section>
          <section id="electronic">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Electronic Communications, Transactions, And Signatures
            </h2>
            <p>
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Services, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SERVICES. You hereby waive any rights or requirements under
              any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
          </section>

          <section id="misc">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Miscellaneous
            </h2>
            <p>
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision. These
              Legal Terms operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Legal Terms is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Legal Terms and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Legal Terms or use of the
              Services. You agree that these Legal Terms will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Legal Terms and the lack of signing by the parties hereto to
              execute these Legal Terms.
            </p>
          </section>

          <section id="amendments">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Amendments
            </h2>
            <p>
              Lakeland Home reserves the right to change the information
              provided on or via this Website, including these Terms, at any
              time and without notice. It is recommended that you review the
              information provided on or via this Website and these Terms
              periodically for changes.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Contact Us
            </h2>
            <p>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:{" "}
              <a
                href="mailto:jobs@lakelandhomemgt.com"
                className="text-[#936C00] hover:underline"
              >
                jobs@lakelandhomemgt.com
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
