import React from "react";

import toast from "react-hot-toast";

import { copyComponentCode } from "@/utils/copyComponentCode";
import { getComponentDocsUrl } from "@/utils/getComponentDocsUrl";

import { Button } from "../Button";

export type ComponentPanelProps = {
  component: string;
};

export const ComponentPanel: React.FC<ComponentPanelProps> = ({
  component,
}) => {
  const handleCopy = async () => {
    try {
      await copyComponentCode(component);

      toast.success("Code copied successfully");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  const clearComponentName = component.split(".")[0];
  const docsUrl = getComponentDocsUrl(component);

  return (
    <div className="p-3 border rounded-md">
      <h2 className="text-xl mb-2">{clearComponentName}</h2>

      <div className="flex gap-2">
        <Button onClick={() => handleCopy()}>Скопировать код компонента</Button>
        <Button as="a" href={docsUrl} target="_blank" rel="noopener noreferrer">
          Ссылка на доку
        </Button>
      </div>
    </div>
  );
};
