interface ExperienceItem {
  title: string;
  titleNote?: string;
  timespan: string;
  timespanNote?: string;
  sections?: SectionItem[];
}

interface SectionItem {
  title?: string;
  content?: string[];
  children?: SectionItem[];
}

function Experience({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  const renderSection = (sectionItem: SectionItem, index?: number) => {
    if (!sectionItem.title && !sectionItem.content && !sectionItem.children)
      return null;

    return (
      <li
        key={index}
        style={{
          marginBottom: "5px",
          borderTop: index !== 0 ? "1px dashed var(--main-white)" : "none",
          padding: "10px",
        }}
      >
        {sectionItem.title && (
          <h4 style={{ margin: "8px 0" }}>{sectionItem.title}</h4>
        )}

        {sectionItem.children && (
          <ul style={{ listStyle: "none" }}>
            {sectionItem.children?.map((child, indexC) =>
              renderSection(child, indexC)
            )}
          </ul>
        )}

        <ul style={{ listStyle: "none", paddingLeft: "10px" }}>
          {sectionItem.content?.map((contentItem, indexC) => (
            <li key={indexC} style={{ marginBottom: "5px" }}>
              {contentItem}
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <section
      style={{
        textAlign: "left",
        // background: "#7777f9",
        padding: "15px",
        // border: "2px solid rgb(205, 21, 21)",
        background: "var(--main-background)",
        borderRadius: 15,
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          fontSize: "1.2em",
          borderBottom: "2px solid var(--main-color)",
          paddingBottom: "5px",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {items.map((item, index) => (
          <article
            key={index}
            style={{
              padding: "0 15px 15px 0",
              borderRight: "2px dashed var(--main-color)",
              borderBottom: "2px dashed var(--main-color)",
              borderRadius: "0 0 15px 0",
            }}
          >
            <details open={window.innerWidth >= 768}>
              <summary>
                <h3
                  style={{
                    margin: "5px",
                    fontSize: "1.2em",
                    display: "inline",
                  }}
                >
                  {item.title}
                  <span
                    style={{
                      fontSize: "0.8em",
                      fontWeight: 400,
                      marginLeft: "10px",
                    }}
                  >
                    {item.titleNote}
                  </span>
                </h3>
              </summary>

              <p style={{ marginBottom: 0 }}>
                <strong>{item.timespan}</strong> {item.timespanNote}
              </p>
              <ul style={{ listStyle: "none", margin: 0 }}>
                {item.sections?.map((sectionItem, indexS) =>
                  renderSection(sectionItem, indexS)
                )}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
