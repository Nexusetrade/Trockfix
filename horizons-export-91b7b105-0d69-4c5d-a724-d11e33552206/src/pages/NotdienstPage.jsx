import React from 'react';
import { Helmet } from 'react-helmet';

const NotdienstPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Notdienst 24h Wasserschaden | TrockFix</title>
        <link rel="canonical" href="https://trockfix.de/notdienst" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Notdienst</h1>
      <p className="text-gray-600">
        Dies ist eine Platzhalter-Seite für Notdienst. Der Inhalt wird bald hinzugefügt.
      </p>
    </div>
  );
};

export default NotdienstPage;