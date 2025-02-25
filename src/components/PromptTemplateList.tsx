import React, { useState, useEffect } from "react";
import type { IPromptTemplate } from "@types";

interface PromptTemplateListProps {
  onSelect: (promptTemplate: IPromptTemplate) => void;
}

const PromptTemplateList: React.FC<PromptTemplateListProps> = ({ onSelect }) => {
  const [promptTemplates, setPromptTemplates] = useState<IPromptTemplate[]>([]);

  useEffect(() => {
    const fetchPromptTemplates = async () => {
      try {
        const response = await fetch("/api/prompts/index.json");
        const data = await response.json();
        setPromptTemplates(data);
      } catch (error) {
        console.error("Error fetching prompt templates:", error);
      }
    };

    fetchPromptTemplates();
  }, []);

  return (
    <div>
      <h2>Prompt Template List</h2>
      <ul>
        {promptTemplates.map((promptTemplate) => (
          <li key={promptTemplate.id}>
            <button onClick={() => onSelect(promptTemplate)}>
              {promptTemplate.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptTemplateList;