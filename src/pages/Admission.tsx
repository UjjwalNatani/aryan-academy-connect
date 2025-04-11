
import { Link } from "react-router-dom";
import { Download, ArrowRight, Check, FileText, Clock, Users, CreditCard } from "lucide-react";

const Admission = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-accent to-school-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions Open for 2024-25</h1>
            <p className="text-xl text-gray-100 mb-8">
              Join The Aryan Public Academy for a holistic education experience that prepares your child for future success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="#admission-process"
                className="bg-white text-school-blue hover:bg-gray-100 py-3 px-8 rounded-md font-semibold transition-colors"
              >
                Learn About Admission
              </Link>
              <a
                href="#"
                className="bg-school-gold text-school-blue hover:bg-amber-400 py-3 px-8 rounded-md font-semibold transition-colors inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  // In a real app, this would download a PDF
                  alert("Brochure download would start in a real implementation");
                }}
              >
                Download Brochure
                <Download size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admission-process" className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">Admission Process</h2>
            <p className="text-gray-600 mt-4">
              Follow these simple steps to apply for admission to The Aryan Public Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-school-blue relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-school-blue text-white h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold text-school-blue mb-4 mt-2">Submit Application</h3>
                <p className="text-gray-600">
                  Complete and submit the application form along with necessary documents to the school office or online.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-school-gold relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-school-gold text-school-blue h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold text-school-blue mb-4 mt-2">Document Verification</h3>
                <p className="text-gray-600">
                  The school will verify all submitted documents and review the application.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-school-blue relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-school-blue text-white h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold text-school-blue mb-4 mt-2">Entrance Assessment</h3>
                <p className="text-gray-600">
                  Attend an entrance assessment (as applicable) followed by an interaction with the Principal.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-school-gold relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-school-gold text-school-blue h-10 w-10 rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold text-school-blue mb-4 mt-2">Admission Confirmation</h3>
                <p className="text-gray-600">
                  Upon selection, complete the admission formalities and fee payment to secure admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Required Documents</h2>
              <p className="text-gray-600 mb-8">
                Please ensure you have the following documents ready for the admission process:
              </p>

              <ul className="space-y-4">
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Completed Application Form</h3>
                    <p className="text-gray-600">Duly filled and signed admission application form</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Birth Certificate</h3>
                    <p className="text-gray-600">Original birth certificate for age verification</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Previous School Records</h3>
                    <p className="text-gray-600">Report cards and transfer certificate from previous school (if applicable)</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Passport Size Photographs</h3>
                    <p className="text-gray-600">Recent passport size photographs of the student and parents</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Address Proof</h3>
                    <p className="text-gray-600">Valid address proof of parents/guardians</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Aadhar Card</h3>
                    <p className="text-gray-600">Copy of student's Aadhar card (if available)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Admission Process" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RTE Section */}
      <section className="py-20 bg-school-blue text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
                alt="RTE Free Education" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-school-gold">
                RTE Free Education
              </h2>
              <p className="text-gray-200 mb-6">
                The Aryan Public Academy proudly participates in the Right to Education (RTE) Act, offering free education to eligible students from economically weaker sections and disadvantaged groups.
              </p>
              <p className="text-gray-200 mb-8">
                Under the RTE Act, 25% of seats in our school are reserved for children belonging to economically weaker sections and disadvantaged groups in the neighborhood.
              </p>

              <h3 className="text-xl font-bold mb-4">Eligibility Criteria:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={22} className="text-school-gold mr-3 flex-shrink-0 mt-1" />
                  <span>Family annual income below the prescribed limit</span>
                </li>
                <li className="flex items-start">
                  <Check size={22} className="text-school-gold mr-3 flex-shrink-0 mt-1" />
                  <span>Residence within the defined neighborhood area</span>
                </li>
                <li className="flex items-start">
                  <Check size={22} className="text-school-gold mr-3 flex-shrink-0 mt-1" />
                  <span>Belonging to disadvantaged groups or weaker sections</span>
                </li>
                <li className="flex items-start">
                  <Check size={22} className="text-school-gold mr-3 flex-shrink-0 mt-1" />
                  <span>Age-appropriate for the class applied for</span>
                </li>
              </ul>

              <Link
                to="/contact"
                className="bg-school-gold text-school-blue hover:bg-amber-400 py-3 px-8 rounded-md font-semibold transition-colors inline-flex items-center"
              >
                Inquire About RTE Admission
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">Fee Structure Overview</h2>
            <p className="text-gray-600 mt-4">
              We offer a transparent fee structure designed to provide quality education at reasonable rates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-6">
                <Clock size={32} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">One-Time Fees</h3>
              <p className="text-gray-600 mb-6">
                These are the fees paid once at the time of admission:
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Registration Fee</span>
                  <span className="font-semibold">₹ X,XXX</span>
                </li>
                <li className="flex justify-between">
                  <span>Admission Fee</span>
                  <span className="font-semibold">₹ X,XXX</span>
                </li>
                <li className="flex justify-between">
                  <span>Caution Deposit</span>
                  <span className="font-semibold">₹ X,XXX</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-6">
                <CreditCard size={32} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Recurring Fees</h3>
              <p className="text-gray-600 mb-6">
                These are the fees paid periodically throughout the academic year:
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Tuition Fee (Quarterly)</span>
                  <span className="font-semibold">₹ X,XXX</span>
                </li>
                <li className="flex justify-between">
                  <span>Computer Lab Fee</span>
                  <span className="font-semibold">₹ X,XXX</span>
                </li>
                <li className="flex justify-between">
                  <span>Activity Fee</span>
                  <span className="font-semibold">₹ X,XXX</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-6">
                <Users size={32} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Additional Services</h3>
              <p className="text-gray-600 mb-6">
                Optional services available at additional cost:
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Transportation</span>
                  <span className="font-semibold">As per route</span>
                </li>
                <li className="flex justify-between">
                  <span>Meals</span>
                  <span className="font-semibold">₹ X,XXX</span>
                </li>
                <li className="flex justify-between">
                  <span>Special Programs</span>
                  <span className="font-semibold">Varies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              For a detailed fee structure, please contact the school administration or download our brochure.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact for Fee Details
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-school-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-school-blue mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your child's journey with The Aryan Public Academy today. Limited seats available for the 2024-25 academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                // In a real app, this would lead to an application form
                alert("Application form would open in a real implementation");
              }}
            >
              Apply Online
            </a>
            <Link
              to="/contact"
              className="btn-outline"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
