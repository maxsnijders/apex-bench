import { BenchmarkSample } from '@/types/benchmark';

export const benchmark03: BenchmarkSample = {
  id: 'optimization-001',
  title: 'Critical Path Optimization',
  description: 'Challenge the agent to identify and optimize the critical path to reduce project duration. Multiple tasks have float, and the agent must determine which sequence modifications will yield the best time savings.',
  tags: ['Optimization', 'Critical Path', 'Advanced'],
  inputSchedules: [
    {
      name: 'Multi-Phase Development',
      fileName: 'multi-phase-dev.xer',
    },
  ],
  query: 'The client needs the project completed 2 weeks earlier than currently scheduled. Identify opportunities to compress the schedule by modifying the critical path. Suggest specific changes to task durations or dependencies that achieve this goal with minimal risk.',
  judgementCriteria: [
    {
      type: 'edit_description',
      description: 'The schedule should show a 2-week reduction in overall duration through critical path compression. Changes should focus on critical or near-critical activities.',
    },
    {
      type: 'model_text_output_description',
      description: 'The model should identify the current critical path, propose specific compression techniques (fast-tracking, crashing, or dependency adjustments), explain trade-offs, and justify why the suggested changes minimize project risk.',
    },
  ],
  contributor: 'APEX Team',
  version: '1.0',
  dateAdded: '2024-10-14',
};

