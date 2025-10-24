import { Download } from 'lucide-react';

interface DownloadButtonProps {
  fileName: string;
  scheduleName: string;
}

export function DownloadButton({ fileName, scheduleName }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/schedules/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100 transition-colors"
      title={`Download ${scheduleName}`}
    >
      <Download className="h-4 w-4" />
      Download
    </button>
  );
}

