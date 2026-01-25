import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Globe, Bell, RefreshCw } from "lucide-react";
import { useState } from "react";

const SettingsPanel = () => {
  const [cinemaUrl, setCinemaUrl] = useState("");
  const [tvUrl, setTvUrl] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <div className="space-y-4 py-4">
      <h2 className="text-xl font-semibold">Réglages</h2>

      {/* Source URLs */}
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Sources de données
          </CardTitle>
          <CardDescription>
            Configurez les URLs des sites à scraper
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cinema-url">URL du cinéma</Label>
            <Input
              id="cinema-url"
              placeholder="https://cinema-example.com/programme"
              value={cinemaUrl}
              onChange={(e) => setCinemaUrl(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tv-url">URL du programme TV</Label>
            <Input
              id="tv-url"
              placeholder="https://programme-tv.com"
              value={tvUrl}
              onChange={(e) => setTvUrl(e.target.value)}
            />
          </div>
          <Button className="w-full" disabled>
            <RefreshCw className="w-4 h-4 mr-2" />
            Synchroniser maintenant
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Le scraping nécessite l'activation du backend
          </p>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="bg-card/50 backdrop-blur border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            Préférences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Alertes pour les nouveaux programmes
              </p>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Actualisation auto</Label>
              <p className="text-sm text-muted-foreground">
                Mise à jour toutes les heures
              </p>
            </div>
            <Switch
              checked={autoRefresh}
              onCheckedChange={setAutoRefresh}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPanel;
