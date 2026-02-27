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

  return (
    <div className="p-8 space-x-4">
      <Button onClick={handleBlocking} disabled={loading}>
        {loading ? "Loading..." : "Blocking"}
      </Button>

      <Button onClick={handleBackground} disabled={loadingBg}>
        {loadingBg ? "Loading..." : "Background"}
      </Button>
    </div>
  );
}
