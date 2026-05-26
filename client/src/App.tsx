import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import GolfPackages from "./pages/packages/GolfPackages";
import FishingPackages from "./pages/packages/FishingPackages";
import SailingPackages from "./pages/packages/SailingPackages";
import DivingPackages from "./pages/packages/DivingPackages";
import BeerWhiskeyPackages from "./pages/packages/BeerWhiskeyPackages";
import PackageDetailPage from "./pages/packages/PackageDetailPage";
import CSVImport from "./pages/CSVImport";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/packages/golf"} component={GolfPackages} />
      <Route path={"/packages/fishing"} component={FishingPackages} />
      <Route path={"/packages/sailing"} component={SailingPackages} />
      <Route path={"/packages/diving"} component={DivingPackages} />
      <Route path={"/packages/beer-whiskey"} component={BeerWhiskeyPackages} />
      <Route path={"/:category/:id"} component={PackageDetailPage} />
      <Route path={"/admin/csv-import"} component={CSVImport} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
