import React from 'react';
import { Helmet } from 'react-helmet';

const EinzugsgebietPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Einzugsgebiet | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/einzugsgebiet" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Einzugsgebiet</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Einzugsgebiet. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default EinzugsgebietPage;