import React from 'react';
import Layout from './components/Layout';
import RNGTool from './components/RNGTool';
import SEOArticle from './components/SEOArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-16">
        <RNGTool />
        <SEOArticle />
      </div>
    </Layout>
  );
};

export default App;