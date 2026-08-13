export interface ServiceInclude {
  title: string
  description: string
  iconName: 'Sparkles' | 'Flower2' | 'Palette' | 'Camera' | 'Utensils' | 'Music' | 'Flame' | 'MapPin' | 'Compass' | 'ShieldCheck'
}

export interface AestheticCue {
  title: string
  value: string
  description: string
}

export interface PackageChecklistItem {
  name: string
  included: boolean
  note?: string
}

export interface ServiceCategory {
  slug: string
  title: string
  subtitle: string
  script: string
  shortDescription: string
  longDescription: string
  heroImage: string
  alt: string
  aestheticCues: AestheticCue[]
  includes: ServiceInclude[]
  packageChecklist: PackageChecklistItem[]
  priceStartingFrom: number
  galleryImages: {
    src: string
    alt: string
    title: string
    location?: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
}

export interface CatalogImageItem {
  id: number
  src: string
  alt: string
  title: string
  categorySlug: 'nisan' | 'kina' | 'dugun' | 'kapadokya'
  categoryName: string
  colorTheme: 'altin' | 'gumus' | 'ahsap' | 'pembe' | 'krem'
  venueType: 'ev' | 'bahce' | 'salon' | 'vadi' | 'teras'
  location: string
  includedItems: string[]
  optionalItems: string[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'nisan',
    title: 'Söz & Nişan Organizasyonu',
    subtitle: 'Evde, Bahçede ve Butik Mekanlarda Unutulmaz Seremoniler',
    script: 'İlk Söz',
    shortDescription:
      'Nevşehir, Kapadokya ve Kayseri genelinde evinizde, bahçenizde veya salonda hayal ettiğiniz konsept: Işıklı ahşap & pleksi taglar, özel nişan tepsisi, karşılama panosu ve ikram köşeleri.',
    longDescription:
      'Evlilik yolundaki ilk resmi adımınız olan Söz ve Nişan davetlerinizi Nevşehir ve çevre illerde büyüleyici bir görsel şölene dönüştürüyoruz. Işıklı ahşap taglar, şeffaf pleksi panolar, melek kanadı & Hint penceresi modellerimizle mekânı baştan yaratıyoruz. İsimli nişan tepsisi, damat kahve fincan takımı, şövaleli karşılama panosu ve LED harflerle her detayı incelikle işliyoruz.',
    heroImage: '/images/raw/img-1.jpeg',
    alt: 'Beyaz kağıt çiçekler ve neon ışıkla süslenmiş yuvarlak arka planlı modern nişan masası dekorasyonu',
    priceStartingFrom: 12500,
    aestheticCues: [
      {
        title: 'Arka Fon & Tag',
        value: 'Işıklı Ahşap, Pleksi & Melek Kanadı',
        description: 'Çiftimizin isimlerine özel neon ışıklı veya akrilik yazılı arka plan fonları.',
      },
      {
        title: 'Masa & Çiçek',
        value: 'Canlı/Yapay Çiçek Aranjmanları & Şömine',
        description: 'Aynalı yükselticiler, şamdanlar, vazolar ve yapay şömine enstalasyonları.',
      },
      {
        title: 'Seremoni Detayı',
        value: 'İsimli Tepsi, Kahve Seti & Yüzük Kutusu',
        description: 'Özel tasarım nişan tepsisi, makas, yüzük kutusu ve damat kahve fincanı takımı.',
      },
      {
        title: 'Karşılama & LED',
        value: 'Şövaleli Pano & "LOVE" LED Harfler',
        description: 'Kişiye özel fotoğraflı karşılama köşesi ve ışıklı harf panoları.',
      },
    ],
    includes: [
      {
        title: 'Özel Tag & Arka Fon Kurulumu',
        description: 'Ahşap, pleksi veya Hint penceresi model ışıklı nişan arka fonu.',
        iconName: 'Sparkles',
      },
      {
        title: 'Nişan Masası & Çiçek Süsleme',
        description: 'Canlı/yapay çiçek aranjmanları, pirinç şamdanlar ve mumluklar.',
        iconName: 'Flower2',
      },
      {
        title: 'Seremoni Ekipman Takımı',
        description: 'İsimli nişan tepsisi, özel makas, yüzük kutusu ve damat kahve fincanı seti.',
        iconName: 'Utensils',
      },
      {
        title: 'Karşılama Köşesi & Foto Alanı',
        description: 'Şövaleli ahşap/akrilik karşılama panosu ve led ışıklı harf enstalasyonları.',
        iconName: 'Compass',
      },
      {
        title: 'Hediyelik & İkram Standı',
        description: 'Nişan çikolatası masası, magnet sergileme standı ve bistro masa giydirme.',
        iconName: 'Palette',
      },
      {
        title: 'Yerinde Kurulum & Söküm',
        description: 'Etkinlik öncesi profesyonel kurulum ve etkinlik sonrası eksiksiz söküm.',
        iconName: 'ShieldCheck',
      },
    ],
    packageChecklist: [
      { name: 'Işıklı Ahşap / Pleksi / Melek Kanadı Tag Fonu', included: true },
      { name: 'Canlı & Yapay Çiçek Aranjmanları (Masa & Fon Süsleme)', included: true },
      { name: 'İsimli Nişan Tepsisi, Makas & Yüzük Kutusu', included: true },
      { name: 'Damat Kahve Fincan Takımı & Tepsi', included: true },
      { name: 'Şövaleli İsimli Karşılama Panosu', included: true },
      { name: 'Aynalı Yükselticiler, Şamdanlar & Vazolar', included: true },
      { name: 'Giydirmeli Bistro Masalar (2 Adet)', included: true },
      { name: 'Kişiye Özel İsimli Nişan Çikolatası Standı', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Yapay Şömine Kurulumu & Işıklandırması', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'LED Işıklı "A&B" / "LOVE" Harf Seti', included: false, note: 'Opsiyonel Ekstra' },
    ],
    galleryImages: [
      { src: '/images/raw/img-1.jpeg', alt: 'Şampanya nişan konsepti', title: 'Modern Pleksi Nişan', location: 'Nevşehir Merkez' },
      { src: '/images/raw/img-2.jpeg', alt: 'Evde butik nişan masası', title: 'Ahşap Tag Nişan', location: 'Ürgüp' },
      { src: '/images/raw/img-6.jpeg', alt: 'Çiçekli nişan masası', title: 'Butik Çiçekli Söz', location: 'Kayseri' },
      { src: '/images/raw/img-8.jpeg', alt: 'Bahçede nişan alanı', title: 'Bahçe Nişan Kurgusu', location: 'Aksaray' },
    ],
    faq: [
      {
        question: 'Evde veya dar mekanlarda nişan kurulumu yapılabiliyor mu?',
        answer: 'Evet! Modüler tag ve masa sistemlerimiz sayesinde ev içi salon, teras veya bahçelerde mekana özel boyutlandırma yapıyoruz.',
      },
      {
        question: 'Nevşehir dışındaki Kayseri, Niğde, Aksaray illerine hizmet veriyor musunuz?',
        answer: 'Evet, Nevşehir merkezli ekibimiz Kayseri, Niğde, Aksaray ve Kırşehir çevre illerine de tam donanımlı nakliye ve kurulum sağlamaktadır.',
      },
    ],
  },
  {
    slug: 'kina',
    title: 'Kına Gecesi Organizasyonu',
    subtitle: 'Geleneksel Görkem ve Modern Dans Şovlarının Buluşması',
    script: 'Gelenek & Zerafet',
    shortDescription:
      'Lüks kına tahtları (Kırmızı, Bordo, Mor, Hint), kaftan/bindallı kiralama, nedime dans ekibi, davul & zenne şovları, ışıklı kına tepsisi, yaş kına ve lokum/şerbet ikram köşesi.',
    longDescription:
      'Geleneksel motifleri modern koreografilerle buluşturan Farah Kına Organizasyon konsepti ile gecenin yıldızı siz olacaksınız. Kırmızı, bordo, mor ve Hint temalı lüks kına tahtlarımız, özel bindallı ve kaftan seçeneklerimiz, nedime dans ekibimizin testi kırma ve kemer dansı gösterileriyle konuklarınıza unutulmaz bir görsel şölen sunuyoruz.',
    heroImage: '/images/raw/img-21.jpeg',
    alt: 'Kırmızı kadife taht, kırmızı güllerden kemer ve kına gecesi neon yazısı ile hazırlanmış kına köşesi',
    priceStartingFrom: 16500,
    aestheticCues: [
      {
        title: 'Kına Tahtı & Konsept',
        value: 'Lüks Kadife Taht & Cibinlik',
        description: 'Kırmızı, bordo, mor, beyaz veya Hint temalı lüks cibinlikli kına tahtı kurulumları.',
      },
      {
        title: 'Kostüm & Aksesuar',
        value: 'Lüks Kaftan, Bindallı & Fes Seti',
        description: 'Gelin için özel işleme kaftan/bindallı, damat için fes ve yelek seti kiralama.',
      },
      {
        title: 'Performans Ekibi',
        value: 'Nedime Dans Ekibi & Davul Şov',
        description: 'Koreografili gelin girişi, testi kırma, kemer dansı, davul şovu ve zenne/oryantal.',
      },
      {
        title: 'Seremoni Aksesuarları',
        value: 'Işıklı Tepsi, Tef, Mum & Şakira Kemeri',
        description: 'Misafirler için 100+ adet tef, el mumu, halay mendili, şakira kemeri ve duvak dağıtımı.',
      },
    ],
    includes: [
      {
        title: 'Lüks Kına Tahtı & Cibinlik Fonu',
        description: 'Konsept renkte kadife minderli taht, cibinlik ve sahne aydınlatmaları.',
        iconName: 'Sparkles',
      },
      {
        title: 'Gelin Kaftan / Bindallı Kiralama',
        description: 'Son trend el işlemesi lüks kaftan, taç ve kemer aksesuarları.',
        iconName: 'Palette',
      },
      {
        title: 'Nedime Dans Ekibi (3-4 Kişi)',
        description: 'Özel kostümlü nedimeler ile sahne giriş koreografisi ve testi kırma şovu.',
        iconName: 'Music',
      },
      {
        title: 'Misafir İkram & Aksesuar Paketi',
        description: 'Tefler, el mumları, halay mendilleri, duvaklar, şakira kemerleri ve yaş kına.',
        iconName: 'Flower2',
      },
      {
        title: 'Lokum & Osmanlı Şerbeti Masası',
        description: 'Geleneksel ikramlık standı, lokumluklar ve şerbet güğümü ikram kurgusu.',
        iconName: 'Utensils',
      },
      {
        title: 'DJ & Kına Müzik Koordinasyonu',
        description: 'Kına yakma seremonisi ve halay/dans müziklerinin profesyonel akış takibi.',
        iconName: 'ShieldCheck',
      },
    ],
    packageChecklist: [
      { name: 'Lüks Kına Tahtı & Cibinlik (Bordo / Kırmızı / Mor / Hint)', included: true },
      { name: 'Gelin için Özel İşlemeli Kaftan / Bindallı Kiralama', included: true },
      { name: 'Damat için Fes ve Yelek Seti', included: true },
      { name: '4 Kişilik Profesyonel Nedime Dans Ekibi', included: true },
      { name: 'Işıklı Kına Tepsisi & Özel Sehpa Kurulumu', included: true },
      { name: 'Yaş Kına, Tefler (50 Adet), El Mumları & Halay Mendilleri', included: true },
      { name: 'Gelin Duvak & Şakira Kemer Dağıtımı', included: true },
      { name: 'Lokum ve Osmanlı Şerbeti Karşılama Masası', included: true },
      { name: 'Davul Şov Ekibi (2 Davulcu)', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Zenne / Oryantal Performansı', included: false, note: 'Opsiyonel Ekstra' },
    ],
    galleryImages: [
      { src: '/images/raw/img-21.jpeg', alt: 'Kına tahtı süslemesi', title: 'Saray Bordo Kına Tahtı', location: 'Nevşehir Salon' },
      { src: '/images/raw/img-22.jpeg', alt: 'Kına tepsisi ve aksesuarlar', title: 'Hint Temalı Kına', location: 'Kayseri' },
      { src: '/images/raw/img-23.jpeg', alt: 'Nedime gösterisi', title: 'Kırmızı Cibinlik Kına', location: 'Niğde' },
    ],
    faq: [
      {
        question: 'Nedime ekibi kaç kişiden oluşuyor ve koreografi neleri içeriyor?',
        answer: 'Standart paketimizde 4 kişilik profesyonel dansçı nedime ekibimiz yer alır. Gelin salona çıkışı, testi kırma seremonisi, roman/halay şovları ve kına yakma seremonisinde özel gösteri sunarlar.',
      },
      {
        question: 'Kaftan denemesi ne zaman yapılıyor?',
        answer: 'Etkinlik gününden 2-3 hafta önce Nevşehir ofisimizde kaftan ve bindallı modellerimizi deneyerek bedeninize göre ayırtabilirsiniz.',
      },
    ],
  },
  {
    slug: 'dugun',
    title: 'Düğün & Kır Düğünü Paketleri',
    subtitle: 'Balo Salonlarından Çiçekli Kır Bahçelerine Büyüleyici Davetler',
    script: 'Sonsuza Dair',
    shortDescription:
      'Napolyon/Tiffany sandalye giydirmeleri, gelin yolu sütunları, nikah kürsüsü, yapay sis bulut ilk dans etkisi, soğuk volkan şovları, gelin alma bandosu ve 4K drone çekimi.',
    longDescription:
      'Nevşehir, Kapadokya bağ evleri ve Kayseri balo salonlarında düğünlerinizi unutulmaz bir sanat eserine dönüştürüyoruz. Masa giydirmelerinden Napolyon sandalye kombinasyonlarına, ışıklı gelin yollarından canlı çiçekli nikah taklarına, bulut üzerinde ilk dans yaşatan yapay sis makinesi ve soğuk volkan görsel şovlarına kadar her ayrıntıyı kusursuzca yönetiyoruz.',
    heroImage: '/images/raw/img-4.jpeg',
    alt: 'Kapadokya peri bacaları önünde çiçekli sütunlar ve beyaz koltukla hazırlanan boho düğün seremonisi alanı',
    priceStartingFrom: 24000,
    aestheticCues: [
      {
        title: 'Mekan Giydirme',
        value: 'Napolyon & Tiffany Sandalye',
        description: 'Özel sandalye bağlama, keten masa örtüleri, supla ve kristal peçetelikler.',
      },
      {
        title: 'Seremoni & Nikah',
        value: 'Işıklı Gelin Yolu & Çiçekli Tak',
        description: 'Nikah kürsüsü, dev çiçekli arch kemer ve mum yolları enstalasyonu.',
      },
      {
        title: 'Görsel Şovlar',
        value: 'Yapay Sis, Soğuk Volkan & Konfeti',
        description: 'İlk dansta bulut etkisi yaratan yapay sis makinesi, soğuk volkan patlamaları ve konfeti.',
      },
      {
        title: 'Müzik & Prodüksiyon',
        value: 'Gelin Alma Bandosu & 4K Drone',
        description: 'Karşılama keman ekibi, bando, DJ/orkestra ve 4K drone hava çekimi.',
      },
    ],
    includes: [
      {
        title: '3D Mekan & Masa Yerleşim Kurgusu',
        description: 'Balo salonu veya kır bahçesi için kapasite ve konsept yerleşim planlaması.',
        iconName: 'MapPin',
      },
      {
        title: 'Masa & Sandalye Giydirme Tasarımı',
        description: 'Napolyon/Tiffany sandalyeler, masa örtüleri, suplalar ve peçetelikler.',
        iconName: 'Utensils',
      },
      {
        title: 'Gelin Yolu & Çiçekli Nikah Takı',
        description: 'Işıklı sütunlar, taze/yapay botanik tak ve tasarım nikah masası.',
        iconName: 'Sparkles',
      },
      {
        title: 'Sahne Işık & Görsel Efekt Paketi',
        description: 'Yapay sis bulut makinesi ve ilk dans için 4 adet soğuk volkan şovu.',
        iconName: 'Flame',
      },
      {
        title: 'Karşılama & Anı Masası Süslemesi',
        description: 'Karşılama şövalesi, anı defteri ve hediyelik masası düzenlemesi.',
        iconName: 'Compass',
      },
      {
        title: 'Profesyonel Düğün Direktörlüğü',
        description: 'Etkinlik günü boyunca baştan sona akış ve teknik ekip koordinasyonu.',
        iconName: 'ShieldCheck',
      },
    ],
    packageChecklist: [
      { name: 'Napolyon veya Tiffany Model Sandalye Kiralama & Bağlama', included: true },
      { name: 'Özel Dikim Masa Örtüleri, Supla & Peçetelik Kombinasyonları', included: true },
      { name: 'Işıklı Gelin Yolu Sütunları & Çiçekli Nikah Takı', included: true },
      { name: 'Özel Tasarım Gelin-Damat Nikah Masası Süsleme', included: true },
      { name: 'İlk Dansta Bulut Etkisi Veren Yapay Sis Makinesi', included: true },
      { name: '4 Adet Soğuk Volkan Şovu (Giriş & İlk Dans)', included: true },
      { name: 'Şövaleli Karşılama Panosu & Anı Defteri Masası', included: true },
      { name: 'Gelin Alma Bandosu veya Karşılama Keman Ekibi', included: false, note: 'Opsiyonel Ekstra' },
      { name: '4K Drone Havadan Çekim & Jimmy Jip Prodüksiyon', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Anlık Fotoğraf Baskı & Hediyelik Magnet Köşesi', included: false, note: 'Opsiyonel Ekstra' },
    ],
    galleryImages: [
      { src: '/images/raw/img-4.jpeg', alt: 'Kapadokya seremonisi', title: 'Kapadokya Masal Düğünü', location: 'Göreme, Nevşehir' },
      { src: '/images/raw/img-5.jpeg', alt: 'Kır düğünü yemek sofrası', title: 'Bağ Evinde Kır Düğünü', location: 'Ürgüp' },
      { src: '/images/raw/img-11.jpeg', alt: 'Mum ışıklı düğün masası', title: 'Gece Akşam Yemeği', location: 'Kayseri Balo Salonu' },
      { src: '/images/raw/img-13.jpeg', alt: 'Işık bahçesi düğün', title: 'Peri Işıkları Altında Düğün', location: 'Aksaray' },
    ],
    faq: [
      {
        question: 'Soğuk volkan ve yapay sis kapalı salonlarda güvenli midir?',
        answer: 'Evet, kullandığımız soğuk volkan sistemleri dumansız ve kokusuzdur; kapalı salonlarda kıyafet veya zemin yakma riski barındırmaz. Yapay sis makinemiz su bazlı olup tamamen zararsızdır.',
      },
      {
        question: 'Hava çekimi drone izni ve çekim organizasyonu kimin tarafından yapılıyor?',
        answer: 'Medya prodüksiyon paketimiz tercih edildiğinde Kapadokya bölgesindeki uçuş izinleri ve 4K drone çekimi ekibimiz tarafından yürütülür.',
      },
    ],
  },
  {
    slug: 'kapadokya',
    title: 'Kapadokya Özel Konseptleri',
    subtitle: 'Vadi Gün Batımı Evlilik Teklifi, Balon Teması ve Cave Otel Terası',
    script: 'Kapadokya Büyüsü',
    shortDescription:
      'Nevşehir\'i rakiplerinden ayıran imza hizmetimiz: Kızılçukur ve Aşk Vadisi otantik piknik düzeni, dev "MARRY ME" ışıklı yazısı, sıcak hava balonu kalkış teklif masası ve Cave Otel teras süslemeleri.',
    longDescription:
      'Nevşehir ve Kapadokya bölgesinin eşsiz coğrafyasında hayal ötesi anlar tasarlıyoruz. Kızılçukur Vadisi ve Aşk Vadisi\'nde otantik dokulu halı ve kırlentlerle hazırlanan piknik düzeni, dev "MARRY ME" LED yazıları, sıcak hava balonlarının gökyüzünü kapladığı sabah saatlerinde teras kahvaltı masası süslemesi, canlı keman performansı ve şampanya ikramıyla unutulmaz evlilik tekliflerine imza atıyoruz.',
    heroImage: '/images/raw/img-10.jpeg',
    alt: 'Doğada ahşap çardak ve mermer masa üzerine kurulmuş lüks piknik ve kutlama alanı',
    priceStartingFrom: 9500,
    aestheticCues: [
      {
        title: 'Vadi Teklifi',
        value: 'Kızılçukur & Aşk Vadisi Pikniği',
        description: 'Otantik halılar, alçak ahşap masalar, şamdanlar ve dev "MARRY ME" ışıklı harfleri.',
      },
      {
        title: 'Balon Seansı',
        value: 'Gün Doğumu Balon Temalı Masa',
        description: 'Balonların kalkış saatinde vadide veya terasta özel şampanyalı kahvaltı masası kurgusu.',
      },
      {
        title: 'Cave Hotel',
        value: 'Mağara Otel Teras Hazırlığı',
        description: 'Göreme/Ürgüp teraslarında romantik çiçek kemerleri, mum yolları ve canlı keman dinletisi.',
      },
      {
        title: 'Ayrıcalıklı Hizmet',
        value: 'VIP Transfer & Şampanya Servisi',
        description: 'Otelden vadiye VIP araç transferi, canlı çiçek buketleri ve özel fotoğraf çekimi.',
      },
    ],
    includes: [
      {
        title: 'Vadi / Teras Keşfi & İzin Takibi',
        description: 'Kapadokya\'nın en güzel manzaralı noktalarında konum seçimi ve gerekli alan organizasyonu.',
        iconName: 'MapPin',
      },
      {
        title: 'Otantik Piknik & Masa Kurulumu',
        description: 'El dokuması otantik halılar, puf kırlentler, mum yolları ve çiçekli ahşap masa.',
        iconName: 'Sparkles',
      },
      {
        title: 'Dev "MARRY ME" LED Harf Seti',
        description: 'Işıklı dev harfler ile büyüleyici gece/gün batımı fotoğraf fonu.',
        iconName: 'Flame',
      },
      {
        title: 'Canlı Keman Dinletisi',
        description: 'Teklif anında çiftin en sevdiği şarkılar eşliğinde canlı keman performansı.',
        iconName: 'Music',
      },
      {
        title: 'Şampanya & Gurme İkram Tabağı',
        description: 'Özel peynir tabağı, meyve sunumu ve şampanya/şarap ikram servisi.',
        iconName: 'Utensils',
      },
      {
        title: 'Fotoğraf & Video Çekim Desteği',
        description: 'Teklif anının haber verilmeksizin gizli çekimi ve klip hazırlığı.',
        iconName: 'Camera',
      },
    ],
    packageChecklist: [
      { name: 'Kızılçukur veya Aşk Vadisi Otantik Halılı Piknik Düzeni', included: true },
      { name: 'Dev "MARRY ME" / "BENİMLE EVLENİR MİSİN" LED Işıklı Yazı', included: true },
      { name: 'Canlı Çiçek Aranjmanları, Şamdanlar & Mum Yolları', included: true },
      { name: 'Şampanya / İçecek Servisi & Gurme İkram Tabağı', included: true },
      { name: 'Kişiye Özel Çiçek Buketi', included: true },
      { name: 'Canlı Keman Performansı (30 Dakika)', included: true },
      { name: 'Sıcak Hava Balonu Kalkış Saati Teras Hazırlığı', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'VIP Araç Otel Transferi (Gidiş-Dönüş)', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Profesyonel Fotoğrafçı & 4K Drone Video Klip', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Yapay Sis Bulutu & Soğuk Volkan Görsel Şovu', included: false, note: 'Opsiyonel Ekstra' },
    ],
    galleryImages: [
      { src: '/images/raw/img-10.jpeg', alt: 'Vadi piknik masası', title: 'Kızılçukur Gün Batımı Teklifi', location: 'Kızılçukur Vadisi' },
      { src: '/images/raw/img-12.jpeg', alt: 'Teras ışık süslemesi', title: 'Cave Otel Teras Seremonisi', location: 'Göreme Teras' },
      { src: '/images/raw/img-15.jpeg', alt: 'Balon manzaralı kahvaltı masası', title: 'Gün Doğumu Balon Teklifi', location: 'Aşk Vadisi' },
    ],
    faq: [
      {
        question: 'Evlilik teklifi organizasyonunu hangi vadilerde gerçekleştiriyorsunuz?',
        answer: 'Başta Kızılçukur (Red Valley), Aşk Vadisi (Love Valley), Güvercinlik Vadisi ve Uçhisar Kalesi manzaralı özel teraslarda kurulum yapmaktayız.',
      },
      {
        question: 'Sıcak hava balonlarının kalkış saatine uyum nasıl sağlanıyor?',
        answer: 'Ekibimiz sabah 04:30\'da alanda kurulumu tamamlar. Çiftimizi gün doğumunda balonlar yükselmeye başladığı an kusursuz masaya davet ederiz.',
      },
    ],
  },
]

export const ALL_GALLERY_IMAGES: CatalogImageItem[] = [
  {
    id: 1,
    src: '/images/raw/img-1.jpeg',
    alt: 'Neon ışıklı modern nişan fonu',
    title: 'Şampanya Işıltılı Nişan',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'altin',
    venueType: 'ev',
    location: 'Nevşehir Merkez',
    includedItems: ['Pleksi Neon Fon', 'Çiçek Süslemeli Masa', 'İsimli Nişan Tepsisi', 'Karşılama Panosu'],
    optionalItems: ['LED Harf Seti', 'Nişan Çikolatası Standı'],
  },
  {
    id: 2,
    src: '/images/raw/img-2.jpeg',
    alt: 'Evde ahşap tag nişan kurgusu',
    title: 'Boho Ahşap Tag Sözü',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'ahsap',
    venueType: 'ev',
    location: 'Ürgüp',
    includedItems: ['Işıklı Ahşap Tag', 'Pirinç Şamdanlar', 'Damat Kahve Seti'],
    optionalItems: ['Giydirmeli Bistro Masa'],
  },
  {
    id: 3,
    src: '/images/raw/img-3.jpeg',
    alt: 'Pudra pembe nişan masası',
    title: 'Pudra Masal Nişan',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'pembe',
    venueType: 'salon',
    location: 'Kayseri',
    includedItems: ['Melek Kanadı Fon', 'Pastel Çiçek Vazoları', 'Aynalı Yükselticiler'],
    optionalItems: ['Yapay Şömine'],
  },
  {
    id: 4,
    src: '/images/raw/img-4.jpeg',
    alt: 'Kapadokya nikah alanı',
    title: 'Peri Bacaları Nikah Seremonisi',
    categorySlug: 'dugun',
    categoryName: 'Düğün',
    colorTheme: 'krem',
    venueType: 'vadi',
    location: 'Göreme, Nevşehir',
    includedItems: ['Çiçekli Kemer Tak', 'Gelin Yolu Sütunları', 'Nikah Kürsüsü', 'Napolyon Sandalye'],
    optionalItems: ['4K Drone Çekimi', 'Soğuk Volkan Şovu'],
  },
  {
    id: 5,
    src: '/images/raw/img-5.jpeg',
    alt: 'Kır düğünü ziyafet sofrası',
    title: 'Bağ Evinde Kır Düğünü',
    categorySlug: 'dugun',
    categoryName: 'Düğün',
    colorTheme: 'ahsap',
    venueType: 'bahce',
    location: 'Ürgüp Bağ Evi',
    includedItems: ['Ahşap Uzun Masalar', 'Keten Örtüler', 'Peri Işıkları', 'Canlı Botanik'],
    optionalItems: ['Gelin Alma Bandosu'],
  },
  {
    id: 6,
    src: '/images/raw/img-6.jpeg',
    alt: 'Pastel çiçekli söz masası',
    title: 'Zarif Ev Sözü Kurgusu',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'krem',
    venueType: 'ev',
    location: 'Nevşehir',
    includedItems: ['Akrilik İsimlik', 'Şeffaf Vazolar', 'Mum Takımları'],
    optionalItems: ['Magnet Hediyelik Standı'],
  },
  {
    id: 7,
    src: '/images/raw/img-7.jpeg',
    alt: 'Aynalı nişan masası',
    title: 'Kristal & Ayna Nişan',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'gumus',
    venueType: 'salon',
    location: 'Kayseri',
    includedItems: ['Aynalı Masa Kaplama', 'Gümüş Şamdanlar', 'Pano'],
    optionalItems: ['Bistro Masa'],
  },
  {
    id: 8,
    src: '/images/raw/img-8.jpeg',
    alt: 'Bahçe nişan kurulumu',
    title: 'Doğada Bahçe Nişanı',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'ahsap',
    venueType: 'bahce',
    location: 'Aksaray',
    includedItems: ['Ahşap Tag', 'Çiçek Yolu', 'Nişan Tepsisi Seti'],
    optionalItems: ['Şövaleli Karşılama Pano'],
  },
  {
    id: 9,
    src: '/images/raw/img-9.jpeg',
    alt: 'Işıklı tag nişan',
    title: 'Işık Zincirli Gece Nişanı',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'altin',
    venueType: 'teras',
    location: 'Nevşehir',
    includedItems: ['Peri Işıkları', 'Altın Şamdanlar', 'Damat Kahve Seti'],
    optionalItems: ['LED "LOVE" Yazısı'],
  },
  {
    id: 10,
    src: '/images/raw/img-10.jpeg',
    alt: 'Kızılçukur vadisinde evlilik teklifi pikniği',
    title: 'Kızılçukur Vadisi Evlilik Teklifi',
    categorySlug: 'kapadokya',
    categoryName: 'Kapadokya Özel',
    colorTheme: 'ahsap',
    venueType: 'vadi',
    location: 'Kızılçukur Vadisi',
    includedItems: ['Otantik Halılı Piknik Düzeni', 'Dev MARRY ME LED Harfleri', 'Canlı Keman', 'Şampanya Servisi'],
    optionalItems: ['VIP Transfer', 'Drone Çekimi'],
  },
  {
    id: 11,
    src: '/images/raw/img-11.jpeg',
    alt: 'Mum ve çiçek süslemeli gala masası',
    title: 'Gece Balo Salonu Düğünü',
    categorySlug: 'dugun',
    categoryName: 'Düğün',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Kayseri Salon',
    includedItems: ['Kristal Şamdanlar', 'Supla & Peçetelik', 'Tiffany Sandalye'],
    optionalItems: ['Yapay Sis Makinesi'],
  },
  {
    id: 12,
    src: '/images/raw/img-12.jpeg',
    alt: 'Teras evlilik teklifi masası',
    title: 'Cave Otel Teras Seremonisi',
    categorySlug: 'kapadokya',
    categoryName: 'Kapadokya Özel',
    colorTheme: 'krem',
    venueType: 'teras',
    location: 'Göreme Teras',
    includedItems: ['Teras Çiçek Kemerı', 'Mum Yolları', 'Şampanya İkramı', 'Keman Dinletisi'],
    optionalItems: ['Sıcak Hava Balonu Seansı'],
  },
  {
    id: 13,
    src: '/images/raw/img-13.jpeg',
    alt: 'Işık zincirleri altında kır düğünü',
    title: 'Peri Işıkları Altında Kır Düğünü',
    categorySlug: 'dugun',
    categoryName: 'Düğün',
    colorTheme: 'ahsap',
    venueType: 'bahce',
    location: 'Niğde Kır Bahçesi',
    includedItems: ['Işık Çatısı', 'Çiçekli Gelin Yolu', 'Napolyon Sandalye'],
    optionalItems: ['Konfeti & Volkan Şovu'],
  },
  {
    id: 14,
    src: '/images/raw/img-14.jpeg',
    alt: 'Hint temalı nişan fonu',
    title: 'Hint Penceresi Nişan Konsepti',
    categorySlug: 'nisan',
    categoryName: 'Söz & Nişan',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Hint Penceresi Ahşap Fon', 'Kırmızı & Altın Çiçekler', 'Nişan Tepsisi'],
    optionalItems: ['Hediyelik Standı'],
  },
  {
    id: 15,
    src: '/images/raw/img-15.jpeg',
    alt: 'Aşk vadisi piknik masası',
    title: 'Aşk Vadisi Gün Doğumu Teklifi',
    categorySlug: 'kapadokya',
    categoryName: 'Kapadokya Özel',
    colorTheme: 'krem',
    venueType: 'vadi',
    location: 'Aşk Vadisi',
    includedItems: ['Balon Manzaralı Masa', 'Çiçek Aranjmanları', 'Gurme Peynir Tabağı'],
    optionalItems: ['Fotoğrafçı & Klip'],
  },
  {
    id: 16,
    src: '/images/raw/img-16.jpeg',
    alt: 'Bordo kına tahtı ve nedime alanı',
    title: 'Saray Konsepti Bordo Kına',
    categorySlug: 'kina',
    categoryName: 'Kına Gecesi',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Bordo Cibinlikli Taht', 'Gelin Kaftanı', '4 Nedime Dansçı', 'Kına Tepsisi'],
    optionalItems: ['Davul Şov Ekibi'],
  },
  {
    id: 17,
    src: '/images/raw/img-17.jpeg',
    alt: 'Mor kına cibinliği ve aksesuarlar',
    title: 'Zümrüt & Mor Kına Tahtı',
    categorySlug: 'kina',
    categoryName: 'Kına Gecesi',
    colorTheme: 'pembe',
    venueType: 'salon',
    location: 'Kayseri',
    includedItems: ['Mor Kadife Taht', 'Tef & Mum Dağıtımı', 'Lokum Standı'],
    optionalItems: ['Zenne Performansı'],
  },
  {
    id: 18,
    src: '/images/raw/img-18.jpeg',
    alt: 'Hint temalı kına gecesi masası',
    title: 'Otantik Hint Temalı Kına',
    categorySlug: 'kina',
    categoryName: 'Kına Gecesi',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Kırşehir',
    includedItems: ['Hint Kına Tahtı', 'Damat Fes-Yelek Seti', 'Yaş Kına'],
    optionalItems: ['Osmanlı Şerbetçisi'],
  },
  {
    id: 19,
    src: '/images/raw/img-19.jpeg',
    alt: 'Sarmaşıklı lüks gala masası',
    title: 'Botanık Çardak Düğün Masası',
    categorySlug: 'dugun',
    categoryName: 'Düğün',
    colorTheme: 'krem',
    venueType: 'bahce',
    location: 'Ürgüp',
    includedItems: ['Tavan Çiçek Enstalasyonu', 'Seramik Tabaklama', 'Peçetelikler'],
    optionalItems: ['Canlı Orkestra'],
  },
  {
    id: 20,
    src: '/images/raw/img-20.jpeg',
    alt: 'Kırmızı güllerle kına tahtı',
    title: 'Kırmızı Güllü Lüks Kına',
    categorySlug: 'kina',
    categoryName: 'Kına Gecesi',
    colorTheme: 'pembe',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Kırmızı Gül Kemerlı Taht', 'Işıklı Kına Tepsisi', 'Kaptan & Bindallı'],
    optionalItems: ['Davulcu Ekibi'],
  },
  {
    id: 21,
    src: '/images/raw/img-21.jpeg',
    alt: 'Kına tahtı ve neon yazı',
    title: 'Neon Işıklı Kına Sahnesi',
    categorySlug: 'kina',
    categoryName: 'Kına Gecesi',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Aksaray',
    includedItems: ['Kına Neon Fons', 'Taht & Minderler', 'Halay Mendilleri'],
    optionalItems: ['Oryantal Şovu'],
  },
  {
    id: 22,
    src: '/images/raw/img-22.jpeg',
    alt: 'Kına ikram ve şerbet masası',
    title: 'Geleneksel Lokum & Şerbet Masası',
    categorySlug: 'kina',
    categoryName: 'Kına Gecesi',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Kayseri',
    includedItems: ['Şerbet Güğümü', 'Lokumluklar', 'Nedime Karşılama Standı'],
    optionalItems: ['Kişiye Özel Hediyelikler'],
  },
  {
    id: 23,
    src: '/images/raw/img-23.jpeg',
    alt: 'Beyaz cibinlikli modern kına tahtı',
    title: 'Beyaz Melek Kına Konsepti',
    categorySlug: 'kina',
    categoryName: 'Kına Gecesi',
    colorTheme: 'krem',
    venueType: 'salon',
    location: 'Niğde',
    includedItems: ['Beyaz Cibinlik Taht', 'El Mumları', 'Şakira Kemerleri'],
    optionalItems: ['Testi Kırma Şovu'],
  },
  {
    id: 24,
    src: '/images/raw/img-24.jpeg',
    alt: 'Gelin alma bandosu ve bando karşılama',
    title: 'Coşkulu Gelin Alma Bandosu',
    categorySlug: 'dugun',
    categoryName: 'Düğün',
    colorTheme: 'altin',
    venueType: 'ev',
    location: 'Nevşehir',
    includedItems: ['5 Kişilik Bando Ekibi', 'Karşılama Müziği', 'Meşale Şovları'],
    optionalItems: ['Konfeti Patlatıcılar'],
  },
  {
    id: 25,
    src: '/images/raw/img-25.jpeg',
    alt: '4K drone ve medya çekimi',
    title: 'Kapadokya Havadan 4K Drone Çekimi',
    categorySlug: 'kapadokya',
    categoryName: 'Kapadokya Özel',
    colorTheme: 'krem',
    venueType: 'vadi',
    location: 'Göreme & Kızılçukur',
    includedItems: ['4K Drone Havadan Çekim', 'Klip Kurgusu', 'Ham Görüntü Teslimi'],
    optionalItems: ['Jimmy Jip Çekim'],
  },
]
