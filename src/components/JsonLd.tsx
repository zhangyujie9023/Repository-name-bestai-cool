"use client";

import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (script) {
      script.textContent = JSON.stringify(data);
    }
  }, [data]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}