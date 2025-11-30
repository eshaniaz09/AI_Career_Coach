"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const CoverLetterPreview = ({ content }) => {
    const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000); // reset after 2 sec
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };
  return (
    <div className="py-4 space-y-3">

            {/* Copy Button */}
      <Button onClick={handleCopy} variant="outline" className="flex items-center gap-2">
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? "Copied!" : "Copy Cover Letter"}
      </Button>

      {/* Markdown preview cover letter */}
      <MDEditor value={content} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;