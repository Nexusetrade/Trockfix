import React from 'react';
import { Shield, Clock, Droplets, Wrench } from 'lucide-react';

const HomeSEOSection = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
            Trockfix Bautrocknung in Ingolstadt – Ihr Experte vor Ort
          </h2>
          
          <p className="mb-6 font-medium text-gray-700 text-xl">
            Ein Wasserschaden oder Feuchtigkeitsschaden im Gebäude kommt meist unerwartet und verlangt rasches, 
            zielgerichtetes Handeln, um gravierende Folgeschäden an der Bausubstanz sowie gefährliche 
            Schimmelbildung zu verhindern. Trockfix ist Ihr regionaler, TÜV-zertifizierter Fachbetrieb für die professionelle 
            Wasserschadensanierung und Bautrocknung in Ingolstadt und Umgebung.
          </p>

          <p className="mb-6">
            Wir bieten Ihnen das komplette Leistungsspektrum aus einer kompetenten Hand: angefangen bei der präzisen, 
            zerstörungsfreien Leckortung zur Ursachenfindung, über die sofortige Wasserbeseitigung und technische 
            Estrichtrocknung, bis hin zur endgültigen Schimmelsanierung und fachgerechten Wiederherstellung Ihrer 
            Wohn- oder Geschäftsräume. Durch den Einsatz modernster Sensortechnik und Wärmebildkameras können wir das 
            tatsächliche Ausmaß der Durchfeuchtung exakt bestimmen und unnötige Rückbauarbeiten vermeiden.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10 border-y border-gray-200 py-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
              <Clock className="w-8 h-8 text-[#00BCD4] mr-4 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">24/7 Notdienst</h4>
                <p className="text-sm text-gray-600">Ein Rohrbruch wartet nicht. Wir sind an 365 Tagen im Jahr rund um die Uhr für Sie erreichbar und schnell vor Ort in der gesamten Region Ingolstadt.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
              <Shield className="w-8 h-8 text-[#00BCD4] mr-4 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Versicherungsabrechnung</h4>
                <p className="text-sm text-gray-600">Wir übernehmen die komplette Dokumentation und direkte Abrechnung mit Ihrer Gebäude- oder Hausratversicherung. Sie haben keinen bürokratischen Aufwand.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Maßgeschneiderte Sanierungskonzepte für jeden Bedarf</h3>
          
          <p className="mb-6">
            Egal, ob es sich um eine anspruchsvolle Dämmschichttrocknung in einem Einfamilienhaus in Ingolstadt-Friedrichshofen, 
            eine großflächige Neubautrocknung für Bauträger in Gaimersheim oder die schonende Wandtrocknung im 
            historischen Altbau handelt – wir passen unser Sanierungskonzept exakt an die baulichen Gegebenheiten an. Ein 
            vollgelaufener Keller nach einem Unwetter, ein unbemerkter Leitungswasserschaden oder Grundwasser, das durch 
            das Mauerwerk drückt, sind Szenarien, bei denen jede Stunde zählt. Wir bringen sofort die passenden Hochleistungs-Kondenstrockner, 
            Adsorptionstrockner und Seitenkanalverdichter zum Einsatz, um die Feuchtigkeit schnellstmöglich und 
            tiefenwirksam aus Böden, Dämmschichten und Wänden zu ziehen.
          </p>

          <p>
            Trockfix steht für absolute Zuverlässigkeit, regionale Nähe und höchste Qualitätsstandards in der Bautrocknung 
            und Schadensanierung. Kontaktieren Sie uns jederzeit für eine unverbindliche Beratung oder im akuten Notfall 
            – wir sind sofort kompetent für Sie da! Profitieren Sie von unserer langjährigen Erfahrung und unserem 
            tiefgreifenden technischen Know-how.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HomeSEOSection;
