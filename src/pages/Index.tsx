import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CinemaSchedule from "@/components/CinemaSchedule";


const Index = () => {
  const [activeTab, setActiveTab] = useState("cinema");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cinema Movies Guide
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsContent value="cinema" className="mt-0">
            <CinemaSchedule />
          </TabsContent>
          
        </Tabs>
      </main>

      
    </div>
  );
};

export default Index;
