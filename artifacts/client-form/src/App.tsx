import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import FormPage from "@/pages/FormPage";
import SettingsPage from "@/pages/SettingsPage";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-primary mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground">The portal page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={FormPage} />
          <Route path="/settings" component={SettingsPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
