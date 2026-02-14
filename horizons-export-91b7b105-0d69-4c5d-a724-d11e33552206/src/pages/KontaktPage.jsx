import React from 'react';
import { Helmet } from 'react-helmet';

const KontaktPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Kontakt | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/kontakt" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Kontakt. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default KontaktPage;