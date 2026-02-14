import React from 'react';
import { Helmet } from 'react-helmet';

const ImpressumPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Impressum | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/impressum" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Impressum. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default ImpressumPage;