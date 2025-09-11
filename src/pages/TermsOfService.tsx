import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using ProLearn, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-gray-600 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on ProLearn 
              for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="text-gray-600 leading-relaxed">
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for safeguarding the password 
              and for all activities that occur under your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
            <p className="text-gray-600 leading-relaxed">
              All course content, including videos, materials, and assessments, is the intellectual 
              property of ProLearn and its instructors. You may not redistribute, modify, or create 
              derivative works without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment and Refunds</h2>
            <p className="text-gray-600 leading-relaxed">
              Payment for courses is required before access is granted. Refunds are available within 
              30 days of purchase if you have not accessed more than 20% of the course content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
            <p className="text-gray-600 leading-relaxed">
              You may not use our service for any unlawful purpose or to solicit others to perform 
              unlawful acts. You may not violate any international, federal, provincial, or state 
              regulations, rules, laws, or local ordinances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at 
              legal@prolearn.com or through our contact page.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
