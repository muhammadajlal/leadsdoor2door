import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Contact from "../../containers/contact/Contact";
import SplashScreen from "../../containers/splashScreen/SplashScreen";
import { splashScreen } from "../../portfolio";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Imprint.scss";

const Imprint = () => {
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
            <div className="main" id="imprint">
              <div className="main-div-imprint">
                <h1 className="div-heading-imprint">Impressum</h1>
                <div className="imprint-content">
                  <h2>Angaben gemäß § 5 TMG:</h2>
                  <h2>Leadsd2d</h2>
                  <p>vertreten durch <strong>IBG Immobilien Bau Gebäudemanagement GmbH</strong></p>
                  <p>Geschäftsführer <strong>Hr. Dursun Dogucu</strong></p>
                  <p>Südwestpark 37-41</p>
                  <p>90449 Nürnberg</p>
                  <p>Tel.: +49(0)911 / 80192994</p>
                  <p>Fax: +49(0)911 / 80192998</p>
                  <p>E-Mail: <a href="mailto:info@leadsd2d.de">info@leadsd2d.de</a></p>
                  <p>Web: <a href="https://www.leadsd2d.de" target="_blank" rel="noopener noreferrer">https://www.leadsd2d.de</a></p>
                  <p>Ust-Ident-Nummer gem. § 27a UStG: DE 335093234</p>
                  <p>Handelsregisternummer: HRB 37882</p>
                  <p>Registergericht: Nürnberg, Bayern</p>
                  <p>Steuernummer: 241/129/00825</p>
                  <h2>Haftungshinweis:</h2>
                  <p>
                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                  </p>
                  <h2>Haftungsausschluss</h2>
                  <h3>Haftung für Inhalte:</h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                  <h3>Haftung für Links:</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                  <h2>Urheberrecht</h2>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                  <h2>Streitschlichtung</h2>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
                  </p>
                  <p>
                    Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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

export default Imprint;