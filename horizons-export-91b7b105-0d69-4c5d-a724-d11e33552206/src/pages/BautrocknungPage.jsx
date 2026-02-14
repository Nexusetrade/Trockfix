import React from 'react';
import { Helmet } from 'react-helmet';

const BautrocknungPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Bautrocknung Ingolstadt | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/bautrocknung" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Bautrocknung</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Bautrocknung. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default BautrocknungPage;