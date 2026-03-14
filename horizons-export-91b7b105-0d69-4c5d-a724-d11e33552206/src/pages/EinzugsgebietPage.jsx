import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, PhoneCall, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EinzugsgebietPage = () => {
  const locations = [
    { name: 'Gaimersheim', path: '/einzugsgebiet/gaimersheim', distance: '5 km', time: '< 15 Min.', desc: 'Wachsende Marktgemeinde mit vielen Neubauprojekten und älterem Gebäudebestand.' },
    { name: 'Kösching', path: '/einzugsgebiet/koesching', distance: '12 km', time: '~ 20 Min.', desc: 'Historischer Ortskern mit Altbauten und moderne Neubaugebiete.' },
    { name: 'Manching', path: '/einzugsgebiet/manching', distance: '8 km', time: '~ 15 Min.', desc: 'An Donau und Paar gelegen – erhöhtes Hochwasserrisiko, Gewerbegebiet am Fliegerhorst.' },
    { name: 'Neuburg a.d. Donau', path: '/einzugsgebiet/neuburg-donau', distance: '25 km', time: '~ 30 Min.', desc: 'Donaustadt mit Renaissance-Altstadt, Gewölbekellern und Hochwassergefährdung.' },
    { name: 'Pfaffenhofen a.d. Ilm', path: '/einzugsgebiet/pfaffenhofen', distance: '30 km', time: '~ 30 Min.', desc: 'Kreisstadt an der Ilm – Neubaugebiet, Gewerbe und Starkregengefährdung.' },
    { name: 'Haunwöhr', path: '/einzugsgebiet/haunwoehr', distance: '3 km', time: '< 10 Min.', desc: 'Beliebtes Wohnviertel mit Gebäudebestand aus den 60er–90er Jahren.' },
    { name: 'Kothau', path: '/einzugsgebiet/kothau', distance: '4 km', time: '< 10 Min.', desc: 'Ruhiger Stadtteil im Südosten – Neubaugebiete und Siedlungshäuser.' },
    { name: 'Ringsee', path: '/einzugsgebiet/ringsee', distance: '3 km', time: '< 10 Min.', desc: 'Ältester Stadtteil Ingolstadts mit Altbaubestand und besonderen Trocknungsanforderungen.' },
    { name: 'Friedrichshofen', path: '/einzugsgebiet/friedrichshofen', distance: '4 km', time: '< 10 Min.', desc: 'Grüner, familienfreundlicher Stadtteil mit Siedlungsbau und Garten-Grundstücken.' },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Einzugsgebiet Trockfix | Wasserschadensanierung & Bautrocknung Region Ingolstadt</title>
        <meta name="description" content="Trockfix – Ihr Trocknungsfachbetrieb für Ingolstadt und Umgebung. Wir sind in Gaimersheim, Kösching, Manching, Neuburg, Pfaffenhofen und den Ingolstädter Stadtteilen für Sie da." />
        <link rel="canonical" href="https://trockfix.de/einzugsgebiet" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Region Ingolstadt</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Unser Einzugsgebiet</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Von Ingolstadt aus betreuen wir die gesamte Region – von Gaimersheim bis Neuburg, von Manching bis Pfaffenhofen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1"><PhoneCall className="w-5 h-5 mr-2 animate-pulse" />Jetzt anrufen</a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">Beratung anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><MapPin className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Theoderichstraße 8, 85051 Ingolstadt</span></div>
            <div className="flex items-center text-gray-700 font-medium"><CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" /><span>30+ km Radius</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 in der gesamten Region</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed mb-16">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Ihr lokaler Trocknungs-Fachbetrieb – überall in der Region</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Die Trockfix Bautrocknung hat ihren Sitz in der <strong>Theoderichstraße 8 in Ingolstadt</strong>. Von hier aus betreuen wir Privathaushalte, Hausverwaltungen, Bauträger und Gewerbebetriebe in <strong>ganz Ingolstadt und im Umkreis von über 30 Kilometern</strong>.
            </p>

            <p className="mb-8">
              Unsere Stärke ist die <strong>lokale Nähe</strong>: Wir kennen die typischen Baukonstruktionen der Region, die Eigenheiten der verschiedenen Stadtteile und Gemeinden, die Grundwassersituationen an Donau, Paar und Schutter – und wir kennen die lokalen Handwerker, Hausverwaltungen und Versicherungsvertreter. Dieses Netzwerk hilft uns, Schäden schneller, effizienter und unkomplizierter zu beheben.
            </p>

            <p className="mb-8">
              Bei einem <strong>Notfall</strong> erreichen wir jeden Ort in unserem Einzugsgebiet in maximal 30 Minuten. In den Ingolstädter Stadtteilen sind wir oft schon in unter 10 Minuten vor Ort. Unser <strong>24/7-Notdienst</strong> ist für die gesamte Region aktiv – auch nachts, an Wochenenden und Feiertagen.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Alle Standorte im Überblick</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {locations.map((loc) => (
              <Link
                key={loc.path}
                to={loc.path}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#00BCD4]/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00BCD4] transition-colors">{loc.name}</h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00BCD4] group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex gap-4 mb-3 text-sm">
                  <span className="bg-[#e0f7fa] text-[#00838f] px-2 py-1 rounded-md font-medium">{loc.distance}</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">{loc.time}</span>
                </div>
                <p className="text-gray-500 text-sm">{loc.desc}</p>
              </Link>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5"><MapPin className="w-64 h-64" /></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Unsere Leistungen – überall verfügbar</h3>
              <p className="mb-8 text-gray-300">Egal ob in Ingolstadt oder in der Region – wir bieten das volle Spektrum an Trocknungs- und Sanierungsleistungen.</p>
              <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                <div>
                  <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Wasserschadensanierung</h4>
                  <ul className="space-y-3">
                    <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                    <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                    <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                    <li><Link to="/wasserschadensanierung/notdienst" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> 24/7 Notdienst</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Bautrocknung</h4>
                  <ul className="space-y-3">
                    <li><Link to="/bautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknung</Link></li>
                    <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                    <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                    <li><Link to="/bautrocknung/bautrocknerverleih" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknerverleih</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ – Einzugsgebiet</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie weit fahren Sie für einen Einsatz?</h3>
                <p className="text-gray-600">Unser Kerngebiet umfasst Ingolstadt und einen Radius von ca. 30 km – von Neuburg a.d. Donau im Westen bis Pfaffenhofen im Süden und Gaimersheim/Kösching im Osten. In Einzelfällen fahren wir auch weiter.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kostet die Anfahrt extra?</h3>
                <p className="text-gray-600">Im Schadenfall ist die Anfahrt in unserem Kerngebiet in der Leistungsrechnung enthalten. Bei Geräteverleih (Bautrocknerverleih) ist die Lieferung und Abholung im Mietpreis inklusive.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ist Ihr 24/7-Notdienst auch außerhalb Ingolstadts verfügbar?</h3>
                <p className="text-gray-600">Ja, unser Notdienst gilt für das gesamte Einzugsgebiet. Auch nachts, an Wochenenden und Feiertagen fahren wir zu Ihnen – ob im Ingolstädter Stadtteil oder in Neuburg, Pfaffenhofen oder Manching.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EinzugsgebietPage;
