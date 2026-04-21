/**
 * Service schema for the services page
 */
export default function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Truck Dispatching",
    provider: {
      "@type": "LocalBusiness",
      name: "Prime Path Trucking",
      url: "https://primepathtucking.com",
      telephone: "+16469219612",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description:
      "Full-service truck dispatching including load finding, rate negotiation, broker packet setup, billing and invoicing, route optimization, factoring coordination, and 24/7 dispatch coverage.",
    offers: {
      "@type": "Offer",
      description: "4–10% of gross load revenue for standard plan. 3–6% for fleet plan.",
      priceCurrency: "USD",
      eligibleRegion: {
        "@type": "Country",
        name: "United States",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dispatching Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Load Finding & Rate Negotiation",
            description:
              "Active searching on DAT and Truckstop based on carrier preferred lanes and minimum RPM. Dispatcher negotiates to beat posted rates.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Broker Packet Setup",
            description:
              "Handles MC Authority, W-9, COI, and NOA paperwork with every new broker — once, correctly.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Billing & Invoicing",
            description:
              "Generates and sends invoices after every load, follows up on unpaid broker payments.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Night & Weekend Dispatch",
            description:
              "Full dispatch coverage nights, weekends, and US holidays at no extra charge.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Route Optimization",
            description:
              "Plans routes that minimize deadhead miles and maximize earnings per run.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Factoring Coordination",
            description:
              "Manages NOA paperwork and communicates directly with factoring companies.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Document Management",
            description:
              "Organizes and submits rate confirmations, BOLs, and PODs for brokers.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
