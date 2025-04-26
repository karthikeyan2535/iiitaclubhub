import { useEffect, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Bell, BellOff, UserPlus, UserMinus, Edit, Share, Info } from "lucide-react";
import { useClubDetails, useClubDetailsWithAnnouncements } from "@/hooks/useClubDetails";
import { useClubEvents } from "@/hooks/useEventManagement";
import { useJoinClub, useLeaveClub, useFollowClub, useUnfollowClub, isValidUUID } from "@/hooks/useClubs";
import { supabase } from "@/integrations/supabase/client";
import EventCard from "@/components/events/EventCard";

const ClubDetailsPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const { clubDetails: { data: club, isLoading: loadingClub }, announcements: { data: announcements = [], isLoading: loadingAnnouncements } } = useClubDetailsWithAnnouncements(clubId);
  const { data: events = [], isLoading: loadingEvents } = useClubEvents(clubId || "");
  
  const [activeTab, setActiveTab] = useState("about");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMember, setIsMember] = useState(false);
  
  const { mutate: joinClubMutation, isPending: joiningClub } = useJoinClub();
  const { mutate: leaveClubMutation, isPending: leavingClub } = useLeaveClub();
  const { mutate: followClubMutation, isPending: followingClub } = useFollowClub();
  const { mutate: unfollowClubMutation, isPending: unfollowingClub } = useUnfollowClub();

  const isOrganizer = useMemo(() => {
    if (!user || !club) return false;
    return club.organizer_id === user.id || (club.leads || []).includes(user.id);
  }, [user, club]);

  useEffect(() => {
    const checkMembershipStatus = async () => {
      if (!user || !clubId) return;
      
      try {
        const { data, error } = await supabase
          .from("club_members")
          .select("id")
          .eq("club_id", clubId)
          .eq("user_id", user.id)
          .limit(1)
          .single();
        
        if (error) {
          console.error("Error checking membership:", error.message);
        }
        
        setIsMember(!!data);
      } catch (err) {
        console.error("Failed to check membership:", err);
      }
    };
    
    const checkFollowingStatus = async () => {
      if (!user || !clubId) return;
      
      try {
        const { data, error } = await supabase
          .from("club_followers")
          .select("id")
          .eq("club_id", clubId)
          .eq("user_id", user.id)
          .limit(1)
          .single();
        
        if (error) {
          console.error("Error checking following status:", error.message);
        }
        
        setIsFollowing(!!data);
      } catch (err) {
        console.error("Failed to check following status:", err);
      }
    };
    
    checkMembershipStatus();
    checkFollowingStatus();
  }, [user, clubId]);
  
  return (
    <Layout>
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events" className="animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            {isOrganizer && (
              <Button>
                <Calendar className="mr-2" size={18} />
                Add New Event
              </Button>
            )}
          </div>
          
          {loadingEvents ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-gray-500">Loading events...</p>
              </CardContent>
            </Card>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <Link key={event.id} to={`/events/${event.id}`}>
                  <EventCard {...event} />
                </Link>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-gray-500">No upcoming events at the moment</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="announcements" className="animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Announcements</h2>
            {isOrganizer && (
              <Button>Post Announcement</Button>
            )}
          </div>
          
          {loadingAnnouncements ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-gray-500">Loading announcements...</p>
              </CardContent>
            </Card>
          ) : announcements.length > 0 ? (
            <div className="space-y-4">
              {announcements.map(announcement => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{announcement.title}</CardTitle>
                      <Badge variant="outline">
                        {new Date(announcement.created_at).toLocaleDateString()}
                      </Badge>
                    </div>
                    <CardDescription>Posted by {announcement.created_by}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-gray-500">No announcements at the moment</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="about" className="animate-fade-in">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {club?.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{club?.description}</p>
              </CardContent>
            </Card>
            
            {club?.vision && (
              <Card>
                <CardHeader>
                  <CardTitle>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{club.vision}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default ClubDetailsPage;