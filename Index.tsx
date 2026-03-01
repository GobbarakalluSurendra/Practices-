import { useState, useRef, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { MoodSelector } from "@/components/MoodSelector";
import { SongRecommendations } from "@/components/SongRecommendations";
import { MoodHistory } from "@/components/MoodHistory";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const moodSelectorRef = useRef<HTMLDivElement>(null);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const handleGetStarted = () => {
    moodSelectorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero onGetStarted={handleGetStarted} />
        
        <div ref={moodSelectorRef}>
          <MoodSelector onMoodSelect={handleMoodSelect} />
        </div>
        
        <SongRecommendations mood={selectedMood} />
        
        <MoodHistory />
      </div>
    </div>
  );
};

export default Index;
