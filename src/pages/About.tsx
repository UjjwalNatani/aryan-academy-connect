
import { ArrowRight, BookOpen, Trophy, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-school-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-school-blue to-school-dark"></div>
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="School background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Academy</h1>
            <p className="text-xl text-gray-200 mb-8">
              Learn about our mission, vision, and the dedicated team behind The Aryan Public Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Mission & Vision</h2>
              <p className="text-gray-600 mb-6">
                At The Aryan Public Academy, we are dedicated to providing a comprehensive educational experience that nurtures the intellectual, physical, emotional, and social growth of each student.
              </p>
              <h3 className="text-xl font-bold text-school-blue mb-3">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide quality education that empowers students to become responsible global citizens, creative thinkers, and lifelong learners who contribute positively to society.
              </p>
              <h3 className="text-xl font-bold text-school-blue mb-3">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To create an educational institution that is recognized for academic excellence, character development, and innovative teaching methodologies that prepare students for the challenges of the future.
              </p>

              <h3 className="text-xl font-bold text-school-blue mb-3">Our Values</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <li className="flex items-center">
                  <Check className="text-school-gold mr-2" size={20} />
                  <span>Excellence</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-school-gold mr-2" size={20} />
                  <span>Integrity</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-school-gold mr-2" size={20} />
                  <span>Respect</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-school-gold mr-2" size={20} />
                  <span>Innovation</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-school-gold mr-2" size={20} />
                  <span>Teamwork</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-school-gold mr-2" size={20} />
                  <span>Responsibility</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Students learning" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School Management */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">Our Leadership</h2>
            <p className="text-gray-600 mt-4">
              Meet the dedicated management team behind The Aryan Public Academy who are committed to providing excellence in education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Management 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Dr. Rekha Sharma" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-school-blue mb-1">Dr. Rekha Sharma</h3>
                <p className="text-school-gold font-medium mb-4">Principal</p>
                <p className="text-gray-600 mb-6">
                  Dr. Rekha Sharma brings over 20 years of experience in education and academic leadership to our institution.
                </p>
              </div>
            </div>

            {/* Management 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="V.K. Sharma" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-school-blue mb-1">V.K. Sharma</h3>
                <p className="text-school-gold font-medium mb-4">Director</p>
                <p className="text-gray-600 mb-6">
                  V.K. Sharma oversees the strategic direction of our academy, ensuring that we maintain high standards in all aspects.
                </p>
              </div>
            </div>

            {/* Management 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="H.P. Sharma" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-school-blue mb-1">H.P. Sharma</h3>
                <p className="text-school-gold font-medium mb-4">Administrative Head</p>
                <p className="text-gray-600 mb-6">
                  H.P. Sharma handles administrative operations, ensuring that our facilities and resources support the learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">Why Choose The Aryan Public Academy</h2>
            <p className="text-gray-600 mt-4">
              Discover what sets us apart and makes us the ideal choice for your child's education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-school-blue">
              <div className="bg-school-light p-4 rounded-full inline-block mb-6">
                <BookOpen size={28} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-4">Quality Education</h3>
              <p className="text-gray-600">
                We provide a comprehensive curriculum that focuses on academic excellence while also developing critical thinking and problem-solving skills.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-school-gold">
              <div className="bg-school-light p-4 rounded-full inline-block mb-6">
                <Users size={28} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-4">Qualified Teachers</h3>
              <p className="text-gray-600">
                Our experienced and dedicated teaching staff is committed to bringing out the best in each student through personalized attention.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-school-blue">
              <div className="bg-school-light p-4 rounded-full inline-block mb-6">
                <Trophy size={28} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-4">Extracurricular Focus</h3>
              <p className="text-gray-600">
                We believe in holistic development through sports, arts, and cultural activities that complement academic learning.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-school-gold">
              <div className="bg-school-light p-4 rounded-full inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-blue">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-4">Dual Language Medium</h3>
              <p className="text-gray-600">
                Instruction in both Hindi and English ensures that students develop strong language skills that prepare them for diverse opportunities.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-school-blue">
              <div className="bg-school-light p-4 rounded-full inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-blue">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-4">Modern Infrastructure</h3>
              <p className="text-gray-600">
                Our well-maintained facilities include modern classrooms, library, laboratories, and sports fields to support all aspects of learning.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-school-gold">
              <div className="bg-school-light p-4 rounded-full inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-school-blue">
                  <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.85 4 4.55v4.2a2.94 2.94 0 0 0 2.8 3h6.3a2.94 2.94 0 0 0 2.9-3v-4.2a1 1 0 0 0-1-1h-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-4">Value-Based Education</h3>
              <p className="text-gray-600">
                We emphasize character development and values that help students become responsible, ethical, and compassionate individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-school-blue py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join The Aryan Public Academy Family
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Give your child the gift of quality education and a bright future. Applications for the 2024-25 academic year are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="bg-school-gold text-school-blue hover:bg-amber-400 py-3 px-8 rounded-md font-semibold transition-colors inline-flex items-center"
            >
              Apply for Admission
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 py-3 px-8 rounded-md font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
