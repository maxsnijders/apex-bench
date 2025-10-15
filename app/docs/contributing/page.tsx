import Link from 'next/link';

export default function ContributingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/docs" className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block">
          ← Back to Documentation
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contributing to APEX-Bench</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            APEX-Bench thrives on community contributions. Whether you&apos;re a researcher, practitioner, or AI developer, your input helps make the benchmark more comprehensive and valuable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You Can Contribute</h2>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">New Benchmark Samples</h3>
              <p className="text-sm text-gray-700">
                Submit test cases covering new scenarios, domains, or difficulty levels. Especially valuable are benchmarks from real projects (anonymized appropriately).
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation Criteria</h3>
              <p className="text-sm text-gray-700">
                Propose new types of judgement criteria or refine existing ones to better assess agentic capabilities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation Improvements</h3>
              <p className="text-sm text-gray-700">
                Fix typos, clarify explanations, add examples, or translate documentation to other languages.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tooling & Scripts</h3>
              <p className="text-sm text-gray-700">
                Contribute parsers, validators, or evaluation automation tools to make working with APEX-Bench easier.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Results & Analysis</h3>
              <p className="text-sm text-gray-700">
                Share evaluation results from your AI system, including insights about failure modes or unexpected behaviors.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Contribute</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 1: Fork the Repository</h3>
          <p className="text-gray-700 mb-4">
            Visit the <a href="https://github.com/apex-bench/apex-bench" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">APEX-Bench GitHub repository</a> and fork it to your account.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 2: Create Your Contribution</h3>
          
          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`# Clone your fork
git clone https://github.com/YOUR_USERNAME/apex-bench.git
cd apex-bench

# Create a new branch
git checkout -b add-benchmark-xyz

# Add your files (see structure below)
# ...

# Commit your changes
git add .
git commit -m "Add benchmark for resource leveling scenario"

# Push to your fork
git push origin add-benchmark-xyz`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 3: Submit a Pull Request</h3>
          <p className="text-gray-700 mb-4">
            Open a pull request from your branch to the main APEX-Bench repository. Include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>A clear description of your contribution</li>
            <li>Why this benchmark/change is valuable</li>
            <li>Any relevant context (domain expertise, real-world inspiration, etc.)</li>
            <li>Testing notes (if applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benchmark Submission Format</h2>
          <p className="text-gray-700 mb-4">
            To submit a new benchmark, create two files:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Schedule File</h3>
          <p className="text-gray-700 mb-4">
            Place your XER file in <code className="bg-gray-100 px-2 py-1 rounded text-sm">public/schedules/</code>:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`public/schedules/my-project-schedule.xer`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Benchmark Definition</h3>
          <p className="text-gray-700 mb-4">
            Create a TypeScript file in <code className="bg-gray-100 px-2 py-1 rounded text-sm">data/benchmarks/</code>:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`// data/benchmarks/my-sample.ts
import { BenchmarkSample } from '@/types/benchmark';

export const myBenchmark: BenchmarkSample = {
  id: 'category-###',  // e.g., 'optimization-005'
  title: 'Descriptive Title',
  description: 'Detailed explanation of what this benchmark tests...',
  tags: ['Category', 'Difficulty', 'Domain'],
  inputSchedules: [
    {
      name: 'Project Name',
      fileName: 'my-project-schedule.xer',
    },
  ],
  query: 'The natural language instruction to give the AI...',
  judgementCriteria: [
    {
      type: 'edit_description',
      description: 'What should be present in the modified schedule...',
    },
    {
      type: 'model_text_output_description',
      description: 'What the explanation should cover...',
    },
  ],
  contributor: 'Your Name or Organization',
  version: '1.0',
  dateAdded: '2024-10-14',
};`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Update Index</h3>
          <p className="text-gray-700 mb-4">
            Add your benchmark to <code className="bg-gray-100 px-2 py-1 rounded text-sm">data/benchmarks/index.ts</code>:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-sm text-gray-100">
{`import { myBenchmark } from './my-sample';

export const allBenchmarks: BenchmarkSample[] = [
  // ... existing benchmarks
  myBenchmark,
];`}
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contribution Guidelines</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Standards</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li><strong>Valid XER:</strong> Schedule files must parse correctly in standard tools</li>
              <li><strong>Clear Query:</strong> Instructions should be unambiguous and realistic</li>
              <li><strong>Specific Criteria:</strong> Judgement criteria should be verifiable, not vague</li>
              <li><strong>Appropriate Difficulty:</strong> Tag difficulty honestly (Basic, Intermediate, Advanced)</li>
              <li><strong>Domain Context:</strong> Provide enough background for evaluators to understand the scenario</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Licensing</h3>
            <p className="text-sm text-gray-700 mb-3">
              By contributing to APEX-Bench, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>Your code contributions are licensed under Apache 2.0</li>
              <li>Your data/documentation contributions are licensed under CC BY 4.0</li>
              <li>You have the right to contribute the materials (no proprietary/confidential data without permission)</li>
              <li>You will be credited as a contributor</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Review Process</h2>
          <p className="text-gray-700 mb-4">
            After you submit a pull request:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
            <li>Maintainers will review your contribution within 1-2 weeks</li>
            <li>They may suggest changes or ask clarifying questions</li>
            <li>Once approved, your PR will be merged</li>
            <li>Your benchmark becomes part of the official APEX-Bench suite</li>
            <li>You&apos;ll be added to the contributors list</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Questions?</h2>
          <p className="text-gray-700 mb-4">
            If you&apos;re unsure about anything:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Open a <a href="https://github.com/apex-bench/apex-bench/discussions" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">GitHub Discussion</a> to propose ideas
            </li>
            <li>
              File an <a href="https://github.com/apex-bench/apex-bench/issues" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">issue</a> to report problems or suggest improvements
            </li>
            <li>Review existing benchmarks as examples</li>
            <li>Check the <Link href="/docs" className="text-primary-600 hover:text-primary-700">documentation</Link> for technical details</li>
          </ul>

          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-700">
              Every contribution makes APEX-Bench better. We appreciate your help in advancing the field of agentic project scheduling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

