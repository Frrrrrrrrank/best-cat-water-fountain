import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Best Cat Water Fountain</title>
        <meta
          name="description"
          content="Privacy policy for best-cat-water-fountain.com. Learn how we collect, use, and protect your information."
        />
        <link rel="canonical" href="https://best-cat-water-fountain.com/privacy-policy/" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" }
        ]} />

        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

              <div className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground mb-3">
                    When you visit best-cat-water-fountain.com, we may collect the following information:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>IP address (anonymized)</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-3">
                    We use the collected information for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Improving our website content and user experience</li>
                    <li>Analyzing website traffic and usage patterns</li>
                    <li>Providing relevant product recommendations</li>
                    <li>Maintaining website security</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies</h2>
                  <p className="text-muted-foreground mb-3">
                    Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Remember your preferences</li>
                    <li>Understand how you use our website</li>
                    <li>Provide personalized content</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
                  <p className="text-muted-foreground mb-3">
                    We use third-party services that may collect information:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Analytics:</strong> To understand website traffic and user behavior</li>
                    <li><strong>Advertising:</strong> We participate in affiliate programs including Amazon Associates</li>
                    <li><strong>Hosting:</strong> Our website is hosted on secure servers</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Affiliate Links</h2>
                  <p className="text-muted-foreground">
                    Our website contains affiliate links. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. This helps us maintain the website and continue providing free content.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of data collection where applicable</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our website is not intended for children under 13. We do not knowingly collect personal information from children.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about this privacy policy, please contact us through our website.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
