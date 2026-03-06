/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroHubOverview } from './sections/HeroHubOverview';
import { OpportunityHighlight } from './sections/OpportunityHighlight';
import { BentoGridBenefits } from './sections/BentoGridBenefits';
import { IntegrationFlowSteps } from './sections/IntegrationFlowSteps';
import { SegmentationShowcase } from './sections/SegmentationShowcase';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { AdFormatsTabs } from './sections/AdFormatsTabs';
import { AIIntelligenceSection } from './sections/AIIntelligenceSection';
import { LPHeroSolution } from './sections/LPHeroSolution';
import { LPComparisonSection } from './sections/LPComparisonSection';
import { LPFeaturesList } from './sections/LPFeaturesList';
import { IdealCombinationSection } from './sections/IdealCombinationSection';
import { FaqSection } from './sections/FaqSection';
import { AuthorityFooterCTA } from './sections/AuthorityFooterCTA';
import { ContactFormSection } from './sections/ContactFormSection';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-background text-text selection:bg-accent selection:text-white">
      <Navbar />
      <HeroHubOverview />
      <IntegrationFlowSteps />
      <OpportunityHighlight />
      <BentoGridBenefits />
      <SegmentationShowcase />
      <HowItWorksSection />
      <AdFormatsTabs />
      <AIIntelligenceSection />
      <LPHeroSolution />
      <LPComparisonSection />
      <LPFeaturesList />
      <IdealCombinationSection />
      <AuthorityFooterCTA />
      <FaqSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
