'use client';

import {
  ArrowRight,
  BookOpen,
  Bot,
  ChevronDown,
  Cpu,
  MessageCircle,
  Table,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import * as React from 'react';
import {
  FaGithub,
  FaHubspot,
  FaInstagram,
  FaJira,
  FaSlack,
  FaWhatsapp,
} from 'react-icons/fa6';
import {
  SiAnthropic,
  SiCalendly,
  SiHuggingface,
  SiNotion,
  SiOpenai,
} from 'react-icons/si';

import Logo from '@/components/layout/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { LocalizedLink } from '@/components/ui/localized-link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'agent-studio',
    title: 'Agent Studio',
    description: 'Build and customize your agent rapidly',
    href: '/features/agent-studio',
    icon: Bot,
  },
  {
    id: 'autonomous-engine',
    title: 'Autonomous Engine',
    description: 'Use LLMs to guide conversations and tasks',
    href: '/features/autonomous-engine',
    icon: Cpu,
  },
  {
    id: 'knowledge-bases',
    title: 'Knowledge Bases',
    description: 'Train your bot with custom knowledge sources',
    href: '/features/knowledge-bases',
    icon: BookOpen,
  },
  {
    id: 'tables',
    title: 'Tables',
    description: 'Store and manage conversation data',
    href: '/features/tables',
    icon: Table,
  },
];

const channels = [
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    href: '/integrations/whatsapp',
    icon: FaWhatsapp,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: '/integrations/instagram',
    icon: FaInstagram,
  },
  {
    id: 'messenger',
    title: 'Messenger',
    href: '/integrations/messenger',
    icon: MessageCircle,
  },
  {
    id: 'slack',
    title: 'Slack',
    href: '/integrations/slack',
    icon: FaSlack,
  },
  {
    id: 'all-channels',
    title: 'All channels',
    href: '/channels',
    icon: ArrowRight,
    isHighlighted: true,
  },
];

const integrations = [
  {
    id: 'hubspot',
    title: 'HubSpot',
    href: '/integrations/hubspot',
    icon: FaHubspot,
  },
  {
    id: 'notion',
    title: 'Notion',
    href: '/integrations/notion',
    icon: SiNotion,
  },
  {
    id: 'jira',
    title: 'Jira',
    href: '/integrations/jira',
    icon: FaJira,
  },
  {
    id: 'calendly',
    title: 'Calendly',
    href: '/integrations/calendly',
    icon: SiCalendly,
  },
  {
    id: 'all-integrations',
    title: 'All integrations',
    href: '/integrations',
    icon: ArrowRight,
    isHighlighted: true,
  },
];

const llmProviders = [
  {
    id: 'openai',
    title: 'OpenAI',
    href: '/integrations/openai',
    icon: SiOpenai,
  },
  {
    id: 'anthropic',
    title: 'Anthropic',
    href: '/integrations/anthropic',
    icon: SiAnthropic,
  },
  {
    id: 'groq',
    title: 'Groq',
    href: '/integrations/groq',
    icon: Zap,
  },
  {
    id: 'hugging-face',
    title: 'Hugging Face',
    href: '/integrations/hugging-face',
    icon: SiHuggingface,
  },
  {
    id: 'all-llms',
    title: 'All LLMs',
    href: '/llms',
    icon: ArrowRight,
    isHighlighted: true,
  },
];

// Transform existing data into SolutionsMenu format while keeping all current links
const productSolutions = [
  {
    id: 'features',
    title: 'Core Features',
    description: 'Build and deploy intelligent conversational agents',
    href: '/features',
    subpages: features.map(feature => ({
      id: feature.id,
      title: feature.title,
      href: feature.href,
      icon: feature.icon,
    })),
  },
  {
    id: 'channels',
    title: 'Communication Channels',
    description: 'Connect with your audience on their preferred platforms',
    href: '/channels',
    subpages: channels.filter(c => !c.isHighlighted).map(channel => ({
      id: channel.id,
      title: channel.title,
      href: channel.href,
      icon: channel.icon,
    })),
  },
  {
    id: 'integrations',
    title: 'Business Integrations',
    description: 'Seamlessly connect with your existing tools and workflows',
    href: '/integrations',
    subpages: integrations.filter(i => !i.isHighlighted).map(integration => ({
      id: integration.id,
      title: integration.title,
      href: integration.href,
      icon: integration.icon,
    })),
  },
  {
    id: 'llm-providers',
    title: 'AI/ML Providers',
    description: 'Leverage cutting-edge language models for your agents',
    href: '/llms',
    subpages: llmProviders.filter(p => !p.isHighlighted).map(provider => ({
      id: provider.id,
      title: provider.title,
      href: provider.href,
      icon: provider.icon,
    })),
  },
];

const platformTechnologies = [
  {
    id: 'api-access',
    title: 'Developer API',
    href: '/api',
    icon: ArrowRight,
  },
  {
    id: 'webhooks',
    title: 'Webhooks & Events',
    href: '/webhooks',
    icon: Zap,
  },
  {
    id: 'enterprise',
    title: 'Enterprise Security',
    href: '/enterprise',
    icon: Bot,
  },
];

const ProductMenu = () => (
  <div className="grid gap-8 sm:grid-cols-2 min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
    <LocalizedLink
      href="/platform"
      className="group relative flex h-full flex-row overflow-hidden rounded-lg bg-primary px-0 pt-8 text-primary-foreground lg:rounded-xl lg:px-6"
    >
      <div className="relative flex w-full flex-col space-y-12 text-left md:space-y-8 lg:w-full lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-6 xl:space-x-12">
        <div className="relative flex flex-col px-6 lg:mb-6 lg:px-0">
          <span className="mb-6 text-xs font-medium tracking-wider uppercase md:mb-8">
            Transform Your Business
          </span>
          <div className="mt-auto flex items-center space-x-1 text-xs">
            Explore Our Platform
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="mt-2 text-xs text-primary-foreground/85">
            Build intelligent conversational agents that understand, engage, and deliver results across every channel.
          </p>
        </div>
        <div className="relative aspect-2/1 overflow-clip rounded-t pl-6 lg:max-w-[22rem] lg:pl-0">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="Platform Overview"
            className="aspect-2/1 h-full w-full translate-y-px object-cover object-center"
          />
        </div>
      </div>
    </LocalizedLink>

    <div className="order-last mt-3 sm:order-none sm:mt-0 sm:py-2 md:p-6">
      <div className="mb-4 text-left leading-none md:col-span-2 lg:col-span-4 lg:mb-6">
        <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Developer Platform
        </strong>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {platformTechnologies.map((technology) => (
          <NavigationMenuLink
            key={technology.id}
            asChild
          >
            <LocalizedLink
              href={technology.href}
              className="group flex flex-row items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors"
            >
              <technology.icon className="size-4" />
              <div className="flex-1 text-sm font-medium">{technology.title}</div>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
            </LocalizedLink>
          </NavigationMenuLink>
        ))}
      </div>
    </div>

    <div className="col-span-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {productSolutions.map((solution) => (
        <div key={solution.id} className="rounded-md border border-border p-5">
          <div className="border-b border-border pb-4">
            <NavigationMenuLink asChild>
              <LocalizedLink href={solution.href} className="group flex flex-col text-left">
                <div className="flex items-center">
                  <strong className="text-sm font-medium">
                    {solution.title}
                  </strong>
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {solution.description}
                </p>
              </LocalizedLink>
            </NavigationMenuLink>
          </div>
          <menu className="mt-6 grid gap-y-4">
            {solution.subpages.map((subpage) => (
              <NavigationMenuLink
                key={subpage.id}
                asChild
              >
                <LocalizedLink
                  href={subpage.href}
                  className="group flex flex-row items-center space-x-4 text-left text-foreground/85 hover:text-foreground lg:space-x-4 lg:border-0"
                >
                  <subpage.icon className="size-4" />
                  <div className="flex-1 text-sm font-medium">
                    {subpage.title}
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </LocalizedLink>
              </NavigationMenuLink>
            ))}
          </menu>
        </div>
      ))}
    </div>
  </div>
);

const navigationItems = [
  { title: 'About', href: '/about' },
  { title: 'Roadmap', href: '/roadmap' },
  { title: 'FAQs', href: '/faq' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [submenu, setSubmenu] = React.useState<'product' | null>(null);
  const { isAtLeast } = useMediaQuery();
  const { theme } = useTheme();

  const isMenuColorInverted = isMenuOpen && !isAtLeast('lg');

  React.useEffect(() => {
    if (isMenuOpen && !isAtLeast('lg')) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isMenuOpen, isAtLeast]);

  return (
    <header
      className={cn(
        'border-b transition-all duration-300',
        isMenuColorInverted
          ? theme === 'dark'
            ? 'light bg-foreground text-background [&_*]:border-border/30'
            : 'dark bg-background text-foreground'
          : '',
      )}
    >
      <div className="container max-w-[120rem] px-4">
        <div className="flex items-center border-x py-4 lg:border-none lg:py-6">
          <Logo
            className={cn(
              'ps-6 transition-all duration-300 lg:ps-0',
              isMenuColorInverted
                ? theme === 'dark'
                  ? '[&>img]:invert-0'
                  : '[&>img]:invert'
                : 'dark:[&>img]:invert',
            )}
          />

          {/* Desktop Navigation */}
          <div className="ms-8 hidden flex-1 items-center justify-between lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0">
                    <ProductMenu />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <LocalizedLink
                      href={item.href}
                      className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {item.title}
                    </LocalizedLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <NavBarAction />
          </div>

          {/* Mobile Menu Button */}
          <div className="me-6 ml-auto flex flex-1 items-center justify-end lg:me-0 lg:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="relative flex !bg-transparent"
              onClick={() => {
                if (isMenuOpen) {
                  setIsMenuOpen(false);
                  setSubmenu(null);
                } else {
                  setIsMenuOpen(true);
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-in-out',
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                  )}
                />
                <span
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-in-out',
                    isMenuOpen ? 'opacity-0' : '',
                  )}
                />
                <span
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition-transform duration-500 ease-in-out',
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                  )}
                />
              </div>
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="border-border bg-background fixed inset-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-full flex-col overflow-scroll border-t lg:hidden">
              {submenu && (
                <div className="mt-3 px-4">
                  <Button
                    variant="ghost"
                    onClick={() => setSubmenu(null)}
                    className="flex items-center gap-2"
                  >
                    <ChevronDown className="size-4 rotate-90" />
                    Go back
                  </Button>
                </div>
              )}

              {submenu === null && (
                <div>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                    onClick={() => setSubmenu('product')}
                  >
                    <span className="flex-1 text-sm font-medium">Product</span>
                    <ArrowRight className="size-4" />
                  </button>
                  {navigationItems.map((item) => (
                    <LocalizedLink
                      key={item.title}
                      href={item.href}
                      className="border-border flex w-full items-center border-b px-8 py-6 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex-1 text-sm font-medium">
                        {item.title}
                      </span>
                    </LocalizedLink>
                  ))}
                </div>
              )}

              {submenu === 'product' && (
                <div className="container px-4">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Product</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-wider uppercase">
                        Features
                      </h3>
                      <div className="space-y-2">
                        {features.map((feature) => {
                          const Icon = feature.icon;
                          return (
                            <LocalizedLink
                              key={feature.id}
                              href={feature.href}
                              className="hover:bg-accent flex items-center gap-3 rounded-lg p-3 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Icon className="text-foreground size-5" />
                              <div>
                                <div className="font-medium">
                                  {feature.title}
                                </div>
                                <div className="text-muted-foreground text-sm">
                                  {feature.description}
                                </div>
                              </div>
                            </LocalizedLink>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-wider uppercase">
                        Channels
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {channels.map((channel) => {
                          const Icon = channel.icon;
                          return (
                            <LocalizedLink
                              key={channel.id}
                              href={channel.href}
                              className="hover:bg-accent flex items-center gap-2 rounded-lg p-3 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Icon className="text-foreground size-4" />
                              <span className="text-sm font-medium">
                                {channel.title}
                              </span>
                            </LocalizedLink>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-wider uppercase">
                        Integrations
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {integrations.map((integration) => {
                          const Icon = integration.icon;
                          return (
                            <LocalizedLink
                              key={integration.id}
                              href={integration.href}
                              className="hover:bg-accent flex items-center gap-2 rounded-lg p-3 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Icon className="text-foreground size-4" />
                              <span className="text-sm font-medium">
                                {integration.title}
                              </span>
                            </LocalizedLink>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-wider uppercase">
                        LLM Providers
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {llmProviders.map((provider) => {
                          const Icon = provider.icon;
                          return (
                            <LocalizedLink
                              key={provider.id}
                              href={provider.href}
                              className="hover:bg-accent flex items-center gap-2 rounded-lg p-3 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <Icon className="text-foreground size-4" />
                              <span className="text-sm font-medium">
                                {provider.title}
                              </span>
                            </LocalizedLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile menu footer */}
              <div className="mt-auto p-8">
                <NavBarAction setIsMenuOpen={setIsMenuOpen} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const NavBarAction = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen?: (isMenuOpen: boolean) => void;
}) => {
  return (
    <div className="bordered-div-padding flex items-center justify-between border lg:border-none lg:!p-0">
      <Link
        href="https://github.com/scalar-labs/scalar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          className="gap-2 font-medium lg:text-base"
          size="sm"
        >
          <FaGithub className="size-5" />
          <span>14.3k</span>
        </Button>
      </Link>

      <div className="flex flex-1 items-center gap-2">
        <div className="flex flex-1 items-center justify-center">
          <ThemeToggle className="hidden lg:block" />
          <LocalizedLink href="/login" onClick={() => setIsMenuOpen?.(false)}>
            <Button size="sm" variant="ghost" className="lg:text-base">
              Log In
            </Button>
          </LocalizedLink>
        </div>
        <LocalizedLink
          href="/signup"
          className="ms-3"
          onClick={() => setIsMenuOpen?.(false)}
        >
          <Button size="sm" variant="default">
            Start Free Trial
          </Button>
        </LocalizedLink>
      </div>
    </div>
  );
};

export default Navbar;
