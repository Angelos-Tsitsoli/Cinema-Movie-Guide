import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star } from "lucide-react";

// Mock data - will be replaced by scraped data
const mockMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    rating: 8.8,
    duration: "166 min",
    genre: "Sci-Fi",
    showtimes: ["14:30", "17:45", "21:00"],
    cinema: "Cinéma Rex",
  },
  {
    id: 2,
    title: "Oppenheimer",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
    rating: 8.5,
    duration: "180 min",
    genre: "Drame",
    showtimes: ["15:00", "19:30"],
    cinema: "Cinéma Palace",
  },
  {
    id: 3,
    title: "Poor Things",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&h=450&fit=crop",
    rating: 8.0,
    duration: "141 min",
    genre: "Comédie",
    showtimes: ["16:15", "20:45"],
    cinema: "Cinéma Rex",
  },
];

const CinemaSchedule = () => {
  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">À l'affiche</h2>
        <span className="text-sm text-muted-foreground">Aujourd'hui</span>
      </div>

      <div className="space-y-4">
        {mockMovies.map((movie) => (
          <Card key={movie.id} className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
            <CardContent className="p-0">
              <div className="flex gap-4">
                {/* Poster */}
                <div className="relative w-24 h-36 flex-shrink-0">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-secondary/80 text-foreground text-xs">
                      <Star className="w-3 h-3 mr-1 fill-accent text-accent" />
                      {movie.rating}
                    </Badge>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 py-3 pr-4">
                  <h3 className="font-semibold text-foreground line-clamp-1">{movie.title}</h3>
                  
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {movie.duration}
                    </span>
                    <Badge variant="outline" className="text-xs">{movie.genre}</Badge>
                  </div>

                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {movie.cinema}
                  </div>

                  {/* Showtimes */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {movie.showtimes.map((time) => (
                      <Badge
                        key={time}
                        className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                      >
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CinemaSchedule;
