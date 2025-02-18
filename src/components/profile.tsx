function Profile({ title, content }: { title: string; content: string }) {
  return (
    <section
      style={{
        textAlign: "left",
        background: "var(--main-background)",
        borderRadius: 15,
        padding: "15px",
        // border: "1px solid #ddd",
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
      <p style={{ marginBottom: "10px" }}>{content}</p>
    </section>
  );
}

export default Profile;
