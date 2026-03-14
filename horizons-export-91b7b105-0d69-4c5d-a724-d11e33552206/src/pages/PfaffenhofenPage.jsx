import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Wrench, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PfaffenhofenPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadensanierung & Bautrocknung Pfaffenhofen a.d. Ilm | Trockfix</title>
        <meta name="description" content="Pfaffenhofen a.d. Ilm: Bautrocknung & Wasserschadensanierung von Trockfix Ingolstadt. Schnelle Anfahrt über A9, Erfahrung mit Ilm-Region. 24/7 Notdienst." />
        <link rel="canonical" href="https://trockfix.de/pfaffenhofen" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Schnell über die A9</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Bautrocknung & Wasserschadensanierung Pfaffenhofen</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Professionelle Hilfe bei Wasserschäden – auch in der Kreisstadt Pfaffenhofen.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1"><PhoneCall className="w-5 h-5 mr-2 animate-pulse" />Notdienst anrufen</a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">Beratung anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><MapPin className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Ca. 30 Min. über A9</span></div>
            <div className="flex items-center text-gray-700 font-medium"><CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Ilm-Tal Erfahrung</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Erreichbar</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Pfaffenhofen – Kreisstadt mit wachsendem Trocknungsbedarf</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Pfaffenhofen an der Ilm ist als Kreisstadt ein wirtschaftliches Zentrum zwischen München und Ingolstadt. Über die <strong>A9</strong> sind wir von unserem Standort in Ingolstadt in ca. <strong>30 Minuten</strong> vor Ort – eine Strecke, die wir regelmäßig für Kunden in der Region fahren.
            </p>

            <p className="mb-8">
              Die Lage an der <strong>Ilm</strong> bringt ähnliche Herausforderungen wie an der Donau: Nach Starkregenereignissen kann die Ilm über die Ufer treten und die angrenzenden Wohn- und Gewerbegebiete betreffen. Das <strong>Hochwasser von 2013</strong> hat gezeigt, dass auch Pfaffenhofen nicht vor Überflutungen sicher ist. Seitdem hat die Stadt in den Hochwasserschutz investiert, doch lokale Starkregenereignisse können weiterhin zu <strong>Kellerüberflutungen und Kanalrückstau</strong> führen.
            </p>

            <p className="mb-8">
              In Pfaffenhofen sehen wir einen gesunden Mix aus <strong>Neubau-Trocknungsprojekten</strong> (Bauträger, Eigenheim-Projekte) und <strong>Schadensanierungen</strong> in Bestandsgebäuden. Die Kreisstadt wächst, neue Wohngebiete entstehen – und mit jedem Neubau braucht es professionelle Estrichtrocknung und Belegreife-Messung.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Unsere Erfahrung in Pfaffenhofen:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Ilm-Hochwasser:</strong> Erfahrung mit der Sanierung nach Überflutungen im Ilm-Tal. Kontaminiertes Wasser, Schlammbeseitigung und Desinfektion.</span></li>
                <li className="flex items-start"><Wrench className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Neubautrocknung:</strong> Regelmäßige Einsätze bei Bauträgern und privaten Bauherren in den wachsenden Wohngebieten Pfaffenhofens.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Gewerbeobjekte:</strong> Trocknung und Sanierung von Gewerbe- und Industrieflächen in den Gewerbegebieten der Kreisstadt.</span></li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><MapPin className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Leistungen & Nachbarorte</h3>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/hochwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Hochwasserschaden</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarorte</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/neuburg-donau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neuburg a.d. Donau</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Pfaffenhofen</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ist Pfaffenhofen in Ihrem Einzugsgebiet?</h3>
                <p className="text-gray-600">Ja, Pfaffenhofen a.d. Ilm gehört zu unserem erweiterten Kerngebiet. Über die A9 sind wir schnell vor Ort – auch für regelmäßige Kontrollmessungen während laufender Trocknungen.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bieten Sie auch Bautrocknerverleih in Pfaffenhofen an?</h3>
                <p className="text-gray-600">Ja, wir liefern Bautrockner direkt auf Ihre Baustelle in Pfaffenhofen – Lieferung und Abholung sind im Mietpreis enthalten. Von Kondenstrocknern bis Adsorptionstrocknern haben wir alle Geräte verfügbar.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Können Sie bei Starkregen-Schäden in Pfaffenhofen helfen?</h3>
                <p className="text-gray-600">Absolut – Kellerüberflutungen nach Starkregen sind einer unserer häufigsten Einsatzgründe. Wir pumpen ab, trocknen und beraten zu Präventionsmaßnahmen wie Rückstauklappen und Drainage.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PfaffenhofenPage;
