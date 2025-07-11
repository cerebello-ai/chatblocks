import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autonomous Engine',
  description: 'Use LLMs to guide conversations and tasks',
};

export default function AutonomousEnginePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Autonomous Engine</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Use LLMs to guide conversations and tasks
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Our Autonomous Engine leverages the power of Large Language Models (LLMs) 
            to create intelligent, context-aware conversations that can handle complex 
            tasks and provide meaningful interactions.
          </p>
          
          <h2>Capabilities</h2>
          <ul>
            <li>Advanced natural language understanding</li>
            <li>Context-aware response generation</li>
            <li>Multi-turn conversation management</li>
            <li>Task automation and workflow execution</li>
            <li>Intent recognition and entity extraction</li>
          </ul>
          
          <h2>How It Works</h2>
          <p>
            The Autonomous Engine processes user inputs through sophisticated LLM models, 
            maintaining conversation context and executing complex workflows automatically.
          </p>
        </div>
      </div>
    </div>
  );
}