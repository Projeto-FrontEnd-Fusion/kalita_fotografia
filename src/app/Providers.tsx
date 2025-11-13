// app/providers.tsx
'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/app/shared/ui/Header";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
    </QueryClientProvider>
  );
}