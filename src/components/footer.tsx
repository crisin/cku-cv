function Footer() {
  return (
    <footer
      style={{
        marginTop: 48,
        display: "flex",
        justifyContent: "center",
        gap: 48,
        padding: 20,
        borderTop: '1px dashed var(--main-white)'
      }}
    >
      <a href="https://kube-merz.de/impressum.html">Impressum</a>
      <a href="https://kube-merz.de/datenschutz.html">Datenschutz</a>
    </footer>
  );
}

export default Footer;
