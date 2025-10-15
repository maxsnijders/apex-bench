'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { allBenchmarks } from '@/data/benchmarks';
import { BenchmarkCard } from '@/components/BenchmarkCard';
import { BenchmarkDetail } from '@/components/BenchmarkDetail';
import { FilterPanel } from '@/components/FilterPanel';
import { AlertCircle } from 'lucide-react';

function BenchmarksContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get('id');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allBenchmarks.forEach((b) => b.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Filter benchmarks
  const filteredBenchmarks = useMemo(() => {
    return allBenchmarks.filter((benchmark) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          benchmark.title.toLowerCase().includes(query) ||
          benchmark.description.toLowerCase().includes(query) ||
          benchmark.id.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Tag filter
      if (selectedTags.length > 0) {
        const hasMatchingTag = selectedTags.some((tag) =>
          benchmark.tags.includes(tag)
        );
        if (!hasMatchingTag) return false;
      }

      return true;
    });
  }, [searchQuery, selectedTags]);

  // Get selected benchmark
  const selectedBenchmark = selectedId
    ? allBenchmarks.find((b) => b.id === selectedId)
    : filteredBenchmarks[0];

  const handleBenchmarkSelect = (id: string) => {
    router.push(`/benchmarks?id=${id}`, { scroll: false });
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Benchmarks</h1>
          <p className="mt-2 text-lg text-gray-600">
            Browse and explore APEX-Bench evaluation scenarios
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left sidebar - Benchmark list */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
              <FilterPanel
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                availableTags={allTags}
              />

              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Results
                  </h2>
                  <span className="text-sm text-gray-600">
                    {filteredBenchmarks.length} {filteredBenchmarks.length === 1 ? 'benchmark' : 'benchmarks'}
                  </span>
                </div>

                <div className="space-y-2 max-h-[calc(100vh-20rem)] overflow-y-auto">
                  {filteredBenchmarks.length === 0 ? (
                    <div className="text-center py-8">
                      <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        No benchmarks found matching your filters.
                      </p>
                    </div>
                  ) : (
                    filteredBenchmarks.map((benchmark) => (
                      <BenchmarkCard
                        key={benchmark.id}
                        benchmark={benchmark}
                        isSelected={selectedBenchmark?.id === benchmark.id}
                        onClick={() => handleBenchmarkSelect(benchmark.id)}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Benchmark detail */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              {selectedBenchmark ? (
                <BenchmarkDetail benchmark={selectedBenchmark} />
              ) : (
                <div className="text-center py-16">
                  <AlertCircle className="mx-auto h-16 w-16 text-gray-400" />
                  <p className="mt-4 text-lg text-gray-600">
                    Select a benchmark to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BenchmarksPage() {
  return (
    <Suspense fallback={
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading benchmarks...</p>
        </div>
      </div>
    }>
      <BenchmarksContent />
    </Suspense>
  );
}

