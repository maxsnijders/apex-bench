import Link from 'next/link';

export default function EvaluationPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/docs" className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block">
          ← Back to Documentation
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Evaluation Guide</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Evaluating AI systems on APEX-Bench involves both objective verification (did the schedule change correctly?) and subjective assessment (did the system demonstrate understanding?). This guide explains the evaluation process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Evaluation Criteria Types</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Edit Description</h3>
          <p className="text-gray-700 mb-4">
            Verifies that the output schedule contains the expected modifications. This is the primary objective criterion.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Check:</h4>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              <li>Task dependencies match the specified changes</li>
              <li>Duration updates are accurate</li>
              <li>Resource assignments reflect new constraints</li>
              <li>Lag times or calendar adjustments are correct</li>
              <li>Critical path updates are logical</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Model Text Output Description</h3>
          <p className="text-gray-700 mb-4">
            Assesses the quality of the AI system&apos;s explanation. This criterion evaluates reasoning transparency and communication.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Check:</h4>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              <li>System explains what changes were made</li>
              <li>Reasoning behind changes is articulated</li>
              <li>Potential impacts or trade-offs are mentioned</li>
              <li>Technical terminology is used appropriately</li>
              <li>Alternative approaches are considered (when relevant)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Evaluation Process</h2>

          <div className="space-y-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
              <h4 className="font-semibold text-gray-900 mb-2">Step 1: Prepare Input</h4>
              <p className="text-sm text-gray-700">
                Download the benchmark&apos;s input schedule file(s). Load them into your AI system along with the natural language query.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
              <h4 className="font-semibold text-gray-900 mb-2">Step 2: Run System</h4>
              <p className="text-sm text-gray-700">
                Execute your AI agent. Capture both the modified schedule file and any explanatory text output.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
              <h4 className="font-semibold text-gray-900 mb-2">Step 3: Verify Edits</h4>
              <p className="text-sm text-gray-700">
                Parse the output XER file and compare it against the &quot;edit description&quot; criteria. Use automated checks where possible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
              <h4 className="font-semibold text-gray-900 mb-2">Step 4: Review Explanation</h4>
              <p className="text-sm text-gray-700">
                Read the system&apos;s text output and assess it against the &quot;model text output description&quot; criteria. This is typically manual review.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
              <h4 className="font-semibold text-gray-900 mb-2">Step 5: Document Results</h4>
              <p className="text-sm text-gray-700">
                Record pass/fail for each criterion, noting any edge cases or interesting behaviors.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Scoring Guidelines</h2>
          <p className="text-gray-700 mb-4">
            Currently, APEX-Bench uses binary (pass/fail) scoring per criterion:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-6 w-6 rounded-full bg-green-100 text-green-700 text-center text-sm font-bold leading-6">✓</span>
              <div>
                <strong className="text-gray-900">Pass:</strong>
                <span className="text-gray-700"> The criterion is fully satisfied. All specified changes are present and correct.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block h-6 w-6 rounded-full bg-yellow-100 text-yellow-700 text-center text-sm font-bold leading-6">~</span>
              <div>
                <strong className="text-gray-900">Partial:</strong>
                <span className="text-gray-700"> Most requirements met but minor issues exist. (Use sparingly; document details.)</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-block h-6 w-6 rounded-full bg-red-100 text-red-700 text-center text-sm font-bold leading-6">✗</span>
              <div>
                <strong className="text-gray-900">Fail:</strong>
                <span className="text-gray-700"> The criterion is not met, or critical errors are present in the output.</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Issues</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Invalid XER Output</h4>
              <p className="text-sm text-red-800">
                If the system produces unparseable XER, this is an automatic fail for all edit description criteria.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Incomplete Changes</h4>
              <p className="text-sm text-red-800">
                System may make the primary change but miss cascading updates (e.g., updating a task duration but not recalculating downstream dates).
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Over-Modification</h4>
              <p className="text-sm text-red-800">
                System changes more than requested, potentially breaking unrelated parts of the schedule.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">No Explanation</h4>
              <p className="text-sm text-red-800">
                System provides a valid output file but no explanatory text, failing the &quot;model text output&quot; criterion.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reproducibility</h2>
          <p className="text-gray-700 mb-4">
            To ensure reproducible evaluations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Document your AI system&apos;s version, model, and configuration</li>
            <li>Save both input and output files for each benchmark</li>
            <li>Record timestamps and any environmental factors (temperature settings, prompts used, etc.)</li>
            <li>Run each benchmark multiple times if your system is non-deterministic</li>
            <li>Share evaluation code/scripts when publishing results</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reporting Results</h2>
          <p className="text-gray-700 mb-4">
            When sharing APEX-Bench results:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Report per-benchmark and aggregate pass rates</li>
            <li>Break down results by task category (Edit, Optimization, etc.)</li>
            <li>Describe your system&apos;s architecture briefly</li>
            <li>Note any benchmarks that were particularly challenging or easy</li>
            <li>Suggest new benchmark ideas based on failure modes you observed</li>
          </ul>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Future: Automated Evaluation</h3>
            <p className="text-gray-700 text-sm">
              We are working on automated evaluation harnesses that can parse XER files and verify edit criteria programmatically. Community contributions to evaluation tooling are welcome!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Next Steps</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link href="/benchmarks" className="text-primary-600 hover:text-primary-700">Start evaluating on benchmarks</Link>
            </li>
            <li>
              <Link href="/docs/contributing" className="text-primary-600 hover:text-primary-700">Contribute new evaluation criteria</Link>
            </li>
            <li>
              <a href="https://github.com/apex-bench/apex-bench" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                Share your results on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

