import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function LegalInformation() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          Legal Information
        </div>
      </section>
    </Layout>
  );
}

export default LegalInformation;
