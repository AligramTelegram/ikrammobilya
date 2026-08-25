import type { CategorySlug, SegmentSlug } from "@/lib/site";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface PageArticle {
  sections: ArticleSection[];
  faq: PageFaq[];
}

export const CATEGORY_CONTENT: Record<CategorySlug, PageArticle> = {
  "mutfak-dolabi": {
    sections: [
      {
        heading: "Çorum'da özel ölçü mutfak dolabı ne demektir?",
        paragraphs: [
          "Hazır mutfak dolabı ile özel ölçü mutfak dolabı arasındaki fark, aslında mutfağın kendisinden başlar. İki mutfak birbirine ne kadar benzese de duvar açıları, priz yerleri, davlumbaz boşluğu, tesisat noktaları hep birkaç santim kayar. Standart modüllerle çalışan bir üretimde bu farklar dolgu paneliyle kapatılır, köşelerde boşluk kalır, tezgah altına sığmayan bir çekmece devre dışı bırakılır. Özel ölçü üretimde ise önce mutfağa gidilir, her duvar, her köşe, her priz tek tek ölçülür ve dolap o mutfağa göre çizilir.",
          "İkram Mobilya'da mutfak dolabı işine bu yüzden çizimle değil, ölçüyle başlıyoruz. Çorum'da bugüne kadar girdiğimiz mutfakların büyük kısmı apartman dairesi, bir kısmı da müstakil ev mutfağı; ikisinin ihtiyacı da farklı. Apartman mutfaklarında genelde alan dar olduğu için dikey depolama, çekme dolap ve köşe çözümleri öne çıkıyor. Müstakil evlerde ise ada (ortada duran bağımsız tezgah) talebi daha sık geliyor.",
        ],
      },
      {
        heading: "Malzeme seçimi: MDF mi, masif mi, laminat mı?",
        paragraphs: [
          "Bu soruyu atölyeye gelen hemen hemen her müşteri soruyor ve doğru soru bu, çünkü mutfak dolabının ömrünü asıl belirleyen malzeme. Lake MDF, mat veya parlak bir yüzey ister ve orta bütçeli mutfaklarda en çok tercih edilen seçenek. Laminat (melamin kaplama MDF) daha ekonomik, çizilmeye biraz daha hassas ama nem karşısında lake kadar hassas değil. Masif ahşap kaplama ise en pahalı seçenek olsa da hem görsel hem dayanıklılık açısından bambaşka bir seviye sunuyor.",
          "Nem konusu mutfak dolabında hafife alınmayacak bir detay. Bulaşık makinesinin ya da lavabonun altındaki dolap gövdesinde suya dayanıklı yeşil MDF kullanmıyorsanız, birkaç yıl içinde şişme ve kabarma kaçınılmaz oluyor. Biz bu noktaları atölyede standart olarak yeşil MDF ile üretiyoruz, ekstra ücret çıkarmıyoruz; çünkü sonradan geri dönüp o dolabı değiştirmek hem bize hem müşteriye zaman kaybı.",
          "Kapak sisteminde de fark var. Soft-close (yumuşak kapanma) menteşe ve ray sistemleri başta biraz daha maliyetli görünse de günlük kullanımda hem sessiz hem uzun ömürlü. Ucuz menteşeyle üretilmiş bir dolapta iki yıl içinde kapak sarkması, çekmece takılması gibi şikayetler sık görülür; atölyemizde bu yüzden orta-üst segment aksesuar tercih ediyoruz.",
        ],
      },
      {
        heading: "Ölçü alımından montaja kadar süreç nasıl işliyor?",
        paragraphs: [
          "İlk adım telefon ya da WhatsApp üzerinden kısa bir görüşme: mutfağın büyüklüğü, beklenen tarz (lake, laminat, ahşap), varsa hazır bir görsel referansı konuşuluyor. Ardından atölyeden bir ekip mutfağa giderek lazometre ile tüm ölçüleri, priz ve tesisat noktalarını, varsa eğik duvarları not alıyor. Bu aşama atlanmadan çizim başlamıyor; çünkü bir santimlik hata bile montajda ciddi soruna dönüşebiliyor.",
          "Ölçü sonrası 2-3 gün içinde teknik çizim ve fiyat teklifi hazırlanıyor. Onay verildikten sonra üretim atölyede başlıyor; kapasiteye göre üretim süresi genelde 10-20 gün arasında değişiyor, yoğun dönemlerde bu süre biraz uzayabiliyor ama başta net bir teslim tarihi veriyoruz. Montaj günü ekip dolapları yerinde kesin ölçüye göre son kez ayarlayıp monte ediyor; tezgah, davlumbaz ve beyaz eşya entegrasyonu da bu aşamada tamamlanıyor.",
        ],
      },
      {
        heading: "Mutfak dolabında en sık karşılaşılan sorunlar",
        paragraphs: [
          "Atölyeye gelen şikayetlerin çoğu aslında hazır sistemden kaynaklanıyor: kapanmayan çekmece, menteşesi gevşeyen kapak, tezgaha tam oturmayan modül. Bunların büyük kısmı ölçü hatasından ya da düşük kaliteli aksesuardan geliyor. Bir diğer sık sorun da davlumbaz boşluğunun yanlış hesaplanması; davlumbaz modeli önceden netleşmediyse dolap üretiminde de tahmini ölçüyle gidilmek zorunda kalınıyor, bu yüzden mutfak dolabı siparişinden önce beyaz eşya kararlarının verilmiş olması işi kolaylaştırıyor.",
          "Bir de sıkça karşılaştığımız bir yanlış anlama var: bazı müşteriler '3D çizim' ile 'gerçek ölçü' aynı şey sanıyor. 3D görsel sadece tasarımı gösterir, gerçek üretim ölçüsü ayrı bir aşamadır. Biz her iki adımı da müşteriyle birlikte, atlamadan yürütüyoruz.",
        ],
      },
      {
        heading: "Mutfak dolabı fiyatını neler belirler?",
        paragraphs: [
          "Fiyat metrekare bazlı değil, doğrusal metre (dolabın önden görünen uzunluğu) ve kullanılan malzemeye göre hesaplanıyor. Kapak malzemesi (laminat/lake/ahşap kaplama), tezgah malzemesi (laminat, granit, kompozit), çekmece sayısı ve aksesuar seçimi (sepetli sistem, tabak kurutmalık, köşe dolap mekanizması gibi) toplam fiyatı doğrudan etkiliyor. Standart bir orta ölçekli mutfak için net fiyat, ancak ölçü alındıktan ve malzeme netleştikten sonra verilebiliyor; telefonda verilen rakamlar her zaman tahmini kalıyor.",
        ],
      },
      {
        heading: "Mutfak dolabının bakımı ve ömrünü uzatmak",
        paragraphs: [
          "Doğru üretilmiş bir mutfak dolabı bile bakımsız kalırsa erken yıpranır. Lake yüzeylerde aşındırıcı temizlik maddesi yerine yumuşak, nemli bez kullanılması gerekiyor; sert sünger veya çamaşır suyu içeren ürünler yüzeyde matlaşmaya yol açıyor. Menteşe ve ray gibi hareketli parçalar zamanla gevşeyebiliyor, yılda bir kez vidaların sıkılığını kontrol etmek küçük bir alışkanlık ama uzun vadede sarkma sorununu önlüyor. Lavabo altı gibi nemli bölgelerde suyun dolap içinde birikmemesine dikkat edilmeli, sızıntı fark edildiğinde hemen müdahale edilmezse en dayanıklı malzeme bile zamanla şişebiliyor.",
          "Çekmece rayları da düzenli kullanımda kir ve toz biriktirebiliyor; arada bir kuru bezle temizlenmesi kapanma sorununu azaltıyor. Bu küçük bakım adımları, ilk günkü kaliteyi yıllarca korumanın en pratik yolu.",
        ],
      },
      {
        heading: "Neden Çorum'da yerel bir atölyeden üretim yaptırmalısınız?",
        paragraphs: [
          "Şehir dışından sipariş edilen hazır mutfak dolabı sistemlerinde ölçü uyuşmazlığı çıktığında müdahale süreci uzuyor, parça değişimi günler hatta haftalar sürebiliyor. Çorum içinde üretim yapan bir atölyeyle çalıştığınızda hem ölçü alımı hem montaj sonrası küçük ayarlamalar aynı gün içinde çözülebiliyor. Ayrıca yerel atölye, bölgenin konut yapısını (apartman planlarını, yaygın mutfak tiplerini) daha iyi tanıdığı için ilk teklif aşamasında bile daha isabetli öneriler sunabiliyor.",
        ],
      },
      {
        heading: "Çorum'da mobilyacı, marangoz ve mutfak dolabı imalatçısı arayışında ilk soracağınız sorular",
        paragraphs: [
          "Çorum'da 'mutfak dolabı yaptıracak mobilyacı' ya da 'güvenilir marangoz' araştıran biri genelde birkaç işletmeyi karşılaştırıyor. Bu karşılaştırmada sormanız gereken sorular net: ölçü alımı ücretli mi, teslim süresi kaç gün, kullanılan MDF suya dayanıklı mı, menteşe ve ray markası ne, garanti süresi var mı? Bu soruların cevabını net ve hızlı veremeyen bir işletmeyle çalışmak, üretim sürecinde belirsizlik anlamına geliyor. Biz her sorunun cevabını ilk görüşmede açıkça veriyoruz, çünkü şeffaf bir süreç hem bizim hem müşterinin işini kolaylaştırıyor.",
          "Bir diğer önemli nokta da atölyenin fiziksel olarak görülebilir olması. Çorum'daki atölyemizi ziyaret edip devam eden üretimleri, kullanılan malzemeyi yerinde görebilirsiniz; bu, sadece katalog üzerinden karar vermekten çok daha güven verici bir deneyim.",
          "Mutfak dolabı imalatçısı olarak yaptığımız işin sadece üretimle bitmediğini de ekleyelim: talep eden müşterilerimize, kendi ürettiğimiz dolapların yanı sıra farklı yerden alınmış hazır mutfak dolabı sistemlerinin montaj ustası hizmetini de veriyoruz."
        ]
      },
    ],
    faq: [
      {
        question: "Çorum'da özel ölçü mutfak dolabı yaptırmanın süresi ne kadar?",
        answer:
          "Ölçü alımından montaja kadar ortalama 15-25 gün sürüyor. Bu süre mutfağın büyüklüğüne, seçilen malzemeye ve atölyenin o anki üretim yoğunluğuna göre değişebiliyor. Yoğun dönemlerde (yaz sonu, yılbaşı öncesi gibi) bu süre birkaç gün uzayabilir; sipariş verirken güncel teslim tarihini net olarak paylaşıyoruz.",
      },
      {
        question: "Hazır beyaz eşyalarım var, dolap onlara göre mi üretiliyor?",
        answer:
          "Evet. Ölçü alımı sırasında fırın, bulaşık makinesi, buzdolabı gibi beyaz eşyaların model ve ölçüleri de not ediliyor, dolap tasarımı bu eşyalara göre yapılıyor. Beyaz eşyayı henüz almadıysanız, marka ve model netleşene kadar üretim çizimini bekletmenizi öneriyoruz; aksi halde tahmini ölçüyle ilerlemek zorunda kalıyoruz.",
      },
      {
        question: "Sadece kapak değişimi (yenileme) yapıyor musunuz?",
        answer:
          "Mevcut dolap gövdesi sağlamsa kapak ve tezgah yenileme de yapıyoruz; bu, komple dolap değişiminden daha ekonomik bir seçenek oluyor. Yerinde bir inceleme yaparak gövdenin gerçekten sağlam olup olmadığını değerlendiriyoruz; nem almış veya şişmiş bir gövdede yenileme yerine komple değişim öneriyoruz, çünkü kısa vadede aynı sorun tekrarlanır.",
      },
    ],
  },
  gardirop: {
    sections: [
      {
        heading: "Gardırop, vestiyer, portmanto: hangisi ne işe yarar?",
        paragraphs: [
          "Bu üç kelime sık sık birbirinin yerine kullanılıyor ama aslında farklı ihtiyaçlara karşılık geliyor. Gardırop, yatak odasında kıyafetlerin asılı ya da katlı saklandığı büyük hacimli dolaptır. Vestiyer, genelde giriş katına veya ayrı bir odaya kurulan, mont/ceket/çanta gibi dış giyim eşyalarının düzenlendiği daha açık raflı bir sistemdir. Portmanto ise küçük, genelde antreye konan, birkaç askı ve raftan oluşan mini bir çözümdür. Müşteri bize 'gardırop lazım' dediğinde bazen kastettiği aslında bir vestiyer oluyor; bu yüzden ilk görüşmede hangi eşyanın nerede saklanacağını netleştirmek işin en önemli adımı.",
        ],
      },
      {
        heading: "Giyinme odası ve sürgülü gardırop talepleri artıyor",
        paragraphs: [
          "Son birkaç yıldır Çorum'da yeni yapılan konutlarda ayrı bir giyinme odası ayırma eğilimi belirgin şekilde arttı. Giyinme odası aslında duvardan duvara gardırop sisteminin biraz daha gelişmiş hali: ortada ayna, kenarlarda raf ve askı sistemleri, bazen oturma bankı da ekleniyor. Bu tip projelerde ölçü hassasiyeti daha da kritik, çünkü odanın tamamı dolap sistemine göre planlanıyor.",
          "Sürgülü kapak sistemi (kapağın menteşeyle değil, rayla açılması) özellikle dar odalarda tercih ediliyor, çünkü kapak açılma payına ihtiyaç bırakmıyor. Ayna kaplı sürgülü kapak da hem pratik hem de odayı büyük gösteren bir çözüm olduğu için son dönemde en çok talep edilen modellerden biri.",
        ],
      },
      {
        heading: "İç düzenleme: askı, raf ve çekmece oranı nasıl belirlenir?",
        paragraphs: [
          "Gardırobun dışı kadar içi de önemli, hatta çoğu zaman kullanım memnuniyetini belirleyen asıl kısım iç düzenleme. Uzun askı bölümü (elbise, mont için), kısa askı bölümü (gömlek, ceket için), katlanan kıyafetler için raf grupları ve iç çamaşırı/aksesuar için çekmeceler doğru oranda dağıtılmazsa dolap dolu görünse de kullanışsız kalıyor. Atölyede standart bir şablon uygulamıyoruz; müşterinin kıyafet profiline (kaç askılı kıyafeti var, ne kadar çekmeceye ihtiyacı var) göre iç bölme planı ayrı çıkarılıyor.",
          "Ayakkabılık bölümü de sık unutulan bir detay. Eğik raflı ayakkabılık, dolabın alt kısmına entegre edildiğinde ayrı bir ayakkabılık mobilyasına gerek kalmıyor; özellikle küçük odalarda bu, ciddi bir alan tasarrufu sağlıyor.",
        ],
      },
      {
        heading: "Malzeme ve kapak seçenekleri",
        paragraphs: [
          "Gövdede genelde melamin kaplamalı MDF kullanılıyor, çünkü hem hafif hem ekonomik. Kapak tarafında ise lake, ayna, cam veya ahşap desen laminat gibi seçenekler var. Ayna kapak modern ve ferah bir görünüm verirken, temizlik açısından biraz daha özen istiyor. Ahşap desenli laminat kapak ise sıcak bir hava katıyor ve parmak izi göstermiyor, bu yüzden çocuk odalarında sıkça tercih ediliyor.",
        ],
      },
      {
        heading: "Toptan ve kurumsal projelerde gardırop üretimi",
        paragraphs: [
          "Sadece bireysel siparişle sınırlı kalmıyoruz; Çorum'daki bazı mobilya mağazalarına fason gardırop üretimi de yapıyoruz, aynı şekilde otel projelerinde oda başına vestiyer/gardırop üretimini toplu olarak da üstleniyoruz. Bu tip projelerde tek fark ölçek: aynı kalite standardı korunuyor ama üretim planlaması, teslim takvimine göre partiler halinde ilerliyor.",
        ],
      },
      {
        heading: "Portmanto: küçük ama önemli bir detay",
        paragraphs: [
          "Portmanto genelde son anda hatırlanan ama günlük kullanımda en çok işe yarayan parçalardan biri. Antreye konan basit bir portmanto bile, kapıdan girer girmez mont ve çantayı bir yere asma alışkanlığı kazandırıyor; bu da salonun ve yatak odasının daha düzenli kalmasına dolaylı olarak katkı sağlıyor. Duvara monte edilen askılı sistemler dar antrelerde yer kaplamadığı için tercih edilirken, ayaklı portmantolar daha geniş girişlerde hem eşya hem oturma alanı olarak kullanılabiliyor. Malzeme ve renk seçiminde antre kapısı ve zemin rengiyle uyum önemli; bu detayı atölyede ayrı bir kalem olarak değil, evin genel tasarımının bir parçası olarak ele alıyoruz.",
        ],
      },
      {
        heading: "Gardırop yenileme mi, komple değişim mi?",
        paragraphs: [
          "Mevcut gardırobun iskeleti sağlamsa, sadece kapak ve iç düzenleme yenilemek komple değişimden çok daha ekonomik bir seçenek. Özellikle 90'lı ve 2000'li yılların başında yapılmış konutlarda gardırop gövdesi genelde sağlam kalır, ama kapak menteşeleri ve iç raf düzeni günümüz ihtiyaçlarına göre eskimiş olabilir. Bu durumlarda atölyeye gelip mevcut gövdenin ölçüsünü ve durumunu değerlendirdikten sonra yenileme mi yoksa komple üretim mi daha mantıklı, açıkça söylüyoruz; her zaman en pahalı seçeneği önermiyoruz.",
          "Çorum'da mobilya imalatçısı ararken çoğu kişi sadece üretimi düşünüyor, ama montajı unutuyor. Biz bir mobilya imalatçısı olarak kendi ürettiğimiz gardırop ve vestiyerlerin yanı sıra, başka firmalardan alınmış hazır sistemlerin gardırop montaj ustası hizmetini de veriyoruz.",
        ],
      },
      {
        heading: "Vestiyer ve portmanto için Çorum'da özel ölçü çözümler",
        paragraphs: [
          "Çorum'da apartman girişleri genelde küçük tutulduğu için standart vestiyer ürünleri çoğu zaman koridora sığmıyor ya da kapı açılışını engelliyor. Özel ölçü üretimde bu sorun baştan çözülüyor: vestiyer, girişin gerçek genişliğine göre tasarlanıyor, kapı açılış yönüyle çakışmayacak şekilde planlanıyor. Bu tip küçük alan projelerinde bazen 40-50 santimlik dar bir vestiyer bile doğru iç düzenlemeyle şaşırtıcı derecede fazla eşya kaldırabiliyor."
        ]
      },
      {
        heading: "Giyinme odası projelerinde en çok yapılan üç hata",
        paragraphs: [
          "Giyinme odası tasarımında en sık gördüğümüz ilk hata, aynanın yanlış konumlandırılması. Ayna pencereye tam karşı değil, yandan ışık alacak şekilde yerleştirilmezse hem gölge oluşuyor hem de kıyafet denerken renk algısı yanılıyor. İkinci hata, askı bölümünün fazla, çekmece bölümünün az bırakılması; oysa çoğu kullanıcı zamanla katlı kıyafet ve aksesuar biriktiriyor, bu yüzden başlangıçta dengeli bir oran kurmak daha doğru. Üçüncü ve en pahalıya mal olan hata ise kapı açılış yönünün odanın diğer mobilyalarıyla çakışması; bu genelde ölçü aşamasında atlanan bir detay ve montaj gününde ciddi bir sorun olarak ortaya çıkıyor.",
          "Bu üç hatayı önlemek için giyinme odası projelerinde standart gardırop ölçümüne göre daha uzun bir keşif süreci yürütüyoruz; oda içinde kullanıcının günlük hareket rotasını da değerlendiriyoruz. Sonuç olarak ortaya çıkan plan, sadece dolap değil, odanın bütününü kapsayan bir kullanım senaryosu oluyor."
        ]
      },
      {
        heading: "Aksesuar entegrasyonu: kravat askısı, kemer rafı, çekmece organizeri",
        paragraphs: [
          "İç düzenlemeyi tamamlayan küçük aksesuarlar, gardırobun günlük kullanım kalitesini belirgin şekilde artırıyor. Kravat ve kemer askısı, ayakkabı için eğik raf, iç çamaşırı için bölmeli çekmece organizeri gibi detaylar, sipariş aşamasında düşünülürse ekstra maliyeti düşük, kullanım rahatlığı yüksek bir sonuç veriyor. Bu aksesuarları sonradan eklemek de mümkün olsa da, gövde tasarımı baştan bu detayları hesaba katarsa daha temiz bir görünüm elde ediliyor."
        ]
      },
      {
        heading: "Gardırop siparişinde teslim süresi ve montaj",
        paragraphs: [
          "Standart bir gardırop siparişinde ölçü alımından montaja kadar geçen süre ortalama 12-20 gün arasında değişiyor; giyinme odası gibi daha kapsamlı projelerde bu süre 25 güne kadar uzayabiliyor. Montaj günü genelde tek seferde tamamlanıyor, büyük duvardan duvara sistemlerde ekip yarım gün ila bir tam gün çalışabiliyor. Montaj sırasında mevcut kıyafetlerinizi geçici olarak başka bir odaya taşımanızı öneriyoruz, böylece ekip rahat çalışabiliyor ve işlem daha hızlı tamamlanıyor."
        ]
      },
    ],
    faq: [
      {
        question: "Gardırop ile vestiyer arasındaki fark nedir?",
        answer:
          "Gardırop genelde yatak odasında kıyafet saklamak için kapalı, büyük hacimli bir dolaptır. Vestiyer ise giriş veya ayrı bir odada, daha açık raflı ve dış giyim eşyalarına yönelik bir sistemdir. Portmanto ise ikisinden daha küçük, genelde antreye konan birkaç askılı mini bir çözüm; hangisine ihtiyacınız olduğunu ilk görüşmede birlikte netleştiriyoruz.",
      },
      {
        question: "Sürgülü kapak mı, menteşeli kapak mı daha uygun?",
        answer:
          "Dar odalarda ve açılma payı kısıtlı yerlerde sürgülü kapak daha pratik. Geniş odalarda menteşeli kapak, iç hacme daha kolay erişim sağladığı için tercih edilebilir. Sürgülü sistemlerde ray kalitesi önemli; ucuz raylarda zamanla takılma sorunu yaşanabildiği için biz orta-üst segment ray kullanıyoruz.",
      },
      {
        question: "Giyinme odası projesi için ayrı bir ölçü randevusu gerekiyor mu?",
        answer:
          "Evet, giyinme odası tasarımı odanın tamamını kapsadığı için standart gardırop ölçümünden daha detaylı bir keşif yapılıyor. Bu keşifte aynanın konumu, ışık kaynağı ve oda içindeki hareket alanı da değerlendiriliyor, bu yüzden randevu süresi normal gardırop ölçümüne göre biraz daha uzun sürüyor.",
      },
    ],
  },
  "yatak-odasi": {
    sections: [
      {
        heading: "Yatak odası takımı derken tam olarak ne üretiyoruz?",
        paragraphs: [
          "Yatak odası mobilyası dendiğinde akla genelde tek bir set geliyor ama aslında üç ayrı parça söz konusu: yatak başlığı (baza dahil ya da hariç), komodin ve şifonyer. İkram Mobilya'da bu üç parçayı birlikte ya da ayrı ayrı üretebiliyoruz; bazı müşteriler sadece komodin yeniletmek, bazıları komple set istiyor. Malzeme ve renk uyumunu korumak için setin tamamının aynı atölyede, aynı parti malzemeden üretilmesi öneriyoruz; çünkü farklı zamanlarda alınan parçalarda ton farkı çıkabiliyor.",
        ],
      },
      {
        heading: "Yatak başlığı seçiminde nelere dikkat edilmeli?",
        paragraphs: [
          "Yatak başlığı hem estetik hem fonksiyonel bir eleman. Kumaş kaplamalı (kapitone) başlıklar yumuşak, sıcak bir görünüm verirken, ahşap veya laminat başlıklar daha az bakım istiyor ve daha uzun ömürlü oluyor. Kumaş seçiminde leke tutmayan, temizliği kolay kumaşlar öneriyoruz, özellikle çocuklu evlerde bu tercih önemli. Başlık yüksekliği de oda tavanına ve yatak boyuna göre ayarlanmalı; çok düşük başlık orantısız durur, çok yüksek başlık ise küçük odalarda baskı yapar.",
        ],
      },
      {
        heading: "Komodin ve şifonyer: kaç çekmece yeterli?",
        paragraphs: [
          "Komodin genelde 1-2 çekmeceli üretiliyor ve yatağın hemen yanında telefon, gözlük, kitap gibi eşyalara ev sahipliği yapıyor. Şifonyer ise asıl depolama gücünü taşıyan parça; 4-6 çekmece arası standart, ama kıyafet miktarına göre bu sayı artırılabiliyor. Şifonyer genişliği oda büyüklüğüne göre planlanmalı, aksi halde koridor gibi dar bir alanda gereksiz bir engel haline geliyor.",
          "Çekmece rayı da burada kritik bir detay: metal ray sistemleri ahşap raya göre hem daha sessiz hem daha uzun ömürlü çalışıyor, biz standart üretimde metal ray kullanıyoruz.",
        ],
      },
      {
        heading: "Bireysel sipariş mi, toptan üretim mi?",
        paragraphs: [
          "Yatak odası mobilyasında hem bireysel müşteriden hem de Çorum'daki mobilya mağazalarından yoğun talep alıyoruz. Bireysel siparişte ölçü ve renk müşteriye özel belirleniyor; toptan/fason üretimde ise mağazanın kendi kataloğuna göre belirli model ve ölçülerde seri üretim yapılıyor. İki üretim türü de aynı atölyede, aynı kalite kontrolünden geçerek çıkıyor, sadece planlama süreci farklı işliyor.",
        ],
      },
      {
        heading: "Montaj ve teslimat",
        paragraphs: [
          "Yatak odası setleri genelde parça parça değil, komple monte edilmiş halde teslim ediliyor; büyük şifonyer ve gardıropla birleşik sistemlerde ise montaj yerinde yapılıyor. Kendi ürettiğimiz mobilyaların yanı sıra, başka yerden alınmış hazır yatak odası takımlarının montajını da ayrı bir hizmet olarak sunuyoruz.",
        ],
      },
      {
        heading: "Renk ve doku uyumu: oda büyüklüğüne göre nasıl karar verilir?",
        paragraphs: [
          "Küçük yatak odalarında açık tonlu (beyaz, krem, açık ceviz) yüzeyler mekanı daha geniş gösteriyor, koyu renkler ise küçük odada baskı hissi yaratabiliyor. Geniş yatak odalarında ise koyu ahşap desenler ya da mat siyah detaylar hem şık hem de mekanı büyütme kaygısı gütmeden kullanılabiliyor. Duvar rengiyle mobilya tonu arasında tam kontrast ya da tam uyum tercih edilebilir; biz genelde orta yol öneriyoruz, yani mobilyanın duvardan biraz farklı ama aynı sıcaklık paletinde bir ton taşımasını tavsiye ediyoruz. Bu, hem göz yormuyor hem de zamanla eskimeyen bir görünüm sağlıyor.",
        ],
      },
      {
        heading: "Çocuk odası ve genç odası için ayrı düşünmek gerekir mi?",
        paragraphs: [
          "Çocuk ve genç odası mobilyasında yatak odası mantığı büyük ölçüde geçerli olsa da bazı farklar var: köşe yuvarlatmaları (güvenlik için), büyümeye uygun ayarlanabilir raf sistemleri, ders çalışma alanıyla entegre çekmece grupları gibi detaylar öne çıkıyor. Bu tip odalarda mobilyanın en az 5-6 yıl çocuğun değişen ihtiyaçlarına ayak uydurması bekleniyor, bu yüzden aşırı temaya bağlı (belirli bir çizgi film karakterine özel) tasarımlar yerine, sonradan aksesuarla kişiselleştirilebilecek daha sade bir gövde tasarımı öneriyoruz.",
        ],
      },
      {
        heading: "Yatak odası mobilyasında Çorum'a özgü tercihler",
        paragraphs: [
          "Çorum'da yatak odası siparişlerinde genel eğilim, aşırı gösterişli değil sade ve dayanıklı çizgilere doğru. Özellikle orta yaş üzeri müşteriler ahşap desenli, klasikleşmeye yakın tonları tercih ederken, genç çiftler daha mat ve sade beyaz/gri kombinasyonlara yöneliyor. Atölye olarak her iki zevke de aynı üretim kalitesiyle hizmet veriyoruz; tercih tamamen renk ve doku seçimiyle şekilleniyor, üretim standardımız değişmiyor."
        ]
      },
      {
        heading: "Yatak odası mobilyasında aksesuar ve detay seçimi",
        paragraphs: [
          "Kulp seçimi küçük bir detay gibi görünse de yatak odası mobilyasının genel karakterini büyük ölçüde belirliyor. İnce, gizli kulplar minimalist bir çizgi verirken, metal veya pirinç detaylı kulplar daha klasik ya da retro bir hava katıyor. Kulp seçimini kapak malzemesiyle uyumlu yapmak gerekiyor; örneğin mat lake bir yüzeyde parlak krom kulp bazen fazla kontrast yaratabiliyor, bu yüzden numune üzerinde birlikte karar vermenizi öneriyoruz.",
          "Ayna entegrasyonu da yatak odası setlerinde sık talep edilen bir detay. Şifonyer üzerine sabit ayna ya da ayrı boy aynası, hem pratik hem de odanın ışığını çoğaltan bir çözüm. Aynanın konumunu belirlerken yatak başlığından gelecek yansımaları da hesaba katıyoruz, çünkü yanlış açıyla yerleştirilmiş bir ayna gece lambası ışığını rahatsız edici şekilde yansıtabiliyor."
        ]
      },
      {
        heading: "Yatak odası setinde ışık ve priz planlaması",
        paragraphs: [
          "Komodin üzerine gelecek gece lambası için priz konumu, mobilya yerleşiminden önce netleşmelidir; aksi halde kablo görünür şekilde uzayıp estetik bir sorun yaratabiliyor. Bazı şifonyer ve komodin modellerinde iç aydınlatma ya da USB şarj girişi entegre etmek de mümkün, özellikle genç odalarında bu detay sıkça talep ediliyor. Bu tip elektrik detaylarını üretim öncesi netleştirmek, sonradan duvar kırıp priz eklemekten çok daha pratik."
        ]
      },
      {
        heading: "Yatak odası mobilyasında eskiyen parçaları fark etme",
        paragraphs: [
          "Bir yatak odası mobilyasının yenilenme zamanının geldiğini gösteren birkaç işaret var: çekmecelerin zorlanarak açılıp kapanması, kapak menteşelerinde kalıcı gevşeme, yüzeyde geri dönüşü olmayan çizik ve şişme. Bu belirtiler görüldüğünde erteleme genelde sorunu büyütüyor; özellikle nem kaynaklı şişmeler zamanla gövdenin tamamına yayılabiliyor. Erken fark edilen bir sorun çoğu zaman parça değişimiyle çözülürken, geciken bir müdahale komple yenilemeyi zorunlu kılabiliyor."
        ]
      },
      {
        heading: "Yatak odası mobilyasında iki kişilik kullanım senaryosu",
        paragraphs: [
          "Çift kullanımı düşünülen yatak odalarında simetri genelde tercih edilen bir düzen: iki komodin, yatağın iki yanında eşit boyutta ve eşit yükseklikte konumlanıyor. Ancak farklı uyku düzenine sahip çiftlerde (biri erken yatan, diğeri geç kalkan gibi) asimetrik bir çözüm de düşünülebiliyor; örneğin bir tarafta okuma lambası için ekstra raf, diğer tarafta sade bir komodin. Bu tip kişiselleştirilmiş kararları, standart bir set satmak yerine çiftin gerçek alışkanlıklarını dinleyerek şekillendiriyoruz.",
          "Şifonyer paylaşımı da sık sorulan bir konu; iki kişinin kıyafetini tek bir şifonyerde dengeli paylaştırmak için çekmece sayısını ve boyutunu baştan bu ihtiyaca göre planlıyoruz, sonradan ek çekmece eklemek genelde estetik bütünlüğü bozuyor.",
          "Çorum'da yatak odası mobilyası için mobilya montaj ustası arayan müşterilere de yardımcı oluyoruz; kendi ürettiğimiz setlerin yanı sıra başka markalardan alınmış yatak odası takımlarının montajını da yapıyoruz."
        ]
      },
    ],
    faq: [
      {
        question: "Yatak odası takımını ayrı ayrı parça olarak da sipariş edebilir miyim?",
        answer:
          "Evet, sadece komodin veya sadece şifonyer gibi tek parça siparişler de alıyoruz, komple set şartı yok. Tek parça siparişte bile, mevcut mobilyanızla renk/doku uyumunu korumaya çalışıyoruz; bunun için fotoğraf veya numune paylaşmanız yeterli.",
      },
      {
        question: "Mevcut yatak odası mobilyamın rengiyle uyumlu yeni parça yaptırabilir miyim?",
        answer:
          "Mevcut parçanın fotoğrafını veya bir örneğini görürsek en yakın ton ve doku eşleşmesini sağlamaya çalışıyoruz; birebir aynı sonuç bazı eski modellerde garanti edilemiyor. Özellikle uzun süre önce üretilmiş, artık üretilmeyen malzemelerde tam eşleşme zor olabiliyor; bu durumda en yakın alternatifi önerip son kararı size bırakıyoruz.",
      },
      {
        question: "Toptan sipariş için minimum adet var mı?",
        answer:
          "Minimum adet, ürün tipine ve malzemeye göre değişiyor; net rakam için mağazanızın ihtiyacını WhatsApp üzerinden paylaşmanız yeterli. Küçük hacimli ilk denemelerde de çalışıyoruz; kalite ve teslim performansımızı görmeden büyük hacimli bir siparişe geçmek istemeyen mağazalar için bu makul bir başlangıç oluyor.",
      },
    ],
  },
  "oturma-grubu": {
    sections: [
      {
        heading: "Köşe koltuk mu, kanepe mi, berjer mi?",
        paragraphs: [
          "Oturma grubu seçimi büyük ölçüde salonun metrekaresine ve kullanım alışkanlığına bağlı. Köşe koltuk geniş salonlarda hem oturma kapasitesini artırıyor hem de odayı bölümlere ayırmadan tek bir oturma alanı yaratıyor. Kanepe (düz koltuk) daha kompakt salonlarda ya da ikinci bir oturma alanı olarak tercih ediliyor. Berjer ise tek kişilik, genelde köşe koltuğun ya da kanepenin yanına eklenen tamamlayıcı bir parça; okuma köşesi kurmak isteyenlerin en çok sorduğu ürün.",
        ],
      },
      {
        heading: "İskelet ve sünger kalitesi neden en önemli detay?",
        paragraphs: [
          "Kumaşı ve rengi ne kadar beğenilirse beğenilsin, bir koltuğun ömrünü belirleyen asıl unsur iskelet ve sünger kalitesi. Atölyede iskelet için kurutulmuş, nem oranı düşük çam veya kayın kullanıyoruz; nem oranı yüksek işlenmemiş ahşapla üretilen iskelet zamanla çarpılıp gıcırdamaya başlıyor. Sünger tarafında ise yoğunluk (yani süngerin kilogram/metreküp değeri) belirleyici; düşük yoğunluklu sünger ilk birkaç ayda yumuşak ve rahat hissettirse de altı ay içinde çökmeye başlıyor. Biz orta-yüksek yoğunluklu sünger tercih ediyoruz, ilk oturuşta biraz daha sert hissedilse de uzun vadede şeklini koruyor.",
        ],
      },
      {
        heading: "Kumaş seçimi: hangi kumaş hangi eve uygun?",
        paragraphs: [
          "Çocuklu ya da evcil hayvanlı evlerde su iticiliği yüksek, kolay temizlenen döşemelik kumaşlar (mikrofiber, teflon kaplı kumaşlar gibi) öneriyoruz. Kadife dokulu kumaşlar şık bir görünüm verse de leke tutmaya daha meyilli, bu yüzden misafir salonu gibi daha az yoğun kullanılan alanlarda tercih edilmesi daha mantıklı. Deri ve suni deri seçenekleri de var; gerçek deri daha pahalı ama bakımı doğru yapıldığında onlarca yıl dayanabiliyor.",
        ],
      },
      {
        heading: "Ölçü ve yerleşim planlaması",
        paragraphs: [
          "Köşe koltuk siparişlerinde en sık yapılan hata, salonun ölçüsü değil de koltuğun görselde hoşa giden boyutuyla karar vermek. Biz sipariş öncesi salon planını (kapı, pencere, TV ünitesi konumu dahil) birlikte değerlendiriyoruz ki koltuk yerleştirildiğinde geçiş alanı dar kalmasın. Özellikle L şeklindeki köşe koltuklarda yön (sağ köşe mi sol köşe mi) doğru belirlenmezse koltuk odaya sığsa bile kullanım rahat olmuyor.",
        ],
      },
      {
        heading: "Toptan üretim ve mobilya mağazalarına fason iş",
        paragraphs: [
          "Oturma grubu, Çorum'daki mobilya mağazalarından en çok fason sipariş aldığımız kategorilerden biri. Mağazanın kendi modeline göre iskelet ve döşeme üretimi yapıyoruz, teslim takvimini mağazanın satış hızına göre planlıyoruz. Bireysel müşteri için ise tamamen özel ölçü ve özel kumaş seçimiyle üretim yapılıyor; iki süreç de aynı atölye standardından geçiyor.",
        ],
      },
      {
        heading: "Ayak ve alt yapı detayları neden önemli?",
        paragraphs: [
          "Koltuğun ayak yüksekliği ve malzemesi görünürde küçük bir detay gibi dursa da, hem temizlik hem dayanıklılık açısından fark yaratıyor. Ahşap ayaklar sıcak bir görünüm verirken, metal ayaklar daha modern bir çizgi sunuyor ve nem karşısında ahşaba göre daha az risk taşıyor. Ayak yüksekliği aynı zamanda süpürge/robot süpürge erişimini de etkiliyor; alçak ayaklı koltuklarda temizlik zorlaşabiliyor, bu yüzden özellikle evcil hayvanı olan müşterilere biraz daha yüksek ayak öneriyoruz.",
        ],
      },
      {
        heading: "Modüler sistemler ve ileride genişletme imkanı",
        paragraphs: [
          "Modüler oturma grubu sistemlerinde koltuk tek parça değil, birbirine eklenebilen bağımsız modüllerden oluşuyor. Bu sistemin avantajı, aile büyüdükçe veya ev değiştikçe mevcut modüllere yeni parça eklenebilmesi ya da düzenin yeniden şekillendirilebilmesi. İlk üretimde modüler bir sistemle başlamak, birkaç yıl sonra tamamen yeni bir koltuk almak yerine sadece eksik modülü tamamlamayı mümkün kılıyor; uzun vadede hem bütçe hem sürdürülebilirlik açısından mantıklı bir tercih.",
        ],
      },
      {
        heading: "Oturma grubu siparişinde teslimat ve giriş ölçüsü kontrolü",
        paragraphs: [
          "Büyük bir köşe koltuk sipariş etmeden önce mutlaka kontrol edilmesi gereken bir detay var: koltuğun eve giriş yolu. Asansör ölçüsü, merdiven dönüşü, kapı genişliği gibi noktalar önceden değerlendirilmezse, üretimi tamamlanmış bir koltuk eve sığdırılamayabiliyor. Biz sipariş öncesi bu detayları da müşteriyle birlikte kontrol ediyoruz; gerekirse modüler üretimle koltuğu parçalar halinde eve taşıyıp içeride birleştiriyoruz."
        ]
      },
      {
        heading: "Oturma grubu siparişinde renk kararı nasıl netleşir",
        paragraphs: [
          "Kumaş numunesini küçük bir kartela üzerinde görmekle, o kumaşı üç metrelik bir koltukta görmek arasında büyük fark var. Küçük bir örnekte hoş görünen bir renk, geniş bir yüzeye yayıldığında beklenenden daha canlı ya da daha soluk kalabiliyor. Bu yüzden büyük parçalarda karar vermeden önce, mümkünse A4 boyutunda bir kumaş parçasını salonunuzun gün içindeki farklı ışığında (sabah, öğle, akşam lambası altında) görmenizi öneriyoruz. Atölyeden kumaş numunesi talep etmek tamamen ücretsiz ve karar sürecini büyük ölçüde kolaylaştırıyor.",
          "Renk kararında bir diğer pratik yöntem de mevcut halı, perde ya da duvar renginden yola çıkmak. Salonda zaten baskın bir renk varsa, koltuğu ona tam zıt değil, aynı sıcaklık paletinde ama bir ton farklı seçmek daha uyumlu bir sonuç veriyor. Bu tür kararları verirken deneyimli bir gözün yorumu işe yarıyor, biz bu konuda da görüşümüzü paylaşmaktan çekinmiyoruz."
        ]
      },
      {
        heading: "Oturma grubunda kumaş dışında deri bakımı",
        paragraphs: [
          "Gerçek deri koltuk tercih edenler için düzenli bakım ömrü doğrudan etkiliyor. Deriye özel nemlendirici ürünler yılda birkaç kez uygulanmazsa, zamanla çatlama ve sertleşme başlıyor. Doğrudan güneş ışığı alan bir köşeye yerleştirilen deri koltuklarda renk solması da sık karşılaşılan bir durum; bu yüzden pencereye çok yakın yerleşimlerde perde ile güneşi biraz kesmenizi öneriyoruz. Suni deri seçeneklerinde bu bakım ihtiyacı daha az, ama nefes alabilirlik gerçek deriye göre daha düşük kalıyor."
        ]
      },
      {
        heading: "Oturma grubu satın alırken kumaş yoğunluğunu nasıl anlarsınız",
        paragraphs: [
          "Kumaşın kalitesini gözle ayırt etmek zor olsa da birkaç basit test yardımcı oluyor: kumaşı hafifçe gerin, sık dokulu ve gerilince şeklini koruyanlar genelde daha dayanıklı. Kumaş etiketinde belirtilen aşınma değeri (Martindale testi) de bir gösterge; günlük yoğun kullanılan bir salon koltuğu için yüksek Martindale değerine sahip kumaş tercih edilmeli. Biz kumaş önerirken kullanım yoğunluğunuzu (kaç kişilik hane, çocuk/evcil hayvan var mı) soruyoruz ve buna göre yönlendiriyoruz; sadece görsel tercihe göre değil, gerçek kullanım senaryosuna göre karar vermenizi sağlıyoruz."
        ]
      },
      {
        heading: "Oturma grubunda kol ve sırt yüksekliği neden fark yaratır",
        paragraphs: [
          "Koltuğun kol yüksekliği ve sırt açısı, oturan kişinin boyuna ve kullanım şekline göre konfor algısını doğrudan etkiliyor. Düşük kollu, geniş oturma yüzeyli koltuklar rahat uzanmaya uygunken, yüksek sırtlı modeller daha dik oturuşu destekliyor ve okuma, çalışma gibi aktiviteler için daha uygun. Ailede farklı boy ve kullanım alışkanlığına sahip bireyler varsa, köşe koltuk ile berjeri bilinçli olarak farklı yükseklikte tasarlayarak her kullanıcıya uygun bir oturma noktası yaratabiliyoruz.",
          "Minder sertliği de benzer şekilde kişisel bir tercih; bazı müşteriler yumuşak, gömülen bir oturuş isterken bazıları daha destekleyici, sıkı bir dolgu tercih ediyor. Sipariş öncesi numune üzerinde oturarak bu tercihi netleştirmenizi öneriyoruz.",
          "Büyük bir köşe koltuk aldıktan sonra montaj ustası ihtiyacı da çıkabiliyor; özellikle modüler sistemlerde parçaların doğru birleştirilmesi önemli. Bu konuda da Çorum içinde destek veriyoruz."
        ]
      },
    ],
    faq: [
      {
        question: "Köşe koltuğun yönünü (sağ/sol) sonradan değiştirebilir miyim?",
        answer:
          "Modüler üretimlerde bazı köşe koltuklarda modüller yer değiştirilebiliyor, ancak bunun mümkün olup olmadığı üretim tipine göre değişiyor; sipariş öncesi bu ihtiyacı belirtmeniz en sağlıklısı. İleride ev değiştirme ihtimaliniz varsa, baştan modüler bir sistem tercih etmenizi öneriyoruz; bu, yön değişikliğini çok daha kolay hale getiriyor.",
      },
      {
        question: "Eski koltuğumun kumaşını yeniletebilir misiniz?",
        answer:
          "Evet, iskelet ve sünger sağlamsa döşeme yenileme (kumaş değişimi) hizmeti de veriyoruz, bu genelde komple yeni koltuktan daha ekonomik oluyor. Yenileme öncesi süngeri de kontrol ediyoruz; çökme varsa kumaşla birlikte sünger değişimini de öneriyoruz, aksi halde yeni kumaş altında eski sorun devam eder.",
      },
      {
        question: "Berjeri koltuk takımıyla aynı kumaştan mı üretmek gerekir?",
        answer:
          "Gerekmez, kontrast bir kumaşla da üretilebilir; bazı müşteriler bilinçli olarak berjeri farklı renkte tercih ediyor, kararı tamamen size bırakıyoruz. Kontrast tercih edilecekse aynı renk ailesinden ama farklı tonda bir kumaş seçmenizi öneriyoruz; tamamen alakasız bir renk salonun bütünlüğünü bozabiliyor.",
      },
    ],
  },
  "yemek-odasi": {
    sections: [
      {
        heading: "Yemek odası takımında masa, sandalye, vitrin üçlüsü",
        paragraphs: [
          "Yemek odası mobilyası denince akla gelen üç temel parça var: masa, sandalye ve vitrin (büfe). Bu üçünü birbirinden bağımsız satın almak mümkün olsa da, biz aynı ağaç dokusu ve aynı ton üzerinden üretim yaptığımız için üçünün bir arada, aynı sipariş içinde planlanmasını öneriyoruz. Böylece masa yüzeyiyle vitrin kapağı arasında göz yorucu bir renk farkı olmuyor.",
        ],
      },
      {
        heading: "Masa ölçüsü kişi sayısına göre nasıl belirlenir?",
        paragraphs: [
          "Genel kural olarak kişi başına yaklaşık 60 cm masa kenarı payı bırakılır. 6 kişilik bir aile için 160-180 cm uzunluğunda dikdörtgen masa yeterli olurken, kalabalık misafirlik geleneği olan evlerde uzatmalı (açılır) masa sistemi daha pratik bir çözüm oluyor. Uzatmalı masalarda mekanizmanın kalitesi önemli; ucuz raylı sistemlerde masa zamanla gevşeyip sallanmaya başlıyor, biz bu yüzden orta-üst segment açılır mekanizma kullanıyoruz.",
        ],
      },
      {
        heading: "Sandalye: sağlamlık mı, konfor mu?",
        paragraphs: [
          "Sandalyede iskelet malzemesi kadar birleşim tekniği de önemli. Çivi veya vida ile tutturulmuş birleşimler zamanla gevşerken, geçme ve tutkal birleşimi (doğru uygulandığında) çok daha sağlam kalıyor. Oturma yüzeyinde ahşap, deri veya kumaş döşeme seçenekleri var; günlük yoğun kullanılan mutfak masası sandalyelerinde silinebilir kumaş veya suni deri, misafir odası sandalyelerinde ise daha şık kumaş dokuları tercih ediliyor.",
        ],
      },
      {
        heading: "Vitrin ve büfe: sadece dekoratif değil",
        paragraphs: [
          "Vitrin çoğu zaman sadece tabak, bardak sergilemek için düşünülse de doğru iç bölmelendirmeyle önemli bir depolama alanı da sağlıyor. Cam kapaklı üst bölüm sergileme için, kapalı alt bölüm ise günlük kullanılmayan takım ve örtülerin saklanması için ayrılabiliyor. Aydınlatmalı vitrin (içine LED şerit entegre edilmiş) son dönemde en çok talep edilen detaylardan biri; hem sergilenen eşyayı öne çıkarıyor hem de akşam salonuna sıcak bir atmosfer katıyor.",
        ],
      },
      {
        heading: "Toptan üretim ve mağaza siparişleri",
        paragraphs: [
          "Yemek odası takımları, Çorum ve çevresindeki mobilya mağazalarına toptan ürettiğimiz kategorilerden biri. Mağazanın belirlediği model ve ölçülerde seri üretim yapıyoruz, teslim takvimini mağazanın stok ihtiyacına göre planlıyoruz. Bireysel sipariş tarafında ise ölçü ve malzeme tamamen müşteriye özel şekillendiriliyor.",
        ],
      },
      {
        heading: "Masa yüzeyi bakımı ve günlük kullanım",
        paragraphs: [
          "Yemek masası günlük en çok kullanılan yüzeylerden biri olduğu için malzeme seçimiyle birlikte bakım alışkanlığı da önemli. Lake yüzeylerde sıcak tencere doğrudan bırakılmamalı, altlık kullanılmalı; aksi halde yüzeyde matlaşma veya iz kalabiliyor. Ahşap kaplama masalarda yılda bir kez uygun bakım yağı ya da cilası uygulamak, ahşabın kurumasını ve çatlamasını önlüyor. Cam yüzeyli masalarda ise çizilmeyi önlemek için sert nesnelerin doğrudan sürtülmemesine dikkat edilmeli.",
        ],
      },
      {
        heading: "Küçük mutfaklar için kompakt çözümler",
        paragraphs: [
          "Her evde ayrı bir yemek odası bulunmuyor; birçok Çorum dairesinde mutfak içinde ya da mutfağa bitişik bir yemek köşesi çözümü tercih ediliyor. Bu durumlarda duvara monte katlanır masa, bar sehpası ya da köşe bank sistemi gibi alan kazandıran çözümler öne çıkıyor. Katlanır masa sistemleri günlük kullanımda tam kapasiteyle açılıp misafir geldiğinde kapatılabiliyor, bu da küçük mutfaklarda hem depolama hem hareket alanı kazandırıyor. Bu tip kompakt çözümleri de standart yemek odası takımı gibi özel ölçüyle üretiyoruz.",
        ],
      },
      {
        heading: "Yemek odası mobilyasında aydınlatma ile uyum",
        paragraphs: [
          "Yemek masasının üzerine gelen aydınlatma armatürü, masa boyu ve şekliyle uyumlu seçilmezse hem estetik hem fonksiyonel bir sorun oluşturuyor. Dikdörtgen masalarda uzun gövdeli sarkıt armatürler, yuvarlak masalarda ise tek merkez noktalı aydınlatmalar daha dengeli bir görüntü veriyor. Dekorasyon danışmanlığı hizmetimiz kapsamında yemek odası mobilyasıyla birlikte aydınlatma önerisi de sunabiliyoruz."
        ]
      },
      {
        heading: "Yemek odası mobilyasında oturma konforu neden gözden kaçırılıyor",
        paragraphs: [
          "Masa ve vitrin seçilirken çoğu zaman görsel uyum ön planda tutuluyor, sandalyenin oturma konforu ise son anda düşünülüyor. Oysa bir aile günde ortalama bir-iki saatini yemek masasında geçiriyor; sandalyenin sırt açısı, oturma yüksekliği ve minder kalınlığı bu sürenin rahat mı yoksa yorucu mu geçeceğini belirliyor. Sipariş öncesi mutlaka bir sandalye numunesinde birkaç dakika oturup denemenizi öneriyoruz, sadece görsele bakarak karar vermek sonradan pişmanlık yaratabiliyor.",
          "Bir diğer gözden kaçan nokta da masa altı diz boşluğu. Özellikle geniş ayaklı ya da orta gövdeli masalarda diz boşluğu daralabiliyor, bu da özellikle uzun boylu kullanıcılar için rahatsızlık yaratıyor. Bu detayı ölçü aşamasında birlikte kontrol ediyoruz."
        ]
      },
      {
        heading: "Yemek odası mobilyasında stil uyumu: modern mi, klasik mi",
        paragraphs: [
          "Yemek odası takımı seçerken evin genel dekorasyon diliyle uyum önemli; salonu modern çizgilerle döşemiş bir müşteri için ağır oymalı klasik bir masa takımı genelde uyumsuz kalıyor. Biz sipariş öncesi salonun ve mutfağın fotoğraflarını inceleyip, mevcut stille uyumlu bir malzeme ve form önerisi sunuyoruz. Karma (modern-klasik geçişli) tarz isteyen müşteriler için de sade gövde formunda ama sıcak ahşap dokulu çözümler öneriyoruz; bu, iki tarz arasında köprü kuran pratik bir seçenek oluyor."
        ]
      },
      {
        heading: "Yemek odası mobilyasında malzeme karşılaştırması: MDF mi, masif mi",
        paragraphs: [
          "MDF lam kaplama masa ve sandalyeler daha ekonomik ve hafif olurken, masif ahşap kendine has doku ve daha uzun ömür sunuyor. Masif ahşabın nem ve sıcaklık değişimlerine karşı hafif genleşme gösterebileceğini, bu yüzden kalorifer peteği gibi doğrudan ısı kaynaklarına çok yakın yerleştirilmemesi gerektiğini müşterilerimize baştan anlatıyoruz. MDF lam kaplama ise bu tip genleşme sorunlarına karşı daha stabil, günlük kullanımda bakımı da daha az efor istiyor. Bütçe ve beklenti netleştiğinde ikisi arasında en uygun seçeneği birlikte belirliyoruz."
        ]
      },
      {
        heading: "Yemek odası mobilyasında sandalye sayısını doğru planlamak",
        paragraphs: [
          "Günlük kullanım için gereken sandalye sayısı ile misafir ağırlama kapasitesi genelde farklı. Bu farkı çözmek için bazı müşterilerimize masaya ek olarak, ihtiyaç halinde depodan çıkarılabilecek katlanır ekstra sandalyeler öneriyoruz; böylece günlük kullanımda salon kalabalık görünmüyor, misafir geldiğinde kapasite kolayca artırılabiliyor. Bank (uzun oturma sırası) sistemleri de özellikle çocuklu ailelerde sandalyeye göre daha esnek bir çözüm sunuyor, çünkü bir bank üzerine ihtiyaca göre daha fazla kişi sığabiliyor.",
          "Sandalye ile masa yüksekliği arasındaki uyum da gözden kaçırılmamalı; standart masa yüksekliği 75 cm civarındayken, sandalye oturma yüksekliği bu ölçüyle uyumlu olmazsa diz boşluğu ya çok dar ya da rahatsız edici derecede geniş kalıyor."
        ]
      },
      {
        heading: "Yemek odası setinin diğer mobilyalarla uyumu",
        paragraphs: [
          "Yemek odası genelde salonla aynı açık alanda yer aldığı için, oturma grubuyla görsel bir bütünlük kurması gerekiyor. Aynı ahşap tonunu veya aynı metal detayı iki alanda da tekrarlamak, mekanı parçalı değil tek bir bütün gibi hissettiriyor. Farklı bir tarz denemek isteyen müşterilere de kontrollü bir kontrast öneriyoruz; örneğin sıcak ahşap bir yemek masasının yanında daha sade, mat bir oturma grubu dengeyi bozmadan çeşitlilik katabiliyor.",
          "Yemek odası mobilyanızı başka bir mobilyacıdan aldıysanız da montaj ustası hizmetimizden faydalanabilirsiniz; masa, sandalye ve vitrin kurulumunu Çorum içinde biz üstleniyoruz."
        ]
      },
    ],
    faq: [
      {
        question: "Uzatmalı masa mekanizması zamanla bozulur mu?",
        answer:
          "Kaliteli bir mekanizma doğru kullanıldığında uzun yıllar sorunsuz çalışıyor. Biz standart üretimde orta-üst segment mekanizma kullanıyoruz, ucuz sistemlerde görülen gevşeme sorununu bu şekilde önlüyoruz. Mekanizmayı yılda bir kez hafifçe yağlamanızı öneriyoruz; bu basit bakım, açılır kapanır hareketi uzun süre sorunsuz tutuyor.",
      },
      {
        question: "Sandalyeleri masadan bağımsız, farklı sayıda sipariş edebilir miyim?",
        answer:
          "Evet, sandalye adedi tamamen ihtiyacınıza göre belirlenir, masayla birebir eşleşmesi şart değil. İsterseniz aynı model için farklı renklerde sandalye de üretebiliyoruz; bazı müşteriler bilinçli olarak karışık renk düzenini tercih ediyor.",
      },
      {
        question: "Vitrin içine aydınlatma sonradan eklenebilir mi?",
        answer:
          "Mevcut bir vitrine sonradan LED aydınlatma eklemek mümkün, ancak en temiz sonucu üretim aşamasında planlamak veriyor. Sonradan ekleme yapılacaksa kablo yönlendirmesi görünür kalabilir; bu yüzden mümkünse aydınlatma kararını sipariş öncesi vermenizi öneriyoruz.",
      },
    ],
  },
  "ofis-ticari-mobilya": {
    sections: [
      {
        heading: "Ofis ve ticari mobilyada üretim kapsamımız",
        paragraphs: [
          "Ofis ve ticari mobilya kategorisi bireysel ev mobilyasından biraz farklı bir yaklaşım istiyor: burada öncelik estetik kadar dayanıklılık ve yoğun kullanıma dayanma. Çalışma masası, evrak dolabı, toplantı masası, banko ve resepsiyon üniteleri bu kategorinin temel parçaları. Otel, ofis ve restoran projelerinde bu parçaların tamamını tek elden, aynı malzeme ve aynı üretim standardıyla teslim ediyoruz.",
        ],
      },
      {
        heading: "Otel projelerinde mobilya üretimi nasıl ilerliyor?",
        paragraphs: [
          "Otel projelerinde iş, oda sayısı kadar tekrar eden bir üretim modeline dönüşüyor: aynı yatak başlığı, aynı komodin, aynı gardırop düzeni onlarca odada tekrarlanıyor. Bu tip projelerde numune onayı kritik bir adım; ilk üretilen oda takımı otel yetkilisiyle birlikte yerinde incelenip onaylandıktan sonra seri üretime geçiliyor. Böylece 50. odada bir sorunla karşılaşma riski en aza iniyor.",
        ],
      },
      {
        heading: "Restoran ve kafe mobilyasında dayanıklılık önceliği",
        paragraphs: [
          "Restoran ve kafe mobilyasında masa ve sandalyeler günde onlarca kez kullanılıyor, bu yüzden ev mobilyasına göre çok daha yüksek bir aşınma testinden geçmesi gerekiyor. Masa yüzeylerinde çizilmeye ve lekeye dayanıklı laminat ya da kompakt lamine tercih ediyoruz, sandalyelerde ise iskelet birleşimini ekstra takviyeli yapıyoruz. Banko ve kasa üniteleri de işletmenin günlük akışına göre (kaç personel çalışacak, hangi ekipman sığacak) özel ölçülendiriliyor.",
        ],
      },
      {
        heading: "Ofis mobilyasında ergonomi ve düzen",
        paragraphs: [
          "Ofis çalışma masası ve dolap sistemlerinde ergonomi ilk sırada geliyor: masa yüksekliği, kablo yönetim boşluğu, dosya dolabı erişimi gibi detaylar günlük verimliliği doğrudan etkiliyor. Açık ofis düzenlerinde akustik ayırıcı panel içeren masa sistemleri de üretiyoruz; bu, çalışanlara görsel ve ses açısından minimum bir mahremiyet sağlıyor.",
        ],
      },
      {
        heading: "Kurumsal projelerde süreç yönetimi",
        paragraphs: [
          "Kurumsal projelerde asıl zorluk üretim değil, zamanlama. Otel açılış tarihi, restoran teslim tarihi gibi sabit bir takvime bağlı çalışıldığı için üretim planını baştan net bir şekilde kurup buna sadık kalıyoruz. Proje büyüklüğüne göre üretim birkaç haftaya yayılabiliyor, teslimat da genelde partiler halinde (kat kat, alan alan) yapılıyor ki mekan aynı anda tamamen kapanmasın.",
        ],
      },
      {
        heading: "Banko, resepsiyon ve karşılama alanı mobilyası",
        paragraphs: [
          "Banko ve resepsiyon üniteleri bir işletmenin ilk izlenimini oluşturan parçalar olduğu için hem estetik hem işlevsel açıdan özel bir dikkat gerektiriyor. Kasa alanı, bilgisayar ve yazıcı için kablo boşluğu, müşteriyle karşılıklı konuşma yüksekliği gibi detaylar önceden netleşmezse, kurulum sonrası günlük kullanımda rahatsızlık yaratabiliyor. Otel resepsiyonlarında genelde iki farklı yükseklik kullanılıyor: personel tarafı standart masa yüksekliğinde, müşteri tarafı ise ayakta durmaya uygun daha yüksek bir bankoyla tasarlanıyor.",
        ],
      },
      {
        heading: "Yangın ve güvenlik standartlarına uyum",
        paragraphs: [
          "Ticari alanlarda kullanılan malzemelerin, ev mobilyasından farklı olarak bazı yangın güvenliği beklentilerini karşılaması gerekebiliyor; özellikle otel ve restoran gibi kamuya açık mekanlarda döşemelik kumaş ve sünger seçiminde bu husus göz önünde bulunduruluyor. Proje kapsamında işletme sahibinin ilgili mevzuat gerekliliklerini belirtmesi durumunda, malzeme tercihini buna göre yapıyoruz.",
        ],
      },
      {
        heading: "Otel ve restoran projelerinde teslim sonrası revizyon",
        paragraphs: [
          "Büyük ölçekli bir kurumsal projede, teslimattan sonra bile küçük revizyon talepleri gelebiliyor: bir masanın rengi mekanın aydınlatmasında farklı algılanmış olabilir, bir sandalyenin yüksekliği personel için ayarlanmak istenebilir. Bu tip son dakika ayarlamalarını proje kapsamının doğal bir parçası olarak görüyoruz ve mümkün olan en kısa sürede yerinde müdahale ediyoruz."
        ]
      },
      {
        heading: "Ticari mobilyada malzeme seçimi ve maliyet dengesi",
        paragraphs: [
          "Kurumsal projelerde en sık karşılaşılan ikilem, kaliteyi mi yoksa bütçeyi mi önceliklendireceğiniz. Biz bu ikilemi ortadan kaldırmak için her proje için iki ayrı malzeme seçeneği sunuyoruz: bütçe dostu ama dayanıklı bir orta segment ile daha üst segment bir premium seçenek. İşletme sahibi, hangi alanların yoğun kullanılacağını (örneğin giriş bankosu ile arka ofis masası aynı dayanıklılığı gerektirmiyor) değerlendirip harcamasını buna göre önceliklendirebiliyor. Bu yaklaşım, projenin toplam maliyetini gereksiz yere şişirmeden, gerçekten önemli noktalarda kaliteden ödün vermeden ilerlemeyi sağlıyor.",
          "Bakım maliyeti de uzun vadede göz önünde bulundurulmalı; ucuz bir malzeme ilk yatırımda tasarruf sağlasa da, sık tamir veya değişim ihtiyacı doğurduğunda toplam maliyeti artırabiliyor. Bu yüzden teklif sunarken sadece ilk fiyatı değil, malzemenin beklenen ömrünü de açıkça paylaşıyoruz."
        ]
      },
      {
        heading: "Ofis ve ticari projelerde marka kimliği entegrasyonu",
        paragraphs: [
          "Kurumsal mobilya sadece oturmak ya da çalışmak için değil, markanın kimliğini yansıtan bir unsur olarak da işlev görüyor. Otel resepsiyonunda kullanılan ahşap tonu, restoran masasındaki logo detayı ya da ofis toplantı masasının şekli, misafirlerin ve çalışanların markayı nasıl algıladığını dolaylı olarak etkiliyor. Bu yüzden kurumsal projelerde işletmenin marka renklerini, logosunu ve genel algısını üretim öncesi konuşuyoruz; mobilya sadece fonksiyonel değil, markanın bir parçası olarak tasarlanıyor."
        ]
      },
      {
        heading: "Ticari mobilyada teslim sonrası bakım anlaşmaları",
        paragraphs: [
          "Yoğun kullanılan ticari alanlarda mobilyanın düzenli bakımı, ömrünü doğrudan uzatıyor. Bazı kurumsal müşterilerimizle yıllık periyodik bakım anlaşması yapıyoruz: menteşe ve ray kontrolü, küçük onarımlar, gerekirse yüzey rötuşu gibi işlemler belirli aralıklarla planlı şekilde yapılıyor. Bu, işletmenin mobilyayı erken yenilemek zorunda kalmasını önlerken, bizim için de uzun vadeli ve öngörülebilir bir iş ilişkisi anlamına geliyor."
        ]
      },
      {
        heading: "Ticari mobilya siparişinde numune onayı süreci nasıl işler",
        paragraphs: [
          "Küçük bir ticari proje olsa bile (örneğin 10 masalık bir kafe), ilk masa ve sandalye üretildiğinde işletme sahibiyle birlikte yerinde inceliyoruz: yükseklik, dayanıklılık, renk tonu ve genel his onaylandıktan sonra kalan siparişe geçiyoruz. Bu adım, büyük partiler için olduğu kadar küçük siparişler için de değerli; çünkü bir kafenin tek bir masası bile mekanın genel algısını etkiliyor. Numune onay süreci genelde 3-5 gün içinde tamamlanıyor ve toplam proje takvimine ciddi bir gecikme eklemiyor.",
          "Onay sonrası üretim başladığında, işletme sahibiyle düzenli ilerleme paylaşımı yapıyoruz; özellikle açılış tarihi yaklaşan projelerde bu şeffaflık, son dakika sürprizlerini önlüyor."
        ]
      },
      {
        heading: "Ofis mobilyasında depolama ve arşiv çözümleri",
        paragraphs: [
          "Kağıt evrak kullanımı azalsa da, birçok işletme hâlâ belirli belgeleri fiziksel olarak saklamak zorunda. Dosya dolabı ve arşiv ünitelerini ofis düzenine göre gizli (çalışma alanından ayrı bir odada) ya da entegre (çalışma masasına bitişik) olarak tasarlayabiliyoruz. Kilitli çekmece ve dolap seçenekleri, hassas belgelerin güvenliği için tercih ediliyor; bu detayı özellikle finans ve hukuk büroları sık talep ediyor.",
          "Toplantı odası mobilyasında da benzer bir esneklik sunuyoruz: sabit büyük bir toplantı masası yerine, ihtiyaca göre birleştirilip ayrılabilen modüler masa sistemleri küçük ofislerde çok işlevli bir alan yaratıyor.",
          "Çorum'da ofis ve ticari mobilya konusunda mobilya imalatçısı arayan işletmelere hem üretim hem montaj ustası hizmeti bir arada sunuyoruz; ayrı ayrı firmalarla uğraşmak yerine tek bir muhatapla süreci yürütebiliyorsunuz."
        ]
      },
    ],
    faq: [
      {
        question: "Küçük bir kafe için de sipariş alıyor musunuz, yoksa sadece büyük projeler mi?",
        answer:
          "Hem büyük otel/restoran projeleri hem de tek bir kafe veya küçük ofis için mobilya üretiyoruz, proje büyüklüğü fark etmiyor. Küçük bir siparişte de aynı malzeme kalitesi ve numune onay sürecini uyguluyoruz; ölçek küçülse de üretim standardımız değişmiyor.",
      },
      {
        question: "Otel projesinde numune onayı zorunlu mu?",
        answer:
          "Zorunlu değil ama şiddetle öneriyoruz; çok odalı projelerde ilk numunenin onaylanması, seri üretimde sürpriz sorunları önlüyor. Numune atlanıp doğrudan seri üretime geçilirse, küçük bir tasarım hatası bile onlarca parçaya yayılabilir; bu riski almamanızı tavsiye ediyoruz.",
      },
      {
        question: "Mevcut ofis mobilyalarımızın montajını da yapıyor musunuz?",
        answer:
          "Evet, kendi ürettiğimiz mobilyaların yanı sıra farklı markalardan alınmış ofis mobilyalarının montajını da ayrı bir hizmet olarak sunuyoruz. Ofis taşınmalarında birden fazla ekiple aynı anda çalışarak montaj süresini kısaltabiliyoruz, böylece işletmenin kapalı kalma süresi en aza iniyor.",
      },
    ],
  },
};

export const SEGMENT_CONTENT: Record<SegmentSlug, PageArticle> = {
  "bireysel-ozel-olcu-siparis": {
    sections: [
      {
        heading: "Bireysel özel ölçü sipariş kime, ne zaman gerekir?",
        paragraphs: [
          "Standart hazır mobilya çoğu eve az çok uyar ama tam oturmaz. Eğik tavan, dar koridor, çok geniş bir duvar boşluğu ya da özel bir renk beklentisi olduğunda hazır mobilya yetersiz kalıyor. Bireysel özel ölçü sipariş tam bu noktada devreye giriyor: mutfak dolabından gardıroba, yatak odası setinden oturma grubuna kadar her parça, evinizin gerçek ölçüsüne ve sizin kullanım alışkanlığınıza göre tasarlanıyor.",
          "Çorum'da bize ulaşan bireysel müşterilerin büyük kısmı ya yeni taşındıkları bir eve mobilya döşetiyor ya da eski bir mobilyayı yeniliyor. İkisinde de süreç aynı yerden başlıyor: evin ölçüsü ve ihtiyacın netleşmesi.",
        ],
      },
      {
        heading: "Sipariş süreci adım adım nasıl işliyor?",
        paragraphs: [
          "İlk adım WhatsApp veya telefonla kısa bir ön görüşme: hangi mobilya, hangi oda, kabaca hangi bütçe aralığı konuşuluyor. Bu görüşme sonrası atölyeden bir ekip evinize gelip ölçü alıyor, aynı zamanda renk ve malzeme örneklerini yerinde gösteriyor. Ölçü sonrası 2-3 gün içinde teknik çizim ve net fiyat teklifi hazırlanıyor; bu aşamada istenirse revizyon yapılabiliyor. Onay verildikten sonra üretim başlıyor ve üretim süresi mobilya tipine göre genelde 10-25 gün arasında değişiyor.",
          "Son adım montaj: dolap, gardırop, mutfak gibi sabit mobilyalarda ekip evde montajı tamamlıyor. Koltuk, masa gibi taşınabilir parçalarda ise teslimat yeterli oluyor, ekstra montaj gerekmiyor.",
        ],
      },
      {
        heading: "Ölçü alımı neden bu kadar kritik?",
        paragraphs: [
          "Bir santimlik ölçü hatası, üretilmiş bir dolabın duvara oturmaması anlamına gelebilir. Bu yüzden ölçü alımında lazometre kullanıyoruz, sadece genişlik-yükseklik değil, duvarın düzgünlüğünü, priz ve tesisat noktalarını, varsa eğik yüzeyleri de not ediyoruz. Deneyimli bir gözle bakıldığında çoğu evde en az bir duvar tam düz değildir; bu farkı üretim aşamasında hesaba katmazsanız, montaj gününde ciddi bir sorunla karşılaşırsınız.",
        ],
      },
      {
        heading: "Bütçe planlaması: neye göre fiyat değişiyor?",
        paragraphs: [
          "Fiyatı belirleyen üç ana unsur var: malzeme (laminat, lake, masif ahşap gibi), ölçü (doğrusal metre veya metrekare) ve aksesuar/mekanizma tercihi (soft-close menteşe, sürgülü ray, sepetli sistem gibi). Bu üç değişken netleşmeden telefonda verilen fiyat her zaman kaba bir tahmin olarak kalıyor; net teklif ancak ölçü alındıktan sonra verilebiliyor. Bütçesi sınırlı olan müşterilere, önce hangi parçadan başlanabileceği konusunda da yol gösteriyoruz; her şeyi aynı anda değil, öncelik sırasına göre yaptırmak da mümkün.",
        ],
      },
      {
        heading: "Hangi mobilyalar özel ölçüyle yaptırılır, hangileri hazır alınabilir?",
        paragraphs: [
          "Her mobilya özel ölçüyü hak etmiyor. Mutfak dolabı, gardırop, giyinme odası gibi duvara ve mimariye doğrudan bağlı parçalarda özel ölçü neredeyse zorunlu; çünkü bu ürünlerde milimetrik uyum, kullanım rahatlığını doğrudan belirliyor. Buna karşılık sehpa, tekli koltuk, aksesuar rafı gibi bağımsız duran parçalarda hazır ürün de gayet iyi çalışabiliyor. Müşterilere ilk görüşmede bu ayrımı açıkça anlatıyoruz; her mobilyayı özel ürettirmek zorunda değilsiniz, bütçenizi gerçekten fark yaratacak parçalara yönlendirmek daha akıllıca.",
        ],
      },
      {
        heading: "Sipariş sonrası değişiklik yapılabilir mi?",
        paragraphs: [
          "Üretim başlamadan önce, yani teknik çizim onay aşamasında revizyon yapmak tamamen mümkün ve ücretsiz. Üretim başladıktan sonra malzeme veya ölçüde değişiklik istenirse, ne kadarının tamamlandığına bağlı olarak ek maliyet çıkabiliyor; bu yüzden onay öncesi çizimi dikkatle incelemenizi, aklınıza takılan her detayı o aşamada sormanızı öneriyoruz. Renk numunesi ve malzeme örneği talep etmek de karar vermeden önce her zaman mümkün.",
        ],
      },
      {
        heading: "İlk kez özel ölçü mobilya sipariş edenler için pratik ipuçları",
        paragraphs: [
          "İlk kez özel ölçü mobilya sipariş edecek müşterilere önerdiğimiz birkaç pratik adım var: önce net bir bütçe aralığı belirleyin, ardından odanın fotoğraflarını çekin ve varsa beğendiğiniz bir görseli saklayın. Ölçü randevusuna evdeki mevcut mobilyaların yerini değiştirmeden gelin ki gerçek kullanım alanını birlikte değerlendirebilelim. Karar verirken tek bir kritere (sadece fiyat ya da sadece görsel) takılı kalmak yerine, malzeme kalitesi ve teslim süresini de dengeli şekilde değerlendirmenizi öneriyoruz."
        ]
      },
      {
        heading: "Özel ölçü sipariş ile hazır mobilya arasında fiyat farkı gerçekten büyük mü",
        paragraphs: [
          "Bu soruyu çok sık duyuyoruz ve cevap sanıldığı kadar net değil. Bazı basit ürünlerde (örneğin tek bir sehpa) hazır alım gerçekten daha ekonomik olabiliyor. Ama mutfak dolabı, gardırop gibi ölçüye bağımlı ürünlerde durum tersine dönüyor; çünkü hazır bir sistemi eve uydurmak için gereken ek dolgu, kesim ve montaj işçiliği çoğu zaman özel ölçünün maliyetine yaklaşıyor, üstelik sonuç hazır sistemde asla tam oturmuyor. Biz müşteriye her zaman iki seçeneği de dürüstçe karşılaştırıyoruz; bazen hazır alım daha mantıklıyken, bazen özel ölçü hem daha iyi sonuç hem de yakın bir bütçe sunuyor.",
          "Uzun vadeli düşünüldüğünde özel ölçü mobilyanın bir avantajı daha var: evden eve taşındığınızda ya da yeniden düzenlediğinizde, doğru ölçülmüş bir mobilya genelde yeni mekanda da işlevini korurken, hazır bir sistem yeni evde aynı uyumu nadiren sağlıyor."
        ]
      },
      {
        heading: "Bireysel siparişte ekip kaç kişiden oluşuyor, kaç ziyaret gerekiyor",
        paragraphs: [
          "Standart bir bireysel sipariş genelde üç temas noktasından geçiyor: ölçü alımı, gerekiyorsa ara kontrol (özellikle büyük projelerde), ve montaj. Ölçü ekibi genelde iki kişiden oluşuyor, montaj ekibi ürün büyüklüğüne göre iki ile dört kişi arasında değişiyor. Küçük bir sipariş (örneğin tek bir komodin) için tek ziyaret yeterli olabilirken, komple bir ev döşemesinde süreç haftalar sürebiliyor ve birden fazla ziyaret gerektirebiliyor. Bu süreci başta net bir şekilde anlatıyoruz ki müşteri her aşamada ne bekleyeceğini bilsin."
        ]
      },
      {
        heading: "Bireysel siparişte malzeme numunesi görmeden karar vermeyin",
        paragraphs: [
          "Ekran üzerinde gördüğünüz bir renk fotoğrafı, gerçek malzemede farklı bir ton verebiliyor; ekranın parlaklık ayarı, ışık koşulları ve fotoğrafın çekildiği ortam bu farkın başlıca sebepleri. Bu yüzden atölyeye uğrayıp gerçek malzeme numunesini elinizle tutmadan, sadece görsele bakarak karar vermenizi önermiyoruz. Numune görmek özellikle lake renk ve ahşap desen kararlarında yanlış anlaşılmayı en aza indiriyor; bu küçük adım, üretim sonrası hayal kırıklığı yaşama riskini neredeyse sıfırlıyor."
        ]
      },
      {
        heading: "Bireysel siparişte malzeme atığı ve çevre duyarlılığı",
        paragraphs: [
          "Özel ölçü üretimde malzeme, standart plakalardan kesilerek elde ediliyor ve doğal olarak bir miktar kesim artığı oluşuyor. Atölyede bu artıkları mümkün olduğunca değerlendirmeye, küçük aksesuar veya destek parçalarında yeniden kullanmaya çalışıyoruz; kullanılamayan MDF ve ahşap artıkları ise geri dönüşüme yönlendiriliyor. Büyük bir üretim kapasitesi olmasa da, atölye ölçeğinde bu tip küçük adımların uzun vadede fark yarattığını düşünüyoruz."
        ]
      },
      {
        heading: "Bireysel siparişte iletişim kanalı tercihi",
        paragraphs: [
          "Bazı müşteriler telefonla konuşmayı, bazıları yazılı olarak WhatsApp üzerinden ilerlemeyi tercih ediyor; her iki kanalı da aynı hızda takip ediyoruz. WhatsApp üzerinden fotoğraf, ölçü ve renk paylaşımı yapmak özellikle görsel referans içeren taleplerde daha pratik oluyor, çünkü yazışma geçmişi her iki tarafta da kalıyor ve karışıklığı önlüyor."
        ]
      },
    ],
    faq: [
      {
        question: "Ölçü alımı ücretli mi?",
        answer:
          "Hayır, Çorum merkez için ölçü alımı ücretsiz. Merkez dışındaki köy ve beldeler için de talep üzerine ölçü alımı yapıyoruz, sadece randevu tarihini biraz önceden netleştirmenizi rica ediyoruz.",
      },
      {
        question: "Sadece tek bir mobilya (örneğin tek bir dolap) sipariş edebilir miyim?",
        answer:
          "Evet, komple bir oda şartı yok; tek parça sipariş de alıyoruz. Birçok müşterimiz bütçesine göre önce en gerekli parçayı yaptırıp, kalanını zamana yayarak tamamlıyor; bu da tamamen normal bir yaklaşım.",
      },
      {
        question: "Kendi getirdiğim bir görsele göre üretim yapabilir misiniz?",
        answer:
          "Evet, referans görseli bize gösterirseniz en yakın uyumu sağlayacak şekilde tasarım ve malzeme önerisi sunuyoruz. Görseldeki tasarım kendi mekanınıza birebir uymayabilir; bu durumda ölçünüze göre en yakın uyarlamayı birlikte belirliyoruz.",
      },
    ],
  },
  "toptan-uretim": {
    sections: [
      {
        heading: "Çorum sanayi mobilyacılara toptan/fason üretim",
        paragraphs: [
          "İkram Mobilya, bireysel müşterinin yanı sıra Çorum Organize Sanayi Bölgesi'ndeki (OSB) ve şehir merkezindeki mobilya mağazalarına da toptan ve fason üretim hizmeti veriyor. Fason üretimde mağaza kendi modelini, ölçüsünü ve malzeme tercihini belirliyor, biz o spesifikasyona göre üretimi gerçekleştiriyoruz. Bu, mağazanın kendi markası altında satış yapmasını sağlarken, üretim yükünü ve sermaye ihtiyacını bizim atölyemize devretmesine imkan tanıyor.",
        ],
      },
      {
        heading: "Numune onayı ve kapasite planlaması",
        paragraphs: [
          "Toptan üretimde iş her zaman bir numune ile başlar. Mağaza yetkilisiyle birlikte ilk parça üretilip incelenir, malzeme, ölçü ve işçilik onaylandıktan sonra seri üretime geçilir. Bu adım atlanırsa, 50 veya 100 parçalık bir siparihte küçük bir hata bütün partiye yayılabilir; biz bu riski almıyoruz. Numune onayından sonra kapasite planlaması yapılır: atölyenin o anki iş yükü, malzeme tedarik süresi ve mağazanın istediği teslim tarihi birlikte değerlendirilerek gerçekçi bir üretim takvimi çıkarılır.",
        ],
      },
      {
        heading: "Hangi ürün gruplarında fason üretim yapıyoruz?",
        paragraphs: [
          "Yatak odası takımları (komodin, şifonyer, yatak başlığı), oturma grubu iskelet ve döşemesi, yemek odası masa-sandalye-vitrin üçlüsü en sık fason ürettiğimiz gruplar. Mutfak dolabı ve gardırop gibi ölçüye bağımlı ürünlerde de belirli standart ölçü aralıklarında seri üretim yapabiliyoruz, ancak bu ürünlerde mağazanın kendi bayi ölçü sistemine uyum sağlamak gerekiyor.",
        ],
      },
      {
        heading: "Teslim süreleri ve lojistik",
        paragraphs: [
          "Teslim süresi ürün tipine ve sipariş adedine göre değişiyor; küçük bir parti birkaç hafta içinde tamamlanabilirken, büyük bir sezon siparişi bir-iki ay sürebiliyor. Mağazayla baştan net bir teslim takvimi belirliyoruz ve bu takvime bağlı kalıyoruz; çünkü mağazanın kendi satış ve stok planlaması da bu tarihe göre şekilleniyor. Çorum içi teslimat kendi aracımızla yapılıyor, şehir dışı teslimatlarda anlaşmalı nakliye firmalarıyla çalışıyoruz.",
        ],
      },
      {
        heading: "Neden kendi üretiminiz yerine fason tercih etmelisiniz?",
        paragraphs: [
          "Bir mobilya mağazası için kendi üretim atölyesi kurmak ciddi bir sermaye ve makine yatırımı gerektiriyor. Fason üretimle bu yatırımı yapmadan, sadece sipariş bazlı ödeme yaparak kendi ürün gamınızı genişletebiliyorsunuz. Ayrıca talep dalgalanmalarında (örneğin sezonluk yoğunlukta) esnek kapasite kullanımı sağlıyor; kendi atölyenizde sabit bir kapasiteniz olduğunda talep düştüğünde atıl kalan makine ve işçilik maliyeti sizde kalır, fason üretimde bu risk bize devrediliyor.",
        ],
      },
      {
        heading: "Kalite kontrol nasıl sağlanıyor?",
        paragraphs: [
          "Seri üretimde en büyük risk, ilk parçadan sonuncusuna kadar tutarlılığın bozulması. Bunu önlemek için üretim hattında belirli aralıklarla ara kontrol yapıyoruz: ölçü toleransı, yüzey kalitesi ve aksesuar montajı düzenli olarak numuneyle karşılaştırılıyor. Herhangi bir sapma fark edildiğinde parti durdurulup sorun kaynağında çözülüyor, hatalı parça mağazaya gönderilmiyor. Bu kontrol disiplini, özellikle uzun süreli çalıştığımız mağazalarla güven ilişkisinin temelini oluşturuyor.",
        ],
      },
      {
        heading: "Uzun vadeli iş birliği ve fiyat istikrarı",
        paragraphs: [
          "Tek seferlik sipariş yerine düzenli, tekrarlayan bir iş birliği kurduğumuz mağazalarla malzeme tedarikini de daha planlı yönetebiliyoruz; bu da fiyat istikrarına olumlu yansıyor. Sezonluk dalgalanmalarda önceden haber verildiğinde kapasiteyi buna göre ayarlayıp teslim gecikmesi riskini azaltıyoruz. Yeni başlayan bir iş birliğinde ilk birkaç sipariş genelde küçük partilerle test edilir, karşılıklı güven oturduktan sonra daha büyük hacimlere geçilir; bu, hem bizim hem mağazanın riskini en aza indiren doğal bir süreç.",
        ],
      },
      {
        heading: "Mağazanızın kendi markasıyla satış yapması",
        paragraphs: [
          "Fason üretimde ürettiğimiz mobilyalar tamamen sizin markanız altında satılıyor, İkram Mobilya etiketi ya da tanıtımı ürüne yansımıyor. Bu, mağazanızın kendi kimliğini korumasını sağlarken, arka planda güvenilir ve tutarlı bir üretim ortağına sahip olmanızı garanti ediyor. Talep ederseniz özel ambalaj ve etiketleme de üretim sürecine dahil edilebiliyor."
        ]
      },
      {
        heading: "Yeni açılan bir mobilya mağazasıyla çalışmaya nasıl başlanır",
        paragraphs: [
          "Çorum'da yeni açılan ya da ürün gamını genişletmek isteyen bir mobilya mağazasıyla ilk iş birliğine genelde küçük bir tanışma siparişiyle başlıyoruz. Mağaza sahibi birkaç farklı üründen küçük bir parti sipariş ediyor, biz de kalite ve teslim performansımızı gösteriyoruz. Bu ilk denemenin sonucunda karşılıklı güven oluştuğunda, sipariş hacmi ve ürün çeşitliliği doğal olarak artıyor. Bu kademeli yaklaşım, hem mağazanın hem bizim riski en aza indiren, sektörde yaygın ve sağlıklı bir başlangıç şekli.",
          "Yeni iş birliklerinde fiyatlandırmayı da esnek tutuyoruz; küçük hacimli ilk siparişlerde birim fiyat biraz daha yüksek olabilirken, düzenli ve büyüyen hacimlerde kademeli indirim uyguluyoruz. Bu, mağazanın büyümesini teşvik eden bir model."
        ]
      },
      {
        heading: "Fason üretimde malzeme tedariki kimin sorumluluğunda",
        paragraphs: [
          "Standart fason üretimde malzeme tedarikini biz üstleniyoruz; mağazanın ayrı bir tedarikçiyle uğraşmasına gerek kalmıyor. Bazı mağazalar özel bir malzeme veya renk tercih ettiğinde, o malzemeyi kendileri temin edip bize gönderebiliyor, biz sadece işçilik ve üretimi üstleniyoruz. İki model de mümkün, hangisinin daha uygun olduğuna mağazanın kendi tedarik ağına ve bütçesine göre birlikte karar veriyoruz."
        ]
      },
      {
        heading: "Fason üretimde ürün çeşitliliği ve model geliştirme",
        paragraphs: [
          "Bazı mağazalar bize sadece mevcut bir modeli ürettirmekle kalmıyor, yeni bir model geliştirme sürecine de dahil ediyor. Bu durumda önce bir prototip üretiyoruz, mağaza sahibiyle birlikte ölçü, malzeme ve detayları test ediyoruz, gerekli revizyonlardan sonra seri üretime geçiyoruz. Bu tip model geliştirme iş birlikleri, mağazanın rakiplerinden farklılaşan kendi ürün hattını oluşturmasına imkan tanıyor; atölye tarafında da uzun soluklu ve tekrar eden bir üretim ilişkisi anlamına geliyor."
        ]
      },
      {
        heading: "Fason üretimde iade ve hatalı ürün süreci",
        paragraphs: [
          "Herhangi bir üretim sürecinde, ne kadar dikkatli çalışılırsa çalışılsın, çok nadir de olsa hatalı bir parça çıkabiliyor. Bu durumda net bir politikamız var: hatalı ürün tespit edildiğinde ücretsiz olarak yeniden üretiyor ya da onarıyoruz, mağazaya ek maliyet çıkarmıyoruz. Bu garantiyi sözlü değil, sipariş onayı aşamasında yazılı olarak da netleştiriyoruz ki mağaza sahibi bu konuda tam güvenle çalışabilsin. Uzun vadeli iş birliklerinde bu tip sorunlar zaten numune onay sürecinin sıkı işletilmesi sayesinde çok nadir yaşanıyor."
        ]
      },
      {
        heading: "Fason üretimde sezonluk kapasite planlaması",
        paragraphs: [
          "Mobilya sektöründe belirli dönemler (yaz sonu ev taşınmaları, yılbaşı öncesi yenileme dönemi gibi) talebin yoğunlaştığı zamanlar. Uzun süredir çalıştığımız mağazalarla bu yoğun dönemlerden birkaç hafta önce kapasite planlaması yapıyoruz; mağaza sezonluk tahminini bizimle paylaştığında, malzeme stoğunu ve üretim hattını buna göre önceden ayarlayabiliyoruz. Bu önceden planlama, yoğun dönemde teslim gecikmesi yaşama riskini büyük ölçüde azaltıyor.",
          "Yeni başlayan iş birliklerinde bu tip sezonluk öngörü henüz oluşmadığı için, ilk yıl biraz daha esnek ve reaktif çalışıyoruz; zamanla mağazanın talep örüntüsünü tanıdıkça planlama da daha isabetli hale geliyor."
        ]
      },
      {
        heading: "Fason üretimde iletişim sıklığı ve raporlama",
        paragraphs: [
          "Uzun soluklu mağaza iş birliklerinde üretim durumunu düzenli paylaşıyoruz; büyük bir parti üretimdeyken haftalık ilerleme bilgisi vermek, mağazanın kendi satış planlamasını daha rahat yapmasını sağlıyor. Teslim tarihi yaklaştığında son birkaç gün daha sık iletişim kuruyoruz ki mağaza teslim alım lojistiğini (depo, personel, araç) önceden ayarlayabilsin."
        ]
      },
    ],
    faq: [
      {
        question: "Minimum sipariş adedi var mı?",
        answer:
          "Ürün tipine göre değişiyor; net rakam için mağazanızın ihtiyacını WhatsApp üzerinden bize iletmeniz yeterli. Yeni başlayan iş birliklerinde küçük hacimli bir deneme siparişiyle başlamak da mümkün, minimum adet konusunda katı değiliz.",
      },
      {
        question: "Kendi tasarımımız var, ona göre üretim yapabilir misiniz?",
        answer:
          "Evet, mağazanızın kendi teknik çizimi veya numunesi varsa ona göre üretim yapıyoruz. Çizim yoksa, sözlü tarif ve referans görsellerinden yola çıkarak birlikte bir teknik çizim de hazırlayabiliyoruz.",
      },
      {
        question: "Şehir dışına teslimat yapıyor musunuz?",
        answer:
          "Evet, Çorum dışına da anlaşmalı nakliye firmalarıyla teslimat sağlıyoruz. Nakliye süresi ve maliyeti mesafeye göre değişiyor, bu bilgiyi üretim teklifiyle birlikte önceden netleştiriyoruz.",
      },
    ],
  },
  "kurumsal-proje-uretimi": {
    sections: [
      {
        heading: "Otel, ofis, restoran projelerinde kurumsal üretim",
        paragraphs: [
          "Kurumsal proje üretimi, bireysel siparişten farklı bir disiplin istiyor: burada tek bir müşterinin değil, bir işletmenin ihtiyacı karşılanıyor ve genelde sabit bir açılış veya teslim tarihine bağlı çalışılıyor. Otel oda mobilyalarından restoran masa-sandalye takımlarına, ofis çalışma alanlarından resepsiyon bankosuna kadar geniş bir yelpazede üretim yapıyoruz.",
        ],
      },
      {
        heading: "Proje sürecinin aşamaları",
        paragraphs: [
          "Kurumsal bir proje genelde keşif ziyaretiyle başlıyor: mekanın planı, kullanım amacı ve bütçe aralığı birlikte değerlendiriliyor. Ardından teknik çizim ve malzeme önerisi hazırlanıyor, onay sonrası (özellikle tekrarlayan ürünlerde) numune üretilip incelettiriliyor. Numune onaylandıktan sonra seri üretime geçiliyor, teslimat genelde mekanın açılış takvimine göre partiler halinde planlanıyor.",
        ],
      },
      {
        heading: "Anahtar teslim üretim ne anlama geliyor?",
        paragraphs: [
          "Bazı müşteriler sadece belirli parçaları bizden alırken, bazı projelerde mekanın mobilya ihtiyacının tamamını üstleniyoruz: tasarımdan üretime, teslimattan montaja kadar tek elden yürüyen bir süreç. Bu yaklaşım özellikle yeni açılan otel ve restoranlarda tercih ediliyor, çünkü işletme sahibinin birden fazla tedarikçiyle ayrı ayrı koordinasyon kurma yükünü ortadan kaldırıyor.",
        ],
      },
      {
        heading: "Malzeme ve dayanıklılık standardı",
        paragraphs: [
          "Kurumsal alanlarda mobilya, ev kullanımına göre çok daha yoğun bir trafiğe maruz kalıyor. Bu yüzden otel ve restoran projelerinde standart ev mobilyasına göre daha dayanıklı malzeme ve daha güçlü birleşim teknikleri kullanıyoruz: takviyeli iskelet, çizilmeye dayanıklı yüzey kaplamaları, yoğun kullanıma uygun döşemelik kumaşlar. Bu tercih başta biraz maliyeti artırsa da, işletmenin mobilyayı sık sık yenilemek zorunda kalmamasını sağlıyor.",
        ],
      },
      {
        heading: "Bütçe ve zamanlama nasıl yönetiliyor?",
        paragraphs: [
          "Kurumsal projelerde bütçe genelde parça başına değil, proje toplamına göre planlanıyor. Keşif sonrası verdiğimiz teklif, malzeme ve işçilik detaylarıyla birlikte kalem kalem sunuluyor ki işletme sahibi nereye ne kadar harcandığını net görebilsin. Zamanlama konusunda ise açılış tarihine göre geriye doğru bir üretim takvimi kuruyoruz ve bu takvime bağlı kalıyoruz; kurumsal projelerde gecikmenin maliyeti bireysel siparişe göre çok daha yüksek olabiliyor.",
        ],
      },
      {
        heading: "Referans ve geçmiş proje deneyimi neden soruluyor?",
        paragraphs: [
          "Kurumsal bir müşteri bizimle ilk kez çalışacaksa, benzer ölçekte bir proje daha önce yapıp yapmadığımızı sorması gayet doğal. Otel ve restoran projelerinde tekrarlayan üretim, teslim disiplini ve montaj koordinasyonu bireysel siparişten farklı bir tecrübe gerektiriyor; bu tecrübeyi daha önce yürüttüğümüz projelerle gösterebiliyoruz. İlk görüşmede geçmiş proje örneklerini paylaşmaktan çekinmiyoruz, çünkü kurumsal bir kararın güvene dayalı olması gerektiğini biliyoruz.",
        ],
      },
      {
        heading: "Proje sonrası destek ve garanti",
        paragraphs: [
          "Teslimatla iş bitmiyor; işletme açıldıktan sonra yoğun kullanımda ortaya çıkabilecek küçük ayar ihtiyaçlarında (kapak sarkması, ray gevşemesi gibi) destek sağlıyoruz. Kurumsal projelerde genelde belirli bir garanti süresi üzerinden anlaşıyoruz, bu süre içinde malzeme veya işçilikten kaynaklanan sorunlarda ek ücret talep etmiyoruz. Uzun vadede işletmeyle kurulan bu güven ilişkisi, ileride yeni şube veya genişleme projelerinde de doğal bir devamlılık sağlıyor.",
        ],
      },
      {
        heading: "Proje büyüklüğüne göre ekip planlaması",
        paragraphs: [
          "Küçük bir kafe projesinde tek bir üretim ekibi yeterli olurken, çok odalı bir otel projesinde birden fazla ekip paralel çalışarak üretimi hızlandırıyor. Ekip sayısını ve üretim hattı kapasitesini projenin teslim tarihine göre baştan planlıyoruz; son ana bırakılan bir kapasite artırımı hem kaliteyi hem teslim güvenilirliğini riske atar, bu yüzden büyük projelerde erken planlamayı önemsiyoruz."
        ]
      },
      {
        heading: "Kurumsal projelerde iletişim ve proje yöneticisi rolü",
        paragraphs: [
          "Büyük bir otel ya da restoran projesinde işin en kritik parçalarından biri iletişim düzeni. Birden fazla paydaşın (mimar, işletme sahibi, bazen dekorasyon danışmanı) aynı anda dahil olduğu projelerde, tek bir proje yöneticisi üzerinden ilerlemek karışıklığı önlüyor. Atölyemizde her kurumsal proje için tek bir irtibat kişisi atanıyor; bu kişi hem üretim sürecini takip ediyor hem de işletme tarafındaki sorulara hızlı dönüş sağlıyor. Dağınık iletişim, kurumsal projelerde gecikme ve yanlış anlaşılmanın en büyük sebebi olduğu için bu düzeni önemsiyoruz."
        ]
      },
      {
        heading: "Kurumsal projede ödeme ve sözleşme yapısı",
        paragraphs: [
          "Büyük ölçekli kurumsal projelerde ödeme genelde tek seferde değil, aşamalı olarak yapılandırılıyor: sipariş onayında bir ön ödeme, üretim tamamlandığında ara ödeme, teslimat sonrası kalan bakiye gibi bir yapı kullanıyoruz. Bu yapı hem işletmenin nakit akışını kolaylaştırıyor hem de bizim üretim maliyetimizi baştan güvence altına alıyor. Proje kapsamı, teslim tarihi ve ödeme takvimi yazılı olarak netleştirildikten sonra üretime başlıyoruz; bu, iki taraf için de netlik sağlayan bir adım."
        ]
      },
      {
        heading: "Kurumsal projelerde nakliye ve kurulum lojistiği",
        paragraphs: [
          "Büyük bir otel projesinde onlarca oda takımının aynı anda taşınması, ciddi bir lojistik planlama gerektiriyor. Nakliye sırasında mobilyaların hasar görmemesi için özel ambalajlama yapıyoruz, kurulum sırasını da binanın kat planına göre en verimli şekilde sıralıyoruz. Şehir dışı projelerde nakliye süresini de üretim takvimine dahil ediyoruz ki teslim tarihinde sürpriz gecikme yaşanmasın; bu detayları proje teklifinde en baştan şeffafça belirtiyoruz."
        ]
      },
      {
        heading: "Kurumsal projelerde çoklu şube ve zincir işletme deneyimi",
        paragraphs: [
          "Tek bir mekan için değil, birden fazla şubesi olan ya da açmayı planlayan işletmelerle de çalışıyoruz. Bu tip projelerde ilk şubede oluşturulan tasarım ve malzeme standardı bir şablon haline geliyor, sonraki şubelerde aynı kalite ve görünüm daha hızlı şekilde tekrarlanabiliyor. Zincir işletmeler için bu tutarlılık, marka deneyiminin her şubede aynı hissettirmesi açısından kritik; biz de her yeni şube siparişinde önceki şablonu referans alarak süreci hızlandırıyoruz."
        ]
      },
      {
        heading: "Kurumsal projelerde tasarım onay süreci nasıl hızlandırılır",
        paragraphs: [
          "Büyük projelerde tasarım onayı bazen beklenenden uzun sürebiliyor, çünkü birden fazla karar verici (işletme sahibi, ortaklar, bazen yatırımcı) aynı anda görüş bildiriyor. Bu süreci hızlandırmak için önerimiz, tek bir yetkili kişinin nihai onay merciini üstlenmesi; böylece farklı görüşler o kişi üzerinden tek bir karara dönüşüyor. Ayrıca ilk teklif aşamasında birden fazla malzeme ve renk seçeneğini yan yana sunarak, karar vericilerin daha hızlı kıyaslama yapmasını sağlıyoruz.",
          "Dijital görsel ve numune fotoğraflarını erken paylaşmak da uzaktaki ortakların ya da yatırımcıların sürece dahil olmasını kolaylaştırıyor, bu da onay sürecini haftalar yerine günlere indirebiliyor."
        ]
      },
      {
        heading: "Kurumsal projelerde alternatif malzeme önerileri",
        paragraphs: [
          "Bazen istenen malzeme tedarik süresi projenin takvimiyle uyuşmuyor; bu durumda benzer görünüm ve dayanıklılık sunan alternatif malzemeler öneriyoruz. Örneğin belirli bir ithal kumaş uzun tedarik süresi gerektiriyorsa, yerli üretim benzer dokulu bir kumaşla süreci hızlandırabiliyoruz. Bu tip alternatifleri sunarken görsel ve dayanıklılık farkını açıkça anlatıyoruz, kararı her zaman işletme sahibine bırakıyoruz.",
          "Malzeme tedarikinde yaşanabilecek gecikmeleri en aza indirmek için, büyük projelerde kritik malzemeleri üretim takviminden önce sipariş etmeyi ve stoklamayı tercih ediyoruz."
        ]
      },
    ],
    faq: [
      {
        question: "Küçük bir restoran için de proje alıyor musunuz?",
        answer:
          "Evet, proje büyüklüğü otel ölçeğinde olmak zorunda değil; tek bir kafe veya küçük bir ofis için de kurumsal üretim yapıyoruz. Küçük projelerde de aynı numune onay sürecini uyguluyoruz, sadece üretim takvimi daha kısa sürede tamamlanıyor.",
      },
      {
        question: "Mekanın tasarımını siz mi yapıyorsunuz, yoksa hazır bir tasarım mı gerekiyor?",
        answer:
          "İkisi de mümkün; hazır bir mimari/dekorasyon planınız varsa ona göre üretim yapıyoruz, yoksa dekorasyon danışmanlığı hizmetimizle birlikte planlama sürecine de destek oluyoruz. İki durumda da nihai üretim çizimini onayınıza sunuyoruz, üretim ancak onay sonrası başlıyor.",
      },
      {
        question: "Teslimat tek seferde mi yapılıyor?",
        answer:
          "Genelde hayır; büyük projelerde teslimat kat kat veya alan alan, mekanın açılış sürecine uygun partiler halinde yapılıyor. Bu bölümlü teslimat, mekanın bir kısmının erken hizmete açılmasını da mümkün kılıyor.",
      },
    ],
  },
  "mobilya-montaj-hizmeti": {
    sections: [
      {
        heading: "Çorum'da mobilya montaj ustası arıyorsanız",
        paragraphs: [
          "Mobilya montajı, üretim kadar özen isteyen ayrı bir iş. Doğru üretilmiş bir mobilya bile yanlış monte edildiğinde sarkan kapak, gıcırdayan çekmece veya duvara tam oturmayan dolap gibi sorunlarla karşınıza çıkabilir. İkram Mobilya olarak sadece kendi ürettiğimiz mobilyaların değil, farklı markalardan satın alınmış hazır mobilyaların da montaj hizmetini veriyoruz.",
        ],
      },
      {
        heading: "Hangi mobilyaların montajını yapıyoruz?",
        paragraphs: [
          "Gardırop, mutfak dolabı, TV ünitesi, yatak odası takımı, ofis mobilyası gibi hemen her tür mobilyanın montajını üstleniyoruz. Özellikle IKEA tarzı paketlenmiş, kendin-yap (flat-pack) mobilyalarda montaj talebi yoğun; bu ürünlerin talimatları bazen eksik veya yetersiz kalabiliyor, deneyimli bir ekiple montaj hem zaman kazandırıyor hem de mobilyanın hasar görmeden kurulmasını sağlıyor.",
        ],
      },
      {
        heading: "Montaj sırasında en sık karşılaşılan sorunlar",
        paragraphs: [
          "En sık karşılaştığımız sorun, duvarın tam düz olmaması. Bu durumda dolap ya da rafın terazisini almak için ek ayar ve destek gerekiyor; deneyimsiz bir montajda bu fark edilmeyip dolap eğik ya da sallantılı kalabiliyor. İkinci sık sorun ise eksik veya yanlış vida/dübel seçimi; duvarın malzemesine (beton, gazbeton, alçıpan) göre doğru dübel kullanılmazsa, ağır bir dolap zamanla duvardan gevşeyip tehlikeli bir hal alabilir. Biz montaj öncesi duvar tipini kontrol edip malzemeyi ona göre seçiyoruz.",
        ],
      },
      {
        heading: "Toplu montaj: ofis ve otel projelerinde",
        paragraphs: [
          "Tekil ev montajının dışında, ofis taşınmalarında veya otel/proje teslimlerinde toplu montaj hizmeti de veriyoruz. Bu tip işlerde birden fazla ekip aynı anda farklı odalarda çalışarak süreci hızlandırıyor, işletmenin kapalı kalma süresini en aza indiriyoruz.",
        ],
      },
      {
        heading: "Randevu ve fiyatlandırma nasıl işliyor?",
        paragraphs: [
          "Montaj fiyatı, mobilya sayısına, montaj karmaşıklığına ve konuma göre değişiyor. WhatsApp üzerinden mobilyanın fotoğrafını veya modelini paylaşırsanız yaklaşık bir fiyat ve süre bilgisi verebiliyoruz, kesin fiyat yerinde görüldükten sonra netleşiyor. Çorum merkez için genelde aynı hafta içinde randevu ayarlayabiliyoruz.",
        ],
      },
      {
        heading: "Neden bir ustaya değil, bir atölyeye montaj yaptırmalısınız?",
        paragraphs: [
          "Bağımsız çalışan bir montaj ustası genelde tek başına iş görür, karmaşık bir sorunla karşılaştığında (örneğin dolabın gövdesinde üretim hatası varsa) çözüm için elinde sınırlı imkan olur. Bir üretim atölyesinin montaj ekibi olarak çalıştığımızda, gerekirse yerinde küçük bir parça kesimi veya onarımı da yapabiliyoruz; çünkü arkamızda tam donanımlı bir atölye var. Bu, özellikle eski veya hasarlı mobilyaların montajında ciddi bir avantaj sağlıyor.",
        ],
      },
      {
        heading: "Ev taşıma sürecinde montaj planlaması",
        paragraphs: [
          "Ev taşıma günü genelde stresli ve zaman baskılı geçiyor; bu yüzden montaj randevusunu taşınma tarihinden birkaç gün önce netleştirmenizi öneriyoruz. Büyük mobilyaların (gardırop, mutfak dolabı gibi) montajını taşınma öncesi, boş evde yapmak hem ekibimiz için hem de sizin için çok daha pratik oluyor; eşyalar yerleştirildikten sonra montaj yapmak hem zaman kaybettiriyor hem de mobilyalara zarar verme riskini artırıyor.",
        ],
      },
      {
        heading: "Montaj sonrası kontrol ve teslim",
        paragraphs: [
          "Montaj tamamlandıktan sonra ekip, tüm kapak ve çekmecelerin düzgün açılıp kapandığını, dolabın terazisinin doğru olduğunu birlikte kontrol ediyor. Bu son kontrol adımı atlanmadan işi teslim etmiyoruz; herhangi bir aksaklık fark edilirse aynı ziyaret içinde düzeltiliyor. Montaj sonrası birkaç gün içinde küçük bir sorun fark ederseniz, tekrar ücret talep etmeden dönüp bakıyoruz."
        ]
      },
      {
        heading: "Montaj hizmetinde sık sorulan pratik detaylar",
        paragraphs: [
          "Montaj randevusu öncesi müşterilerin en çok merak ettiği konular arasında süre ve alet ihtiyacı geliyor. Standart bir gardırop montajı ortalama 2-4 saat sürerken, komple bir mutfak dolabı montajı bir tam gün sürebiliyor. Ekip kendi aletini getiriyor, müşteriden ek bir ekipman talep etmiyoruz; sadece montaj yapılacak alanın boş ve ulaşılabilir olması yeterli. Elektrikli alet kullanımı nedeniyle küçük çocuk veya evcil hayvanı olan evlerde montaj sırasında alanın biraz uzak tutulmasını rica ediyoruz."
        ]
      },
      {
        heading: "Montaj garantisi ve sorumluluk sınırı",
        paragraphs: [
          "Kendi ürettiğimiz mobilyaların montajında hem işçilik hem montaj garantisi tam olarak bize ait. Farklı markadan alınmış hazır mobilyaların montajında ise garanti kapsamı biraz farklı işliyor: montaj işçiliğini garanti ediyoruz, ancak ürünün kendi üretim kaynaklı bir kusuru varsa (örneğin fabrikasyon hatalı bir parça) bu, ürünü sattığınız markanın garantisi kapsamında kalıyor. Bu ayrımı montaj öncesi açıkça belirtiyoruz ki müşteri hangi sorunun kime ait olduğunu net bilsin."
        ]
      },
      {
        heading: "Montaj hizmetinde bölgesel kapsama alanı",
        paragraphs: [
          "Çorum merkezde montaj hizmetini genelde aynı hafta içinde planlayabiliyoruz. Sungurlu, Osmancık, Alaca gibi ilçelerde de talep üzerine montaj hizmeti veriyoruz, sadece bu bölgelerde randevu takvimi merkeze göre biraz daha önceden netleşmesi gerekiyor. Uzak bölgelere tek seferde birden fazla montaj işini birleştirerek gitmeyi tercih ediyoruz, bu hem maliyeti düşürüyor hem de daha hızlı planlama imkanı sağlıyor."
        ]
      },
      {
        heading: "Montaj hizmetinde randevu iptali ve erteleme politikası",
        paragraphs: [
          "Taşınma tarihleri ya da teslimat süreçleri bazen son anda değişebiliyor, bunu biliyoruz. Montaj randevunuzu en az bir gün önceden haber vererek ertelemeniz durumunda herhangi bir ek ücret talep etmiyoruz. Aynı gün iptal durumlarında ise ekibin o gün için planladığı diğer işler etkilendiğinden, tekrar planlama önceliği biraz daha geriye kayabiliyor. Bu yüzden mümkün olduğunca erken bilgilendirmenizi rica ediyoruz, böylece hem sizin hem bizim zaman planımız daha sağlıklı ilerliyor."
        ]
      },
      {
        heading: "Montaj hizmetinde deneyim ve ekip eğitimi",
        paragraphs: [
          "Montaj ekibimiz yıllardır atölyenin kendi üretimini monte ettiği için, farklı marka ve modellerin genel mantığına da aşina. Yeni bir marka veya sistemle ilk kez karşılaşıldığında bile, benzer mekanizmalardaki tecrübe sayesinde çözüm üretme hızı yüksek kalıyor. Ekip düzenli olarak yeni menteşe, ray ve bağlantı sistemleri konusunda bilgi güncelliyor; sektördeki değişen standartları takip etmek, özellikle son yıllarda yaygınlaşan tıklamalı (klipsli) montaj sistemlerinde daha hızlı ve hatasız çalışmayı sağlıyor.",
          "Büyük ölçekli işlerde ekip sayısını artırarak süreyi kısaltmak mümkün, ancak biz kalite kontrolünü bozmamak için her ekibe belirli bir iş yükü sınırı koyuyoruz; aceleye getirilmiş bir montaj, uzun vadede daha çok soruna yol açıyor."
        ]
      },
      {
        heading: "Montaj hizmetinde apartman ve site kurallarına uyum",
        paragraphs: [
          "Bazı apartman ve sitelerde montaj gibi işler için yönetimden önceden izin alınması ya da belirli saat aralıklarında çalışılması gerekebiliyor; özellikle elektrikli alet kullanımı ses kısıtlaması olan binalarda önem taşıyor. Randevu öncesi böyle bir kısıtlama olup olmadığını sormanızı, varsa bize bildirmenizi rica ediyoruz; ekip çalışma saatini ona göre planlıyor. Asansörlü binalarda büyük mobilya parçalarının asansöre sığıp sığmadığını da önceden kontrol ediyoruz, sığmayan durumlarda merdiven taşıması için ek süre hesaba katılıyor.",
          "Ortak alanların (koridor, asansör) montaj sırasında zarar görmemesi için taşıma güzergahını koruyucu örtüyle kapatıyoruz; bu, hem bina yönetimiyle hem komşularla ilişkiyi sorunsuz tutuyor."
        ]
      },
    ],
    faq: [
      {
        question: "Sadece IKEA mobilyası mı monte ediyorsunuz?",
        answer:
          "Hayır, herhangi bir markadan alınmış mobilyanın montajını yapıyoruz, sadece IKEA ile sınırlı değil. Yerli veya ithal, hangi markadan olursa olsun, montaj talimatı ve bağlantı sistemi elimize ulaştığında ekibimiz kurulumu üstlenebiliyor.",
      },
      {
        question: "Montaj sırasında eksik parça çıkarsa ne oluyor?",
        answer:
          "Eksik parça üreticiden/satıcıdan tedarik edilmesi gereken bir durum; biz mümkünse yerinde alternatif çözüm üretmeye çalışıyoruz, ama garanti kapsamı satıcıya ait. Atölyemiz olduğu için bazı basit eksik parçaları (vida, dübel, küçük bağlantı elemanı) yerinde tedarik edip montajı yarım bırakmadan tamamlayabiliyoruz.",
      },
      {
        question: "Eski mobilyanın sökümünü de yapıyor musunuz?",
        answer:
          "Evet, yeni mobilya montajından önce eski mobilyanın sökümü de talep üzerine hizmet kapsamına dahil ediliyor. Sökülen mobilyanın taşınması veya uzaklaştırılması ayrı bir kalem; bu ihtiyacınız varsa randevu öncesi belirtmeniz yeterli.",
      },
    ],
  },
  "dekorasyon-danismanligi": {
    sections: [
      {
        heading: "Çorum'da dekorasyoncu arıyorsanız",
        paragraphs: [
          "Dekorasyon danışmanlığı, bir iç mimarlık projesinden farklı olarak daha pratik ve üretim odaklı bir hizmet. Biz bir atölye olduğumuz için mekanı sadece görsel açıdan değil, 'bu tasarım gerçekten üretilebilir mi, ne kadar sürede ve hangi bütçeyle' sorusuyla da değerlendiriyoruz. Bu yaklaşım, sadece çizim üreten bir danışmanlığa göre daha gerçekçi ve uygulanabilir sonuçlar veriyor.",
        ],
      },
      {
        heading: "Oda planlaması nasıl yapılıyor?",
        paragraphs: [
          "İlk adım mekanın kullanım amacının netleşmesi: yatak odası mı, salon mu, ofis mi, yoksa ticari bir alan mı? Ardından mevcut ölçüler, doğal ışık durumu ve kullanıcının günlük alışkanlıkları (kaç kişi kullanacak, hangi eşyalar mutlaka olmalı) birlikte değerlendiriliyor. Bu bilgilerle mobilya yerleşim planı çıkarılıyor; hangi duvara gardırop, hangi köşeye çalışma masası gideceği gibi kararlar bu aşamada netleşiyor.",
        ],
      },
      {
        heading: "Malzeme ve renk seçiminde imalat tecrübesi neden fark yaratıyor?",
        paragraphs: [
          "Bir renk paleti kağıt üzerinde güzel görünse de, gerçek malzemede (özellikle lake ve laminat yüzeylerde) farklı bir sonuç verebiliyor. Yıllardır farklı malzeme ve renklerle üretim yaptığımız için, hangi rengin hangi ışıkta nasıl durduğunu, hangi doku kombinasyonunun pratikte iyi çalıştığını doğrudan tecrübeyle biliyoruz. Bu bilgi, sadece görsel katalogdan seçim yapmaktan çok daha güvenilir bir sonuç veriyor.",
        ],
      },
      {
        heading: "Küçük bütçeyle büyük fark yaratmak",
        paragraphs: [
          "Her danışmanlık talebi büyük bir yenileme projesi olmak zorunda değil. Bazen tek bir duvarın rengini değiştirmek, mevcut mobilyanın yerini oynatmak veya eksik bir aksesuar eklemek bile mekanın algısını ciddi şekilde değiştirebiliyor. Bütçesi sınırlı müşterilere önce en yüksek etkiyi yaratacak küçük müdahaleleri öneriyoruz, büyük yatırımı zamana yayarak planlıyoruz.",
        ],
      },
      {
        heading: "Danışmanlık üretimle nasıl birleşiyor?",
        paragraphs: [
          "Dekorasyon danışmanlığının en büyük avantajı, önerilen planın doğrudan üretime dönüşebilmesi. Ayrı bir iç mimarla çalışıp sonra üretimi başka bir atölyeye yaptırmak yerine, aynı ekip hem planlıyor hem üretiyor. Bu da hem iletişim kaybını önlüyor hem de süreci kısaltıyor.",
        ],
      },
      {
        heading: "Ticari mekanlarda dekorasyon danışmanlığı",
        paragraphs: [
          "Kafe, ofis veya küçük bir showroom açacak işletme sahipleri için dekorasyon danışmanlığı, marka kimliğinin mekana nasıl yansıyacağını netleştiren önemli bir adım. Burada kişisel zevkten çok, müşterinin mekana girdiğinde ne hissetmesi isteniyor sorusu öne çıkıyor: sıcak ve samimi bir kafe atmosferi mi, yoksa kurumsal ve güven veren bir ofis havası mı? Bu hedefe göre malzeme, renk ve aydınlatma önerileri şekilleniyor, sonrasında üretim bu doğrultuda ilerliyor.",
        ],
      },
      {
        heading: "Danışmanlık sürecinde en sık sorulan sorular",
        paragraphs: [
          "Müşterilerin en sık sorduğu konuların başında 'bu mobilya bu odaya sığar mı' ve 'bu renk kombinasyonu modası geçmiş mi olur' geliyor. İlk soruya net ölçü ve çizimle cevap veriyoruz; ikinci soruda ise zamana karşı daha dayanıklı, çok fazla trend odaklı olmayan seçimler öneriyoruz, çünkü mobilya yatırımı beş-on yıllık bir karar ve kısa vadeli trendlere göre şekillendirilirse birkaç yıl içinde eskimiş hissettirebiliyor.",
        ],
      },
      {
        heading: "Yeni ev veya yeni ofis açılışında dekorasyon danışmanlığı",
        paragraphs: [
          "Yeni taşınılan bir eve ya da yeni açılan bir ofise sıfırdan mobilya seçmek, hem heyecan verici hem de kolayca kararsızlığa dönüşebilen bir süreç. Bu tip durumlarda danışmanlık, önceliklerin netleşmesine yardımcı oluyor: hangi oda önce döşenmeli, hangi mobilya beklenebilir, hangi parça hemen alınmalı gibi sorulara birlikte cevap buluyoruz. Böylece bütçe tek seferde tükenmek yerine, en çok ihtiyaç duyulan alana göre akıllıca dağıtılıyor."
        ]
      },
      {
        heading: "Dekorasyon danışmanlığında sık yapılan bütçe hataları",
        paragraphs: [
          "En sık gördüğümüz bütçe hatası, büyük parçalara (koltuk, gardırop gibi) bütçenin neredeyse tamamını ayırıp aydınlatma ve aksesuar için hiç pay bırakmamak. Oysa doğru aydınlatma, orta kalite bir mobilyayı bile çok daha iyi gösterebiliyor; tam tersi de geçerli, kaliteli bir mobilya kötü aydınlatmayla sönük kalabiliyor. Bu yüzden bütçe planlamasında aydınlatma ve küçük dokunuşlar için baştan belirli bir pay ayırmayı öneriyoruz, genelde toplam bütçenin yüzde on ila on beşi arası makul bir oran oluyor."
        ]
      },
      {
        heading: "Dekorasyon danışmanlığı ile mimari proje arasındaki sınır",
        paragraphs: [
          "Dekorasyon danışmanlığımız, duvar yıkma, tesisat değişikliği gibi yapısal mimari kararları kapsamıyor; bu tip büyük değişiklikler için bir mimarla çalışmanızı öneriyoruz. Bizim odağımız, mevcut mekanın sınırları içinde mobilya, renk ve düzenleme kararlarını en iyi şekilde kurmak. Eğer projeniz hem yapısal hem mobilya kararlarını kapsıyorsa, mimarınızla koordineli çalışarak mobilya tarafını biz üstlenebiliyoruz; bu iş birliği modeli özellikle yeni inşa edilen konutlarda sık karşımıza çıkıyor."
        ]
      },
      {
        heading: "Dekorasyon danışmanlığında görsel referans kullanımı",
        paragraphs: [
          "Müşterilerin çoğu Pinterest veya Instagram'dan beğendiği bir salon veya yatak odası görselini bize gösteriyor; bu, danışmanlık sürecini büyük ölçüde hızlandıran pratik bir başlangıç noktası. Ancak beğenilen bir görseldeki oda genelde farklı bir metrekareye ve farklı ışık koşuluna sahip oluyor, bu yüzden görseli birebir kopyalamak yerine o görselin arkasındaki mantığı (renk dengesi, mobilya oranı, aksesuar yoğunluğu) kendi mekanınıza uyarlıyoruz. Bu yaklaşım, ilham aldığınız görselin ruhunu korurken, gerçekten sizin evinize veya işletmenize uygun bir sonuç veriyor."
        ]
      },
      {
        heading: "Dekorasyon danışmanlığında mevsimsel ve uzun vadeli düşünme",
        paragraphs: [
          "Bir mekanı sadece o anki mevsime veya trende göre değil, yıl boyunca nasıl hissettireceğini düşünerek planlamak gerekiyor. Örneğin çok soğuk tonlarda planlanan bir salon kışın davetkâr görünmeyebiliyor, çok sıcak ve koyu tonlar ise yazın ağır hissettirebiliyor. Biz genelde nötr bir temel üzerine (mobilya ve zemin tonu) mevsime göre değiştirilebilecek küçük tekstil ve aksesuar dokunuşları öneriyoruz; bu, büyük bir yeniden dekorasyon maliyetine girmeden mekanın yıl boyunca güncel ve sıcak hissettirmesini sağlıyor."
        ]
      },
      {
        heading: "Dekorasyon danışmanlığında küçük işletmeler için özel yaklaşım",
        paragraphs: [
          "Büyük bütçeli kurumsal projelerin yanı sıra, tek kişilik bir kuaför salonu ya da küçük bir butik için de dekorasyon danışmanlığı veriyoruz. Bu ölçekteki işletmelerde bütçe genelde çok sınırlı olduğu için, en yüksek görsel etkiyi en düşük maliyetle yaratacak müdahaleleri önceliklendiriyoruz: bir aksan duvar rengi, doğru konumlandırılmış birkaç aydınlatma noktası, tek bir dikkat çekici mobilya parçası genelde yeterli oluyor. Küçük işletme sahiplerine, her şeyi aynı anda değiştirmek yerine öncelik sırasına göre ilerlemelerini öneriyoruz; bu hem bütçeyi korur hem de işletmenin kapalı kalma süresini en aza indirir."
        ]
      },
      {
        heading: "Dekorasyon danışmanlığında müşteriyle ortak karar süreci",
        paragraphs: [
          "Danışmanlığın amacı müşterinin zevkini bastırıp kendi görüşümüzü dayatmak değil, müşterinin zevkini daha uygulanabilir ve tutarlı bir plana dönüştürmek. Bu yüzden her öneriyi tek bir seçenek olarak değil, birkaç alternatifle birlikte sunuyoruz ve müşterinin hangisine daha çok yakın hissettiğini dinliyoruz. Bazı müşteriler net bir vizyonla gelirken, bazıları sadece genel bir his tarif ediyor; her iki durumda da sürecin sonunda ortaya çıkan planın gerçekten o kişiye ait hissettirmesini önemsiyoruz."
        ]
      },
    ],
    faq: [
      {
        question: "Dekorasyon danışmanlığı ücretli mi?",
        answer:
          "Danışmanlık kapsamı ve mekan büyüklüğüne göre değişiyor; küçük planlama görüşmeleri genelde mobilya siparişine dahil, daha kapsamlı projelerde ayrı ücretlendirme yapılabiliyor. Net kapsam ve varsa ücreti, ilk görüşmede mekanınızı değerlendirdikten sonra açıkça paylaşıyoruz.",
      },
      {
        question: "Sadece mobilya değil, boya ve aydınlatma konusunda da öneri alabilir miyim?",
        answer:
          "Evet, renk ve aydınlatma önerisi de danışmanlık kapsamına dahil, ancak boya/elektrik uygulamasını biz değil anlaşmalı olduğumuz ustalar yapıyor. Böylece tek bir plan üzerinden hem mobilya hem boya hem aydınlatma kararı tutarlı ilerliyor.",
      },
      {
        question: "Danışmanlık sonrası üretim başka bir atölyeden alınabilir mi?",
        answer:
          "Evet, plan ve öneri size ait olur, üretimi istediğiniz yerden yaptırabilirsiniz; ancak aynı atölyeden devam etmek süreci daha hızlı ve tutarlı kılıyor, çünkü planı çizen ekip üretimin detaylarını da baştan biliyor.",
      },
    ],
  },
};
