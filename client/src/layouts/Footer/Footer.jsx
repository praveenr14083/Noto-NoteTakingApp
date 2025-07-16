import React from "react";

export default function Footer() {
  return (
    <div className="text-center text-xs text-muted-foreground py-1 bg-card border-t-1 border-border">
      © {new Date().getFullYear()} Praveen.dev. All rights reserved.
    </div>
  );
}
