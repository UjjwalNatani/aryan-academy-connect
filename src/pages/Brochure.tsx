
import { Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Brochure = () => {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // In a real implementation, this would download a real PDF
    alert("Brochure download would start in a real implementation");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-school-blue text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">School Brochure</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Download our comprehensive brochure to learn more about The Aryan Public Academy's programs, facilities, and admissions process.
          </p>
        </div>
      </section>

      {/* Brochure Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our School Brochure</h2>
              <p className="text-gray-600 mb-6">
                Our brochure provides detailed information about:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Academic Programs</h3>
                    <p className="text-gray-600">Comprehensive details about our curriculum and teaching methodology</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">School Facilities</h3>
                    <p className="text-gray-600">Information about our campus, classrooms, laboratories, and sports facilities</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Fee Structure</h3>
                    <p className="text-gray-600">Detailed breakdown of all applicable fees and payment schedules</p>
                  </div>
                </li>
                <li className="flex">
                  <FileText className="text-school-blue mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-gray-800">Admission Process</h3>
                    <p className="text-gray-600">Step-by-step guide to the admission process and required documents</p>
                  </div>
                </li>
              </ul>

              <button
                onClick={handleDownload}
                className="bg-school-blue text-white py-3 px-8 rounded-md font-semibold hover:bg-school-dark transition-colors inline-flex items-center"
              >
                Download Brochure (PDF)
                <Download size={18} className="ml-2" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden mb-6">
                {/* This would be a preview of the brochure cover */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-school-light p-8 text-center">
                  <div className="h-16 w-16 bg-school-blue rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    AP
                  </div>
                  <h2 className="text-2xl font-bold text-school-blue mb-2">The Aryan Public Academy</h2>
                  <p className="text-lg text-school-dark mb-1">School Brochure</p>
                  <p className="text-sm text-gray-600">2024-25</p>
                  <div className="mt-8 border-t border-gray-300 pt-8 w-full">
                    <p className="text-gray-600">Bhagwati Nagar, A, Niwaru,<br />Lalchandpura Road, Jhotwara, Jaipur</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={handleDownload}
                  className="bg-school-gold text-school-blue py-3 px-8 rounded-md font-semibold hover:bg-amber-400 transition-colors inline-flex items-center mx-auto"
                >
                  Download Now
                  <Download size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-school-blue mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            If you need more information after reviewing our brochure, our admissions team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact Us
            </Link>
            <Link
              to="/admission"
              className="btn-outline"
            >
              View Admission Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochure;
