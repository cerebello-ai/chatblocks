import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tables',
  description: 'Store and manage conversation data',
};

export default function TablesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Tables</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Store and manage conversation data
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Tables provide a structured way to store, organize, and manage conversation 
            data, user interactions, and business insights from your conversational AI 
            implementations.
          </p>
          
          <h2>Data Management</h2>
          <ul>
            <li>Structured data storage</li>
            <li>Real-time data updates</li>
            <li>Advanced filtering and search</li>
            <li>Data export and import</li>
            <li>Custom field definitions</li>
          </ul>
          
          <h2>Analytics & Insights</h2>
          <ul>
            <li>Conversation analytics</li>
            <li>User behavior tracking</li>
            <li>Performance metrics</li>
            <li>Custom reporting</li>
            <li>Data visualization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}