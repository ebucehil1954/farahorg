export interface ServiceInclude {
  title: string
  description: string
  iconName: 'Sparkles' | 'Flower2' | 'Palette' | 'Camera' | 'Utensils' | 'Music' | 'Flame' | 'MapPin' | 'Compass' | 'ShieldCheck' | 'Gift' | 'PartyPopper'
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
  optionalExtras?: string[]
  serviceAreas?: string[]
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
  categorySlug: 'dugun' | 'kina' | 'nisan' | 'bride-party' | 'dogum-gunu' | 'acilis' | 'masa-sandalye-kiralama' | 'ozel-gun-davet'
  categoryName: string
  colorTheme: 'altin' | 'gumus' | 'ahsap' | 'pembe' | 'krem'
  venueType: 'ev' | 'bahce' | 'salon' | 'vadi' | 'teras'
  location: string
  includedItems: string[]
  optionalItems: string[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'dugun',
    title: 'DÜĞÜN',
    subtitle: 'Hayalinizdeki düğünü birlikte gerçeğe dönüştürüyoruz.',
    script: 'Sonsuz Aşk',
    shortDescription:
      'Aşkınızın en özel gününü, size ve tarzınıza özel detaylarla unutulmaz bir deneyime dönüştürüyoruz. Mekân süslemesinden masa düzenine, gelin-damat alanından ışıklandırmaya kadar tüm detayları özenle planlıyor, düğününüzün kusursuz geçmesi için yanınızda oluyoruz.',
    longDescription:
      'Aşkınızın en özel gününü, size ve tarzınıza özel detaylarla unutulmaz bir deneyime dönüştürüyoruz. Mekân süslemesinden masa düzenine, gelin-damat alanından ışıklandırmaya kadar tüm detayları özenle planlıyor, düğününüzün kusursuz geçmesi için yanınızda oluyoruz.',
    heroImage: '/images/raw/img-4.jpeg',
    alt: 'Zarif masa süslemesi ve çiçekli gelin yolu ile hazırlanan düğün organizasyonu alanı',
    aestheticCues: [
      {
        title: 'Gelin & Damat Alanı',
        value: 'Özel Fon & Masa Süslemesi',
        description: 'Gelin masası arka fon dekoru, masa-sandalye giydirmeleri ve tasarım aksesuarlar.',
      },
      {
        title: 'Yürüyüş Yolu',
        value: 'Gelin Yolu & Sütunlar',
        description: 'Çiçekli ve ışıklı gelin yürüyüş yolu ile görkemli giriş seremonisi.',
      },
      {
        title: 'Masa & Ziyafet Düzeni',
        value: 'Mumluk, Şamdan & Vazolar',
        description: 'Misafir masa sandalye giydirmeleri, masa üstü çiçek ve seçkin dekorlar.',
      },
      {
        title: 'Müzik & Efekt',
        value: 'DJ, Ses Sistemi & Sis Bulutu',
        description: 'Düğün boyunca profesyonel anons, program yönetimi ve ilk dansta sis bulutu efekti.',
      },
    ],
    includes: [
      {
        title: 'Gelin Masası & Sahne Tasarımı',
        description: 'Gelin damat masası, arka fon dekorasyonu ve özel sandalye süslemeleri.',
        iconName: 'Sparkles',
      },
      {
        title: 'Gelin Yürüyüş Yolu',
        description: 'Özel tasarım sütunlar, yapay çiçekler ve ışıklandırmalı gelin yolu.',
        iconName: 'Compass',
      },
      {
        title: 'Masa & Sandalye Giydirme',
        description: 'Misafir masa düzeni, şamdanlar, mumluklar, vazolar ve masa üstü dekorlar.',
        iconName: 'Flower2',
      },
      {
        title: 'DJ & Ses Sistemi Yönetimi',
        description: 'Profesyonel ses tesisatı, DJ performansı, kesintisiz anons ve akış yönetimi.',
        iconName: 'Music',
      },
      {
        title: 'Sis Bulutu İlk Dans Şovu',
        description: 'İlk dansta büyüleyici bir bulut efekti sağlayan yapay sis gösterisi.',
        iconName: 'Flame',
      },
      {
        title: 'Fotoğraf & Video Prodüksiyon',
        description: 'Etkinliğin başından sonuna profesyonel kamera çekimi ve anı kaydı.',
        iconName: 'Camera',
      },
    ],
    packageChecklist: [
      { name: 'Gelin & damat masa süslemesi', included: true },
      { name: 'Gelin yolu / yürüyüş yolu', included: true },
      { name: 'Gelin masası arka fon dekoru', included: true },
      { name: 'Gelin damat masa sandalye süslemesi', included: true },
      { name: 'Masa üstü çiçek ve dekorlar', included: true },
      { name: 'Misafir masa sandalye giydirmeleri', included: true },
      { name: 'Yapay çiçek ve dekoratif aksesuarlar', included: true },
      { name: 'Mumluk / şamdan / vazolar', included: true },
      { name: 'Karşılama panosu', included: true },
      { name: 'DJ hizmeti', included: true },
      { name: 'Profesyonel ses sistemi', included: true },
      { name: 'Düğün boyunca anons ve program yönetimi', included: true },
      { name: 'Sis bulutu', included: true },
      { name: 'Fotoğraf ve video çekimi', included: true },
    ],
    galleryImages: [
      { src: '/images/raw/img-4.jpeg', alt: 'Düğün seremonisi alanı', title: 'Kır Düğünü Kurgusu', location: 'Nevşehir' },
      { src: '/images/raw/img-5.jpeg', alt: 'Düğün masa düzeni', title: 'Açık Hava Düğün Masası', location: 'Ürgüp' },
      { src: '/images/raw/img-11.jpeg', alt: 'Şamdanlı gala masası', title: 'Balo Salonu Düğünü', location: 'Nevşehir' },
      { src: '/images/raw/img-13.jpeg', alt: 'Işıklı kır düğünü', title: 'Gece Işıklandırmalı Düğün', location: 'Aksaray' },
    ],
    faq: [
      {
        question: 'Düğün kurulumu etkinlikten kaç saat önce tamamlanıyor?',
        answer: 'Ekibimiz etkinlik başlamadan en az 3-4 saat önce tüm masa, fon, gelin yolu ve ses sistemi kurulumlarını tamamlayarak mekan direktörüne hazır teslim eder.',
      },
      {
        question: 'Sis bulutu iç mekan salonlarda kullanıma uygun mudur?',
        answer: 'Evet, kullandığımız profesyonel sis bulutu ekipmanı su bazlı ve kokusuz olup, iç mekan yangın dedektörlerini tetiklemez ve zemin kayganlığı oluşturmaz.',
      },
    ],
  },
  {
    slug: 'kina',
    title: 'KINA GECESİ',
    subtitle: 'Geleneklerin zarafeti, modern dokunuşlarla buluşuyor.',
    script: 'Gelenek & Zarafet',
    shortDescription:
      'Kına gecenizi konseptinize ve zevkinize uygun şekilde tasarlıyor; dekorasyon, masa süslemeleri, kına tahtı, gelin yolu ve tüm özel detaylarıyla size unutulmaz bir gece hazırlıyoruz.',
    longDescription:
      'Geleneklerin zarafeti, modern dokunuşlarla buluşuyor. Kına gecenizi konseptinize ve zevkinize uygun şekilde tasarlıyor; dekorasyon, masa süslemeleri, kına tahtı, gelin yolu ve tüm özel detaylarıyla size unutulmaz bir gece hazırlıyoruz.',
    heroImage: '/images/raw/img-21.jpeg',
    alt: 'Kırmızı güller, şık kına tahtı ve konsept aydınlatmalarla hazırlanan kına köşesi',
    aestheticCues: [
      {
        title: 'Kına Tahtı & Fon',
        value: 'Görkemli Taht & Arka Plan',
        description: 'Kına tahtı / kına koltuğu ve konsepte özel arka fon dekorasyonu.',
      },
      {
        title: 'Gelin Yolu',
        value: 'Özel Çiçekli Yol',
        description: 'Gelin çıkış seremonisi için hazırlanan özel tasarımlı gelin yolu.',
      },
      {
        title: 'Masa & Aksesuar',
        value: 'Masa Süsleme & Şamdanlar',
        description: 'Masa ve sandalye süslemeleri, masa üstü çiçek ve şamdan aksesuarları.',
      },
      {
        title: 'Müzik & Anılar',
        value: 'DJ, Ses Sistemi & Çekim',
        description: 'Kına müzikleri, profesyonel ses sistemi ve kesintisiz fotoğraf & video çekimi.',
      },
    ],
    includes: [
      {
        title: 'Kına Tahtı / Koltuğu Kurulumu',
        description: 'Konseptinize uygun renkte kına tahtı ve arka fon dekoru.',
        iconName: 'Sparkles',
      },
      {
        title: 'Gelin Yolu Tasarımı',
        description: 'Gelin çıkışı için özel süslenmiş yürüyüş yolu.',
        iconName: 'Compass',
      },
      {
        title: 'Masa ve Sandalye Süslemeleri',
        description: 'Masa üstü çiçekler, mumluklar, şamdanlar ve konsept aksesuarlar.',
        iconName: 'Flower2',
      },
      {
        title: 'DJ & Ses Sistemi',
        description: 'Geleneksel ve modern kına müzikleri eşliğinde ses yönetimi.',
        iconName: 'Music',
      },
      {
        title: 'Fotoğraf ve Video Çekimi',
        description: 'Kına gecesi boyunca tüm özel anların profesyonel kaydı.',
        iconName: 'Camera',
      },
      {
        title: 'Karşılama & Hoş Geldiniz Panosu',
        description: 'Girişte misafirlerinizi karşılayan isimli özel pano.',
        iconName: 'Palette',
      },
    ],
    packageChecklist: [
      { name: 'Kına tahtı / kına koltuğu', included: true },
      { name: 'Kına tahtı arka fon dekorasyonu', included: true },
      { name: 'Gelin yolu', included: true },
      { name: 'Masa ve sandalye süslemeleri', included: true },
      { name: 'Masa üstü çiçek ve dekorlar', included: true },
      { name: 'Mumluk / şamdan', included: true },
      { name: 'Kına gecesi konseptine uygun aksesuarlar', included: true },
      { name: 'Hoş geldiniz / karşılama panosu', included: true },
      { name: 'Fotoğraf video çekimi', included: true },
      { name: 'DJ ve ses sistemi', included: true },
      { name: 'Kına tepsisi', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Misafire dağıtılacak kına', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Nedime defleri', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'El gülü', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Damat omuz örtüsü', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Testi', included: false, note: 'Opsiyonel Ekstra' },
      { name: 'Davul ve su davulu', included: false, note: 'Opsiyonel Ekstra' },
    ],
    optionalExtras: [
      'Kına tepsisi',
      'Misafire dağıtılacak kına',
      'Nedime defleri',
      'El gülü',
      'Damat omuz örtüsü',
      'Testi',
      'Davul ve su davulu',
    ],
    galleryImages: [
      { src: '/images/raw/img-21.jpeg', alt: 'Kına tahtı', title: 'Kırmızı Konsept Kına Tahtı', location: 'Nevşehir' },
      { src: '/images/raw/img-16.jpeg', alt: 'Bordo kına konsepti', title: 'Bordo Kına Tahtı & Fon', location: 'Nevşehir' },
      { src: '/images/raw/img-22.jpeg', alt: 'Kına masası ve aksesuarlar', title: 'Geleneksel Kına Süslemesi', location: 'Ürgüp' },
      { src: '/images/raw/img-23.jpeg', alt: 'Beyaz cibinlik kına', title: 'Beyaz Kına Konsepti', location: 'Aksaray' },
    ],
    faq: [
      {
        question: 'Opsiyonel ekstraları pakete nasıl dahil edebiliriz?',
        answer: 'İhtiyacınıza göre kına tepsisi, dağıtılacak kınalar, nedime defleri, testi ve davul gibi ekstraları dilediğiniz adetlerde paketinize ekleyebilirsiniz.',
      },
      {
        question: 'Kına tahtı için farklı renk ve model seçenekleri mevcut mu?',
        answer: 'Evet; kırmızı, bordo, beyaz ve zümrüt gibi zevkinize uygun farklı taht ve arka fon modellerimiz bulunmaktadır.',
      },
    ],
  },
  {
    slug: 'nisan',
    title: 'SÖZ NİŞAN ORGANİZASYONU',
    subtitle: 'Bir ömürlük hikâyenin en güzel başlangıcı…',
    script: 'İlk Adım',
    shortDescription:
      'Nişan gününüzü, aşkınızı ve tarzınızı yansıtan özel bir konsepte dönüştürüyoruz. Zarif dekorasyonlar, şık masa düzenlemeleri ve özenle hazırlanan detaylarla bu özel günü sizin için unutulmaz kılıyoruz.',
    longDescription:
      'Bir ömürlük hikâyenin en güzel başlangıcı… Nişan gününüzü, aşkınızı ve tarzınızı yansıtan özel bir konsepte dönüştürüyoruz. Zarif dekorasyonlar, şık masa düzenlemeleri ve özenle hazırlanan detaylarla bu özel günü sizin için unutulmaz kılıyoruz.',
    heroImage: '/images/raw/img-1.jpeg',
    alt: 'Pleksi fon, zarif çiçekler ve şık nişan masası ile hazırlanan söz ve nişan organizasyonu',
    aestheticCues: [
      {
        title: 'Arka Fon & Sandalyeler',
        value: 'Söz/Nişan Fonu & Sandalyeler',
        description: 'Çiftimize özel tasarlanmış şık arka fon ve gelin & damat sandalyeleri.',
      },
      {
        title: 'Seremoni Detayları',
        value: 'Söz & Nişan Tepsisi Seti',
        description: 'Söz tepsisi, nişan tepsisi, yüzük makası ve yüzük kurdelesi.',
      },
      {
        title: 'Sunum & Karşılama',
        value: 'Çiçek & Çikolata Sunumu',
        description: 'Çiçek ve çikolata sunum alanı, isimlik / özel yazılı dekor ve karşılama panosu.',
      },
      {
        title: 'Müzik & Çekim',
        value: 'DJ, Ses Sistemi & Video',
        description: 'DJ ve profesyonel ses sistemi ile kesintisiz fotoğraf & video çekimi.',
      },
    ],
    includes: [
      {
        title: 'Söz / Nişan Arka Fon Kurulumu',
        description: 'Şık arka fon, gelin & damat sandalyeleri ve yapay çiçek süslemeleri.',
        iconName: 'Sparkles',
      },
      {
        title: 'Masa Üstü Dekor & Aksesuarlar',
        description: 'Masa üstü çiçekler, mumluklar, şamdanlar ve dekoratif objeler.',
        iconName: 'Flower2',
      },
      {
        title: 'Seremoni Ekipmanları',
        description: 'Söz ve nişan tepsisi, yüzük makası ve yüzük kurdelesi.',
        iconName: 'Utensils',
      },
      {
        title: 'Çiçek & Çikolata Sunum Alanı',
        description: 'Özel sunum sehpası, isimlik / özel yazılı dekor tasarımı.',
        iconName: 'Palette',
      },
      {
        title: 'Gelin Yolu & Fotoğraf Alanı',
        description: 'Gelin yolu süslemesi, fotoğraf çekim köşesi ve karşılama panosu.',
        iconName: 'Camera',
      },
      {
        title: 'DJ, Ses Sistemi & Çekim',
        description: 'DJ hizmeti, profesyonel ses sistemi ile fotoğraf ve video çekimi.',
        iconName: 'Music',
      },
    ],
    packageChecklist: [
      { name: 'Söz/nişan arka fonu', included: true },
      { name: 'Gelin & damat sandalyeleri', included: true },
      { name: 'Masa üstü çiçek ve dekorlar', included: true },
      { name: 'Mumluk / şamdan', included: true },
      { name: 'Yapay çiçek süslemeleri', included: true },
      { name: 'Dekoratif aksesuarlar', included: true },
      { name: 'Gelin yolu', included: true },
      { name: 'Fotoğraf çekim alanı', included: true },
      { name: 'Söz tepsisi', included: true },
      { name: 'Nişan tepsisi', included: true },
      { name: 'Yüzük makası', included: true },
      { name: 'Yüzük kurdelesi', included: true },
      { name: 'Çiçek ve çikolata sunum alanı', included: true },
      { name: 'İsimlik / özel yazılı dekor', included: true },
      { name: 'Karşılama panosu', included: true },
      { name: 'Fotoğraf video çekimi', included: true },
      { name: 'DJ ve ses sistemi', included: true },
    ],
    galleryImages: [
      { src: '/images/raw/img-1.jpeg', alt: 'Modern nişan fonu', title: 'Pleksi Tag Nişan', location: 'Nevşehir' },
      { src: '/images/raw/img-2.jpeg', alt: 'Ahşap nişan masası', title: 'Boho Ahşap Söz Masası', location: 'Ürgüp' },
      { src: '/images/raw/img-6.jpeg', alt: 'Butik ev sözü', title: 'Evde Zarif Söz Masası', location: 'Nevşehir' },
      { src: '/images/raw/img-8.jpeg', alt: 'Bahçe nişanı', title: 'Doğada Bahçe Nişanı', location: 'Aksaray' },
    ],
    faq: [
      {
        question: 'Ev ortamında veya dar alanlarda kurulum yapılabiliyor mu?',
        answer: 'Evet! Fon ve masa modüllerimiz ev içi salon, bahçe veya teras gibi farklı metrekarelerdeki mekanlara göre özel olarak ayarlanmaktadır.',
      },
      {
        question: 'Tepsi, makas ve isimlik çiftlerimizin isimlerine göre mi hazırlanıyor?',
        answer: 'Evet, isimlik ve seremoni detayları çiftlerimizin isimleri ve konsept renk tercihlerine göre özel olarak hazırlanır.',
      },
    ],
  },
  {
    slug: 'bride-party',
    title: 'BRİDE PARTY',
    subtitle: 'Bekârlığa son, eğlenceye tam gaz! ✨',
    script: 'Bride To Be',
    shortDescription:
      'En yakın arkadaşlarınızla geçireceğiniz bu özel günü, enerjinize ve tarzınıza uygun konseptlerle renklendiriyoruz. Dekorasyondan masa düzenine kadar her ayrıntıyı sizin için hazırlıyoruz.',
    longDescription:
      'Bekârlığa son, eğlenceye tam gaz! ✨ En yakın arkadaşlarınızla geçireceğiniz bu özel günü, enerjinize ve tarzınıza uygun konseptlerle renklendiriyoruz. Dekorasyondan masa düzenine kadar her ayrıntıyı sizin için hazırlıyoruz.',
    heroImage: '/images/raw/img-12.jpeg',
    alt: 'Bride to Be neon ışıklı fon ve şık parti masası dekorasyonu',
    aestheticCues: [
      {
        title: 'Arka Fon & Işık',
        value: 'Bride to Be Fon & Neon Yazı',
        description: 'Özel Bride to Be arka fonu, neon / LED ışıklı yazılar ve dekoratif objeler.',
      },
      {
        title: 'Parti Masası',
        value: 'Konsept Masa & Servis',
        description: 'Masa ve sandalyeler, konsepte uygun masa üstü aksesuarları, servis tabak, bardak ve çatalları.',
      },
      {
        title: 'Gelin Aksesuarları',
        value: 'Kuşak, Taç & Gözlük Seti',
        description: 'Bride to be kuşağı, tacı, parti gözlükleri ve konsept aksesuarlar.',
      },
      {
        title: 'Fotoğraf & Video',
        value: 'Profesyonel Çekim',
        description: 'Eğlenceli anlarınızı ölümsüzleştiren kesintisiz fotoğraf ve video çekimi.',
      },
    ],
    includes: [
      {
        title: 'Bride to Be Arka Fonu & Neon Yazı',
        description: 'Konsepte uygun tasarımlı arka plan ve ışıklı neon / LED Bride to Be yazısı.',
        iconName: 'Sparkles',
      },
      {
        title: 'Parti Masa & Sandalye Düzeni',
        description: 'Özel masa dekorasyonu, çiçekler ve dekoratif parti objeleri.',
        iconName: 'PartyPopper',
      },
      {
        title: 'Servis Ekipmanları Takımı',
        description: 'Konseptle uyumlu servis tabak, bardak, çatal ve sunum malzemeleri.',
        iconName: 'Utensils',
      },
      {
        title: 'Bride Aksesuar Paketi',
        description: 'Gelin için özel Bride to Be kuşağı, tacı ve konsept gözlüğü.',
        iconName: 'Gift',
      },
      {
        title: 'Fotoğraf & Video Çekimi',
        description: 'Tüm eğlenceli anların profesyonel kamera ile fotoğraf ve video çekimi.',
        iconName: 'Camera',
      },
      {
        title: 'Masa Üstü Çiçek & Objeler',
        description: 'Canlı/yapay çiçek aranjmanları, şamdanlar ve masa aksesuarları.',
        iconName: 'Flower2',
      },
    ],
    packageChecklist: [
      { name: 'Bride to Be arka fon', included: true },
      { name: 'Bride to Be masa dekorasyonu', included: true },
      { name: 'Masa ve sandalye', included: true },
      { name: 'Konsepte uygun masa üstü aksesuarları', included: true },
      { name: 'Çiçek ve dekoratif objeler', included: true },
      { name: 'Neon / led yazı', included: true },
      { name: 'Servis tabak,bardak,çatal vs.', included: true },
      { name: 'Bride to be kuşağı, tacı, gözlüğü', included: true },
      { name: 'Fotoğraf ve video çekimi', included: true },
    ],
    galleryImages: [
      { src: '/images/raw/img-12.jpeg', alt: 'Bride party teras konsepti', title: 'Teras Bride Party', location: 'Göreme' },
      { src: '/images/raw/img-9.jpeg', alt: 'Neon ışıklı parti fonu', title: 'Neon Bride to Be', location: 'Nevşehir' },
      { src: '/images/raw/img-3.jpeg', alt: 'Pembe konsept parti masası', title: 'Pudra Pembe Bride Masası', location: 'Ürgüp' },
    ],
    faq: [
      {
        question: 'Bride Party organizasyonu hangi mekanlarda düzenlenebilir?',
        answer: 'Ev ortamında, otel süitlerinde, teraslarda, kafe/restoranlarda veya bağ evi gibi açık/kapalı dilediğiniz her mekanda kurulum yapıyoruz.',
      },
      {
        question: 'Arkadaş grubu için ilave aksesuarlar temin ediliyor mu?',
        answer: 'Evet, gelinin yanı sıra nedimeler ve arkadaşlar için de konsept taçlar, gözlükler ve bileklikler temin edebilmekteyiz.',
      },
    ],
  },
  {
    slug: 'dogum-gunu',
    title: 'DOĞUM GÜNÜ',
    subtitle: 'Her yaş, kutlamaya değer bir hikâyedir.',
    script: 'Mutlu Yaşlar',
    shortDescription:
      'Doğum gününüzü sıradan bir kutlamadan çıkarıp size özel, renkli ve unutulmaz bir anıya dönüştürüyoruz. Konsept, dekorasyon ve masa süslemeleriyle hayalinizdeki kutlamayı birlikte tasarlıyoruz.',
    longDescription:
      'Her yaş, kutlamaya değer bir hikâyedir. Doğum gününüzü sıradan bir kutlamadan çıkarıp size özel, renkli ve unutulmaz bir anıya dönüştürüyoruz. Konsept, dekorasyon ve masa süslemeleriyle hayalinizdeki kutlamayı birlikte tasarlıyoruz.',
    heroImage: '/images/raw/img-9.jpeg',
    alt: 'Balon kemeri, pasta masası ve renkli ışıklarla süslenmiş doğum günü organizasyon alanı',
    aestheticCues: [
      {
        title: 'Arka Fon & Balon',
        value: 'Balon Kemeri & Özel Fon',
        description: 'Doğum günü konseptine uygun arka fon ve balon kemeri / balon süslemesi.',
      },
      {
        title: 'Masa Düzeni',
        value: 'Doğum Günü & Pasta Masası',
        description: 'Doğum günü masası, pasta masası, masa üstü süslemeleri ve konsept aksesuarlar.',
      },
      {
        title: 'Kişiselleştirme',
        value: 'Yaş & İsim Yazılı Dekor',
        description: 'Kutlanan yaş ve isme özel hazırlanan dekoratif pano ve detaylar.',
      },
      {
        title: 'Fotoğraf & Karşılama',
        value: 'Foto Alanı & Karşılama Panosu',
        description: 'Karşılama panosu, fotoğraf çekim alanı ve profesyonel fotoğraf-video çekimi.',
      },
    ],
    includes: [
      {
        title: 'Konsept Arka Fon & Balon Kemeri',
        description: 'Kişiye özel temada arka plan ve balon kemeri / balon süslemesi.',
        iconName: 'Sparkles',
      },
      {
        title: 'Doğum Günü & Pasta Masası Kurulumu',
        description: 'Doğum günü masası, pasta masası ve masa üstü süslemeleri.',
        iconName: 'Utensils',
      },
      {
        title: 'Yaş & İsim Yazılı Özel Dekor',
        description: 'Doğum günü sahibinin adı ve yaşına özel tasarlanmış dekoratif objeler.',
        iconName: 'Palette',
      },
      {
        title: 'Fotoğraf Çekim Alanı & Karşılama Panosu',
        description: 'Misafirler ve anılar için tasarlanmış özel fotoğraf alanı ve karşılama panosu.',
        iconName: 'Camera',
      },
      {
        title: 'Fotoğraf ve Video Çekimi',
        description: 'Pasta kesimi ve kutlama anlarının profesyonel fotoğraf ve video çekimi.',
        iconName: 'PartyPopper',
      },
      {
        title: 'Konsept Aksesuar ve Süslemeler',
        description: 'Tema uyumlu şamdanlar, süsler ve masa aksesuarları.',
        iconName: 'Gift',
      },
    ],
    packageChecklist: [
      { name: 'Doğum günü konseptine uygun arka fon', included: true },
      { name: 'Balon kemeri / balon süslemesi', included: true },
      { name: 'Doğum günü masası', included: true },
      { name: 'Pasta masası', included: true },
      { name: 'Masa üstü süslemeleri', included: true },
      { name: 'Yaş ve isim yazılı dekor', included: true },
      { name: 'Konsept aksesuarlar', included: true },
      { name: 'Fotoğraf çekim alanı', included: true },
      { name: 'Karşılama panosu', included: true },
      { name: 'Fotoğraf ve video çekimi', included: true },
    ],
    galleryImages: [
      { src: '/images/raw/img-9.jpeg', alt: 'Işıklı doğum günü masası', title: 'Işıltılı Doğum Günü', location: 'Nevşehir' },
      { src: '/images/raw/img-3.jpeg', alt: 'Pastel balon doğum günü', title: 'Pastel Balonlu Kutlama', location: 'Ürgüp' },
      { src: '/images/raw/img-7.jpeg', alt: 'Gümüş & ayna masa konsepti', title: 'Yetişkin Doğum Günü', location: 'Ürgüp' },
    ],
    faq: [
      {
        question: 'İstediğimiz temada ve renklerde balon süslemesi yapılıyor mu?',
        answer: 'Evet; altın, gümüş, pastel tonlar, safari, prenses vb. dilediğiniz her renk ve konsepte uygun balon kemeri ve fon hazırlıyoruz.',
      },
      {
        question: 'Pasta ve ikramlık servisini siz mi sağlıyorsunuz?',
        answer: 'Biz pasta masası, sunumluklar, servis ekipmanları ve dekorasyonunu hazırlıyoruz; pasta ve ikramlarınızı bu şık alanda konuklarınıza sunabilirsiniz.',
      },
    ],
  },
  {
    slug: 'acilis',
    title: 'AÇILIŞ ORGANİZASYONU',
    subtitle: 'Markanızın ilk izlenimini unutulmaz kılıyoruz.',
    script: 'Büyük Açılış',
    shortDescription:
      'İşletmenizin açılışını, markanızın ruhuna ve konseptine uygun şekilde planlıyor ve hayata geçiriyoruz. Dekorasyon, balon süslemeleri, masa düzeni ve karşılama alanlarından tüm detaylara kadar profesyonel dokunuşlarla açılış gününüzü özel bir deneyime dönüştürüyoruz.',
    longDescription:
      'Markanızın ilk izlenimini unutulmaz kılıyoruz. İşletmenizin açılışını, markanızın ruhuna ve konseptine uygun şekilde planlıyor ve hayata geçiriyoruz. Dekorasyon, balon süslemeleri, masa düzeni ve karşılama alanlarından tüm detaylara kadar profesyonel dokunuşlarla açılış gününüzü özel bir deneyime dönüştürüyoruz.',
    heroImage: '/images/raw/img-24.jpeg',
    alt: 'Bistro masalar, açılış balonu süslemesi ve coşkulu bando ile açılış organizasyonu',
    aestheticCues: [
      {
        title: 'Giriş & Balon',
        value: 'Giriş Kapısı & Balon Süsleme',
        description: 'Açılış konseptine uygun balon süsleme, giriş kapısı dekorasyonu ve açılış arka fonu.',
      },
      {
        title: 'Masa & Düzen',
        value: 'Bistro Masa & Süsleme',
        description: 'Masa ve sandalye süslemeleri, çiçek ve dekoratif aksesuarlar ile bistro masalar.',
      },
      {
        title: 'Seremoni',
        value: 'Kurdele, Makas & Tepsi',
        description: 'Karşılama panosu, açılış kurdelesi, makas ve tepsisi.',
      },
      {
        title: 'Ses & Sunum',
        value: 'DJ, Ses Sistemi & Anons',
        description: 'Açılış anonsu ve sunum, DJ ve ses sistemi ile fotoğraf video çekimi.',
      },
    ],
    includes: [
      {
        title: 'Giriş Kapısı Balon & Fon Süsleme',
        description: 'Açılış konseptine uygun balon süsleme, giriş kapısı dekorasyonu ve açılış arka fonu.',
        iconName: 'Sparkles',
      },
      {
        title: 'Bistro Masa & Süslemeler',
        description: 'Masa ve sandalye süslemeleri, bistro masa, çiçek ve dekoratif aksesuarlar.',
        iconName: 'Utensils',
      },
      {
        title: 'Açılış Kurdele, Makas & Tepsisi',
        description: 'Açılış kurdelesi, özel makas ve tepsisi ile karşılama panosu.',
        iconName: 'Gift',
      },
      {
        title: 'Açılış Anonsu, Sunum & DJ',
        description: 'Açılış anonsu ve sunum, DJ ve profesyonel ses sistemi.',
        iconName: 'Music',
      },
      {
        title: 'Fotoğraf ve Video Çekimi',
        description: 'Açılış töreni, kurdele kesimi ve misafirlerin profesyonel video/fotoğraf kaydı.',
        iconName: 'Camera',
      },
      {
        title: 'Karşılama Panosu',
        description: 'Girişte yer alan özel tasarımlı açılış karşılama panosu.',
        iconName: 'Compass',
      },
    ],
    packageChecklist: [
      { name: 'Açılış konseptine uygun balon süsleme', included: true },
      { name: 'Giriş kapısı dekorasyonu', included: true },
      { name: 'Açılış arka fonu', included: true },
      { name: 'Masa ve sandalye süslemeleri', included: true },
      { name: 'Çiçek ve dekoratif aksesuarlar', included: true },
      { name: 'Bistro masa', included: true },
      { name: 'Karşılama panosu', included: true },
      { name: 'Açılış kurdelesi', included: true },
      { name: 'Makas ve tepsisi', included: true },
      { name: 'Açılış anonsu ve sunum', included: true },
      { name: 'Fotoğraf video çekimi', included: true },
      { name: 'DJ ve ses sistemi', included: true },
    ],
    galleryImages: [
      { src: '/images/raw/img-24.jpeg', alt: 'Açılış organizasyonu alanı', title: 'Kurumsal Açılış Töreni', location: 'Nevşehir Merkez' },
      { src: '/images/raw/img-1.jpeg', alt: 'Açılış kokteyl masaları', title: 'Bistro Masa Düzeni', location: 'Nevşehir' },
      { src: '/images/raw/img-11.jpeg', alt: 'Gala açılış yemeği', title: 'Açılış Kokteyl & Davet', location: 'Aksaray' },
    ],
    faq: [
      {
        question: 'Açılış için ses sistemi izinleri ve müzik yayını nasıl yapılıyor?',
        answer: 'Ses sistemimizin gücü mekanın açık veya kapalı alan olmasına göre ayarlanır ve açılış anonsları profesyonel akış ile yönetilir.',
      },
      {
        question: 'İşletme renklerimize özel balon tasarımı yaptırabilir miyiz?',
        answer: 'Evet, logonuz ve kurumsal kimlik renklerinize %100 uyumlu balon süslemesi ve karşılama panoları hazırlıyoruz.',
      },
    ],
  },
  {
    slug: 'masa-sandalye-kiralama',
    title: 'MASA SANDALYE KİRALAMA',
    subtitle: 'Her organizasyona uygun, şık ve konforlu çözümler.',
    script: 'Şık & Konforlu',
    shortDescription:
      'Düğün, nişan, kına, açılış, davet ve özel etkinlikleriniz için farklı konseptlere uygun masa ve sandalye seçenekleri sunuyoruz. İhtiyacınıza uygun ürünleri belirleyerek organizasyon alanınızın hem şık hem de kullanışlı olmasını sağlıyoruz.',
    longDescription:
      'Her organizasyona uygun, şık ve konforlu çözümler. Düğün, nişan, kına, açılış, davet ve özel etkinlikleriniz için farklı konseptlere uygun masa ve sandalye seçenekleri sunuyoruz. İhtiyacınıza uygun ürünleri belirleyerek organizasyon alanınızın hem şık hem de kullanışlı olmasını sağlıyoruz.',
    heroImage: '/images/raw/img-5.jpeg',
    alt: 'Şık Napolyon sandalyeler, yuvarlak masalar ve zarif masa örtüleri kiralama hizmeti',
    aestheticCues: [
      {
        title: 'Masa & Sandalye Çeşitleri',
        value: 'Yuvarlak, Bistro & Napolyon',
        description: 'Yuvarlak masa, bistro masa ve şık Napolyon sandalye seçenekleri.',
      },
      {
        title: 'Tekstil & Süsleme',
        value: 'Masa Örtüsü & Süslemeler',
        description: 'Masa örtüsü, masa süslemesi, sandalye süslemesi ve masa üstü dekorasyonları.',
      },
      {
        title: 'Çiçek & Aksesuar',
        value: 'Çiçek, Şamdan & Mumluk',
        description: 'Çiçek ve yapay çiçek süslemeleri, mumluk / şamdan ve konsepte uygun renk seçenekleri.',
      },
      {
        title: 'Hizmet İçeriği',
        value: 'Nakliye, Kurulum & Toplama',
        description: 'Ürünlerin alana nakliyesi, masa-sandalyelerin kurulumu, etkinlik sonrası toplama ve yerleşim planlaması.',
      },
    ],
    includes: [
      {
        title: 'Masa ve Sandalye Temini',
        description: 'Yuvarlak masa, bistro masa ve Napolyon sandalye seçenekleri.',
        iconName: 'Utensils',
      },
      {
        title: 'Tekstil & Süsleme Hizmeti',
        description: 'Masa örtüsü, masa süslemesi, sandalye süslemesi ve renk alternatifleri.',
        iconName: 'Sparkles',
      },
      {
        title: 'Masa Üstü Çiçek & Şamdanlar',
        description: 'Masa üstü dekorasyonları, çiçek/yapay çiçek süslemeleri, mumluk ve şamdanlar.',
        iconName: 'Flower2',
      },
      {
        title: 'Etkinlik Alanına Nakliye',
        description: 'Ürünlerin etkinlik alanına güvenli ve zamanında nakliyesi.',
        iconName: 'MapPin',
      },
      {
        title: 'Yerinde Kurulum & Planlama',
        description: 'Masa ve sandalyelerin yerinde kurulumu ve isteğe göre yerleşim planlaması.',
        iconName: 'Compass',
      },
      {
        title: 'Etkinlik Sonrası Toplama',
        description: 'Organizasyon bitiminde tüm ekipmanların eksiksiz ve düzenli toplanması.',
        iconName: 'ShieldCheck',
      },
    ],
    packageChecklist: [
      { name: 'Yuvarlak masa', included: true },
      { name: 'Bistro masa', included: true },
      { name: 'Napolyon sandalye', included: true },
      { name: 'Masa örtüsü', included: true },
      { name: 'Masa süslemesi', included: true },
      { name: 'Sandalye süslemesi', included: true },
      { name: 'Masa üstü dekorasyonları', included: true },
      { name: 'Çiçek ve yapay çiçek süslemeleri', included: true },
      { name: 'Mumluk / şamdan', included: true },
      { name: 'Konsepte uygun renk seçenekleri', included: true },
      { name: 'Ürünlerin etkinlik alanına nakliyesi', included: true },
      { name: 'Masa ve sandalyelerin kurulumu', included: true },
      { name: 'Etkinlik sonrası toplama', included: true },
      { name: 'İsteğe göre yerleşim planlaması', included: true },
    ],
    serviceAreas: [
      'Düğün',
      'Nişan',
      'Kına',
      'Söz',
      'Doğum Günü',
      'Açılış',
      'Davet',
      'Mezuniyet',
      'Özel Etkinlikler',
    ],
    galleryImages: [
      { src: '/images/raw/img-5.jpeg', alt: 'Masa sandalye düzeni', title: 'Kır Bahçesi Masa Düzeni', location: 'Nevşehir' },
      { src: '/images/raw/img-11.jpeg', alt: 'Napolyon sandalye ve şamdan', title: 'Gala Masa & Sandalye', location: 'Nevşehir' },
      { src: '/images/raw/img-13.jpeg', alt: 'Bistro ve ziyafet masaları', title: 'Dış Mekan Ziyafet Düzeni', location: 'Ürgüp' },
    ],
    faq: [
      {
        question: 'Minimum veya maksimum masa sandalye kiralama adedi nedir?',
        answer: 'Küçük ev veya bahçe davetlerinden 1000+ kişilik büyük düğün ve etkinliklere kadar her kapasitede masa ve sandalye kiralama hizmeti sunuyoruz.',
      },
      {
        question: 'Kullanım alanları nelerdir?',
        answer: 'Düğün, Nişan, Kına, Söz, Doğum Günü, Açılış, Davet, Mezuniyet ve tüm Özel Etkinlikleriniz için hizmet vermekteyiz.',
      },
    ],
  },
  {
    slug: 'ozel-gun-davet',
    title: 'ÖZEL GÜN & DAVET ORGANİZASYONLARI',
    subtitle: 'Sizin için önemli olan her an, bizim için de özeldir.',
    script: 'Özel Anlar',
    shortDescription:
      'Söz, mezuniyet, yıldönümü, açılış, kurumsal davet ve özel kutlamalarınız için konsept tasarım ve dekorasyon hizmetleri sunuyoruz. Hayalinizdeki atmosferi birlikte oluşturuyor, her detayı sizin için özenle hazırlıyoruz.',
    longDescription:
      'Sizin için önemli olan her an, bizim için de özeldir. Söz, mezuniyet, yıldönümü, açılış, kurumsal davet ve özel kutlamalarınız için konsept tasarım ve dekorasyon hizmetleri sunuyoruz. Hayalinizdeki atmosferi birlikte oluşturuyor, her detayı sizin için özenle hazırlıyoruz.',
    heroImage: '/images/raw/img-19.jpeg',
    alt: 'Özel davet ve gala yemekleri için hazırlanan estetik masa süslemesi ve çiçek enstalasyonları',
    aestheticCues: [
      {
        title: '🌸 Konsept & Dekorasyon',
        value: 'Özel Tasarım, Masa & Balon',
        description: 'Etkinliğe özel konsept tasarımı, masa & sandalye düzenlemesi, masa üstü süslemeleri, çiçek ve dekoratif aksesuarlar, balon süslemeleri, arka fon dekorasyonu, fotoğraf çekim alanı ve karşılama panosu.',
      },
      {
        title: '🎤 Müzik & Teknik Hizmetler',
        value: 'DJ, Ses Sistemi & Işık',
        description: 'DJ / müzik yayını, profesyonel ses sistemi, mikrofon, etkinlik boyunca anons ve sunum, giriş ve özel anlar için müzik seçimi ve ışıklandırma.',
      },
      {
        title: '🍰 İkram & Sunum',
        value: 'İkram, Pasta & İçecek Alanı',
        description: 'İkram masası kurulumu, tatlı & pasta sunum alanı, içecek sunum alanı, masa servis ekipmanları ve konsepte uygun sunum dekorları.',
      },
      {
        title: '📸 Fotoğraf & Anılar',
        value: 'Konsept Foto Alanı & Çekim',
        description: 'Konsept fotoğraf alanı, fotoğraf aksesuarları ve profesyonel fotoğraf & video (opsiyonel).',
      },
    ],
    includes: [
      {
        title: 'Konsept Tasarım & Arka Fon',
        description: 'Etkinliğe özel konsept tasarımı, masa & sandalye düzenlemesi, balon ve arka fon dekorasyonu.',
        iconName: 'Sparkles',
      },
      {
        title: 'Masa Üstü Çiçek & Dekorlar',
        description: 'Masa üstü süslemeleri, çiçek ve dekoratif aksesuarlar ile karşılama panosu.',
        iconName: 'Flower2',
      },
      {
        title: 'DJ & Profesyonel Ses Sistemi',
        description: 'DJ / müzik yayını, profesyonel ses sistemi, mikrofon, anons, sunum ve ışıklandırma.',
        iconName: 'Music',
      },
      {
        title: 'İkram, Pasta & İçecek Sunumu',
        description: 'İkram masası kurulumu, tatlı & pasta sunum alanı, içecek alanı ve masa servis ekipmanları.',
        iconName: 'Utensils',
      },
      {
        title: 'Konsept Fotoğraf Alanı & Aksesuarlar',
        description: 'Misafirleriniz için özel konsept fotoğraf alanı ve fotoğraf aksesuarları.',
        iconName: 'Camera',
      },
      {
        title: 'Profesyonel Fotoğraf & Video',
        description: 'Profesyonel fotoğraf & video çekim hizmeti (opsiyonel ekstra).',
        iconName: 'PartyPopper',
      },
    ],
    packageChecklist: [
      { name: 'Etkinliğe özel konsept tasarımı', included: true },
      { name: 'Masa & sandalye düzenlemesi', included: true },
      { name: 'Masa üstü süslemeleri', included: true },
      { name: 'Çiçek ve dekoratif aksesuarlar', included: true },
      { name: 'Balon süslemeleri', included: true },
      { name: 'Arka fon dekorasyonu', included: true },
      { name: 'Fotoğraf çekim alanı', included: true },
      { name: 'Karşılama panosu', included: true },
      { name: 'DJ / müzik yayını', included: true },
      { name: 'Profesyonel ses sistemi', included: true },
      { name: 'Mikrofon', included: true },
      { name: 'Etkinlik boyunca anons ve sunum', included: true },
      { name: 'Giriş ve özel anlar için müzik seçimi', included: true },
      { name: 'Işıklandırma', included: true },
      { name: 'İkram masası kurulumu', included: true },
      { name: 'Tatlı & pasta sunum alanı', included: true },
      { name: 'İçecek sunum alanı', included: true },
      { name: 'Masa servis ekipmanları', included: true },
      { name: 'Konsepte uygun sunum dekorları', included: true },
      { name: 'Konsept fotoğraf alanı', included: true },
      { name: 'Fotoğraf aksesuarları', included: true },
      { name: 'Profesyonel fotoğraf & video', included: false, note: 'Opsiyonel Ekstra' },
    ],
    galleryImages: [
      { src: '/images/raw/img-19.jpeg', alt: 'Özel gün yemek masası', title: 'Mezuniyet & Kurumsal Gala', location: 'Nevşehir' },
      { src: '/images/raw/img-10.jpeg', alt: 'Özel anlar kutlama masası', title: 'Yıldönümü & Butik Davet', location: 'Kapadokya' },
      { src: '/images/raw/img-7.jpeg', alt: 'Aynalı davet masası', title: 'Özel Kutlama Masası', location: 'Nevşehir' },
    ],
    faq: [
      {
        question: 'Hangi özel etkinlikler için hizmet verilmektedir?',
        answer: 'Söz, mezuniyet, yıldönümü, açılış, kurumsal davet ve özel kutlamalarınız için konsept tasarım ve dekorasyon hizmetleri sunuyoruz.',
      },
      {
        question: 'İkram ve servis ekipmanları nasıl organize ediliyor?',
        answer: 'İkram masası, tatlı & pasta sunum alanı, içecek sunum alanı ve konsepte uygun servis ekipmanları tarafımızca eksiksiz hazırlanır.',
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
    categoryName: 'SÖZ NİŞAN ORGANİZASYONU',
    colorTheme: 'altin',
    venueType: 'ev',
    location: 'Nevşehir Merkez',
    includedItems: ['Söz/Nişan Arka Fonu', 'Gelin & Damat Sandalyeleri', 'Masa Üstü Çiçekler', 'Söz & Nişan Tepsisi', 'Karşılama Panosu'],
    optionalItems: ['DJ ve Ses Sistemi', 'Fotoğraf Video Çekimi'],
  },
  {
    id: 2,
    src: '/images/raw/img-2.jpeg',
    alt: 'Evde ahşap tag nişan kurgusu',
    title: 'Boho Ahşap Tag Sözü',
    categorySlug: 'nisan',
    categoryName: 'SÖZ NİŞAN ORGANİZASYONU',
    colorTheme: 'ahsap',
    venueType: 'ev',
    location: 'Ürgüp',
    includedItems: ['Söz/Nişan Arka Fonu', 'Mumluk / Şamdan', 'Yüzük Makası & Kurdelesi', 'İsimlik'],
    optionalItems: ['Çiçek & Çikolata Sunum Alanı'],
  },
  {
    id: 3,
    src: '/images/raw/img-3.jpeg',
    alt: 'Pudra pembe parti masası',
    title: 'Pudra Pembe Doğum Günü',
    categorySlug: 'dogum-gunu',
    categoryName: 'DOĞUM GÜNÜ',
    colorTheme: 'pembe',
    venueType: 'salon',
    location: 'Ürgüp',
    includedItems: ['Balon Kemeri', 'Pasta Masası', 'Yaş & İsim Dekoru', 'Karşılama Panosu'],
    optionalItems: ['Fotoğraf Video Çekimi'],
  },
  {
    id: 4,
    src: '/images/raw/img-4.jpeg',
    alt: 'Düğün seremonisi ve nikah masası',
    title: 'Masalsı Düğün Seremonisi',
    categorySlug: 'dugun',
    categoryName: 'DÜĞÜN',
    colorTheme: 'krem',
    venueType: 'bahce',
    location: 'Nevşehir',
    includedItems: ['Gelin Masası Fonu', 'Gelin Yürüyüş Yolu', 'Misafir Masa Sandalye Giydirme', 'DJ & Ses Sistemi'],
    optionalItems: ['Sis Bulutu', 'Fotoğraf & Video'],
  },
  {
    id: 5,
    src: '/images/raw/img-5.jpeg',
    alt: 'Kır ziyafet sofrası ve sandalye kiralama',
    title: 'Açık Hava Masa & Sandalye Düzeni',
    categorySlug: 'masa-sandalye-kiralama',
    categoryName: 'MASA SANDALYE KİRALAMA',
    colorTheme: 'ahsap',
    venueType: 'bahce',
    location: 'Ürgüp',
    includedItems: ['Yuvarlak Masalar', 'Napolyon Sandalyeler', 'Masa Örtüleri', 'Nakliye & Kurulum'],
    optionalItems: ['Masa Üstü Dekorasyonları'],
  },
  {
    id: 6,
    src: '/images/raw/img-6.jpeg',
    alt: 'Pastel çiçekli butik söz masası',
    title: 'Zarif Butik Söz Kurgusu',
    categorySlug: 'nisan',
    categoryName: 'SÖZ NİŞAN ORGANİZASYONU',
    colorTheme: 'krem',
    venueType: 'ev',
    location: 'Nevşehir',
    includedItems: ['İsimlik / Özel Yazılı Dekor', 'Masa Üstü Çiçekler', 'Mumluk / Şamdan', 'Söz Tepsisi'],
    optionalItems: ['Fotoğraf Çekim Alanı'],
  },
  {
    id: 7,
    src: '/images/raw/img-7.jpeg',
    alt: 'Aynalı davet masası',
    title: 'Kristal & Ayna Davet Masası',
    categorySlug: 'ozel-gun-davet',
    categoryName: 'ÖZEL GÜN & DAVET',
    colorTheme: 'gumus',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Masa & Sandalye Düzenlemesi', 'Masa Servis Ekipmanları', 'Karşılama Panosu'],
    optionalItems: ['DJ & Ses Sistemi'],
  },
  {
    id: 8,
    src: '/images/raw/img-8.jpeg',
    alt: 'Bahçe nişan kurulumu',
    title: 'Doğada Bahçe Nişanı',
    categorySlug: 'nisan',
    categoryName: 'SÖZ NİŞAN ORGANİZASYONU',
    colorTheme: 'ahsap',
    venueType: 'bahce',
    location: 'Aksaray',
    includedItems: ['Söz/Nişan Arka Fonu', 'Gelin Yolu', 'Nişan Tepsisi & Makas'],
    optionalItems: ['DJ ve Ses Sistemi'],
  },
  {
    id: 9,
    src: '/images/raw/img-9.jpeg',
    alt: 'Işıklı doğum günü fonu',
    title: 'Işıltılı Doğum Günü Sahnesi',
    categorySlug: 'dogum-gunu',
    categoryName: 'DOĞUM GÜNÜ',
    colorTheme: 'altin',
    venueType: 'teras',
    location: 'Nevşehir',
    includedItems: ['Balon Süslemesi', 'Doğum Günü Masası', 'Pasta Masası', 'Yaş & İsim Dekoru'],
    optionalItems: ['Fotoğraf & Video Çekimi'],
  },
  {
    id: 10,
    src: '/images/raw/img-10.jpeg',
    alt: 'Özel gün kutlama sofrası',
    title: 'Özel Davet Masası',
    categorySlug: 'ozel-gun-davet',
    categoryName: 'ÖZEL GÜN & DAVET',
    colorTheme: 'ahsap',
    venueType: 'vadi',
    location: 'Kapadokya',
    includedItems: ['Konsept Tasarım', 'Masa & Sandalye Düzeni', 'İkram & Sunum Alanı'],
    optionalItems: ['Fotoğraf & Video'],
  },
  {
    id: 11,
    src: '/images/raw/img-11.jpeg',
    alt: 'Mum ve çiçek süslemeli balo masası',
    title: 'Gala Balo Salonu Düğünü',
    categorySlug: 'dugun',
    categoryName: 'DÜĞÜN',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Gelin & Damat Masa Süslemesi', 'Misafir Giydirmeleri', 'Şamdanlar & Vazolar', 'DJ & Ses'],
    optionalItems: ['Sis Bulutu', 'Fotoğraf Çekimi'],
  },
  {
    id: 12,
    src: '/images/raw/img-12.jpeg',
    alt: 'Bride to be kutlama masası',
    title: 'Bride Party Kutlama Alanı',
    categorySlug: 'bride-party',
    categoryName: 'BRİDE PARTY',
    colorTheme: 'krem',
    venueType: 'teras',
    location: 'Göreme',
    includedItems: ['Bride to Be Arka Fon', 'Neon / Led Yazı', 'Kuşak, Taç & Gözlük', 'Servis Takımı'],
    optionalItems: ['Fotoğraf & Video Çekimi'],
  },
  {
    id: 13,
    src: '/images/raw/img-13.jpeg',
    alt: 'Işık zincirleri altında düğün',
    title: 'Peri Işıkları Altında Kır Düğünü',
    categorySlug: 'dugun',
    categoryName: 'DÜĞÜN',
    colorTheme: 'ahsap',
    venueType: 'bahce',
    location: 'Niğde',
    includedItems: ['Gelin Yolu', 'Masa Sandalye Süsleme', 'DJ & Ses Sistemi', 'Sis Bulutu'],
    optionalItems: ['Fotoğraf ve Video Çekimi'],
  },
  {
    id: 14,
    src: '/images/raw/img-14.jpeg',
    alt: 'Zarif nişan fonu',
    title: 'Özel Tasarım Nişan Konsepti',
    categorySlug: 'nisan',
    categoryName: 'SÖZ NİŞAN ORGANİZASYONU',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Söz/Nişan Arka Fonu', 'Gelin & Damat Sandalyeleri', 'Nişan Tepsisi'],
    optionalItems: ['Çiçek ve Çikolata Sunum Alanı'],
  },
  {
    id: 15,
    src: '/images/raw/img-15.jpeg',
    alt: 'Özel gün davet masası',
    title: 'Kutlama & Özel Davet Masası',
    categorySlug: 'ozel-gun-davet',
    categoryName: 'ÖZEL GÜN & DAVET',
    colorTheme: 'krem',
    venueType: 'vadi',
    location: 'Kapadokya',
    includedItems: ['Masa Üstü Süslemeleri', 'İkram Masası Kurulumu', 'Karşılama Panosu'],
    optionalItems: ['Fotoğraf ve Video Çekimi'],
  },
  {
    id: 16,
    src: '/images/raw/img-16.jpeg',
    alt: 'Bordo kına tahtı ve süslemeler',
    title: 'Görkemli Bordo Kına Tahtı',
    categorySlug: 'kina',
    categoryName: 'KINA GECESİ',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Kına Tahtı / Koltuğu', 'Arka Fon Dekorasyonu', 'Gelin Yolu', 'DJ ve Ses Sistemi'],
    optionalItems: ['Kına Tepsisi & Defler', 'Davul'],
  },
  {
    id: 17,
    src: '/images/raw/img-17.jpeg',
    alt: 'Kına tahtı ve aksesuarlar',
    title: 'Zarafet Kına Konsepti',
    categorySlug: 'kina',
    categoryName: 'KINA GECESİ',
    colorTheme: 'pembe',
    venueType: 'salon',
    location: 'Göreme',
    includedItems: ['Kına Tahtı', 'Masa Sandalye Süslemeleri', 'Mumluk / Şamdan', 'Hoş Geldiniz Panosu'],
    optionalItems: ['El Gülü & Testi'],
  },
  {
    id: 18,
    src: '/images/raw/img-18.jpeg',
    alt: 'Kına masası ve fon süslemesi',
    title: 'Geleneksel Kına Gecesi Masası',
    categorySlug: 'kina',
    categoryName: 'KINA GECESİ',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Kırşehir',
    includedItems: ['Kına Tahtı Fonu', 'Masa Üstü Dekorlar', 'DJ Hizmeti'],
    optionalItems: ['Damat Omuz Örtüsü'],
  },
  {
    id: 19,
    src: '/images/raw/img-19.jpeg',
    alt: 'Sarmaşıklı gala masası',
    title: 'Mezuniyet & Kurumsal Davet Masası',
    categorySlug: 'ozel-gun-davet',
    categoryName: 'ÖZEL GÜN & DAVET',
    colorTheme: 'krem',
    venueType: 'bahce',
    location: 'Ürgüp',
    includedItems: ['Konsept Tasarımı', 'Masa & Sandalye Düzenlemesi', 'Ses Sistemi', 'Işıklandırma'],
    optionalItems: ['Fotoğraf ve Video Çekimi'],
  },
  {
    id: 20,
    src: '/images/raw/img-20.jpeg',
    alt: 'Kırmızı güllerle kına tahtı',
    title: 'Kırmızı Güllü Kına Tahtı',
    categorySlug: 'kina',
    categoryName: 'KINA GECESİ',
    colorTheme: 'pembe',
    venueType: 'salon',
    location: 'Nevşehir',
    includedItems: ['Kına Tahtı', 'Gelin Yolu', 'Masa Süslemeleri', 'DJ ve Ses Sistemi'],
    optionalItems: ['Kına Tepsisi', 'Nedime Defleri'],
  },
  {
    id: 21,
    src: '/images/raw/img-21.jpeg',
    alt: 'Kına tahtı ve neon yazı',
    title: 'Saray Kına Sahnesi',
    categorySlug: 'kina',
    categoryName: 'KINA GECESİ',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Aksaray',
    includedItems: ['Kına Tahtı & Fon', 'Gelin Yolu', 'Şamdanlar', 'Fotoğraf & Video Çekimi'],
    optionalItems: ['Davul & Su Davulu'],
  },
  {
    id: 22,
    src: '/images/raw/img-22.jpeg',
    alt: 'Kına ikram köşesi',
    title: 'Kına Karşılama Alanı',
    categorySlug: 'kina',
    categoryName: 'KINA GECESİ',
    colorTheme: 'altin',
    venueType: 'salon',
    location: 'Avanos',
    includedItems: ['Karşılama Panosu', 'Masa Süslemesi', 'Mumluk / Şamdan'],
    optionalItems: ['Misafire Dağıtılacak Kına'],
  },
  {
    id: 23,
    src: '/images/raw/img-23.jpeg',
    alt: 'Beyaz cibinlikli modern kına tahtı',
    title: 'Beyaz Zarafet Kına Konsepti',
    categorySlug: 'kina',
    categoryName: 'KINA GECESİ',
    colorTheme: 'krem',
    venueType: 'salon',
    location: 'Niğde',
    includedItems: ['Beyaz Kına Tahtı', 'Arka Fon Dekoru', 'Gelin Yolu'],
    optionalItems: ['Testi Kırma'],
  },
  {
    id: 24,
    src: '/images/raw/img-24.jpeg',
    alt: 'Açılış töreni ve bistro masalar',
    title: 'İşletme Açılış Lansmanı',
    categorySlug: 'acilis',
    categoryName: 'AÇILIŞ ORGANİZASYONU',
    colorTheme: 'altin',
    venueType: 'ev',
    location: 'Nevşehir',
    includedItems: ['Giriş Kapısı Balon Süsleme', 'Bistro Masa', 'Açılış Kurdelesi', 'Makas ve Tepsisi', 'DJ ve Ses Sistemi'],
    optionalItems: ['Fotoğraf Video Çekimi'],
  },
  {
    id: 25,
    src: '/images/raw/img-5.jpeg',
    alt: 'Napolyon sandalye kiralama',
    title: 'Napolyon Sandalye & Masa Kiralama',
    categorySlug: 'masa-sandalye-kiralama',
    categoryName: 'MASA SANDALYE KİRALAMA',
    colorTheme: 'krem',
    venueType: 'salon',
    location: 'Kapadokya',
    includedItems: ['Napolyon Sandalye', 'Yuvarlak Masa', 'Bistro Masa', 'Masa Örtüsü', 'Kurulum ve Nakliye'],
    optionalItems: ['Masa Üstü Dekorasyonları'],
  },
]
