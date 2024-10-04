import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Contact from "../../containers/contact/Contact";
import SplashScreen from "../../containers/splashScreen/SplashScreen";
import { splashScreen } from "../../portfolio";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Privacy.scss";

const Privacy = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <div className="main" id="privacy">
              <div className="main-div-privacy">
                <h1 className="div-heading-privacy">Datenschutzerklärung Leadsd2d.de</h1>
                <div className="privacy-content">
                  <p>
                    Mit dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten (im Folgenden auch nur als “Daten” bezeichnet) aufklären. Personenbezogene Daten sind alle Daten, die einen persönlichen Bezug zu Ihnen aufweisen, z. B. Name, Adresse, E-Mail-Adresse oder Ihr Nutzerverhalten. Die Datenschutzerklärung gilt für alle von uns vorgenommenen Datenverarbeitungsvorgänge sowohl im Rahmen unserer Kerntätigkeit als auch für die von uns vorgehaltenen Online-Medien.
                  </p>
                  <h2>Verantwortlich für die Datenverarbeitung ist:</h2>
                  <p><strong>Leadsd2d.de</strong></p>
                  <p>vertreten durch</p>
                  <p><strong>IBG Immobilien Bau Gebäudemanagement GmbH</strong></p>
                  <p>Geschäftsführer: <strong>Herr Dursun Dogucu</strong></p>
                  <p>Südwestpark 37-41</p>
                  <p>90449 Nürnberg</p>
                  <p>Tel.: +49(0)911 / 80192994</p>
                  <p>Fax: +49(0)911 / 80192998</p>
                  <p>E-Mail: <a href="mailto:info@leadsd2d.de">info@leadsd2d.de</a></p>
                  <p>Web: <a href="https://www.leadsd2d.de" target="_blank" rel="noopener noreferrer">https://www.leadsd2d.de</a></p>
                  <h2>Ihre Rechte nach der DSGVO</h2>
                  <p>
                    Nach der DSGVO stehen Ihnen die nachfolgend aufgeführten Rechte zu, die Sie jederzeit bei dem oben genannten Verantwortlichen geltend machen können:
                  </p>
                  <ul>
                    <li><strong>Recht auf Auskunft:</strong> Sie haben das Recht, von uns Auskunft darüber zu verlangen, ob und welche Daten wir von Ihnen verarbeiten.</li>
                    <li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen.</li>
                    <li><strong>Recht auf Löschung:</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.</li>
                    <li><strong>Recht auf Einschränkung:</strong> Sie haben in bestimmten Fällen das Recht zu verlangen, dass wir Ihre Daten nur noch eingeschränkt bearbeiten.</li>
                    <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht zu verlangen, dass wir Ihnen oder einem anderen Verantwortlichen Ihre Daten in einem strukturierten, gängigen und maschinenlesebaren Format übermitteln.</li>
                    <li><strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes, Ihres Arbeitsplatzes oder unseres Firmensitzes.</li>
                  </ul>
                  <h2>Widerrufsrecht</h2>
                  <p>
                    Sie haben das Recht, die von Ihnen erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.
                  </p>
                  <h2>Widerspruchsrecht</h2>
                  <p>
                    Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer Daten, die wir auf unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO stützen, Widerspruch einzulegen. Sofern Sie von Ihrem Widerspruchsrecht Gebrauch machen, bitten wir Sie um die Darlegung der Gründe. Wir werden Ihre personenbezogenen Daten dann nicht mehr verarbeiten, es sei denn, wir können nachweisen, dass zwingende schutzwürdige Gründe für die Verarbeitung Ihre Interessen und Rechte überwiegen.
                  </p>
                  <p>
                    Unabhängig vom Vorstehenden haben Sie das jederzeitige Recht, der Verarbeitung Ihrer personenbezogenen Daten für Zwecke der Werbung und Datenanalyse zu widersprechen.
                  </p>
                  <p>
                    Ihren Widerspruch richten Sie bitte an die oben angegebene Kontaktadresse des Verantwortlichen.
                  </p>
                  <h2>Wann löschen wir Ihre Daten?</h2>
                  <p>
                  Wir löschen Ihre Daten dann, wenn wir diese nicht mehr benötigen oder Sie uns dazu auffordern. Das bedeutet, dass wir Ihre Daten löschen,
                  </p>
                  <ul>
                    <li>wenn der Zweck der Datenverarbeitung weggefallen ist und damit die jeweilige in den einzelnen Datenschutzhinweisen genannte Rechtsgrundlage nicht mehr besteht, also bspw.</li>
                    <li>nach Beendigung der zwischen uns bestehenden vertraglichen Beziehungen (Art. 6 Abs. 1 lit. b DSGVO) oder.</li>
                    <li>nach Wegfall unseres berechtigten Interesses an der weiteren Verarbeitung oder Speicherung Ihrer Daten (Art. 6 Abs. 1 lit. f DSGVO.</li>
                    <li>wenn Sie von Ihrem Widerrufsrecht Gebrauch machen und keine anderweitige gesetzliche Rechtsgrundlage für die Verarbeitung im Sinne von Art. 6 Abs. 1 lit. b–f DSGVO eingreift.</li>
                    <li>wenn Sie von Ihrem Widerspruchsrecht Gebrauch machen und der Löschung keine zwingenden schutzwürdigen Gründe entgegenstehen.</li>                  </ul>

                  <p>
                    Sofern wir (bestimmte Teile) Ihrer Daten jedoch noch für andere Zwecke vorhalten müssen, weil dies etwa steuerliche Aufbewahrungsfristen (in der Regel sechs Jahre für Geschäftskorrespondenz bzw. zehn Jahre für Buchungsbelege) oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen aus vertraglichen Beziehungen (bis zu vier Jahren) erfordern oder die Daten zum Schutz der Rechte einer anderen natürlichen oder juristischen Person benötigt werden, löschen wir (den Teil) Ihrer Daten erst nach Ablauf dieser Fristen. Bis zum Ablauf dieser Fristen beschränken wir die Verarbeitung dieser Daten jedoch auf diese Zwecke (Erfüllung der Aufbewahrungspflichten).
                  </p>
                  <h2>Webhosting</h2>

                  Wir bedienen uns zum Vorhalten unserer Internetseiten eines Anbieters (Hosting), auf dessen Server unsere Internetseiten gespeichert und für den Abruf im Internet verfügbar gemacht werden. Hierbei können von dem Anbieter all diejenigen Daten verarbeitet werden, die bei der Nutzung unserer Internetseiten anfallen. Hierzu gehören insbesondere Ihre IP-Adresse, die der Anbieter benötigt, um unser Online-Angebot an den von Ihnen genutzten Browser ausliefern zu können, sowie sämtliche von Ihnen über unsere Internetseite getätigten Eingaben. Daneben kann der von uns genutzte Anbieter
                  <ul>
                    <li> das Datum und die Uhrzeit des Zugriffs auf unsere Internetseite,</li>
                    <li> Zeitzonendifferenz zur Greenwich Mean Time (GMT),</li>
                    <li> Zugriffsstatus (HTTP-Status),</li>
                    <li> die übertragene Datenmenge,</li>
                    <li> den Internet-Service-Provider des zugreifenden Systems,</li>
                    <li> den von Ihnen verwendeten Browsertyp und dessen Version,</li>
                    <li> das von Ihnen verwendete Betriebssystem,</li>
                    <li> die Internetseite, von welcher Sie gegebenenfalls auf unsere Internetseite gelangt sind, </li>
                    <li> die Seiten bzw. Unterseiten, welche Sie auf unserer Internetseite besuchen, </li>
                  </ul>
                  <p>
                    erheben. Die vorgenannten Daten werden als Logfiles auf den Servern unseres Hosting-Anbieters gespeichert. Dies ist erforderlich, um die Stabilität und Sicherheit des Betriebs unserer Internetseite zu gewährleisten.
                  </p>

                  <p>
                  <strong>Email-Versand:</strong> Neben dem Hosting unserer Webseite haben wir unseren Anbieter außerdem damit beauftragt, unsere E-Mails zu versenden, zu empfangen und zu speichern. Hierzu verarbeitet unser Anbieter die E-Mail-Adressen der Empfänger und Absender sowie weitere bei der E-Mail-Kommunikation anfallende Daten (Metadaten wie Zeit, IP-Adresse etc.) sowie den Inhalt der jeweiligen E-Mails. Wir möchten Sie darauf aufmerksam machen, dass E-Mails grundsätzlich unverschlüsselt versendet werden. Wir übernehmen daher keine Verantwortung für den Übertragungsweg der E-Mails zwischen dem Absender und dem Empfang auf unserem Server.
                  </p>
                  <h2>Betroffene Daten:</h2>
                  <ul>
                    <li>Inhaltsdaten (bspw. Posts, Fotos, Videos)</li>
                    <li>Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
                    <li>Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse)</li>
                  </ul>
                  <h2>Betroffene Personen:</h2>
                  <p>Nutzer unserer Internetpräsenz</p>
                  <h2>Verarbeitungszweck:</h2>
                  <p>Ausspielen unserer Internetseiten, Gewährleistung des Betriebs unserer Internetseiten</p>
                  <h2>Rechtsgrundlage:</h2>
                  <p>Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO</p>
                  <h2>Kontaktaufnahme</h2>
                  <p>
                    Soweit Sie uns über E-Mail, soziale Medien, Telefon, Fax, Post, unser Kontaktformular oder auf sonstigem Wege ansprechen und uns hierbei personenbezogene Daten wie Ihren Namen, Ihre Telefonnummer oder Ihre E-Mail-Adresse zur Verfügung stellen oder weitere Angaben zu Ihrer Person oder Ihrem Anliegen machen, verarbeiten wir diese Daten zur Beantwortung Ihrer Anfrage im Rahmen der zwischen uns bestehenden vorvertraglichen oder vertraglichen Beziehungen.
                  </p>
                  <h2>Betroffene Daten:</h2>
                  <ul>
                    <li>Bestandsdaten (bspw. Namen, Adressen)</li>
                    <li>Kontaktdaten (bspw. E-Mail-Adresse, Telefonnummer, Postanschrift)</li>
                    <li>Inhaltsdaten (Texte, Fotos, Videos)</li>
                    <li>Vertragsdaten (bspw. Vertragsgegenstand, Vertragsdauer)</li>
                  </ul>
                  <h2>Betroffene Personen:</h2>
                  <p>Interessenten, Kunden, Geschäfts- und Vertragspartner</p>
                  <h2>Verarbeitungszweck:</h2>
                  <p>Kommunikation sowie Beantwortung von Kontaktanfragen, Büro- und Organisationsverfahren</p>
                  <h2>Rechtsgrundlage:</h2>
                  <p>Vertragserfüllung und vorvertragliche Anfragen, Art. 6 Abs. 1 lit. b DSGVO; berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO</p>
                  <h2>Sicherheitsmaßnahmen</h2>
                  <p>
                    Wir treffen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand der Technik, um die Vorschriften der Datenschutzgesetze einzuhalten und Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
                  </p>
                  <h2>Aktualität und Änderung dieser Datenschutzerklärung</h2>
                  <p>
                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Oktober 2020. Aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
                  </p>
                  <p>
                    Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators von SOS Recht erstellt. SOS Recht ist ein Angebot der Mueller.legal Rechtsanwälte Partnerschaft mit Sitz in Berlin.
                  </p>
                </div>
              </div>
            </div>
            <Contact />
            <Footer />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Privacy;