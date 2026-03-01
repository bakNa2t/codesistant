"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
export default function DemoPage() {
  const [loading, setLoading] = useState(false);
  const [loadingBg, setLoadingBg] = useState(false);

  const handleBlocking = async () => {
    setLoading(true);
    await fetch("/api/demo/blocking", { method: "POST" });
    setLoading(false);
  };

  const handleBackground = async () => {
    setLoadingBg(true);
    await fetch("/api/demo/background", { method: "POST" });
    setLoadingBg(false);
  };

  // #1 Client error - error thrown in the browser
  const handleClientError = () => {
    throw new Error("Client error: something went wrong in the browser!");
  };

  // #2 API error - triggers server-side error
  const handleApiError = async () => {
    await fetch("/api/demo/error", { method: "POST" });
  };

  // #3 Inngest error - triggers error in background jobs
  const handleInngestError = async () => {
    await fetch("/api/demo/inngest-error", { method: "POST" });
  };

  return (
    <div className="p-8 space-x-4">
      <Button onClick={handleBlocking} disabled={loading}>
        {loading ? "Loading..." : "Blocking"}
      </Button>

      <Button onClick={handleBackground} disabled={loadingBg}>
        {loadingBg ? "Loading..." : "Background"}
      </Button>

      {/* Errors - client, api, inngest */}
      <Button variant="destructive" onClick={handleClientError}>
        Client error
      </Button>

      <Button variant="destructive" onClick={handleApiError}>
        API error
      </Button>

      <Button variant="destructive" onClick={handleInngestError}>
        Inngest error
      </Button>
    </div>
  );
}
