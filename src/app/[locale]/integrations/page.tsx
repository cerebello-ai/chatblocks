import { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Zap } from 'lucide-react';
import { FaHubspot, FaInstagram, FaJira, FaSlack, FaWhatsapp } from 'react-icons/fa6';
import { SiAnthropic, SiCalendly, SiHuggingface, SiNotion, SiOpenai } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'All Integrations',
  description: 'Discover all available integrations and connect your favorite tools',
};

const integrations = [
  {
    name: 'HubSpot',
    slug: 'hubspot',
    description: 'Connect your bot to HubSpot CRM',
    icon: FaHubspot,
    category: 'CRM',
  },
  {
    name: 'Notion',
    slug: 'notion',
    description: 'Connect your bot to Notion databases and pages',
    icon: SiNotion,
    category: 'Productivity',
  },
  {
    name: 'Jira',
    slug: 'jira',
    description: 'Connect your bot to Jira for project management',
    icon: FaJira,
    category: 'Project Management',
  },
  {
    name: 'Calendly',
    slug: 'calendly',
    description: 'Connect your bot to Calendly for scheduling',
    icon: SiCalendly,
    category: 'Scheduling',
  },
  {
    name: 'WhatsApp',
    slug: 'whatsapp',
    description: 'Connect your bot to WhatsApp Business API',
    icon: FaWhatsapp,
    category: 'Messaging',
  },
  {
    name: 'Instagram',
    slug: 'instagram',
    description: 'Connect your bot to Instagram messaging',
    icon: FaInstagram,
    category: 'Social Media',
  },
  {
    name: 'Messenger',
    slug: 'messenger',
    description: 'Connect your bot to Facebook Messenger',
    icon: MessageCircle,
    category: 'Messaging',
  },
  {
    name: 'Slack',
    slug: 'slack',
    description: 'Connect your bot to Slack workspaces',
    icon: FaSlack,
    category: 'Team Communication',
  },
  {
    name: 'OpenAI',
    slug: 'openai',
    description: 'Integrate with OpenAI language models',
    icon: SiOpenai,
    category: 'AI/ML',
  },
  {
    name: 'Anthropic',
    slug: 'anthropic',
    description: 'Integrate with Anthropic Claude models',
    icon: SiAnthropic,
    category: 'AI/ML',
  },
  {
    name: 'Groq',
    slug: 'groq',
    description: 'Integrate with Groq inference engine',
    icon: Zap,
    category: 'AI/ML',
  },
  {
    name: 'Hugging Face',
    slug: 'hugging-face',
    description: 'Integrate with Hugging Face models',
    icon: SiHuggingface,
    category: 'AI/ML',
  },
];

const categories = Array.from(new Set(integrations.map(integration => integration.category)));

export default function IntegrationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Integrations</h1>
          <p className="text-xl text-muted-foreground">
            Discover all available integrations and connect your favorite tools
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations
                .filter((integration) => integration.category === category)
                .map((integration) => {
                  const Icon = integration.icon;
                  return (
                    <Link
                      key={integration.slug}
                      href={`/integrations/${integration.slug}`}
                      className="group block p-6 border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/50"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                          <Icon className="size-6 text-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {integration.name}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}