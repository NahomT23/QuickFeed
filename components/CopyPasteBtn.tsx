"use client";
import { Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyPasteBtn = ({ text }: { text: string }) => {
  const copyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} COPIED`);
    });
  };

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => copyToClipBoard(text)}
              className="text-slate-50 absolute right-0 top-0 p-2"
              aria-label="Copy to clipboard"
            >
              <Clipboard />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CopyPasteBtn;
