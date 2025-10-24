import Link from 'next/link';
import { GitBranch, FileText, MessageSquare, Code } from 'lucide-react';

export default function ContributePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Contribute to APEX-Bench</h1>
          <p className="mt-4 text-xl text-gray-600">
            Help build the standard for agentic scheduling evaluation
          </p>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join the Community
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            APEX-Bench is community-driven and welcomes contributions from researchers, practitioners, and AI developers.
          </p>
          <a
            href="https://github.com/apex-bench/apex-bench"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <GitBranch className="h-5 w-5" />
            View on GitHub
          </a>
        </div>

        {/* Contribution Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ways to Contribute</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-primary-400 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Submit Benchmarks
              </h3>
              <p className="text-gray-700 mb-4">
                Contribute new test cases covering different scenarios, domains, or difficulty levels. Real-world examples are especially valuable.
              </p>
              <Link
                href="/docs/contributing"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Learn how →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-primary-400 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Build Tools
              </h3>
              <p className="text-gray-700 mb-4">
                Create parsers, validators, or evaluation automation tools to make APEX-Bench easier to use.
              </p>
              <Link
                href="/docs/contributing"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Learn how →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-primary-400 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Improve Docs
              </h3>
              <p className="text-gray-700 mb-4">
                Fix typos, clarify explanations, add examples, or translate documentation to help others.
              </p>
              <Link
                href="/docs/contributing"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Learn how →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-primary-400 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Share Results
              </h3>
              <p className="text-gray-700 mb-4">
                Publish evaluation results from your AI system, including insights about performance and failure modes.
              </p>
              <a
                href="https://github.com/apex-bench/apex-bench/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Start a discussion →
              </a>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start: Submit a Benchmark</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fork the Repository</h3>
                <p className="text-gray-700 text-sm">
                  Visit the{' '}
                  <a
                    href="https://github.com/apex-bench/apex-bench"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    GitHub repository
                  </a>{' '}
                  and click the &quot;Fork&quot; button.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Add Your Files</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Create two files:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Schedule file in <code className="bg-white px-2 py-1 rounded text-xs">public/schedules/</code></li>
                  <li>Benchmark definition in <code className="bg-white px-2 py-1 rounded text-xs">data/benchmarks/</code></li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Submit a Pull Request</h3>
                <p className="text-gray-700 text-sm">
                  Open a PR with a clear description of your contribution and why it&apos;s valuable.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-300">
            <Link
              href="/docs/contributing"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Read the full contributing guide →
            </Link>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contribution Guidelines</h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mt-0 mb-3">Quality Standards</h3>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>Schedule files must be valid XER format</li>
                <li>Queries should be clear and realistic</li>
                <li>Judgement criteria must be specific and verifiable</li>
                <li>Tag difficulty honestly (Basic, Intermediate, Advanced)</li>
                <li>Provide sufficient context for evaluators</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mt-0 mb-3">Licensing</h3>
              <p className="text-gray-700 mb-2">By contributing, you agree that:</p>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>Code contributions are licensed under <strong>Apache 2.0</strong></li>
                <li>Data/documentation contributions are licensed under <strong>CC BY 4.0</strong></li>
                <li>You have the right to contribute the materials</li>
                <li>You will be credited as a contributor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources & Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://github.com/apex-bench/apex-bench"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <GitBranch className="h-5 w-5 text-primary-600" />
              <div>
                <div className="font-semibold text-gray-900">GitHub Repository</div>
                <div className="text-sm text-gray-600">Browse code and submit PRs</div>
              </div>
            </a>

            <a
              href="https://github.com/apex-bench/apex-bench/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <MessageSquare className="h-5 w-5 text-primary-600" />
              <div>
                <div className="font-semibold text-gray-900">Discussions</div>
                <div className="text-sm text-gray-600">Ask questions and share ideas</div>
              </div>
            </a>

            <Link
              href="/docs/contributing"
              className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <FileText className="h-5 w-5 text-primary-600" />
              <div>
                <div className="font-semibold text-gray-900">Contributing Guide</div>
                <div className="text-sm text-gray-600">Detailed submission instructions</div>
              </div>
            </Link>

            <Link
              href="/benchmarks"
              className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <Code className="h-5 w-5 text-primary-600" />
              <div>
                <div className="font-semibold text-gray-900">Existing Benchmarks</div>
                <div className="text-sm text-gray-600">Review examples for reference</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

