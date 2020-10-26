import React from 'react';

import { gql, useQuery } from '@apollo/client';

import Layout from '../components/layout';
import SEO from '../components/seo';

function News() {
  const { loading, error, data } = useQuery(gql`
    {
      articles {
        id
        title
        description
      }
    }
  `);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <h1>News</h1>
          <ul>
            {data.articles.map(article => (
              <li key={article.id}>
                <p>{article.title}</p>
                <p>{article.description}</p>
                <br/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default News;
