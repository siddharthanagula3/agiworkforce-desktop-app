/**
 * CompetitorComparison Component
 * Highlights AGI Workforce's 10-20x cost advantage over competitors
 * Data from COMPETITIVE_AUDIT_2026.md
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TrendingDown, Check, X } from 'lucide-react';

interface Competitor {
  name: string;
  category: string;
  monthlyPrice: string;
  annualPrice?: string;
  features: {
    automation: boolean;
    localLLM: boolean;
    multiAgent: boolean;
    desktopControl: boolean;
  };
  notes?: string;
}

const competitors: Competitor[] = [
  {
    name: 'AGI Workforce',
    category: 'Desktop Automation',
    monthlyPrice: '$19.99',
    annualPrice: '$239.88',
    features: {
      automation: true,
      localLLM: true,
      multiAgent: true,
      desktopControl: true,
    },
    notes: 'All-in-one platform',
  },
  {
    name: 'Cursor',
    category: 'Code Assistant',
    monthlyPrice: '$20',
    annualPrice: '$240',
    features: {
      automation: false,
      localLLM: false,
      multiAgent: true,
      desktopControl: false,
    },
    notes: 'Code-only',
  },
  {
    name: 'UiPath',
    category: 'Enterprise RPA',
    monthlyPrice: '$1,650+',
    annualPrice: '$19,800+',
    features: {
      automation: true,
      localLLM: false,
      multiAgent: false,
      desktopControl: true,
    },
    notes: 'Enterprise-focused',
  },
  {
    name: 'Automation Anywhere',
    category: 'Enterprise RPA',
    monthlyPrice: '$1,000+',
    annualPrice: '$12,000+',
    features: {
      automation: true,
      localLLM: false,
      multiAgent: false,
      desktopControl: true,
    },
    notes: 'Enterprise-focused',
  },
  {
    name: 'Power Automate',
    category: 'Workflow',
    monthlyPrice: '$15-40',
    annualPrice: '$180-480',
    features: {
      automation: true,
      localLLM: false,
      multiAgent: false,
      desktopControl: false,
    },
    notes: 'Limited desktop control',
  },
];

const costSavings = [
  {
    competitor: 'UiPath',
    theirCost: '$1,650/mo',
    ourCost: '$19.99/mo',
    savings: '98.8%',
    multiplier: '82x cheaper',
  },
  {
    competitor: 'Automation Anywhere',
    theirCost: '$1,000/mo',
    ourCost: '$19.99/mo',
    savings: '98.0%',
    multiplier: '50x cheaper',
  },
  {
    competitor: 'Cursor (comparable)',
    theirCost: '$20/mo',
    ourCost: '$19.99/mo',
    savings: '0.05%',
    multiplier: 'Same price, more features',
  },
];

export function CompetitorComparison() {
  return (
    <div className="space-y-6">
      {/* Cost Savings Highlight */}
      <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-green-600" />
                Massive Cost Savings
              </CardTitle>
              <CardDescription>
                Save up to 98% compared to enterprise automation platforms
              </CardDescription>
            </div>
            <Badge variant="default" className="bg-green-600 text-white text-lg px-4 py-2">
              Up to 82x cheaper
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {costSavings.map((comparison) => (
              <div
                key={comparison.competitor}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  vs {comparison.competitor}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Their cost:</span>
                    <span className="font-semibold line-through text-red-600">
                      {comparison.theirCost}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Our cost:</span>
                    <span className="font-semibold text-green-600">{comparison.ourCost}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">You save:</span>
                      <span className="text-sm font-bold text-green-600">{comparison.savings}</span>
                    </div>
                    <div className="mt-1 text-center">
                      <Badge
                        variant="outline"
                        className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                      >
                        {comparison.multiplier}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feature Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Feature Comparison</CardTitle>
          <CardDescription>See how AGI Workforce compares to leading competitors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold">Platform</th>
                  <th className="text-left py-3 px-4 font-semibold">Category</th>
                  <th className="text-right py-3 px-4 font-semibold">Monthly Cost</th>
                  <th className="text-center py-3 px-4 font-semibold">Desktop Automation</th>
                  <th className="text-center py-3 px-4 font-semibold">Local LLM</th>
                  <th className="text-center py-3 px-4 font-semibold">Multi-Agent</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor) => (
                  <tr
                    key={competitor.name}
                    className={`border-b border-gray-200 dark:border-gray-700 ${
                      competitor.name === 'AGI Workforce'
                        ? 'bg-primary/5 font-semibold'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {competitor.name}
                        {competitor.name === 'AGI Workforce' && (
                          <Badge variant="default" className="text-xs">
                            You
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{competitor.category}</td>
                    <td className="py-3 px-4 text-right">{competitor.monthlyPrice}</td>
                    <td className="py-3 px-4 text-center">
                      {competitor.features.desktopControl ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {competitor.features.localLLM ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {competitor.features.multiAgent ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <div className="text-xs text-muted-foreground">
              <p className="font-semibold mb-1">Notes:</p>
              <ul className="space-y-1">
                <li>
                  • <span className="font-medium">Local LLM:</span> Run models like Llama 3 locally
                  with zero API costs
                </li>
                <li>
                  • <span className="font-medium">Multi-Agent:</span> Run multiple AI agents in
                  parallel
                </li>
                <li>
                  • <span className="font-medium">Desktop Automation:</span> Full UI automation with
                  semantic selectors
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
