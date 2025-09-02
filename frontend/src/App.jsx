// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MainLayout } from "./components/layout/main-layout";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import PatientSearch from "./pages/PatientSearch";
// import DiagnosisEntry from "./pages/DiagnosisEntry";
// import Analytics from "./pages/Analytics";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<MainLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="patients" element={<PatientSearch />} />
//             <Route path="diagnosis" element={<DiagnosisEntry />} />
//             <Route path="analytics" element={<Analytics />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "./components/layout/Main-layout";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import PatientSearch from "./Pages/PatientSearch";
import DiagnosisEntry from "./Pages/DiagnosisEntry";
import Analytics from "./Pages/Analytics";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected layout with nested routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="patients" element={<PatientSearch />} />
          <Route path="diagnosis" element={<DiagnosisEntry />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        {/* Catch-all for 404 */}
        
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
