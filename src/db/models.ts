import { v4 as uuid } from 'uuid';

import type { PromptTemplateTable } from '../types';

export const PromptTemplateTable = {
  name: 'PromptTemplateTable',
  columns: {
    id: { type: 'text', primaryKey: true },
    name: { type: 'text' },
    description: { type: 'text' },
    systemPrompt: { type: 'text' },
    template: { type: 'text' },
    variables: { type: 'json' },
    created_at: { type: 'text' },
    updated_at: { type: 'text' },
  },
} as const;

// TODO: Fix InferModel import when possible
// export type PromptTemplateModel = astrodb.InferModel<typeof PromptTemplateTable>;
export type PromptTemplateModel = any;