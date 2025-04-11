
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-school-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="text-xl text-gray-200 mt-4">
            Last Updated: April 10, 2023
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-school-blue mb-6">1. Introduction</h2>
            <p className="text-gray-700 mb-8">
              Welcome to The Aryan Public Academy website. These Terms of Service govern your use of our website located at [website URL] (the "Website") and all related services. By accessing or using our Website, you agree to be bound by these Terms. If you do not agree with any part of these terms, you may not use our Website.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">2. Use of Website</h2>
            <p className="text-gray-700 mb-4">
              The content on our Website is for general information and use only. It is subject to change without notice. This Website uses cookies to monitor browsing preferences. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this Website.
            </p>
            <p className="text-gray-700 mb-8">
              You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">3. Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              Your use of our Website is also governed by our Privacy Policy, which can be found at <Link to="/privacy" className="text-school-accent hover:underline">Privacy Policy</Link>. Please review our Privacy Policy, which also governs the Website and informs users of our data collection practices.
            </p>
            <p className="text-gray-700 mb-8">
              By using our Website, you consent to our collection and use of your information as described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-8">
              The content, organization, graphics, design, compilation, and other matters related to the Website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication by you of any such matters or any part of the Website is strictly prohibited without our express prior written permission.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-8">
              To the maximum extent permitted by applicable law, in no event shall The Aryan Public Academy, its affiliates, directors, employees, or agents be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, this Website.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">6. Indemnification</h2>
            <p className="text-gray-700 mb-8">
              You agree to indemnify, defend, and hold harmless The Aryan Public Academy, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Website, any user postings made by you, your violation of any terms of this Agreement, or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">7. Changes to Terms</h2>
            <p className="text-gray-700 mb-8">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 mb-1">Email: TheAryanPublicAcademy@gmail.com</p>
            <p className="text-gray-700 mb-8">Phone: 9352906935</p>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-500 text-sm text-center">
                By using The Aryan Public Academy website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
