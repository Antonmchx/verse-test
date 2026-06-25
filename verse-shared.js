window.SOFT_CONTINUUM_VERSE = {
  SANDBOX_BASE_URL: "https://iframe.demo.verse.works",
  SANDBOX_GRAPHQL_URL: "https://demo.verse.works/query",
  STORAGE_KEY: "soft-continuum-verse-sandbox",
  MINTS_KEY: "soft-continuum-verse-sandbox-mints",
  defaults: {
    artworkId: "c53c11ad-22e8-45c1-89f8-9da6cf4a769b",
    artworkUrl: "https://demo.verse.works/series/gen-project-test-by-mchx-test-acc",
    artworkTitle: "Gen Project Test",
    artistName: "MCHX test acc",
    iframeUrl: "https://public-bucket-verse-dev.s3.eu-west-1.amazonaws.com/genart/test_gen_project.html",
    previewImageUrl: "https://staging.dev.verse.works/image/w1400/static%2F2e54e78b-5279-4fb6-b36a-ffe881b2b6e9.png@jpeg"
  },
  getConfig() {
    try {
      const saved = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "{}");
      return { ...this.defaults, ...saved };
    } catch (error) {
      return { ...this.defaults };
    }
  },
  saveConfig(partialConfig) {
    const nextConfig = { ...this.getConfig(), ...partialConfig };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nextConfig));
    return nextConfig;
  },
  getMints() {
    try {
      return JSON.parse(localStorage.getItem(this.MINTS_KEY) || "[]");
    } catch (error) {
      return [];
    }
  },
  saveMints(mints) {
    localStorage.setItem(this.MINTS_KEY, JSON.stringify(mints));
  },
  addMint(mint) {
    const nextMints = [mint, ...this.getMints()];
    this.saveMints(nextMints);
    return nextMints;
  }
};
