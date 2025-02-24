/**
 * This interface is generated from the JSON schema.
 */
export interface IPromptTemplate {
  id: string; // UUID format
  name: string;
  description: string;
  systemPrompt: string;
  template: string;
  variables: string[];
  created_at: string; // ISO datetime format
  updated_at: string; // ISO datetime format
}
