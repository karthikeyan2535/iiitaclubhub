import Layout from "@/components/layout/Layout";
import ClubCard from "@/components/clubs/ClubCard";
import EventCard from "@/components/events/EventCard";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Star, Music, Book } from "lucide-react";

const featuredClubs = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    name: "Photography Club",
    description: "Capturing moments and memories around the campus. Learn photography skills and techniques from experienced photographers.",
    category: "Cultural",
    memberCount: 56,
    eventCount: 2,
    imageUrl: "/lovable-uploads/1f0f78b9-1ab4-4c06-bcd7-77182ba55b56.png"
  },
  {
    id: "22222222-2222-4222-8222-222222222222",
    name: "Coding Club",
    description: "Enhance your programming skills and participate in hackathons and coding competitions with like-minded tech enthusiasts.",
    category: "Technical",
    memberCount: 87,
    eventCount: 3,
    imageUrl: "/lovable-uploads/aa2e161d-f177-41c6-998b-bfb4cd326b24.png"
  },
  {
    id: "33333333-3333-4333-8333-333333333333",
    name: "Nirmiti",
    description: "Express your creativity through various forms of visual arts. Join us in painting, sketching, and crafting beautiful artworks.",
    category: "Cultural",
    memberCount: 45,
    eventCount: 2,
    imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
  },
  {
    id: "44444444-4444-4444-8444-444444444444",
    name: "Geneticx",
    description: "IIITA's premier dance club where passion meets rhythm. Learn various dance forms and participate in electrifying performances.",
    category: "Cultural",
    memberCount: 62,
    eventCount: 4,
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    id: "55555555-5555-4555-8555-555555555555",
    name: "Virtuosi",
    description: "Discover the magic of music with IIITA's music club. From classical to contemporary, explore various genres and instruments.",
    category: "Cultural",
    memberCount: 38,
    eventCount: 2,
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: "66666666-6666-4666-8666-666666666666",
    name: "Sarasva",
    description: "Dive into the world of literature with IIITA's literature club. Engage in poetry, prose, and creative writing workshops.",
    category: "Cultural",
    memberCount: 42,
    eventCount: 1,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  }
];

const upcomingEvents = [
  {
    id: "1",
    title: "Photography Workshop",
    description: "Learn the fundamentals of photography from professional photographers.",
    clubName: "Photography Club",
    date: "Sun, Sep 10",
    time: "2:00 PM - 5:00 PM",
    location: "Lecture Hall 3, IIITA",
    imageUrl: "/lovable-uploads/1f0f78b9-1ab4-4c06-bcd7-77182ba55b56.png"
  },
  {
    id: "2",
    title: "Coding Contest",
    description: "Weekly competitive programming contest to solve algorithmic problems.",
    clubName: "Coding Club",
    date: "Thu, Oct 5",
    time: "6:00 PM - 8:00 PM",
    location: "Online (Contest Link will be shared)",
    imageUrl: "/lovable-uploads/aa2e161d-f177-41c6-998b-bfb4cd326b24.png"
  },
  {
    id: "3",
    title: "Hackathon 2023",
    description: "A 24-hour coding marathon where teams will build innovative solutions to real-world problems.",
    clubName: "Coding Club",
    date: "Sun, Oct 15",
    time: "9:00 AM - 9:00 AM (Next day)",
    location: "Computer Center, IIITA",
    imageUrl: "/lovable-uploads/36e70bac-dc6d-434a-b7d9-032e3ff3704f.png"
  }
];

const HomePage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-clubhub-blue to-clubhub-blue-light text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Your Passion at <span className="text-clubhub-orange">IIITA Clubs</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Connect with the vibrant community of clubs and activities at IIITA. 
              Join clubs, participate in events, and make the most of your campus experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-clubhub-blue hover:bg-gray-100 font-semibold">
                Get Started →
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Clubs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-clubhub-gray-light to-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Featured Clubs" viewAllLink="/clubs" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClubs.map((club) => (
              <ClubCard key={club.id} {...club} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Upcoming Events" viewAllLink="/events" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-clubhub-blue to-clubhub-blue-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to join a club?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create your account today and start connecting with clubs and events that match your interests.
          </p>
          <Button size="lg" className="bg-white text-clubhub-blue hover:bg-gray-100 font-semibold">
            Register Now
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
