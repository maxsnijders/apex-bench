import Link from 'next/link';
import { ArrowRight, Download, GitBranch, BookOpen } from 'lucide-react';
import { allBenchmarks } from '@/data/benchmarks';

export default function HomePage() {
  const uniqueTags = Array.from(new Set(allBenchmarks.flatMap((b) => b.tags)));
  const taskTypes = uniqueTags.filter((tag) =>
    ['Edit', 'Bulk Edit', 'Optimization', 'Goal Reasoning', 'Knowledge Lookup', 'Cross-Schedule Edit'].includes(tag)
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block">APEX-Bench</span>
              <span className="block text-primary-600 mt-2">Agentic Planning Exam</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              A shared standard for evaluating AI in planning and control
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              APEX-Bench defines open benchmarks for agentic project scheduling systems — testing reasoning, accuracy, and robustness across real-world project data.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/benchmarks"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
              >
                View Benchmarks
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                <BookOpen className="h-5 w-5" />
                Documentation
              </Link>
              <Link
                href="/contribute"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                <GitBranch className="h-5 w-5" />
                Contribute
              </Link>
            </div>

            {/* Visual Network Illustration */}
            <div className="mt-16 flex justify-center">
              <div className="relative h-48 w-full max-w-2xl">
                <svg viewBox="0 0 600 200" className="w-full h-full">
                  {/* Network nodes and connections */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Connection lines */}
                  <line x1="100" y1="100" x2="200" y2="60" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="100" y1="100" x2="200" y2="140" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="200" y1="60" x2="300" y2="100" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="200" y1="140" x2="300" y2="100" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="300" y1="100" x2="400" y2="60" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="300" y1="100" x2="400" y2="140" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="400" y1="60" x2="500" y2="100" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="400" y1="140" x2="500" y2="100" stroke="url(#lineGradient)" strokeWidth="2" />
                  
                  {/* Nodes */}
                  <circle cx="100" cy="100" r="12" fill="#3B82F6" className="animate-pulse" />
                  <circle cx="200" cy="60" r="10" fill="#60A5FA" />
                  <circle cx="200" cy="140" r="10" fill="#60A5FA" />
                  <circle cx="300" cy="100" r="14" fill="#3B82F6" />
                  <circle cx="400" cy="60" r="10" fill="#60A5FA" />
                  <circle cx="400" cy="140" r="10" fill="#60A5FA" />
                  <circle cx="500" cy="100" r="12" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">{allBenchmarks.length}</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Benchmark Samples</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">{taskTypes.length}</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Task Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">Open</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Source & Free</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why APEX-Bench?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The first benchmark focused on agentic reasoning within structured planning environments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Real-World Data</h3>
            <p className="mt-4 text-gray-600">
              Benchmarks based on actual project scheduling scenarios from construction, infrastructure, and industrial domains.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
              <GitBranch className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Community-Driven</h3>
            <p className="mt-4 text-gray-600">
              Open contribution model via GitHub. Submit new benchmarks, test cases, and improvements through pull requests.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
              <Download className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Freely Available</h3>
            <p className="mt-4 text-gray-600">
              All datasets and documentation are licensed under CC BY 4.0. Code is Apache 2.0. No registration required.
            </p>
          </div>
        </div>
      </div>

      {/* Task Types Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Benchmark Categories</h2>
            <p className="mt-4 text-lg text-gray-600">
              Testing different aspects of agentic scheduling capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {taskTypes.map((type) => (
              <div
                key={type}
                className="bg-white rounded-lg border-2 border-gray-200 p-4 text-center hover:border-primary-400 transition-colors"
              >
                <div className="text-sm font-semibold text-gray-900">{type}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/benchmarks"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              Explore all benchmarks
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary-600 px-6 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
            Download the benchmarks, evaluate your AI system, or contribute new test cases to help advance the field.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/benchmarks"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-50 transition-colors"
            >
              Browse Benchmarks
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-700 px-6 py-3 text-base font-semibold text-white hover:bg-primary-800 transition-colors"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

