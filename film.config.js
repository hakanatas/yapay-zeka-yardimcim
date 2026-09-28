/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "yapay-zeka-yardimcim",
    "title": "Yapay Zekâ Yardımcım",
    "titleEn": "My AI Helper",
    "grade": 6,
    "theme": "Yapay Zekâ",
    "code": "BTY.6.5.2",
    "outcome": "Yapay zekâ araç ve teknolojileri ile çalışabilme",
    "outcomeEn": "Working with AI tools and technologies",
    "duration": 139.5,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.7,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.7,
      "t1": 45,
      "name": "Araçlar",
      "en": "Tools",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 45,
      "t1": 68.1,
      "name": "Hangi araç?",
      "en": "Which tool?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 68.1,
      "t1": 99.6,
      "name": "Aracı kullan",
      "en": "Use the tool",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 99.6,
      "t1": 122.8,
      "name": "Uygun ve verimli mi?",
      "en": "Suitable and efficient?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 122.8,
      "t1": 139.5,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
