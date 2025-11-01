function Footer() {
  return (
    <footer className="text-center border-top pt-4 mt-5 text-muted small">
      <p>
        &copy; {new Date().getFullYear()}    MovieApp | Open Source Web App </p>
      <p className="mt-2" style={{ fontSize: "0.9rem", color: "#6c757d" }}>
        Made by <span className="fw-bold text-primary">ccakir</span>
      </p>
    </footer>
  );
}

export default Footer