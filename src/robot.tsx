import { useEffect } from 'react';

const siteUrl = 'https://akashnagar.in';
const pageTitle = 'Akash Nagar | Software Engineer Portfolio';
const pageDescription =
  'Akash Nagar is a software engineer building scalable web and mobile apps with React, React Native, Node.js, and full-stack product expertise.';
const previewImage = `${siteUrl}/hero-preview.jpg`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Akash Nagar',
  url: siteUrl,
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/akashnagar10',
    'https://www.linkedin.com/in/akash-nagar-7823a9217/',
  ],
  email: 'mailto:akashdev1006@gmail.com',
  knowsAbout: [
    'React',
    'React Native',
    'JavaScript',
    'Node.js',
    'Full-Stack Development',
    'Mobile App Development',
    'Web Development',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Akash Nagar Portfolio',
  url: siteUrl,
  description: pageDescription,
};

const updateMetaTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const updateLinkTag = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const updateStructuredData = (id: string, data: Record<string, unknown>) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

function Robot() {
  useEffect(() => {
    const canonicalUrl = window.location.href.split('#')[0];

    document.title = pageTitle;
    document.documentElement.lang = 'en';

    updateMetaTag('meta[name="description"]', {
      name: 'description',
      content: pageDescription,
    });
    updateMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    updateMetaTag('meta[name="keywords"]', {
      name: 'keywords',
      content:
        'Akash Nagar, software engineer, full-stack developer, React developer, React Native developer, Node.js developer, portfolio',
    });
    updateMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    updateMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: pageTitle,
    });
    updateMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: pageDescription,
    });
    updateMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    updateMetaTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Akash Nagar Portfolio',
    });
    updateMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: previewImage,
    });
    updateMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    updateMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: pageTitle,
    });
    updateMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageDescription,
    });
    updateMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: previewImage,
    });

    updateLinkTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    updateStructuredData('person-structured-data', personSchema);
    updateStructuredData('website-structured-data', websiteSchema);
  }, []);

  return null;
}

export default Robot;
