import React from 'react';
import { Helmet } from 'react-helmet';

const BaubeheizungPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Baubeheizung | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/baubeheizung" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Baubeheizung</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Baubeheizung. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default BaubeheizungPage;