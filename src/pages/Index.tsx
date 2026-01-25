import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Tv, Settings } from "lucide-react";
import CinemaSchedule from "@/components/CinemaSchedule";
import TvProgram from "@/components/TvProgram";
import SettingsPanel from "@/components/SettingsPanel";

const Index = () => {
  const [activeTab, setActiveTab] = useState("cinema");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CinéTV Guide
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsContent value="cinema" className="mt-0">
            <CinemaSchedule />
          </TabsContent>
          <TabsContent value="tv" className="mt-0">
            <TvProgram />
          </TabsContent>
          <TabsContent value="settings" className="mt-0">
            <SettingsPanel />
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border safe-area-bottom">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-3">
            <button
              onClick={() => setActiveTab("cinema")}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
                activeTab === "cinema"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Film className="w-6 h-6" />
              <span className="text-xs font-medium">Cinéma</span>
            </button>
            <button
              onClick={() => setActiveTab("tv")}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
                activeTab === "tv"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Tv className="w-6 h-6" />
              <span className="text-xs font-medium">TV</span>
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
                activeTab === "settings"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Settings className="w-6 h-6" />
              <span className="text-xs font-medium">Réglages</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
