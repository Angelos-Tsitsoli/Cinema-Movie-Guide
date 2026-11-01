import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Movie {
  id: number;
  title: string;
  image: string | null;
  duration: string | null;
  genre: string | null;
  director: string | null;
  description: string | null;
  cast_list: string | null;
  language: string | null;
  rating: string | null;
  link: string | null;
}

const CinemaSchedule = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [zoomMovie, setZoomMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      const { data, error } = await supabase
        .from("movies")
        .select(
          "id, title, image, duration, genre, director, description, cast_list, language, rating, link"
        )
        .eq("is_playing", true)
        .order("title");

      if (error) setError(error.message);
      else setMovies(data ?? []);
      setLoading(false);
    };

    loadMovies();
  }, []);

  if (loading) {
    return <p className="py-4 text-muted-foreground">Loading movies...</p>;
  }
  if (error) {
    return <p className="py-4 text-destructive">Could not load movies: {error}</p>;
  }

  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Movies</h2>
      </div>

      <div className="space-y-4">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            className="overflow-hidden bg-card/50 backdrop-blur border-border/50 cursor-pointer transition-colors hover:bg-card/70"
          >
            <CardContent className="p-0">
              <div className="flex gap-4">
                {/* Poster: tap to enlarge */}
                {/* Poster: tap to enlarge */}
              <div
                className="relative w-28 flex-shrink-0 self-stretch min-h-[9rem] bg-muted"
                onClick={(e) => {
                  e.stopPropagation();
                  if (movie.image) setZoomMovie(movie);
                }}
              >
                {movie.image && (
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
              </div>

                {/* Info */}
                <div className="flex-1 flex flex-col gap-1 py-3 pr-4">
                  <h3 className="font-semibold text-foreground line-clamp-1">
                    {movie.title}
                  </h3>

                  {movie.director && (
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      Σκηνοθεσία: {movie.director}
                    </p>
                  )}

                  {movie.duration && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {movie.duration}
                    </span>
                  )}

                  {movie.genre && (
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {movie.genre}
                      </Badge>
                    </div>
                  )}

                  {movie.description && (
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
                      {movie.description}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enlarged poster */}
      <Dialog open={!!zoomMovie} onOpenChange={(open) => !open && setZoomMovie(null)}>
        <DialogContent className="max-w-sm border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{zoomMovie?.title}</DialogTitle>
          {zoomMovie?.image && (
            <img
              src={zoomMovie.image}
              alt={zoomMovie.title}
              className="w-full max-h-[85vh] rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Movie details */}
      <Dialog
        open={!!selectedMovie}
        onOpenChange={(open) => !open && setSelectedMovie(null)}
      >
        <DialogContent className="max-h-[85vh] max-w-md overflow-y-auto">
          {selectedMovie && (
            <>
              <DialogHeader>
                <DialogTitle className="pr-6 text-xl">{selectedMovie.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-3 text-sm">
                {selectedMovie.image && (
                  <img
                    src={selectedMovie.image}
                    alt={selectedMovie.title}
                    className="mx-auto max-h-64 rounded-md object-contain"
                  />
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {selectedMovie.genre && (
                    <Badge variant="outline">{selectedMovie.genre}</Badge>
                  )}
                  {selectedMovie.duration && (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {selectedMovie.duration}
                    </span>
                  )}
                </div>

                {selectedMovie.description && (
                  <p className="text-foreground">{selectedMovie.description}</p>
                )}

                {selectedMovie.director && (
                  <p>
                    <span className="font-medium">Σκηνοθεσία: </span>
                    {selectedMovie.director}
                  </p>
                )}
                {selectedMovie.cast_list && (
                  <p>
                    <span className="font-medium">Πρωταγωνιστούν: </span>
                    {selectedMovie.cast_list}
                  </p>
                )}
                {selectedMovie.language && (
                  <p>
                    <span className="font-medium">Γλώσσα: </span>
                    {selectedMovie.language}
                  </p>
                )}
                {selectedMovie.rating && (
                  <p>
                    <span className="font-medium">Καταλληλότητα: </span>
                    {selectedMovie.rating}
                  </p>
                )}

                {selectedMovie.link && (
                  <a
                    href={selectedMovie.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-primary underline underline-offset-4"
                  >
                    Κλείσε Εισητήριο
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CinemaSchedule;