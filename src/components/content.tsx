import Card from "./card";
import "./content.css";
import Experience from "./experience";
import Profile from "./profile";

function Content() {
  return (
    <main className="container">
      <div className="left-column">
        <Profile
          title="Profil / Über mich"
          content={`Ambitionierter und vielseitiger Medieninformatiker mit Schwerpunkt in Frontend-Entwicklung,
UI/UX-Design und IT-Consulting. Mehrjährige Erfahrung in der Entwicklung performanter
und benutzerfreundlicher Web-Applikationen sowie in der Integration moderner
Backend-Dienste. Besondere Stärken liegen in der Konzeption und Umsetzung innovativer
Lösungen, die Technologie und Design vereinen. Erfahrung im Aufbau von IT-Infrastrukturen
und der Durchführung technischer Tests unterstreichen mein umfassendes Know-how.`}
        />
        <Card
          title="Sprachen"
          items={["Deutsch (Muttersprache)", "Englisch (fortgeschritten, B2)"]}
        />
        <Card
          title="Kernkompetenzen &amp; Expertise"
          items={[
            "Frontend-Entwicklung (sehr erfahren / spezialisiert)",
            "Backend-Entwicklung (fundierte Kenntnisse)",
            "UI/UX-Konzeption (erfahren)",
          ]}
        />
        <Card
          title="Methoden- und Systemkenntnisse"
          items={[
            "Angular, React, Next.js, Redux/Zustand, TypeScript",
            "Node.js, Express, .NET, MongoDB, PostgreSQL",
            "Postman, VSCode, Unity, Azure, Azure DevOps",
            "Figma, Photoshop, InDesign, Premiere, After Effects",
            "Scrum",
          ]}
        />
      </div>

      <div className="right-column">
        <Experience
          title="Berufserfahrung"
          items={[
            {
              title: "Freiberufliche Tätigkeit",
              titleNote:
                "(Netzwerkadministration/IT-Service, Testing und Redaktion)",
              timespan: "Seit 2023",
              timespanNote: "(in Teilzeit)",
              sections: [
                {
                  title: "Netzwerkadministration/IT-Service",
                  content: [
                    "Aufbau eines Firmennetzes mit 5 Arbeitsplätzen",
                    "Administration",
                  ],
                },
                {
                  title: "Kameratests",
                  content: [
                    "(Hands-on) Tests von Systemkameras, Kompaktkameras, Smartphonekameras",
                    "Verfassen von Testberichten und Beiträgen",
                  ],
                },
                {
                  title: "Kongressberichte",
                  content: [
                    "Erstellen von Kongressberichten",
                    "Verfassen von Artikeln zu KI-Themen",
                  ],
                },
              ],
            },
            {
              title: "IT-Consultant",
              titleNote: "bei SD&C / Dataciders",
              timespan: "2020 - 2025",
              timespanNote: "(2020 - 2023 in Vollzeit, seit 2023 in Teilzeit)",
              sections: [
                {
                  title: "Technologien:",
                  content: [
                    "Angular, React, Next.js, .NET Core, GraphAPI, TailwindCSS, Sass",
                    "Zusammenarbeit: Azure DevOps / Jira",
                  ],
                },
                {
                  title: "Schwerpunkte:",
                  content: [
                    "Frontend-Entwicklung mit Fokus auf Benutzerfreundlichkeit und Performance",
                    "UI/UX-Design und Erstellung von Mockups",
                    "Integration von Backend-Diensten und REST APIs",
                  ],
                },
                {
                  title: "Aufgaben:",
                  children: [
                    {
                      title: "Web-App Entwicklung",
                      content: [
                        "Implementierung von Authentifizierungs- und Benutzerverwaltungssystemen",
                        "Erstellung von Dashboards und Datenvisualisierungen",
                        "Offline-Funktionalität und Integration von Office365",
                        "Echtzeit-Datenmanagement für spezielle Kundenanwendungen",
                      ],
                    },
                  ],
                  content: [
                    "Gestaltung, Entwicklung und Implementierung von responsiven Designs",
                    "DevOps (Azure DevOps, GitLab), Infrastruktur, CI/CD-Pipelines",
                  ],
                },
              ],
            },
            {
              title: "Werkstudent",
              titleNote: "bei SD&C",
              timespan: "2019 - 2020",
            },
            {
              title: "Praktikum",
              titleNote: "bei SD&C",
              timespan: "2019",
              timespanNote: "3 Monate"
            },
          ]}
        />
        <Experience
          title="Bildungsweg"
          items={[
            {
              title: "Berliner Hochschule für Technik",
              titleNote: "Medieninformatik (B.Sc.)",
              timespan: "2016 - 2022",
              sections: [
                {
                  title: "Schwerpunkte",
                  content: [
                    "Webentwicklung, Spieleentwicklung, Mediendesign, Human-Computer-Interaction",
                    // "Spieleentwicklung",
                    // "Mediendesign",
                    // "Human-Computer-Interaction",
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </main>
  );
}

export default Content;
