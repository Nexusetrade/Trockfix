import React from 'react';
import { Helmet } from 'react-helmet';

const DatenschutzPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Datenschutz | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/datenschutz" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Datenschutz</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Datenschutz. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default DatenschutzPage;