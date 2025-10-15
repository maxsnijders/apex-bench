import { BenchmarkSample } from '@/types/benchmark';

export const benchmark04: BenchmarkSample = {
  id: 'goal-reasoning-001',
  title: 'Safety Constraint Compliance',
  description: 'Test the agent\'s ability to reason about high-level project goals and constraints. Given a safety requirement, the agent must identify all affected tasks and make appropriate adjustments without explicit instructions on which tasks to modify.',
  tags: ['Goal Reasoning', 'Safety', 'Advanced'],
  inputSchedules: [
    {
      name: 'Industrial Facility',
      fileName: 'industrial-facility.xer',
    },
  ],
  query: 'A new safety regulation requires that no electrical work can occur while concrete curing is in progress within the same building zone. Review the schedule and ensure compliance with this constraint.',
  judgementCriteria: [
    {
      type: 'edit_description',
      description: 'All electrical tasks should be sequenced to avoid overlap with concrete curing activities in shared zones. This may require adding finish-to-start dependencies or adjusting task timing.',
    },
    {
      type: 'model_text_output_description',
      description: 'The model should identify which tasks involve electrical work and concrete curing, determine spatial/temporal conflicts, explain the reasoning behind the safety constraint, and describe the specific schedule changes made to ensure compliance.',
    },
  ],
  contributor: 'APEX Team',
  version: '1.0',
  dateAdded: '2024-10-14',
};

