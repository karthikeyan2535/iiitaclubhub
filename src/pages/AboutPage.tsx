
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-clubhub-gray-light min-h-screen py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-clubhub-gray-dark">About IIITA ClubHub</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-clubhub-blue">Our Mission</h2>
              <p className="text-gray-600 mb-8 text-lg">
                IIITA ClubHub serves as the central platform for connecting students with clubs 
                and activities at Indian Institute of Information Technology, Allahabad. 
                We aim to enhance campus life by promoting engagement, participation, and 
                community building through student-led initiatives.
              </p>
              
              <h2 className="text-2xl font-semibold mb-6 text-clubhub-blue">What We Offer</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-clubhub-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Club Discovery</h3>
                    <p className="text-gray-600">
                      Explore a diverse range of student clubs across technical, cultural, academic, 
                      and sports categories. Find communities that match your interests and passions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-clubhub-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Event Management</h3>
                    <p className="text-gray-600">
                      Stay updated on all campus events, register for activities, and engage 
                      with the vibrant IIITA community. Never miss an important workshop, 
                      competition, or social gathering.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-clubhub-blue rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Club Management</h3>
                    <p className="text-gray-600">
                      For club organizers, we provide tools to manage memberships, publish 
                      advertisements, organize events, and track participation statistics.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-6 text-clubhub-blue">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Have questions or suggestions about IIITA ClubHub? We'd love to hear from you!
              </p>
              <p className="text-gray-600 mb-8">
                <strong>Email:</strong> clubhub@iiita.ac.in<br />
                <strong>Location:</strong> Student Activity Center, IIITA Campus<br />
                <strong>Office Hours:</strong> Monday to Friday, 10:00 AM - 5:00 PM
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-clubhub-blue hover:bg-clubhub-blue-light">
                  <Link to="/clubs">Explore Clubs</Link>
                </Button>
                <Button variant="outline" className="border-clubhub-blue text-clubhub-blue hover:bg-clubhub-blue hover:text-white">
                  <Link to="/register">Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
