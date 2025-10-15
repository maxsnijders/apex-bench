import Link from 'next/link';
import { Network } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Network className="h-8 w-8 text-primary-600" strokeWidth={2} />
              <span className="text-xl font-bold text-gray-900">APEX-Bench</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                href="/benchmarks" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Benchmarks
              </Link>
              <Link 
                href="/docs" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Documentation
              </Link>
              <Link 
                href="/contribute" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contribute
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <a
              href="https://github.com/apex-bench/apex-bench"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

