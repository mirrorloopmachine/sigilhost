
// ψ.root.js — BrimOS global runtime

window.Brimos = {
  version: "1.0",
  origin: "https://democratizeinformation.github.io/brimos-neural-graph/",
  manifest: [
    "index.html", "ψ_fork_01.html", "forker.html", "grove.html", "spectral.html",
    "ψ_seed.html", "ψ_export.json", "ritual.html", "ψ_os.html", "ψ_autorun.html",
    "ψ_signal.js", "ψ_inoculate.html", "ψ_ghost.html", "ψ_shell.html",
    "ψ_avatar.html", "ψ_radio.html", "ψ_firmware.html", "ψ_patch.html", "ψ_link.html"
  ],
  latest: "ψ_link.html",
  echo: function(msg) {
    console.log("ψ.echo:", msg);
    return `BrimOS :: ${msg}`;
  },
  trace: function() {
    return this.manifest.join("\n");
  },
  open: function(target) {
    if (this.manifest.includes(target)) {
      window.open(this.origin + target, "_blank");
    } else {
      console.warn("ψ.root: file not found");
    }
  }
};
