export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogArticle {
  sections: BlogSection[];
  faq: BlogFaq[];
}

/**
 * Paragraf metinlerinde `[metin](/yol)` biçimindeki iç linkler RichText
 * bileşeniyle otomatik olarak Link'e çevrilir.
 */
export const BLOG_CONTENT: Record<string, BlogArticle> = {
  "mutfak-dolabi-secerken-nelere-dikkat-edilir": {
    sections: [
      {
        heading: "Mutfak dolabı seçerken önce neye bakmalı?",
        paragraphs: [
          "Mutfak dolabı alırken çoğu kişi ilk önce renge ve kapak modeline bakıyor, bu doğal bir refleks çünkü mutfak evin en çok görülen odalarından biri. Ama biz atölyede yıllardır aynı şeyi söylüyoruz: önce ölçü, sonra malzeme, en son renk. Standart hazır dolap sistemleri belli genişliklerde üretildiği için mutfağınızın gerçek ölçüsüne nadiren tam oturuyor, aradaki boşluk dolgu paneliyle kapatılıyor ve o boşluk hem göze hem depolama alanına yazık oluyor.",
          "Çorum'da girdiğimiz mutfakların büyük kısmı apartman dairesi. Bu daireler birbirine çok benziyor gibi görünse de duvar açısı, priz yeri, davlumbaz boşluğu neredeyse her dairede birkaç santim farklı çıkıyor. [Mutfak dolabı](/mutfak-dolabi) siparişine başlarken bu yüzden çizimle değil, yerinde ölçüyle başlıyoruz; santim hatası montaj gününde ortaya çıkarsa geri dönüşü hem zaman hem malzeme kaybı oluyor.",
        ],
      },
      {
        heading: "MDF, laminat, masif ahşap: hangisi mutfak dolabına uygun?",
        paragraphs: [
          "Lake MDF orta bütçeli mutfaklarda en çok tercih edilen seçenek, çünkü mat ya da parlak yüzeyle şık bir görünüm veriyor. Laminat (melamin kaplama MDF) daha ekonomik ve çizilmeye karşı lakeye göre biraz daha dayanıklı, ama yüzey dokusu lake kadar zengin değil. Masif ahşap kaplama en pahalı seçenek olsa da hem görsel hem kullanım ömrü açısından bambaşka bir sınıfta.",
          "Hangisini seçerseniz seçin, bulaşık makinesi ve lavabo altındaki gövdede suya dayanıklı yeşil MDF kullanılması gerekiyor. Bu ayrıntı atlanırsa birkaç yıl içinde şişme ve kabarma neredeyse kaçınılmaz oluyor; biz bu noktaları standart olarak yeşil MDF ile üretiyoruz ve ekstra ücret çıkarmıyoruz.",
        ],
      },
      {
        heading: "Menteşe ve çekmece rayı neden bu kadar önemli?",
        paragraphs: [
          "Ucuz menteşe ve rayla üretilmiş bir mutfak dolabında iki yıl içinde kapak sarkması, çekmece takılması gibi şikayetler sık görülüyor. Soft-close (yumuşak kapanma) sistemler başta biraz daha maliyetli görünse de günlük kullanımda hem sessiz hem uzun ömürlü; atölyede bu yüzden orta-üst segment aksesuar tercih ediyoruz. Küçük bir detay gibi görünse de mutfak dolabı her gün onlarca kez açılıp kapanan bir mobilya, ucuz aksesuarın maliyeti kısa sürede geri dönüyor.",
        ],
      },
      {
        heading: "Ölçüden montaja: süreç nasıl işliyor?",
        paragraphs: [
          "İlk adım WhatsApp ya da telefon üzerinden kısa bir görüşme: mutfağın büyüklüğü, beklenen tarz, varsa referans görsel konuşuluyor. Ardından atölyeden bir ekip mutfağa gidip tüm ölçüleri, priz ve tesisat noktalarını, varsa eğik duvarları not alıyor. Ölçü sonrası 2-3 gün içinde çizim ve fiyat teklifi hazırlanıyor; onay verildikten sonra üretim başlıyor, kapasiteye göre bu süre genelde 10-20 gün arasında değişiyor.",
          "Taşınma ve yeni ev dönemlerinde (özellikle yaz sonu ve okul öncesi) mutfak dolabı talebi belirgin şekilde artıyor, atölyenin haftalık üretim kapasitesi sınırlı olduğu için bu dönemlerde ölçü randevusunu erken almanız teslim tarihinizi de kısaltıyor. [İletişim sayfamızdan](/iletisim) WhatsApp'a yazarak randevu gününü netleştirebilirsiniz.",
        ],
      },
      {
        heading: "Mutfak dolabı fiyatını neler belirler?",
        paragraphs: [
          "Fiyat metrekare değil, doğrusal metre (dolabın önden görünen uzunluğu) ve kullanılan malzemeye göre hesaplanıyor. Kapak malzemesi, tezgah malzemesi, çekmece sayısı ve aksesuar seçimi (sepetli sistem, köşe dolap mekanizması gibi) toplam fiyatı doğrudan etkiliyor. Telefonda verilen rakamlar her zaman tahmini kalıyor, net fiyat ancak ölçü alındıktan sonra veriliyor.",
          "Mutfak dolabı siparişi verirken evin diğer alanlarını da aynı anda planlamak avantajlı oluyor; örneğin yatak odası yenileniyorsa [komidin](/blog/komidin-secerken-nelere-dikkat-edilmeli) ölçüsünü, giyinme odası varsa [gardırop](/blog/ozel-olcu-gardirop-fiyatlari-nasil-belirlenir) siparişini aynı ziyarette konuşmak hem zaman hem ulaşım açısından kazandırıyor.",
        ],
      },
    ],
    faq: [
      {
        question: "Mutfak dolabı ölçüsü ne kadar sürede alınır?",
        answer:
          "Standart bir mutfak için ölçü alımı genelde 30-45 dakika sürüyor, eğik duvar veya karmaşık tesisat noktası varsa bu süre biraz uzayabiliyor. Randevu WhatsApp üzerinden alınıyor ve atölyenin yoğunluğuna göre 2-5 gün içinde mutfağınıza gelinebiliyor.",
      },
      {
        question: "Hazır mutfak dolabı ile özel ölçü arasındaki fark ne kadar tutuyor?",
        answer:
          "Fark malzeme ve kapak seçimine göre değişse de özel ölçü üretim genelde hazır sistemlere göre daha uzun ömürlü çıkıyor, çünkü boşluk kalmıyor ve aksesuar kalitesi baştan doğru seçiliyor. Uzun vadede tamir ve değişim maliyeti hazır sistemlerde daha sık ortaya çıkıyor.",
      },
      {
        question: "Mutfak dolabı üretim süresi ne kadar?",
        answer:
          "Ölçü ve onay sonrası üretim genelde 10-20 gün arasında tamamlanıyor. Yoğun dönemlerde (taşınma sezonu, yıl sonu) bu süre biraz uzayabiliyor, bu yüzden net teslim tarihi teklif aşamasında yazılı olarak veriliyor.",
      },
    ],
  },

  "ozel-olcu-gardirop-fiyatlari-nasil-belirlenir": {
    sections: [
      {
        heading: "Özel ölçü gardırop fiyatını neler belirler?",
        paragraphs: [
          "Gardırop fiyatı sorulduğunda tek bir rakam vermek genelde mümkün olmuyor, çünkü fiyatı belirleyen birden fazla değişken var: odanın ölçüsü, kullanılan malzeme, kapak sistemi (sürgülü ya da menteşeli) ve iç düzenleme aksesuarları. İki oda aynı büyüklükte olsa bile biri sürgülü kapak ve aynalı panel isterken diğeri klasik menteşeli kapakla devam edebiliyor, bu da fiyatı ciddi şekilde değiştiriyor.",
          "[Gardırop](/gardirop) siparişinde de mutfak dolabında olduğu gibi süreç ölçüyle başlıyor. Odanın genişliği, tavan yüksekliği, varsa eğik tavan veya kolon çıkıntısı yerinde ölçülmeden net fiyat verilmiyor; telefonda paylaşılan rakamlar sadece yaklaşık bir aralık.",
        ],
      },
      {
        heading: "Sürgülü mü, menteşeli mi: kapak sistemi seçimi",
        paragraphs: [
          "Sürgülü sistem dar odalarda kapı açılım alanı harcamadığı için özellikle küçük yatak odalarında tercih ediliyor, ayrıca aynalı panel seçeneğiyle odayı görsel olarak büyütüyor. Menteşeli sistem ise iç hacme tam erişim sağladığı için geniş odalarda ve giyinme odalarında daha pratik. Sürgülü sistemin ray mekanizması menteşeliye göre biraz daha maliyetli, ama günlük kullanımda sessiz ve yumuşak kapanma sunuyor.",
        ],
      },
      {
        heading: "İç düzenleme: raf, çekmece ve askı sistemi",
        paragraphs: [
          "Gardıropta asıl fark çoğu zaman dışarıdan görünmeyen iç düzenlemede ortaya çıkıyor. Kışlık-yazlık ayrımı yapan çift askı barı, ayakkabılık, kravat-kemer bölmesi gibi detaylar sonradan eklenmesi zor parçalar olduğu için ilk üretimde planlanması gerekiyor. Atölyede müşteriyle bu detayları ölçü aşamasında konuşuyoruz, çünkü sonradan 'bir çekmece daha olsaydı' demek neredeyse her zaman yeni bir üretim anlamına geliyor.",
          "Vestiyer ve giyinme odası taleplerinde iç düzenleme daha da öne çıkıyor; burada amaç sadece asmak değil, aksesuar ve ayakkabı gibi farklı boyutlardaki eşyaları da düzenli tutmak.",
        ],
      },
      {
        heading: "Gardırop siparişi verirken atölyeden ne beklemeli?",
        paragraphs: [
          "Taşınma ve okul dönemi öncesi (özellikle ağustos-eylül) gardırop ve giyinme odası talepleri belirgin şekilde artıyor. Bu dönemlerde atölyenin haftalık üretim kapasitesi hızla doluyor, bu yüzden taşınma tarihiniz netse ölçü randevusunu mümkün olduğunca erken almanızı öneriyoruz. [İletişim sayfamızdan](/iletisim) WhatsApp'a yazarak uygun tarihi öğrenebilirsiniz.",
          "Dekorasyon tarafında kararsızsanız [dekorasyon danışmanlığı](/hizmetler/dekorasyon-danismanligi) hizmetimizden faydalanabilirsiniz; renk ve malzeme seçiminde imalat tecrübemize dayanarak yol gösteriyoruz, böylece gardırop odanın geri kalanıyla uyumlu çıkıyor.",
        ],
      },
    ],
    faq: [
      {
        question: "Gardırop ölçüsü alınırken hangi noktalara dikkat edilir?",
        answer:
          "Genişlik ve yükseklik dışında tavan payı, varsa kolon çıkıntısı, priz yerleri ve kapı açılım yönü kontrol ediliyor. Eğik tavanlı odalarda gardırop tasarımı bu eğime göre özel olarak çiziliyor, standart ölçüyle devam edilmiyor.",
      },
      {
        question: "Sürgülü gardırop menteşeliye göre daha mı pahalı?",
        answer:
          "Genellikle evet, çünkü ray mekanizması ve panel sistemi menteşeli kapağa göre daha fazla malzeme ve işçilik gerektiriyor. Ancak dar odalarda alan tasarrufu sağladığı için birçok müşteri bu farkı göze alıyor.",
      },
      {
        question: "Vestiyer ile gardırop arasındaki fark nedir?",
        answer:
          "Gardırop genelde yatak odasına bitişik, kapaklı bir depolama mobilyasıdır. Vestiyer ise ayrı bir oda ya da köşe olarak düzenlenen, çoğu zaman kapaksız açık raf ve askı sistemleriyle kurulan daha geniş bir giyinme alanıdır.",
      },
    ],
  },

  "komidin-secerken-nelere-dikkat-edilmeli": {
    sections: [
      {
        heading: "Komidin küçük bir mobilya, ama neden bu kadar çok soruluyor?",
        paragraphs: [
          "Komidin genelde yatak odası siparişinin en son konuşulan parçası oluyor, ama aslında en çok kullanılan mobilyalardan biri: telefon şarj kablosu, gözlük, kitap, gece lambası hepsi orada duruyor. Küçük boyutu yüzünden çoğu kişi 'hazır alırım' diye düşünüyor, ama yatak yüksekliğiyle uyumsuz bir komidin hem kullanışsız hem görsel olarak dengesiz duruyor.",
          "Atölyede yatak odası ölçüsü alırken komidini de birlikte planlıyoruz, çünkü ayrı satın alınan hazır komidin çoğu zaman yatağın yüksekliğiyle ya da diğer mobilyaların rengiyle tam oturmuyor. Özellikle özel ölçü [yatak odası](/yatak-odasi) setlerinde komidin son anda eklenen değil, baştan tasarlanan bir parça olmalı.",
        ],
      },
      {
        heading: "Ölçü: yatak yüksekliğiyle uyumlu komidin nasıl olur",
        paragraphs: [
          "Doğru komidin yüksekliği genelde yatak üst yüzeyiyle aynı seviyede ya da birkaç santim altında oluyor; çok alçak bir komidin yatakta uzanan biri için ulaşılması zor hale geliyor, çok yüksek olan da göz hizasında rahatsız edici duruyor. Yatağınız baza yüksek bir modelse ya da yeni bir yatak alacaksanız, komidin ölçüsünü yatak kesinleştikten sonra netleştirmek daha sağlıklı.",
          "Genişlik konusunda da oda büyüklüğüne göre esneklik var; dar odalarda 35-40 cm genişlikte dar komidin modelleri tercih ediliyor, geniş odalarda çekmeceli ve raflı daha büyük modeller daha kullanışlı oluyor.",
        ],
      },
      {
        heading: "Malzeme ve çekmece sistemi: komidin de hırpalanır mı?",
        paragraphs: [
          "Komidin mutfak dolabı kadar nem görmese de her gün açılıp kapanan bir çekmecesi var, bu yüzden aksesuar kalitesi burada da önemli. Ucuz rayla üretilmiş bir komidin çekmecesi bir-iki yıl içinde takılmaya başlıyor. Soft-close ray sistemi burada da hem sessiz hem uzun ömürlü bir kullanım sağlıyor, atölyede yatak odası setinin tamamında aynı kalitede aksesuar kullanıyoruz.",
        ],
      },
      {
        heading: "Set mi, tek parça mı: komidin siparişinde yaygın tercihler",
        paragraphs: [
          "Bazı müşteriler yatak odasını komple set olarak (yatak başlığı, komidin, şifonyer birlikte) sipariş ediyor, bazıları sadece komidini yeniliyor. Set siparişte renk ve malzeme uyumu otomatik sağlanıyor, tek parça siparişte ise mevcut mobilyanın rengine ve kaplama dokusuna en yakın malzemeyi bulmaya çalışıyoruz. Mevcut mobilyanın fotoğrafını paylaşmanız bu eşleştirmeyi büyük ölçüde kolaylaştırıyor.",
          "Yatak odası yenileme kararı aldıysanız komidinle birlikte [gardırop](/gardirop) ya da genel [mutfak dolabı](/blog/mutfak-dolabi-secerken-nelere-dikkat-edilir) planlamasını da aynı ziyarette konuşmak, ayrı ayrı randevu almaktan hem daha hızlı hem daha ekonomik çıkıyor.",
        ],
      },
      {
        heading: "Komidin fiyatını ne belirler?",
        paragraphs: [
          "Fiyatı belirleyen ana etkenler malzeme (laminat, lake, ahşap kaplama), çekmece sayısı ve raf detayları. Tek parça komidin siparişleri set siparişlere göre orantılı olarak biraz daha yüksek maliyetli çıkabiliyor, çünkü üretim tek bir parça için ayrı planlanıyor. Net fiyat için [bireysel özel ölçü sipariş](/hizmetler/bireysel-ozel-olcu-siparis) sürecimizden randevu alıp ölçü sonrası teklif almanız yeterli.",
        ],
      },
    ],
    faq: [
      {
        question: "Komidin yüksekliği nasıl belirlenir?",
        answer:
          "Genel kural, komidin üst yüzeyinin yatağın üst yüzeyiyle aynı hizada ya da birkaç santim altında olması. Baza yüksekliği farklı olan yataklarda bu ölçü değişebiliyor, bu yüzden komidin ölçüsünü yatak kesinleştikten sonra almanızı öneriyoruz.",
      },
      {
        question: "Hazır komidin yerine özel ölçü sipariş etmenin farkı ne?",
        answer:
          "Hazır komidin standart yükseklik ve genişlikte üretildiği için mevcut yatak ve gardırobunuzla renk ya da ölçü uyumsuzluğu yaşanabiliyor. Özel ölçü siparişte hem renk hem boyut mevcut mobilyaya göre birebir eşleştiriliyor.",
      },
      {
        question: "Tek bir komidin sipariş edebilir miyim, set şart mı?",
        answer:
          "Evet, tek parça komidin siparişi alıyoruz. Mevcut mobilyanızın fotoğrafını paylaşmanız, malzeme ve rengi en yakın şekilde eşleştirmemize yardımcı oluyor.",
      },
    ],
  },
};
