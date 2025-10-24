import { BenchmarkSample } from '@/types/benchmark';
import { Tag } from './Tag';
import { DownloadButton } from './DownloadButton';
import { FileText, Calendar, User, Target } from 'lucide-react';

interface BenchmarkDetailProps {
  benchmark: BenchmarkSample;
}

export function BenchmarkDetail({ benchmark }: BenchmarkDetailProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{benchmark.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {benchmark.tags.map((tag) => (
            <Tag key={tag} variant="primary" size="md">
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        {benchmark.contributor && (
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{benchmark.contributor}</span>
          </div>
        )}
        {benchmark.version && (
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>v{benchmark.version}</span>
          </div>
        )}
        {benchmark.dateAdded && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(benchmark.dateAdded).toLocaleDateString()}</span>
          </div>
        )}
      </div>

      <div className="prose max-w-none">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
        <p className="text-gray-700">{benchmark.description}</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-600" />
          Query
        </h2>
        <p className="text-gray-700 italic">&ldquo;{benchmark.query}&rdquo;</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Input Schedules</h2>
        <div className="space-y-2">
          {benchmark.inputSchedules.map((schedule, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div>
                <p className="font-medium text-gray-900">{schedule.name}</p>
                <p className="text-sm text-gray-600">{schedule.fileName}</p>
              </div>
              <DownloadButton fileName={schedule.fileName} scheduleName={schedule.name} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Judgement Criteria</h2>
        <div className="space-y-3">
          {benchmark.judgementCriteria.map((criterion, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  {criterion.type.replace(/_/g, ' ')}
                </span>
              </div>
              <p className="text-sm text-gray-700">{criterion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

