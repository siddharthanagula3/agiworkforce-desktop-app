import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Check, Sparkles, TrendingDown, Zap } from 'lucide-react';
import { usePricingStore } from '../../stores/pricingStore';
import { PricingCalculator } from './PricingCalculator';
import { CompetitorComparison } from './CompetitorComparison';
import { UniqueDifferentiators } from './UniqueDifferentiators';
import { cn } from '../../lib/utils';
import type { PricingPlan } from '../../types/pricing';

export function PlansTab() {
  const { plans, currentPlan, fetchPlans, subscribeToPlan, upgradePlan } = usePricingStore();

  useEffect(() => {
    void fetchPlans();
  }, [fetchPlans]);

  const handleSelectPlan = async (planId: string) => {
    try {
      if (currentPlan) {
        await upgradePlan(planId, 'default-user');
      } else {
        await subscribeToPlan(planId, 'default-user');
      }
    } catch (error) {
      console.error('Failed to select plan:', error);
    }
  };

  // Pricing tiers aligned with competitive audit recommendations
  // See COMPETITIVE_AUDIT_2026.md for strategic positioning
  const demoPlans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      pricing_model: 'free',
      included_hours: 10,
      features: [
        '10 hours automation/month',
        'Local LLM support (Ollama)',
        'Desktop & browser automation',
        'Community support',
        'Core features',
        'Single user',
      ],
      description: 'Perfect for individuals exploring automation',
    },
    {
      id: 'pro',
      name: 'Pro',
      pricing_model: 'pro',
      base_price_usd: 19.99,
      is_popular: true,
      features: [
        'Unlimited automation hours',
        'All LLM providers (GPT-4, Claude, Gemini)',
        'Local LLM support (Ollama)',
        'Priority email support',
        'Advanced analytics & ROI tracking',
        'Multi-agent orchestration (4 parallel)',
        'API access',
        'Custom workflows',
      ],
      description: '10x cheaper than Cursor - best for developers',
    },
    {
      id: 'team',
      name: 'Team',
      pricing_model: 'team',
      base_price_usd: 99,
      features: [
        'Everything in Pro',
        '8 parallel agents',
        'Team collaboration features',
        'Shared knowledge base',
        'Priority chat support',
        'SSO & advanced security',
        'Usage analytics per user',
        'Custom integrations',
        'Training & onboarding',
      ],
      description: '10-20x cheaper than UiPath - perfect for teams',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      pricing_model: 'enterprise',
      features: [
        'Everything in Team',
        'Unlimited parallel agents',
        'Custom deployment options',
        'Dedicated account manager',
        'ROI guarantee (12x minimum)',
        'SLA 99.9% uptime',
        'On-premise deployment available',
        'Advanced security & compliance',
        'Custom model fine-tuning',
        '24/7 phone support',
      ],
      description: 'For organizations requiring enterprise features',
    },
  ];

  const displayPlans = plans.length > 0 ? plans : demoPlans;

  return (
    <div className="p-6">
      <Tabs defaultValue="plans" className="space-y-6">
        {/* Sub-tabs */}
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="comparison">
            <TrendingDown className="h-4 w-4 mr-2" />
            vs Competitors
          </TabsTrigger>
          <TabsTrigger value="features">
            <Zap className="h-4 w-4 mr-2" />
            Unique Features
          </TabsTrigger>
        </TabsList>

        {/* Plans Content */}
        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Plans Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayPlans.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    isCurrentPlan={currentPlan?.id === plan.id}
                    onSelect={() => handleSelectPlan(plan.id)}
                  />
                ))}
              </div>

              {/* Feature Comparison */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                <div className="bg-muted/30 rounded-lg p-4 text-sm text-muted-foreground">
                  All plans include: Core automation features, Desktop & browser control, API
                  integrations, Knowledge base access, Regular updates, and data encryption.
                </div>
              </div>
            </div>

            {/* Calculator */}
            <div className="lg:col-span-1">
              <PricingCalculator />
            </div>
          </div>
        </TabsContent>

        {/* Competitor Comparison Content */}
        <TabsContent value="comparison">
          <CompetitorComparison />
        </TabsContent>

        {/* Unique Features Content */}
        <TabsContent value="features">
          <UniqueDifferentiators />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface PlanCardProps {
  plan: PricingPlan;
  isCurrentPlan: boolean;
  onSelect: () => void;
}

function PlanCard({ plan, isCurrentPlan, onSelect }: PlanCardProps) {
  const isPopular = plan.is_popular;
  const isFree = plan.pricing_model === 'free';
  const isEnterprise = plan.pricing_model === 'enterprise';
  const isPro = plan.pricing_model === 'pro';
  const isTeam = plan.pricing_model === 'team';

  const getPrice = () => {
    if (isFree) return '$0';
    if (isEnterprise) return 'Custom';
    if (isPro || isTeam) {
      return `$${plan.base_price_usd?.toFixed(2) ?? '0'}`;
    }
    return `$${plan.base_price_usd ?? 0}`;
  };

  const getPriceLabel = () => {
    if (isFree) return '/month';
    if (isEnterprise) return 'pricing';
    return '/month';
  };

  const getButtonText = () => {
    if (isCurrentPlan) return 'Current Plan';
    if (isFree) return 'Start Free';
    if (isEnterprise) return 'Contact Sales';
    return 'Get Started';
  };

  const getButtonVariant = () => {
    if (isCurrentPlan) return 'outline';
    if (isPopular) return 'default';
    return 'outline';
  };

  return (
    <Card
      className={cn(
        'relative overflow-hidden transition-all hover:shadow-lg',
        isPopular && 'border-primary shadow-md',
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          Most Popular
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">{getPrice()}</span>
            <span className="text-muted-foreground">{getPriceLabel()}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={getButtonVariant() as 'default' | 'outline'}
          size="lg"
          onClick={onSelect}
          disabled={isCurrentPlan}
        >
          {getButtonText()}
        </Button>
      </CardFooter>
    </Card>
  );
}
