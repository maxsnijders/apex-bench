import { Target, Zap, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About APEX-Bench</h1>
          <p className="mt-4 text-xl text-gray-600">
            A shared standard for evaluating AI in planning and control
          </p>
        </div>

        {/* Mission Statement */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Agentic Scheduling Matters</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            The rise of large language models (LLMs) and agentic AI systems has opened new possibilities for intelligent project management. Unlike traditional scheduling software that follows rigid algorithms, agentic systems can understand natural language instructions, reason about complex constraints, and make contextual decisions about project plans.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            However, the field lacks standardized benchmarks to evaluate these capabilities. How do we measure whether an AI agent truly understands project dependencies? Can it handle resource constraints intelligently? Does it reason about safety requirements and optimization trade-offs?
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            APEX-Bench addresses this gap by providing a comprehensive, open benchmark suite specifically designed for agentic project scheduling systems. We test not just algorithmic correctness, but reasoning ability, contextual understanding, and robustness across diverse real-world scenarios.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-100">
            <div className="h-10 w-10 rounded-lg bg-primary-600 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Focused Scope</h3>
            <p className="text-sm text-gray-700">
              Tests agentic reasoning within structured planning environments using industry-standard formats (XER, MPP).
            </p>
          </div>

          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-100">
            <div className="h-10 w-10 rounded-lg bg-primary-600 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Diverse Tasks</h3>
            <p className="text-sm text-gray-700">
              Covers editing, optimization, goal reasoning, bulk operations, and cross-schedule analysis.
            </p>
          </div>

          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-100">
            <div className="h-10 w-10 rounded-lg bg-primary-600 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community-Driven</h3>
            <p className="text-sm text-gray-700">
              Open contribution model welcomes benchmarks from researchers, practitioners, and industry experts.
            </p>
          </div>
        </div>

        {/* Context & Inspiration */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope and Context</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            APEX-Bench is inspired by successful benchmark initiatives in other domains:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>GLUE and SuperGLUE</strong> established standardized natural language understanding benchmarks that drove progress in NLP research.
            </li>
            <li>
              <strong>BIG-Bench</strong> demonstrated the value of diverse, community-contributed test cases for evaluating large language models.
            </li>
            <li>
              <strong>DCMA 14-Point Assessment</strong> provides rigorous quality standards for project schedules in construction and infrastructure.
            </li>
            <li>
              <strong>PSPLIB</strong> (Project Scheduling Problem Library) offers algorithmic benchmarks, but doesn&apos;t test agentic reasoning or natural language understanding.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            APEX-Bench bridges these worlds: combining the rigor of project management best practices with modern evaluation frameworks for AI systems. We focus specifically on scenarios where agentic capabilities — understanding context, reasoning about trade-offs, and adapting to new requirements — provide value beyond traditional optimization algorithms.
          </p>
        </div>

        {/* What We Test */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Test</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Edit & Modification</h3>
              <p className="text-gray-700">
                Can the agent correctly update dependencies, durations, resources, and constraints in response to natural language instructions?
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bulk Operations</h3>
              <p className="text-gray-700">
                Does the agent identify all affected tasks when applying changes across multiple activities or resources?
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization & Critical Path</h3>
              <p className="text-gray-700">
                Can the agent analyze schedules to find opportunities for compression, leveling, or other improvements?
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Goal Reasoning</h3>
              <p className="text-gray-700">
                Does the agent understand high-level constraints (safety, procurement, weather) and translate them into schedule modifications?
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Lookup</h3>
              <p className="text-gray-700">
                Can the agent reference external information (standards, best practices) when making scheduling decisions?
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Schedule Analysis</h3>
              <p className="text-gray-700">
                Does the agent coordinate changes across multiple related project schedules or phases?
              </p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Goals</h2>
          
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Transparent Evaluation:</strong> Provide clear, reproducible test cases that anyone can use to assess agentic scheduling systems.
            </li>
            <li>
              <strong>Drive Innovation:</strong> Identify capability gaps and inspire new approaches to intelligent project management.
            </li>
            <li>
              <strong>Community Standards:</strong> Establish shared terminology and metrics for discussing agentic scheduling performance.
            </li>
            <li>
              <strong>Research Foundation:</strong> Enable academic research and industry collaboration on next-generation planning tools.
            </li>
            <li>
              <strong>Continuous Growth:</strong> Evolve the benchmark through community contributions and emerging use cases.
            </li>
          </ol>
        </div>

        {/* Future Directions */}
        <div className="bg-primary-50 rounded-lg p-8 border-2 border-primary-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Directions</h2>
          
          <p className="text-gray-700 mb-4">
            APEX-Bench is an evolving initiative. Future versions may include:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Temporal reasoning tasks requiring understanding of calendar constraints and work periods</li>
            <li>Advanced constraint satisfaction problems with competing objectives</li>
            <li>Integration with open-source scheduling engines (OptaPlanner, PSPLIB generators)</li>
            <li>Synthetic schedule generation for scalable testing</li>
            <li>Live evaluation harness for automated scoring via API</li>
            <li>Multi-modal inputs including diagrams, site photos, and technical drawings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

