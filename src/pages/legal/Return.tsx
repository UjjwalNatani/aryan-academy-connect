
import { Link } from "react-router-dom";

const Return = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-school-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold">Return Policy</h1>
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
              This Return Policy outlines the terms and conditions for refunds and cancellations at The Aryan Public Academy. We strive to maintain transparency in all our financial dealings with parents and students.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">2. Fee Refund Policy</h2>
            <p className="text-gray-700 mb-4">
              The following guidelines apply to fee refunds:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Registration fees are non-refundable under any circumstances.</li>
              <li>The admission fee is refundable only if the admission is cancelled before the commencement of the academic session.</li>
              <li>Tuition fees that have been paid in advance are refundable on a pro-rata basis, calculated from the date of submission of the withdrawal application.</li>
              <li>Refunds for any other fees will be considered on a case-by-case basis and in accordance with the school's discretion.</li>
            </ul>

            <h2 className="text-2xl font-bold text-school-blue mb-6">3. Withdrawal Process</h2>
            <p className="text-gray-700 mb-4">
              Parents wishing to withdraw their child from the school must follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
              <li>Submit a written application for withdrawal to the school office at least one month in advance.</li>
              <li>Clear all pending dues and obtain a "No Dues Certificate" from the accounts department.</li>
              <li>Return all school property including library books, sports equipment, and other materials issued to the student.</li>
              <li>Complete the withdrawal form available at the school office.</li>
            </ol>

            <h2 className="text-2xl font-bold text-school-blue mb-6">4. Transfer Certificate</h2>
            <p className="text-gray-700 mb-8">
              A Transfer Certificate (TC) will be issued within 15 working days after receiving the withdrawal application and completing all formalities, including clearing of dues. The TC will only be issued if there are no outstanding fees or other dues.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">5. Special Circumstances</h2>
            <p className="text-gray-700 mb-8">
              In case of special circumstances such as relocation, medical issues, or other unforeseen events, parents may apply for special consideration regarding fee refunds. Each case will be evaluated individually by the school management, and decisions will be made based on the merits of the case.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">6. Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">
              The following items are non-refundable:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Uniform fees once the uniform has been issued.</li>
              <li>Books and stationery fees once the materials have been issued.</li>
              <li>Transportation fees for the current month.</li>
              <li>Any fees for extracurricular activities that have already commenced.</li>
            </ul>

            <h2 className="text-2xl font-bold text-school-blue mb-6">7. Processing Time for Refunds</h2>
            <p className="text-gray-700 mb-8">
              All approved refunds will be processed within 30 working days from the date of approval. Refunds will be made through the same mode of payment used for the original transaction, unless otherwise specified and agreed upon.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">8. Changes to this Policy</h2>
            <p className="text-gray-700 mb-8">
              The Aryan Public Academy reserves the right to modify this Return Policy at any time without prior notice. Changes will be effective immediately upon posting on our website. It is the responsibility of parents to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-school-blue mb-6">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For any questions or clarifications regarding this Return Policy, please contact:
            </p>
            <p className="text-gray-700 mb-1">Email: TheAryanPublicAcademy@gmail.com</p>
            <p className="text-gray-700 mb-8">Phone: 9352906935</p>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-gray-500 text-sm text-center">
                By enrolling a student at The Aryan Public Academy, parents acknowledge that they have read, understood, and agree to abide by this Return Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Return;
