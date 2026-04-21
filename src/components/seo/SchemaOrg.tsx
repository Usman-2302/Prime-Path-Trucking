/**
 * Global LocalBusiness + ProfessionalService schema
 * Injected once in layout.tsx — applies to every page
 */
export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://primepathtucking.com/#business",
        name: "Prime Path Trucking",
        description:
          "Prime Path Trucking is a US-based truck dispatching company offering 24/7 dedicated dispatch services for owner-operators and small fleets. We handle load finding, rate negotiation, broker packet setup, billing, and document management.",
        url: "https://primepathtucking.com",
        telephone: "+16469219612",
        email: "primepathtrucking.ppt@gmail.com",
        logo: {
          "@type": "ImageObject",
          url: "https://primepathtucking.com/logo.png",
        },
        image: "https://primepathtucking.com/logo.png",
        priceRange: "4%–10% of gross load revenue",
        currenciesAccepted: "USD",
        paymentAccepted: "Per-load percentage fee",
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 39.5,
            longitude: -98.35,
          },
          geoRadius: "3000000",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+16469219612",
            contactType: "customer service",
            availableLanguage: "English",
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Truck Dispatching Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Load Finding & Rate Negotiation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Broker Packet Setup" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Billing & Invoicing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Route Optimization" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 Night & Weekend Dispatch" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Factoring Coordination" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Management" } },
          ],
        },
        sameAs: [
          "https://www.facebook.com/primepathtucking",
          "https://www.instagram.com/primepathtucking",
          "https://www.linkedin.com/company/primepathtucking",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://primepathtucking.com/#website",
        url: "https://primepathtucking.com",
        name: "Prime Path Trucking",
        description: "Dedicated truck dispatching for owner-operators and fleets across the USA.",
        publisher: { "@id": "https://primepathtucking.com/#business" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://primepathtucking.com/equipment/{search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
