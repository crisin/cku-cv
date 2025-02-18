function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <section
      style={{
        textAlign: 'left',
        // background: "#7777f9",
        padding: "15px",
        // border: "1px solid #ddd",
        background: "var(--main-background)",
        borderRadius: 15,
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          fontSize: "1.2em",
          borderBottom: "2px solid var(--main-color)",
          paddingBottom: "5px",
        }}
      >
        {title}
      </h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Card;
