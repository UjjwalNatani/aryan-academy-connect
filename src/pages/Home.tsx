
import { Link } from "react-router-dom";
import { ArrowRight, Bus, Trophy, BookOpen, Users, CheckCircle2, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-blue to-school-dark text-white py-20 md:py-28">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Future <span className="text-school-gold">Leaders</span> Through Quality Education
            </h1>
            <p className="text-lg mb-8 text-gray-200 max-w-lg">
              Welcome to The Aryan Public Academy, where we nurture young minds to become the leaders of tomorrow through excellence in education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admission"
                className="bg-school-gold text-school-blue hover:bg-amber-400 py-3 px-8 rounded-md font-semibold transition-colors inline-flex items-center"
              >
                Apply Now
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 py-3 px-8 rounded-md font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 inline-block bg-white bg-opacity-10 rounded-lg px-4 py-2">
              <span className="text-school-gold font-semibold">Admissions Open 2024-25</span>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="w-full h-[450px] bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Students at The Aryan Public Academy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-school-gold h-16 w-16 rounded-full flex items-center justify-center text-school-blue">
                  <Users size={32} />
                </div>
                <div>
                  <h3 className="text-school-blue font-bold text-xl">Hindi & English</h3>
                  <p className="text-gray-600">Dual Medium Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">Our Key Features</h2>
            <p className="text-gray-600 mt-4">
              At The Aryan Public Academy, we provide a comprehensive educational experience with top-notch facilities and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group hover:-translate-y-1 duration-300">
              <div className="bg-school-light p-4 rounded-full inline-block mb-4 group-hover:bg-school-blue transition-colors">
                <Bus size={28} className="text-school-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Transportation</h3>
              <p className="text-gray-600">
                Safe and reliable transportation services for students from various parts of the city.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group hover:-translate-y-1 duration-300">
              <div className="bg-school-light p-4 rounded-full inline-block mb-4 group-hover:bg-school-blue transition-colors">
                <Trophy size={28} className="text-school-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Sports Facilities</h3>
              <p className="text-gray-600">
                Comprehensive sports programs and facilities to develop physical fitness and teamwork.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group hover:-translate-y-1 duration-300">
              <div className="bg-school-light p-4 rounded-full inline-block mb-4 group-hover:bg-school-blue transition-colors">
                <BookOpen size={28} className="text-school-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Dual Medium</h3>
              <p className="text-gray-600">
                Instruction in both Hindi and English to provide diverse language skills and opportunities.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group hover:-translate-y-1 duration-300">
              <div className="bg-school-light p-4 rounded-full inline-block mb-4 group-hover:bg-school-blue transition-colors">
                <Sparkles size={28} className="text-school-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Special Programs</h3>
              <p className="text-gray-600">
                Extracurricular activities and special programs to develop well-rounded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
              alt="About The Aryan Public Academy" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="section-title">Discover Our Academy</h2>
            <p className="text-gray-600 mb-6">
              The Aryan Public Academy is a prestigious educational institution committed to providing a holistic education that nurtures intellectual, physical, emotional, and social growth.
            </p>
            <p className="text-gray-600 mb-8">
              Founded with a vision to create future leaders, our academy focuses on academic excellence while also emphasizing character development, critical thinking, and creativity.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle2 size={22} className="text-school-accent mr-3 flex-shrink-0 mt-1" />
                <span>Experienced and dedicated teaching staff</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={22} className="text-school-accent mr-3 flex-shrink-0 mt-1" />
                <span>Modern infrastructure and learning facilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={22} className="text-school-accent mr-3 flex-shrink-0 mt-1" />
                <span>Comprehensive curriculum with focus on practical learning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 size={22} className="text-school-accent mr-3 flex-shrink-0 mt-1" />
                <span>Safe and nurturing environment for students</span>
              </li>
            </ul>
            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Program CTA */}
      <section className="bg-school-blue py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            RTE Free Education Available
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            We're proud to participate in the Right to Education (RTE) program, offering free education to eligible students.
          </p>
          <Link
            to="/admission"
            className="bg-school-gold text-school-blue hover:bg-amber-400 py-3 px-8 rounded-md font-semibold transition-colors inline-flex items-center"
          >
            Check Eligibility
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">What Parents Say</h2>
            <p className="text-gray-600 mt-4">
              Hear from parents whose children have thrived at The Aryan Public Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-school-blue opacity-20 absolute top-4 left-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11C10 12.66 8.66 14 7 14C5.34 14 4 12.66 4 11V10C4 6.69 6.69 4 10 4V7C8.9 7 8 7.9 8 9V11H10ZM20 11C20 12.66 18.66 14 17 14C15.34 14 14 12.66 14 11V10C14 6.69 16.69 4 20 4V7C18.9 7 18 7.9 18 9V11H20Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 pt-6">
                "The Aryan Public Academy has provided an excellent educational foundation for my child. The teachers are caring and the facilities are top-notch."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-school-blue">Rajesh Sharma</h4>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-school-blue opacity-20 absolute top-4 left-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11C10 12.66 8.66 14 7 14C5.34 14 4 12.66 4 11V10C4 6.69 6.69 4 10 4V7C8.9 7 8 7.9 8 9V11H10ZM20 11C20 12.66 18.66 14 17 14C15.34 14 14 12.66 14 11V10C14 6.69 16.69 4 20 4V7C18.9 7 18 7.9 18 9V11H20Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 pt-6">
                "I've seen remarkable improvement in my child's academic performance and overall confidence since joining The Aryan Public Academy."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-school-blue">Priya Patel</h4>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-school-blue opacity-20 absolute top-4 left-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11C10 12.66 8.66 14 7 14C5.34 14 4 12.66 4 11V10C4 6.69 6.69 4 10 4V7C8.9 7 8 7.9 8 9V11H10ZM20 11C20 12.66 18.66 14 17 14C15.34 14 14 12.66 14 11V10C14 6.69 16.69 4 20 4V7C18.9 7 18 7.9 18 9V11H20Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 pt-6">
                "The dual medium approach has greatly benefited my children. They're now comfortable in both Hindi and English, opening up more opportunities for them."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-school-blue">Amit Singh</h4>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-20 bg-school-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-school-blue mb-6">
            Ready to Join The Aryan Public Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Admissions for the academic year 2024-25 are now open. Secure your child's future with quality education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="btn-primary"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="btn-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
