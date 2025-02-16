document.addEventListener("DOMContentLoaded", function () {
  // Hedef tarihi ayarlayın (yıl, ay (0-11), gün, saat, dakika, saniye)
  var hedefTarih = new Date("2026-10-06T12:00:00");

  // Kalan süreyi hesaplayan fonksiyon
  function kalanSureyiHesapla() {
    var simdikiZaman = new Date();
    var kalanSure = hedefTarih - simdikiZaman;

    if (kalanSure > 0) {
      var gunler = Math.floor(kalanSure / (1000 * 60 * 60 * 24));
      var saatler = Math.floor(
        (kalanSure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var dakikalar = Math.floor((kalanSure % (1000 * 60 * 60)) / (1000 * 60));
      var saniyeler = Math.floor((kalanSure % (1000 * 60)) / 1000);

      var kalanSureMetni =
        `<h1>Açılışa Son</h1>` +
        gunler +
        " gün " +
        saatler +
        " saat " +
        dakikalar +
        " dakika " +
        saniyeler +
        " saniye";
      document.getElementById("kalan-sure").innerHTML = kalanSureMetni;
    } else {
      document.getElementById("kalan-sure").innerHTML = "Süre doldu!";
    }
  }

  // Belirli aralıklarla kalan süreyi güncelleyin (örneğin, her saniyede bir)
  setInterval(kalanSureyiHesapla, 1000);

  // Sayfa yüklendiğinde kalan süreyi bir kere hesaplayın ve gösterin
  kalanSureyiHesapla();
});
