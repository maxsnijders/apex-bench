# APEX-Bench

**A shared standard for evaluating AI in planning and control**

[![License: Apache 2.0](https://img.shields.io/badge/Code%20License-Apache%202.0-blue.svg)](LICENSE)
[![License: CC BY 4.0](https://img.shields.io/badge/Data%20License-CC%20BY%204.0-lightgrey.svg)](LICENSE-DATA)

APEX-Bench (Agentic Planning EXam) is an open benchmark suite for evaluating AI systems on project scheduling tasks. Unlike traditional scheduling benchmarks that focus on algorithmic optimization, APEX-Bench tests agentic capabilities: natural language understanding, contextual reasoning, and adaptive problem-solving.

🌐 **Website**: [apex-bench.com](https://apex-bench.com) (or your deployed URL)  
📦 **Repository**: [github.com/apex-bench/apex-bench](https://github.com/apex-bench/apex-bench)

---

## Features

- ✅ **Real-World Scenarios** - Benchmarks based on actual project scheduling challenges
- 🤖 **Agentic Testing** - Evaluates reasoning, not just algorithmic correctness
- 📂 **Industry Standard** - Uses Primavera XER format compatible with major PM tools
- 🌍 **Open & Free** - Apache 2.0 for code, CC BY 4.0 for data
- 🤝 **Community-Driven** - Accept contributions via GitHub PRs

---

## Quick Start

### Browse Benchmarks

Visit the [website](https://apex-bench.com) to explore available benchmarks, or browse the `data/benchmarks/` directory.

### Download Data

All schedule files are in `public/schedules/` and can be downloaded directly from the website or cloned from this repository.

### Evaluate Your AI

1. Load a benchmark's input schedule (`.xer` file)
2. Provide the natural language query to your AI system
3. Compare the output against the judgement criteria
4. Record your results

See the [Evaluation Guide](https://apex-bench.com/docs/evaluation) for detailed instructions.

---

## Local Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/apex-bench/apex-bench.git
cd apex-bench

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

---

## Project Structure

```
apex-bench/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Landing page
│   ├── about/             # About page
│   ├── benchmarks/        # Benchmarks browser
│   ├── docs/              # Documentation pages
│   └── contribute/        # Contribution guide
├── components/            # Reusable React components
├── data/
│   └── benchmarks/        # Benchmark definitions (.ts files)
├── public/
│   ├── schedules/         # XER schedule files
│   └── logo.svg           # APEX-Bench logo
├── types/                 # TypeScript type definitions
├── LICENSE                # Apache 2.0 (code)
├── LICENSE-DATA           # CC BY 4.0 (data/docs)
└── README.md             # This file
```

---

## Contributing

We welcome contributions! You can:

- **Submit new benchmarks** - Add test cases for new scenarios
- **Improve documentation** - Fix typos, clarify explanations
- **Build tools** - Create parsers, validators, evaluation scripts
- **Share results** - Publish evaluation outcomes from your AI system

### How to Contribute

1. Fork this repository
2. Create a new branch (`git checkout -b add-benchmark-xyz`)
3. Add your files following the structure in `data/benchmarks/`
4. Commit your changes (`git commit -m "Add benchmark for resource leveling"`)
5. Push to your fork (`git push origin add-benchmark-xyz`)
6. Open a Pull Request

See the [Contributing Guide](https://apex-bench.com/docs/contributing) for detailed instructions.

---

## Benchmark Categories

APEX-Bench includes test cases across multiple categories:

- **Edit** - Modify individual tasks, dependencies, or constraints
- **Bulk Edit** - Apply changes across multiple tasks simultaneously
- **Optimization** - Improve schedule metrics while maintaining constraints
- **Goal Reasoning** - Translate high-level requirements into schedule changes
- **Knowledge Lookup** - Reference external standards when scheduling
- **Cross-Schedule Edit** - Coordinate changes across multiple schedules

---

## Citation

If you use APEX-Bench in your research or project, please cite:

```bibtex
@misc{apexbench2024,
  title={APEX-Bench: A Shared Standard for Evaluating AI in Planning and Control},
  author={{APEX-Bench Contributors}},
  year={2024},
  howpublished={\url{https://github.com/apex-bench/apex-bench}},
}
```

---

## License

This project uses dual licensing:

- **Code**: [Apache License 2.0](LICENSE) - All software, scripts, and website code
- **Data & Documentation**: [CC BY 4.0](LICENSE-DATA) - Benchmark data, schedules, and documentation

By contributing, you agree to license your contributions under the same terms.

---

## Resources

- 📖 [Documentation](https://apex-bench.com/docs)
- 💬 [GitHub Discussions](https://github.com/apex-bench/apex-bench/discussions)
- 🐛 [Issue Tracker](https://github.com/apex-bench/apex-bench/issues)
- 🌐 [Official Website](https://apex-bench.com)

---

## Acknowledgments

APEX-Bench is inspired by:

- **GLUE/SuperGLUE** - NLP benchmark standards
- **BIG-Bench** - Community-contributed evaluation framework
- **DCMA 14-Point Assessment** - Project schedule quality standards
- **PSPLIB** - Classical project scheduling benchmarks

Special thanks to all contributors and the project scheduling community.

---

Made with ❤️ by the APEX-Bench community
