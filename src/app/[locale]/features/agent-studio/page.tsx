import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agent Studio',
  description: 'Build and customize your agent rapidly with Agent Studio',
};

export default function AgentStudioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Agent Studio</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Build and customize your agent rapidly
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Agent Studio is a powerful platform that allows you to build and customize 
            conversational agents rapidly. With our intuitive interface and advanced 
            tools, you can create intelligent bots that understand context and deliver 
            personalized experiences.
          </p>
          
          <h2>Key Features</h2>
          <ul>
            <li>Drag-and-drop conversation builder</li>
            <li>Advanced NLP capabilities</li>
            <li>Real-time testing and debugging</li>
            <li>Custom integrations and APIs</li>
            <li>Multi-language support</li>
          </ul>
          
          <h2>Getting Started</h2>
          <p>
            Start building your first agent in minutes with our guided setup wizard 
            and comprehensive documentation.
          </p>
        </div>
      </div>
    </div>
  );
}