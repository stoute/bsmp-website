import React from "react";
import type { IPromptTemplate } from "@/types";

interface PromptTemplateEditorProps {
  promptTemplate: IPromptTemplate;
}

const PromptTemplateEditor: React.FC<PromptTemplateEditorProps> = ({ promptTemplate }) => {
  return (
    <div>
      <h2>Prompt Template Editor</h2>
      <p>ID: {promptTemplate.id}</p>
      <p>Name: {promptTemplate.name}</p>
      <p>Description: {promptTemplate.description}</p>
      <p>System Prompt: {promptTemplate.systemPrompt}</p>
      <p>Template: {promptTemplate.template}</p>
      <p>Variables: {promptTemplate.variables.join(", ")}</p>
    </div>
  );
};

export default PromptTemplateEditor;