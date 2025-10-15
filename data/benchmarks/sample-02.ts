import { BenchmarkSample } from '@/types/benchmark';

export const benchmark02: BenchmarkSample = {
  id: 'bulk-edit-001',
  title: 'Bulk Resource Constraint Update',
  description: 'Evaluate the agent\'s capacity to apply resource constraints across multiple tasks simultaneously. The schedule has 15 tasks using the same resource, and all need to be updated with new availability limits.',
  tags: ['Bulk Edit', 'Resources', 'Intermediate'],
  inputSchedules: [
    {
      name: 'Office Building Construction',
      fileName: 'office-building.xer',
    },
  ],
  query: 'All tasks using the resource "Concrete Crew" must be updated to reflect that only 2 crews are now available instead of 3. Adjust task durations or sequencing as needed to accommodate this constraint.',
  judgementCriteria: [
    {
      type: 'edit_description',
      description: 'All tasks assigned to Concrete Crew should be updated to use maximum 2 crews. Duration extensions or rescheduling should be applied where parallel work was assumed.',
    },
    {
      type: 'model_text_output_description',
      description: 'The model should identify all affected tasks, explain the resource constraint change, and describe how it resolved conflicts (e.g., extending durations or serializing work).',
    },
  ],
  contributor: 'APEX Team',
  version: '1.0',
  dateAdded: '2024-10-14',
};

