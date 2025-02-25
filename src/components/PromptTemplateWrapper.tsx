import React, { useState } from "react";
import PromptTemplateList from "./PromptTemplateList";
import type { IPromptTemplate } from "@types";

interface PromptTemplateWrapperProps {
  onSelect: (promptTemplate: IPromptTemplate) => void;
}

const PromptTemplateWrapper: React.FC<PromptTemplateWrapperProps> = ({ onSelect }) => {
  return (
    <PromptTemplateList onSelect={onSelect} />
  );
};

export default PromptTemplateWrapper;