function Header() {
  return (
    <header
      style={{
        // background: "#ff0011",
        // padding: "20px",
        borderBottom: "2px solid var(--main-color)",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ fontSize: "2em", marginBottom: "10px" }}>Christian Kube</h1>
      <p style={{ fontSize: "1em", margin: "5px 0 20px 0" }}>
        IT-Consultant / Softwareentwickler
      </p>
    </header>
  );
}

export default Header;
