import { BenchmarkSample } from '@/types/benchmark';

export const benchmark01: BenchmarkSample = {
  id: 'edit-001',
  title: 'Simple Task Dependency Edit',
  description: 'Test the agent\'s ability to modify task dependencies when given a constraint change. The schedule contains a simple sequence of activities, and the agent must adjust the finish-to-start relationship between two tasks.',
  tags: ['Edit', 'Dependencies', 'Basic'],
  inputSchedules: [
    {
      name: 'Simple Construction Project',
      fileName: 'simple-construction.xer',
    },
  ],
  query: 'Task "Foundation Pouring" must now start at least 5 days after "Site Preparation" is complete, instead of immediately after. Please adjust the schedule accordingly.',
  judgementCriteria: [
    {
      type: 'edit_description',
      description: 'The predecessor relationship between Site Preparation and Foundation Pouring should have a 5-day lag added.',
    },
    {
      type: 'model_text_output_description',
      description: 'The model should explain that it added a 5-day lag to the finish-to-start relationship and may mention the impact on the project completion date.',
    },
  ],
  contributor: 'APEX Team',
  version: '1.0',
  dateAdded: '2024-10-14',
};

