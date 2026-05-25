import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import HowItWorks from "./pages/HowItWorks";
import GolfTrips from "./pages/GolfTrips";
import FishingTrips from "./pages/FishingTrips";
import CustomTrips from "./pages/CustomTrips";
import AddOns from "./pages/AddOns";
import Testimonials from "./pages/Testimonials";
import ForOrganisers from "./pages/ForOrganisers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/packages" component={Packages} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/golf-trips" component={GolfTrips} />
      <Route path="/fishing-trips" component={FishingTrips} />
      <Route path="/custom-trips" component={CustomTrips} />
      <Route path="/add-ons" component={AddOns} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/for-organisers" component={ForOrganisers} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/franchise" component={Franchise} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
