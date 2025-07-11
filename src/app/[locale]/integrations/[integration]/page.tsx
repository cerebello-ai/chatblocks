import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface IntegrationData {
  title: string;
  description: string;
  content: string;
  features: string[];
  useCases: string[];
  benefits: string[];
}

const integrations: Record<string, IntegrationData> = {
  hubspot: {
    title: 'HubSpot Integration',
    description: 'Connect your bot to HubSpot CRM',
    content: 'Seamlessly integrate your conversational AI with HubSpot CRM to enhance your sales and marketing efforts. Capture leads, update contact information, and provide personalized experiences based on customer data.',
    features: [
      'Lead capture and qualification',
      'Contact creation and updates',
      'Deal tracking and management',
      'Custom property synchronization',
      'Automated workflow triggers'
    ],
    useCases: [
      'Lead generation and scoring',
      'Customer support ticket creation',
      'Sales pipeline management',
      'Marketing campaign optimization',
      'Customer data enrichment'
    ],
    benefits: [
      '360-degree customer view',
      'Automated data synchronization',
      'Improved lead conversion rates',
      'Enhanced customer experience',
      'Streamlined sales processes'
    ]
  },
  notion: {
    title: 'Notion Integration',
    description: 'Connect your bot to Notion databases and pages',
    content: 'Integrate your conversational AI with Notion to create powerful knowledge management and productivity workflows. Access databases, create pages, and manage content through natural language interactions.',
    features: [
      'Database query and manipulation',
      'Page creation and editing',
      'Content search and retrieval',
      'Property filtering and sorting',
      'Automated data entry'
    ],
    useCases: [
      'Knowledge base management',
      'Task and project tracking',
      'Meeting notes and documentation',
      'Content creation assistance',
      'Team collaboration enhancement'
    ],
    benefits: [
      'Natural language database queries',
      'Automated content organization',
      'Real-time collaboration',
      'Template-based page creation',
      'Cross-workspace integration'
    ]
  },
  jira: {
    title: 'Jira Integration',
    description: 'Connect your bot to Jira for project management',
    content: 'Streamline your project management with Jira integration. Create issues, track progress, and manage sprints through conversational interactions.',
    features: [
      'Issue creation and management',
      'Sprint planning and tracking',
      'Project status monitoring',
      'Automated workflow transitions',
      'Custom field management'
    ],
    useCases: [
      'Bug tracking and resolution',
      'Feature request management',
      'Sprint planning assistance',
      'Project status reporting',
      'Team productivity tracking'
    ],
    benefits: [
      'Streamlined issue management',
      'Improved team collaboration',
      'Automated project tracking',
      'Enhanced productivity',
      'Better project visibility'
    ]
  },
  calendly: {
    title: 'Calendly Integration',
    description: 'Connect your bot to Calendly for scheduling',
    content: 'Seamlessly integrate scheduling capabilities with Calendly. Allow users to book meetings, check availability, and manage appointments through conversational interactions.',
    features: [
      'Meeting scheduling and booking',
      'Availability checking',
      'Calendar synchronization',
      'Automated reminders',
      'Custom booking workflows'
    ],
    useCases: [
      'Sales meeting scheduling',
      'Customer support appointments',
      'Consultation bookings',
      'Interview scheduling',
      'Event planning assistance'
    ],
    benefits: [
      'Reduced scheduling friction',
      'Improved meeting conversion',
      'Automated calendar management',
      'Better customer experience',
      'Increased booking rates'
    ]
  },
  whatsapp: {
    title: 'WhatsApp Integration',
    description: 'Connect your bot to WhatsApp Business API',
    content: 'Reach your customers where they are with WhatsApp integration. Deploy your conversational AI on the world\'s most popular messaging platform.',
    features: [
      'Message sending and receiving',
      'Media sharing capabilities',
      'Template message support',
      'Group chat management',
      'Business profile integration'
    ],
    useCases: [
      'Customer support automation',
      'Marketing campaign delivery',
      'Order status updates',
      'Appointment confirmations',
      'Lead qualification'
    ],
    benefits: [
      'Global reach and accessibility',
      'High engagement rates',
      'Rich media support',
      'Trusted platform',
      'Mobile-first experience'
    ]
  },
  instagram: {
    title: 'Instagram Integration',
    description: 'Connect your bot to Instagram messaging',
    content: 'Engage with your audience on Instagram through automated messaging. Handle customer inquiries, share content, and build relationships through conversational AI.',
    features: [
      'Direct message automation',
      'Story interaction responses',
      'Comment management',
      'Media sharing capabilities',
      'Profile integration'
    ],
    useCases: [
      'Customer service automation',
      'Product inquiries handling',
      'Content engagement',
      'Lead generation',
      'Brand interaction'
    ],
    benefits: [
      'Visual platform engagement',
      'Younger demographic reach',
      'Creative interaction possibilities',
      'Brand awareness building',
      'Social commerce support'
    ]
  },
  messenger: {
    title: 'Messenger Integration',
    description: 'Connect your bot to Facebook Messenger',
    content: 'Deploy your conversational AI on Facebook Messenger to reach billions of users. Provide instant customer support and engage with your audience where they spend their time.',
    features: [
      'Instant messaging capabilities',
      'Rich media support',
      'Persistent menu integration',
      'Webview integration',
      'Broadcast messaging'
    ],
    useCases: [
      'Customer support automation',
      'E-commerce assistance',
      'Content delivery',
      'Event notifications',
      'Survey and feedback collection'
    ],
    benefits: [
      'Massive user base access',
      'Rich interaction possibilities',
      'Seamless Facebook integration',
      'Mobile-optimized experience',
      'High message delivery rates'
    ]
  },
  slack: {
    title: 'Slack Integration',
    description: 'Connect your bot to Slack workspaces',
    content: 'Enhance team productivity with Slack integration. Deploy your conversational AI directly in Slack channels to assist with workflows, answer questions, and automate tasks.',
    features: [
      'Channel and direct messaging',
      'Slash command support',
      'Interactive components',
      'File sharing capabilities',
      'Workflow automation'
    ],
    useCases: [
      'Team assistance and support',
      'Project management automation',
      'Information retrieval',
      'Task scheduling',
      'Meeting coordination'
    ],
    benefits: [
      'Seamless workflow integration',
      'Improved team collaboration',
      'Reduced context switching',
      'Enhanced productivity',
      'Centralized communication'
    ]
  },
  openai: {
    title: 'OpenAI Integration',
    description: 'Integrate with OpenAI language models',
    content: 'Leverage the power of OpenAI\'s language models in your conversational AI. Access GPT models, embeddings, and other AI capabilities to enhance your bot\'s intelligence.',
    features: [
      'GPT model integration',
      'Text embeddings generation',
      'Fine-tuned model support',
      'Completion and chat APIs',
      'Token usage optimization'
    ],
    useCases: [
      'Natural language understanding',
      'Content generation',
      'Semantic search',
      'Text analysis and summarization',
      'Creative writing assistance'
    ],
    benefits: [
      'State-of-the-art AI capabilities',
      'Flexible model selection',
      'Scalable API access',
      'Comprehensive documentation',
      'Active community support'
    ]
  },
  anthropic: {
    title: 'Anthropic Integration',
    description: 'Integrate with Anthropic Claude models',
    content: 'Integrate with Anthropic\'s Claude models for helpful, harmless, and honest AI interactions. Access advanced reasoning capabilities and nuanced understanding.',
    features: [
      'Claude model variants',
      'Constitutional AI principles',
      'Long context windows',
      'Advanced reasoning',
      'Safety-focused responses'
    ],
    useCases: [
      'Complex problem solving',
      'Document analysis',
      'Code generation and review',
      'Research assistance',
      'Educational content creation'
    ],
    benefits: [
      'Ethical AI responses',
      'Superior reasoning capabilities',
      'Extended context handling',
      'Transparent limitations',
      'Consistent performance'
    ]
  },
  groq: {
    title: 'Groq Integration',
    description: 'Integrate with Groq inference engine',
    content: 'Supercharge your AI applications with Groq\'s lightning-fast inference engine. Experience unparalleled speed and efficiency in model execution.',
    features: [
      'Ultra-fast inference',
      'Multiple model support',
      'Real-time processing',
      'Optimized hardware acceleration',
      'Batch processing capabilities'
    ],
    useCases: [
      'Real-time chat applications',
      'High-throughput processing',
      'Live streaming analysis',
      'Interactive AI experiences',
      'Performance-critical applications'
    ],
    benefits: [
      'Exceptional inference speed',
      'Cost-effective processing',
      'Reduced latency',
      'Scalable infrastructure',
      'Developer-friendly APIs'
    ]
  },
  'hugging-face': {
    title: 'Hugging Face Integration',
    description: 'Integrate with Hugging Face models',
    content: 'Access thousands of pre-trained models and datasets from Hugging Face. Leverage the world\'s largest AI community for your conversational AI needs.',
    features: [
      'Model Hub access',
      'Custom model deployment',
      'Dataset integration',
      'Transformer model support',
      'Community contributions'
    ],
    useCases: [
      'Specialized domain models',
      'Multi-language support',
      'Computer vision tasks',
      'Audio processing',
      'Research and experimentation'
    ],
    benefits: [
      'Vast model selection',
      'Open-source community',
      'Continuous model updates',
      'Easy model switching',
      'Comprehensive documentation'
    ]
  }
};

interface PageProps {
  params: Promise<{ integration: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { integration } = await params;
  const integrationData = integrations[integration];
  
  if (!integrationData) {
    return {
      title: 'Integration Not Found',
      description: 'The requested integration page could not be found.'
    };
  }

  return {
    title: integrationData.title,
    description: integrationData.description,
  };
}

export default async function IntegrationPage({ params }: PageProps) {
  const { integration } = await params;
  const integrationData = integrations[integration];

  if (!integrationData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{integrationData.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          {integrationData.description}
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>{integrationData.content}</p>
          
          <h2>Features</h2>
          <ul>
            {integrationData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <h2>Use Cases</h2>
          <ul>
            {integrationData.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
          
          <h2>Benefits</h2>
          <ul>
            {integrationData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(integrations).map((integration) => ({
    integration,
  }));
}