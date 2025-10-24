import Link from 'next/link';
import { BookOpen, FileText, Target, GitPullRequest } from 'lucide-react';

export default function DocsPage() {
  const docSections = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      href: '/docs/getting-started',
      description: 'Learn how to use APEX-Bench to evaluate your AI systems',
    },
    {
      title: 'Data Format',
      icon: FileText,
      href: '/docs/data-format',
      description: 'Understanding XER files and benchmark schema',
    },
    {
      title: 'Evaluation Guide',
      icon: Target,
      href: '/docs/evaluation',
      description: 'How to evaluate AI systems on APEX benchmarks',
    },
    {
      title: 'Contributing',
      icon: GitPullRequest,
      href: '/docs/contributing',
      description: 'Submit new benchmarks and improvements',
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Documentation</h1>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about APEX-Bench
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {docSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group relative rounded-lg border-2 border-gray-200 p-6 hover:border-primary-400 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{section.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Need help?</h2>
          <p className="text-gray-700 mb-4">
            If you can&apos;t find what you&apos;re looking for in the documentation, feel free to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Open an issue on{' '}
              <a
                href="https://github.com/apex-bench/apex-bench"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                GitHub
              </a>
            </li>
            <li>Check the examples in the benchmark repository</li>
            <li>Review existing benchmark submissions for reference</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

