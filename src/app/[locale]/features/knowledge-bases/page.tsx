import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knowledge Bases',
  description: 'Train your bot with custom knowledge sources',
};

export default function KnowledgeBasesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Knowledge Bases</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Train your bot with custom knowledge sources
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Knowledge Bases allow you to train your conversational agents with custom 
            content from various sources, ensuring accurate and relevant responses 
            based on your specific domain knowledge.
          </p>
          
          <h2>Supported Sources</h2>
          <ul>
            <li>Documents (PDF, Word, Text files)</li>
            <li>Web pages and websites</li>
            <li>APIs and databases</li>
            <li>CSV and structured data</li>
            <li>FAQs and help articles</li>
          </ul>
          
          <h2>Features</h2>
          <ul>
            <li>Automatic content ingestion and indexing</li>
            <li>Semantic search capabilities</li>
            <li>Content versioning and updates</li>
            <li>Analytics and usage tracking</li>
            <li>Multi-language support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}