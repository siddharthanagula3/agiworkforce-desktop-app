/**
 * UniqueDifferentiators Component
 * Highlights AGI Workforce's unique competitive advantages
 * Based on COMPETITIVE_AUDIT_2026.md SWOT analysis
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Cpu, Boxes, Zap, Shield, DollarSign, Code, Globe, Database, Terminal } from 'lucide-react';

const differentiators = [
  {
    icon: Cpu,
    title: 'Local LLM Support',
    description: 'Run Ollama models locally with zero API costs',
    badge: 'UNIQUE',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    details: [
      'Zero cost for local inference',
      'No data sent to cloud providers',
      'Unlimited usage without rate limits',
      'Full privacy and security',
    ],
  },
  {
    icon: Boxes,
    title: 'Multi-Domain Automation',
    description: 'Desktop + Browser + API + Database + Code in one platform',
    badge: 'ONLY ONE',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    details: [
      'Desktop UI automation (Windows UIA)',
      'Browser automation (semantic selectors)',
      'REST API orchestration',
      'Database operations (SQL/NoSQL)',
      'Code execution & terminal access',
    ],
  },
  {
    icon: Zap,
    title: 'Parallel Agent Orchestration',
    description: 'Run 4-8 agents simultaneously like Cursor 2.0',
    badge: 'ADVANCED',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    details: [
      '4 parallel agents (Pro tier)',
      '8 parallel agents (Team tier)',
      'Resource locking prevents conflicts',
      'Real-time progress tracking',
    ],
  },
  {
    icon: DollarSign,
    title: '10-82x Cheaper',
    description: 'Enterprise automation at developer pricing',
    badge: 'VALUE',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    details: [
      '$19.99/mo vs $1,650+ for UiPath',
      '$99/mo Team vs $12,000+ enterprise RPA',
      'No per-bot licensing fees',
      'Transparent usage-based pricing',
    ],
  },
];

const technicalAdvantages = [
  {
    icon: Shield,
    title: 'Self-Healing Automation',
    description:
      'Semantic selectors with 7-strategy fallback survive UI changes without maintenance',
  },
  {
    icon: Code,
    title: 'Developer-First Design',
    description: 'Built on Tauri 2.0 + React 18 + Rust for performance and security',
  },
  {
    icon: Globe,
    title: 'Multi-Provider LLM Routing',
    description: 'Intelligently route to GPT-4, Claude, Gemini, or local Ollama models',
  },
  {
    icon: Database,
    title: 'Knowledge Base & Learning',
    description: 'Agents learn from experiences and build shared organizational knowledge',
  },
  {
    icon: Terminal,
    title: 'Full System Access',
    description: 'Terminal, filesystem, registry access for complex automation workflows',
  },
];

export function UniqueDifferentiators() {
  return (
    <div className="space-y-6">
      {/* Main Differentiators */}
      <div>
        <h2 className="text-2xl font-bold mb-2">What Makes Us Different</h2>
        <p className="text-muted-foreground mb-6">
          AGI Workforce is the <span className="font-semibold text-primary">only platform</span>{' '}
          combining desktop automation, local LLM support, and multi-agent orchestration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="relative overflow-hidden border-2 hover:shadow-lg transition-all"
              >
                <div className={`absolute top-0 right-0 ${item.bgColor} px-3 py-1`}>
                  <span className={`text-xs font-bold ${item.color}`}>{item.badge}</span>
                </div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${item.bgColor}`}>
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="mt-1">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.details.map((detail, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className={`mt-1 ${item.color}`}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Technical Advantages */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Advantages</CardTitle>
          <CardDescription>
            Built with modern technologies for performance, security, and scalability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalAdvantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={advantage.title}
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{advantage.title}</h4>
                    <p className="text-xs text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Positioning */}
      <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
        <CardHeader>
          <CardTitle>Our Competitive Position</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$28.31B → $211B</div>
              <div className="text-sm text-muted-foreground">
                Market size growth by 2034 (25% CAGR)
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10-82x</div>
              <div className="text-sm text-muted-foreground">
                Cheaper than enterprise RPA platforms
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$37B TAM</div>
              <div className="text-sm text-muted-foreground">Total addressable market by 2026</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">Strategic Positioning</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span>
                  <span className="font-semibold text-foreground">Desktop Automation Niche:</span>{' '}
                  Focus on Windows-first local automation vs. cloud-only competitors
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span>
                  <span className="font-semibold text-foreground">Developer-Friendly Pricing:</span>{' '}
                  $20-99/mo vs. $1,000+ enterprise licensing
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span>
                  <span className="font-semibold text-foreground">Privacy-First:</span> Local LLM
                  support means no data leaves your machine
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
