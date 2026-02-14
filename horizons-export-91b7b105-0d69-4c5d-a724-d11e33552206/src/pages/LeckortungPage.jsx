import React from 'react';
import { Helmet } from 'react-helmet';

const LeckortungPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Leckortung Ingolstadt | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/leckortung" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Leckortung</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Leckortung. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default LeckortungPage;