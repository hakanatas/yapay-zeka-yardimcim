/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.8, tr: "Sınıf gazetesi çıkarıyoruz, işimiz çok!", en: "We're making a class newspaper. So much to do!",
      note: "Karo'nun sınıfı bir gazete hazırlıyor. Başlıklar, çizimler, İngilizce bir köşe... Yapay zekâ araçları yardım edebilir mi?" },
    { scene: 1, start: 8.6, end: 14.3, tr: "Doğru aracı seçip doğru kullanalım", en: "Let's pick the right tool and use it well",
      note: "Yapay zekâ araçlarını amacına uygun seçmeyi ve kullanmayı öğrenelim." },
    { scene: 2, start: 17.2, end: 23.2, tr: "Sohbet aracı: soru cevaplar, metin yazar", en: "Chat tool: answers questions, writes text",
      note: "Sohbet araçları sorularımızı cevaplar, fikir verir ve metin yazar." },
    { scene: 2, start: 24, end: 29.7, tr: "Görsel üretici: tariften resim çizer", en: "Image generator: draws from a description",
      note: "Görsel üretme araçları, yazdığımız tarife göre resim çizer." },
    { scene: 2, start: 30.5, end: 36.1, tr: "Çeviri aracı: başka dile çevirir", en: "Translator: turns text into another language",
      note: "Çeviri araçları bir metni başka bir dile çevirir." },
    { scene: 2, start: 36.9, end: 43.6, tr: "Ses ve video araçları da var", en: "There are audio and video tools too",
      note: "Yazıyı sese çeviren, video özetleyen araçlar da vardır. Her araç farklı bir amaca hizmet eder." },
    { scene: 3, start: 46.5, end: 52.1, tr: "Gazetenin her işine bir araç", en: "A tool for each newspaper job",
      note: "Gazetedeki işleri uygun araçlarla eşleştirelim." },
    { scene: 3, start: 53, end: 58.6, tr: "Başlığa sohbet, çizime görsel aracı", en: "Chat for headlines, an image tool for drawings",
      note: "Başlık fikirleri için sohbet aracı, fidan çizimi için görsel üretici kullanırız." },
    { scene: 3, start: 59.5, end: 66.8, tr: "İngilizce köşeye çeviri, sesli gazeteye ses", en: "Translation for the English corner, audio for a spoken edition",
      note: "İngilizce köşe için çeviri aracı, görme engelli arkadaşlarımız için gazetenin sesli hâlini hazırlarken ses aracı kullanabiliriz." },
    { scene: 4, start: 69.5, end: 75.2, tr: "Belirsiz istem, belirsiz cevap", en: "A vague prompt gets a vague answer",
      note: "Karo önce \"Başlık yaz\" dedi. Araç ne için ve kimin için olduğunu sordu. İstem çok belirsizdi." },
    { scene: 4, start: 76, end: 83.2, tr: "Konu, kitle ve biçim ekle", en: "Add the topic, audience and format",
      note: "Karo istemini netleştirdi: 6. sınıf gazetesi, fidanlar, 3 kısa ve eğlenceli başlık. Şimdi cevap işe yarıyor!" },
    { scene: 4, start: 84, end: 90.7, tr: "Seçtiğin başlığı çevirt", en: "Have your chosen headline translated",
      note: "Karo ikinci başlığı seçti ve İngilizceye çevirmesini istedi." },
    { scene: 4, start: 91.5, end: 98.2, tr: "Sonucu kontrol et ve belirt", en: "Check the result and credit the AI",
      note: "Çeviriyi öğretmeniyle ve sözlükle kontrol etti. Gazetede de \"yapay zekâ desteğiyle hazırlandı\" diye belirtti." },
    { scene: 5, start: 101, end: 107.4, tr: "Basit bir toplama için sohbet aracına sormak", en: "Asking a chatbot for simple addition",
      note: "12 artı 8 gibi basit bir işlem için yapay zekâya sormak gereksizdir; kendimiz ya da hesap makinesiyle hemen buluruz." },
    { scene: 5, start: 108.2, end: 114.9, tr: "Gerçek bir kişinin sahte fotoğrafını ürettirmek", en: "Generating a fake photo of a real person",
      note: "Gerçek bir kişinin sahte fotoğrafını üretmek yanıltıcıdır ve etik değildir." },
    { scene: 5, start: 115.7, end: 121.4, tr: "Fikir alıp kendi cümlelerimle yazmak", en: "Getting ideas, then writing in my own words",
      note: "Yapay zekâdan fikir alıp haberi kendi cümlelerimizle yazmak hem verimli hem doğrudur." },
    { scene: 6, start: 124.2, end: 131.7, tr: "Aklında kalsın: yapay zekâ yardımcıdır, sorumlu sensin", en: "Remember: AI helps, but you are responsible",
      note: "Aklında kalsın: yapay zekâ güçlü bir yardımcıdır. Ama doğru aracı seçmek, net istemek ve sonucu kontrol etmek senin görevin." },
    { scene: 6, start: 132.4, end: 138.2, tr: "Akıllı araç, akıllı kullanıcı!", en: "Smart tool, smart user!",
      note: "Akıllı araçları akıllıca kullan!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
