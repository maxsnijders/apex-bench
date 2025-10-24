import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/docs" className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block">
          ← Back to Documentation
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Getting Started</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is APEX-Bench?</h2>
          <p className="text-gray-700 mb-4">
            APEX-Bench (Agentic Planning EXam) is an open benchmark suite for evaluating AI systems on project scheduling tasks. Unlike traditional scheduling benchmarks that focus on algorithmic optimization, APEX-Bench tests agentic capabilities: natural language understanding, contextual reasoning, and adaptive problem-solving.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Start</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Browse Benchmarks</h3>
          <p className="text-gray-700 mb-4">
            Visit the <Link href="/benchmarks" className="text-primary-600 hover:text-primary-700">Benchmarks page</Link> to explore available test cases. Each benchmark includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Input schedule files (.xer format)</li>
            <li>A natural language query or instruction</li>
            <li>Judgement criteria for evaluating responses</li>
            <li>Metadata (category, difficulty, contributor)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Download Data</h3>
          <p className="text-gray-700 mb-4">
            Download schedule files directly from the benchmark detail pages. All data is provided in standard Primavera XER format, compatible with major project management tools.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Test Your System</h3>
          <p className="text-gray-700 mb-4">
            Provide the input schedule and query to your AI system. Evaluate the output against the judgement criteria. The benchmark includes two main evaluation types:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Edit Description:</strong> Check if the modified schedule contains the expected changes</li>
            <li><strong>Model Text Output:</strong> Assess whether the system&apos;s explanation demonstrates proper understanding</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Report Results</h3>
          <p className="text-gray-700 mb-4">
            Currently, APEX-Bench uses manual evaluation against the provided criteria. We welcome submissions describing your results through GitHub issues or discussions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benchmark Categories</h2>
          <p className="text-gray-700 mb-4">
            APEX-Bench includes several task categories:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Edit</h4>
              <p className="text-sm text-gray-700">Modify individual tasks, dependencies, or constraints based on instructions.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Bulk Edit</h4>
              <p className="text-sm text-gray-700">Apply changes across multiple tasks or resources simultaneously.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
              <p className="text-sm text-gray-700">Improve schedule metrics (duration, cost, resource utilization) while maintaining constraints.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Goal Reasoning</h4>
              <p className="text-sm text-gray-700">Understand high-level requirements and translate them into schedule modifications.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Knowledge Lookup</h4>
              <p className="text-sm text-gray-700">Reference external standards, best practices, or domain knowledge when scheduling.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Cross-Schedule Edit</h4>
              <p className="text-sm text-gray-700">Coordinate changes across multiple related schedules or project phases.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Next Steps</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Learn about the <Link href="/docs/data-format" className="text-primary-600 hover:text-primary-700">XER data format</Link>
            </li>
            <li>
              Review the <Link href="/docs/evaluation" className="text-primary-600 hover:text-primary-700">evaluation guidelines</Link>
            </li>
            <li>
              Consider <Link href="/docs/contributing" className="text-primary-600 hover:text-primary-700">contributing</Link> new benchmarks
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

