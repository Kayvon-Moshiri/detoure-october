

import { Button } from "@/components/ui/button";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { RoleToggle } from "@/components/ui/role-toggle";

export function Header() {
  const { user, userRole } = useAuth();

  const getProfilePath = () => {
    if (!user) return "/signup";
    return userRole === 'creator' ? "/dashboard" : "/settings";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-xl md:text-2xl font-light tracking-tight">DETOURE</span>
        </Link>

        {/* Center Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/shop" className="text-sm uppercase tracking-wide hover:opacity-60 transition-opacity">
            Shop
          </Link>
          <Link to="/shop" className="text-sm uppercase tracking-wide hover:opacity-60 transition-opacity">
            Creators
          </Link>
          <RoleToggle />
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-4 w-4" />
          </Button>
          
          {user ? (
            <>
              <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                <Link to={getProfilePath()}>
                  <User className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Account</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

