import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const Shop = () => {
  // Mock data - clean product grid
  const products = [
    {
      id: "1",
      title: "Vintage Denim Jacket",
      creator: "Sarah Smith",
      price: 145,
      imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    },
    {
      id: "2",
      title: "Classic White Sneakers",
      creator: "Mark Johnson",
      price: 120,
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop",
    },
    {
      id: "3",
      title: "Leather Messenger Bag",
      creator: "Sarah Smith",
      price: 220,
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
    },
    {
      id: "4",
      title: "Wool Overcoat",
      creator: "Mark Johnson",
      price: 340,
      imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
    },
    {
      id: "5",
      title: "Cotton T-Shirt Set",
      creator: "Sarah Smith",
      price: 75,
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    },
    {
      id: "6",
      title: "Premium Sunglasses",
      creator: "Mark Johnson",
      price: 180,
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
    },
  ];

  const creators = [
    {
      username: "sarahsmith",
      displayName: "Sarah Smith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e04f?w=150&h=150&fit=crop&crop=face",
    },
    {
      username: "markjohnson",
      displayName: "Mark Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const { user } = useAuth();

  // If user is logged in, show with sidebar
  if (user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <SidebarProvider>
          <div className="flex w-full min-h-screen">
            <div className="hidden md:block">
              <AppSidebar />
            </div>
            
            <div className="flex-1 flex flex-col min-w-0">
              <header className="h-16 border-b flex items-center px-4 bg-background sticky top-0 z-10">
                <div>
                  <h1 className="text-lg font-light tracking-tight">Shop</h1>
                </div>
              </header>
              
              <div className="flex-1 overflow-auto p-4 md:p-8">
                <div className="w-full max-w-7xl mx-auto">
                  {/* Filters */}
                  <div className="mb-8 flex items-center gap-3">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search items..." 
                        className="pl-10 h-11"
                      />
                    </div>
                    <Button variant="outline" size="icon" className="h-11 w-11">
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => (
                      <Link 
                        key={product.id} 
                        to={`/item/${product.id}`}
                        className="group"
                      >
                        <div className="aspect-[3/4] bg-secondary overflow-hidden mb-3">
                          <img 
                            src={product.imageUrl} 
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">{product.creator}</p>
                          <h3 className="text-sm font-light">{product.title}</h3>
                          <p className="text-sm font-medium">${product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
        
        <MobileNav currentPath="/shop" />
      </div>
    );
  }

  // If user is not logged in, show original layout without sidebar
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pb-20 md:pb-6">
        {/* Hero Section */}
        <div className="border-b py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">Shop Creators</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Discover unique pieces from your favorite creators
            </p>
          </div>
        </div>

        {/* Featured Creators */}
        <section className="py-12 md:py-16 border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h2 className="text-2xl font-light tracking-tight mb-8">Featured Creators</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {creators.map((creator) => (
                <Link 
                  key={creator.username}
                  to={`/creator/${creator.username}`}
                  className="group text-center"
                >
                  <div className="aspect-square bg-secondary rounded-full overflow-hidden mb-3">
                    <img 
                      src={creator.avatar} 
                      alt={creator.displayName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm font-light">{creator.displayName}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light tracking-tight">All Items</h2>
              <Button variant="ghost" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/item/${product.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-secondary overflow-hidden mb-3">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{product.creator}</p>
                    <h3 className="text-sm font-light">{product.title}</h3>
                    <p className="text-sm font-medium">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <MobileNav currentPath="/shop" />
    </div>
  );
};

export default Shop;
