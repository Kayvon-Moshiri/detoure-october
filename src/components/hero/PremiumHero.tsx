import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function PremiumHero() {
  const navigate = useNavigate();
  const { user, userRole } = useAuth();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="font-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
                DETOURE
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-md">
                The clothing app for creators. Sell your style. Shop creator storefronts. Find your perfect brand match.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                variant="glass" 
                onClick={() => navigate(user ? "/discover" : "/signup?type=fan")}
                className="w-full sm:w-auto"
              >
                Shop Creators
              </Button>
              {(!user || userRole !== 'creator') && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => navigate("/signup?type=creator")}
                  className="w-full sm:w-auto"
                >
                  Become a Creator
                </Button>
              )}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] bg-secondary overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1000&auto=format&fit=crop" 
              alt="Fashion Editorial" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
