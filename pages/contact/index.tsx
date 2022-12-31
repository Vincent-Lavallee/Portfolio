import dynamic from "next/dynamic";

const ContactPage = () => {
  const ContactPageContent = dynamic(
    () => import("../../src/features/contact/ContactPageContent"),
    { ssr: false }
  );

  return <ContactPageContent />;
};

export default ContactPage;
