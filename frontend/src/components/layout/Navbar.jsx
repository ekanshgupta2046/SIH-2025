import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Stethoscope,
  BarChart3,
  Menu,
  X,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { title: "Home", url: "/", icon: LayoutDashboard },
  { title: "Patient Search", url: "/patients", icon: Users },
  { title: "Diagnosis Entry", url: "/diagnosis", icon: Stethoscope },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;
  const getNavClasses = (path) =>
    isActive(path)
      ? "text-primary border-b-2 border-primary font-medium" 
      : "text-muted-foreground hover:text-primary transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mr-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Healthcare EMR</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Government of India</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 flex-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm transition-colors",
                getNavClasses(item.url)
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Dr. Rajesh Kumar</span>
          <Button variant="outline" size="sm">
            Logout
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                  isActive(item.url)
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </NavLink>
            ))}
            <div className="pt-2 border-t mt-4">
              <p className="text-sm text-muted-foreground px-3 py-1">Dr. Rajesh Kumar</p>
              <Button variant="outline" size="sm" className="mx-3 mt-2">
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
