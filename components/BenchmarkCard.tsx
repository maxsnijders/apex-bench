import { BenchmarkSample } from '@/types/benchmark';
import { Tag } from './Tag';

interface BenchmarkCardProps {
  benchmark: BenchmarkSample;
  isSelected?: boolean;
  onClick?: () => void;
}

export function BenchmarkCard({ benchmark, isSelected, onClick }: BenchmarkCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
        isSelected
          ? 'border-primary-600 bg-primary-50'
          : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50'
      }`}
    >
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{benchmark.title}</h3>
      <div className="flex flex-wrap gap-1 mb-2">
        {benchmark.tags.map((tag) => (
          <Tag key={tag} size="sm">
            {tag}
          </Tag>
        ))}
      </div>
      <p className="text-xs text-gray-600 line-clamp-2">{benchmark.description}</p>
    </button>
  );
}

