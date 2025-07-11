import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Channels',
  description: 'Connect your bot to all available messaging channels',
};

export default function ChannelsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">All Channels</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Connect your bot to all available messaging channels
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Reach your customers wherever they are with our comprehensive collection 
            of messaging channel integrations. Deploy your conversational AI across 
            multiple platforms simultaneously.
          </p>
          
          <h2>Available Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">WhatsApp Business</h3>
              <p className="text-muted-foreground">World's most popular messaging platform</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Instagram</h3>
              <p className="text-muted-foreground">Direct messages and story mentions</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Facebook Messenger</h3>
              <p className="text-muted-foreground">Rich messaging with interactive elements</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Slack</h3>
              <p className="text-muted-foreground">Team collaboration and productivity</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground">Secure messaging with bot API</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Discord</h3>
              <p className="text-muted-foreground">Community engagement and support</p>
            </div>
          </div>
          
          <h2>Multi-Channel Benefits</h2>
          <ul>
            <li>Unified conversation management</li>
            <li>Consistent experience across platforms</li>
            <li>Centralized analytics and reporting</li>
            <li>Easy channel switching and management</li>
            <li>Cross-platform user tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}