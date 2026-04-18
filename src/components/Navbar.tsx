import { Link, useLocation } from "react-router-dom";
import { Bird, Home, Utensils, Brain, Heart, MessageSquare } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Feeding", path: "/feeding", icon: Utensils },
  { name: "Health", path: "/health", icon: Heart },
  { name: "Development", path: "/development", icon: Brain },
  { name: "AI Help", path: "/ai", icon: MessageSquare },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-stone-100 rounded-full group-hover:bg-stone-200 transition-colors">
              <Bird className="w-6 h-6 text-stone-700" />
            </div>
            <span className="font-serif text-xl font-semibold text-stone-800 tracking-tight">
              Little Nest
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-stone-900",
                  location.pathname === item.path
                    ? "text-stone-900 underline underline-offset-8 decoration-2 decoration-stone-400"
                    : "text-stone-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Nav - simplified for now */}
          <div className="md:hidden flex items-center gap-4">
             <Link to="/ai" className="p-2 text-stone-500 hover:text-stone-900">
                <MessageSquare className="w-6 h-6" />
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
