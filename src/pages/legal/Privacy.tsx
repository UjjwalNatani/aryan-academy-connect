
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-school-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
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
              At The Aryan Public Academy, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Identity Data: includes first name, last name, username or similar identifier, and date of birth.</li>
              <li>Contact Data: includes billing address, delivery address, email address, and telephone numbers.</li>
              <li>Technical Data: includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Usage Data: includes information about how you use our website and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-school-blue mb-6">3. How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
              <li>To respond to your inquiries and provide customer service.</li>
              <li>To send you administrative information, such as updates to our terms, conditions, and policies.</li>
            </ul>

            <h2 className="text-2xl font-bold text-school-blue mb-6">4. Data Security</h2>
            <p className="text-gray-700 mb-8">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">5. Data Retention</h2>
            <p className="text-gray-700 mb-8">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">6. Your Legal Rights</h2>
            <p className="text-gray-700 mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-school-blue mb-6">7. Changes to the Privacy Policy</h2>
            <p className="text-gray-700 mb-8">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="text-gray-700 mb-1">Email: TheAryanPublicAcademy@gmail.com</p>
            <p className="text-gray-700 mb-8">Phone: 9352906935</p>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-500 text-sm text-center">
                By using The Aryan Public Academy website, you consent to our Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
