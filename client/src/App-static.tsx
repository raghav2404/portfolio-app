import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomeStatic from "@/pages/home-static";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeStatic} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppStatic() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark bg-dark-primary text-text-primary min-h-screen">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default AppStatic;