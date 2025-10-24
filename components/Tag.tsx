interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
  size?: 'sm' | 'md';
}

export function Tag({ children, variant = 'default', size = 'sm' }: TagProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    accent: 'bg-accent-100 text-accent-700 hover:bg-accent-200',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}

