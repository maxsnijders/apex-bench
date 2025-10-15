import { z } from 'zod';

// Zod schemas for validation
export const InputScheduleSchema = z.object({
  name: z.string(),
  fileName: z.string(),
});

export const JudgementCriterionSchema = z.object({
  type: z.enum(['edit_description', 'model_text_output_description']),
  description: z.string(),
});

export const BenchmarkSampleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  inputSchedules: z.array(InputScheduleSchema),
  query: z.string(),
  judgementCriteria: z.array(JudgementCriterionSchema),
  contributor: z.string().optional(),
  version: z.string().optional(),
  dateAdded: z.string().optional(),
});

// TypeScript types derived from Zod schemas
export type InputSchedule = z.infer<typeof InputScheduleSchema>;
export type JudgementCriterion = z.infer<typeof JudgementCriterionSchema>;
export type BenchmarkSample = z.infer<typeof BenchmarkSampleSchema>;

// Task type categories
export const TASK_TYPES = [
  'Edit',
  'Bulk Edit',
  'Optimization',
  'Goal Reasoning',
  'Knowledge Lookup',
  'Cross-Schedule Edit',
] as const;

export type TaskType = typeof TASK_TYPES[number];

