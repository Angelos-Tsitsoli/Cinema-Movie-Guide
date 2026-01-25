import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Radio } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Mock data - will be replaced by scraped data
const channels = ["TF1", "France 2", "France 3", "Canal+", "M6", "Arte"];

const mockPrograms = [
  {
    id: 1,
    title: "Journal de 20h",
    channel: "TF1",
    time: "20:00",
    duration: "35 min",
    category: "Info",
    isLive: true,
  },
  {
    id: 2,
    title: "The Voice",
    channel: "TF1",
    time: "21:10",
    duration: "150 min",
    category: "Divertissement",
    isLive: false,
  },
  {
    id: 3,
    title: "Envoyé Spécial",
    channel: "France 2",
    time: "21:00",
    duration: "120 min",
    category: "Magazine",
    isLive: false,
  },
  {
    id: 4,
    title: "Film: Intouchables",
    channel: "France 3",
    time: "21:05",
    duration: "112 min",
    category: "Film",
    isLive: false,
  },
  {
    id: 5,
    title: "Match Ligue 1",
    channel: "Canal+",
    time: "21:00",
    duration: "120 min",
    category: "Sport",
    isLive: true,
  },
  {
    id: 6,
    title: "Capital",
    channel: "M6",
    time: "21:10",
    duration: "130 min",
    category: "Magazine",
    isLive: false,
  },
];

const TvProgram = () => {
  return (
    <div className="space-y-4 py-4">
      {/* Channel Filter */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2 pb-2">
          <Badge
            variant="default"
            className="cursor-pointer bg-primary text-primary-foreground"
          >
            Tous
          </Badge>
          {channels.map((channel) => (
            <Badge
              key={channel}
              variant="outline"
              className="cursor-pointer hover:bg-primary/10"
            >
              {channel}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Programme TV</h2>
        <span className="text-sm text-muted-foreground">Ce soir</span>
      </div>

      <div className="space-y-3">
        {mockPrograms.map((program) => (
          <Card key={program.id} className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {program.channel}
                    </Badge>
                    {program.isLive && (
                      <Badge className="bg-live text-destructive-foreground text-xs animate-pulse">
                        <Radio className="w-3 h-3 mr-1" />
                        EN DIRECT
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-foreground mt-2 line-clamp-1">
                    {program.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {program.time}
                    </span>
                    <span>{program.duration}</span>
                  </div>
                </div>

                <Badge variant="outline" className="text-xs flex-shrink-0">
                  {program.category}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TvProgram;
