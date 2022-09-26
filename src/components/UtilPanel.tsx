import React from "react";

import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";

import { Button } from "@/stuff/components/Button/code";

import { Util } from "@/types/Util";

export type UtilPanelProps = {
  util: Util;
};

export const UtilPanel: React.FC<UtilPanelProps> = ({ util }) => {
  const handleCopy = async () => {
    toast.promise(navigator.clipboard.writeText(util.code), {
      loading: "Копируем код...",
      success: "Код успешно скопирован",
      error: (error) =>
        error instanceof Error ? error.message : "Ой, ошибочка вышла",
    });
  };

  return (
    <div className="p-3 border rounded-md">
      <ReactMarkdown className="unreset overflow-x-auto">
        {util.docs}
      </ReactMarkdown>
      <div className="flex flex-col md:flex-row items-start gap-2">
        <Button
          className="border border-blue-500 rounded-md py-1 px-3 bg-blue-500/20 text-blue-500 text-lg transition-colors duration-200 hover:bg-transparent"
          onClick={handleCopy}
        >
          Copy code
        </Button>
      </div>
    </div>
  );
};
