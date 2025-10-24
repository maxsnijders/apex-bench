import Link from 'next/link';

export default function DataFormatPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/docs" className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block">
          ← Back to Documentation
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Format</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">XER File Format</h2>
          <p className="text-gray-700 mb-4">
            APEX-Bench uses Primavera XER (eXchange ERwin) format for schedule data. XER is an industry-standard text-based format used by Oracle Primavera P6 and compatible with many project management tools.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> XER files are plain text and can be opened in any text editor. The format uses tab-separated values with metadata headers.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Key XER Tables</h3>
          <p className="text-gray-700 mb-4">
            An XER file contains multiple tables. The most important for APEX-Bench are:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">TASK Table</h4>
              <p className="text-sm text-gray-700 mb-2">Contains individual activities/tasks with:</p>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                <li>task_id: unique identifier</li>
                <li>task_code: human-readable code</li>
                <li>task_name: task description</li>
                <li>target_drtn_hr_cnt: planned duration in hours</li>
                <li>status_code: current status (not started, in progress, complete)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">TASKPRED Table</h4>
              <p className="text-sm text-gray-700 mb-2">Defines dependencies between tasks:</p>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                <li>task_id: successor task</li>
                <li>pred_task_id: predecessor task</li>
                <li>pred_type: relationship type (PR_FS = finish-to-start, PR_SS = start-to-start, etc.)</li>
                <li>lag_hr_cnt: lag time in hours (can be negative for lead time)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">RSRC Table</h4>
              <p className="text-sm text-gray-700 mb-2">Lists available resources:</p>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                <li>rsrc_id: resource identifier</li>
                <li>rsrc_name: resource name</li>
                <li>max_qty_per_hr: maximum available quantity</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">TASKRSRC Table</h4>
              <p className="text-sm text-gray-700 mb-2">Assigns resources to tasks:</p>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                <li>task_id: the task</li>
                <li>rsrc_id: the resource</li>
                <li>target_qty_per_hr: quantity assigned</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benchmark Schema</h2>
          <p className="text-gray-700 mb-4">
            Each APEX-Bench sample is defined in TypeScript with the following structure:
          </p>

          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`{
  id: string,              // Unique identifier (e.g., "edit-001")
  title: string,           // Short descriptive title
  description: string,     // Detailed explanation of the test
  tags: string[],          // Categories (e.g., ["Edit", "Basic"])
  inputSchedules: [        // One or more input files
    {
      name: string,        // Human-readable name
      fileName: string     // Path to .xer file
    }
  ],
  query: string,           // Natural language instruction
  judgementCriteria: [     // Evaluation criteria
    {
      type: "edit_description" | "model_text_output_description",
      description: string  // What to check
    }
  ],
  contributor: string,     // Optional: who created this
  version: string,         // Optional: version number
  dateAdded: string        // Optional: ISO date string
}`}
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Working with XER Files</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Parsing</h3>
          <p className="text-gray-700 mb-4">
            Several libraries can parse XER files:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Python:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">xerparser</code> or <code className="bg-gray-100 px-2 py-1 rounded text-sm">pyprimavera</code>
            </li>
            <li>
              <strong>JavaScript/TypeScript:</strong> Custom parsers or libraries like <code className="bg-gray-100 px-2 py-1 rounded text-sm">primavera-xer-parser</code>
            </li>
            <li>
              <strong>Manual:</strong> XER is tab-separated text and can be parsed with standard CSV tools
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Validation</h3>
          <p className="text-gray-700 mb-4">
            When evaluating AI-generated schedule modifications, check:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>File is valid XER format (parseable)</li>
            <li>No circular dependencies in TASKPRED</li>
            <li>Resource assignments don&apos;t exceed availability</li>
            <li>Required changes specified in judgement criteria are present</li>
            <li>No unintended side effects on unrelated tasks</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Example</h2>
          <p className="text-gray-700 mb-4">
            Here&apos;s a minimal XER snippet showing a simple task sequence:
          </p>

          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`%T	TASK
%F	task_id	task_code	task_name	target_drtn_hr_cnt
%R	1	A1000	Site Preparation	80.00
%R	2	A1010	Foundation Pouring	120.00

%T	TASKPRED
%F	task_pred_id	task_id	pred_task_id	pred_type	lag_hr_cnt
%R	1	2	1	PR_FS	0.00`}
            </pre>
          </div>

          <p className="text-gray-700 mb-4">
            This defines two tasks with a finish-to-start dependency and no lag.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Further Resources</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <a href="https://www.oracle.com/industries/construction-engineering/primavera-p6/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                Oracle Primavera P6 Documentation
              </a>
            </li>
            <li>
              <Link href="/docs/evaluation" className="text-primary-600 hover:text-primary-700">
                Evaluation Guidelines
              </Link>
            </li>
            <li>
              <Link href="/benchmarks" className="text-primary-600 hover:text-primary-700">
                Browse Example Schedules
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

