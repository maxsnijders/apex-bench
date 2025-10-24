import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              About APEX-Bench
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              A shared standard for evaluating AI in planning and control, focusing on agentic project scheduling systems.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-gray-600 hover:text-primary-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/benchmarks" className="text-sm text-gray-600 hover:text-primary-600">
                  Browse Benchmarks
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-sm text-gray-600 hover:text-primary-600">
                  Contribute
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/apex-bench/apex-bench" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              License
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">
                Code: <a href="/LICENSE" className="text-primary-600 hover:text-primary-700">Apache 2.0</a>
              </li>
              <li className="text-sm text-gray-600">
                Data & Docs: <a href="/LICENSE-DATA" className="text-primary-600 hover:text-primary-700">CC BY 4.0</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} APEX-Bench Contributors. Open source and freely available.
          </p>
        </div>
      </div>
    </footer>
  );
}

