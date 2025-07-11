// Common types
export interface MetadataTranslation {
  title: string;
  description: string;
}

export interface TestimonialItem {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

// Hero component props
export interface HeroProps {
  betaBanner: string;
  title: string;
  description: string;
  startTrial: string;
  community: string;
  imageAlt: string;
}

// About Hero component props
export interface AboutHeroProps {
  title: string;
  description: string;
  discordText: string;
  githubText: string;
}

// Feature item interface
export interface FeatureItem {
  title: string;
  description: string;
  subDescription: string;
  imageAlt: string;
}

// Features component props
export interface FeaturesProps {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

// Compatibility component props
export interface CompatibilityProps {
  title: string;
  subtitle: string;
  description: string;
}

// Testimonials component props
export interface TestimonialsProps {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

// Home page translation structure
export interface HomePageTranslation {
  metadata: MetadataTranslation;
  hero: HeroProps;
  features: FeaturesProps;
  compatibility: CompatibilityProps;
  testimonials: TestimonialsProps;
}

// Mission values interface
export interface MissionValue {
  title: string;
  description: string;
}

// Team member interface
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

// Mission component props
export interface MissionProps {
  title: string;
  description: string;
  content: string;
  values: MissionValue[];
}

// Team component props
export interface TeamProps {
  title: string;
  description: string;
  hiring: string;
  members: TeamMember[];
}

// Investors component props
export interface InvestorsProps {
  title: string;
  description: string;
  content: string;
}

// About testimonials component props
export interface AboutTestimonialsProps {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

// About page translation structure
export interface AboutPageTranslation {
  metadata: MetadataTranslation;
  hero: AboutHeroProps;
  mission: MissionProps;
  team: TeamProps;
  investors: InvestorsProps;
  testimonials: AboutTestimonialsProps;
}

// Product Hero component props
export interface ProductHeroProps {
  title: string;
  description: string;
  startTrial: string;
  viewGithub: string;
  imageAlt: string;
  locale: string;
}

// Product Features component props
export interface ProductFeatureItem {
  title: string;
  description: string;
  subDescription: string;
}

export interface ProductFeaturesProps {
  trackChanges: ProductFeatureItem;
  localDevelopment: ProductFeatureItem;
  modelDefinitions: ProductFeatureItem;
  readyToScale: ProductFeatureItem;
}

// Product Compatibility component props
export interface ProductCompatibilityProps {
  title: string;
  description: string;
  tabs: {
    modelDefinition: string;
    formComponent: string;
    articleList: string;
    singleArticleView: string;
    apiRoutes: string;
    dataFetching: string;
  };
  ui: {
    loading: string;
    copyCode: string;
    articleTitle: string;
    articleContent: string;
    saveArticle: string;
    featured: string;
    articleNotFound: string;
    featuredArticle: string;
    failedToFetch: string;
  };
}

// Product CTA component props
export interface ProductCtaProps {
  title: string;
  readDocs: string;
}

// Product page translation structure
export interface ProductPageTranslation {
  metadata: MetadataTranslation;
  hero: ProductHeroProps;
  features: ProductFeaturesProps;
  compatibility: ProductCompatibilityProps;
  cta: ProductCtaProps;
}

// Generic page translation type
export type PageTranslation = HomePageTranslation | AboutPageTranslation | ProductPageTranslation;

// Translation loading function type
export type TranslationLoader<T = PageTranslation> = (locale: string) => Promise<T>;