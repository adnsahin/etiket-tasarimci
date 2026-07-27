ETİKET TASARIMCI — WINDOWS MASAÜSTÜ UYGULAMASI
================================================

BU KLASÖR NE İÇERİYOR?
- app/index.html: Son etiket tasarım arayüzü
- EXE_OLUSTUR.bat: Taşınabilir EXE + kurulum dosyası üretir
- SADECE_TASINABILIR_EXE.bat: Yalnızca kurulumsuz EXE üretir
- UYGULAMAYI_TEST_ET.bat: EXE oluşturmadan Electron içinde çalıştırır
- HIZLI_AC_EDGE.bat: Paket kurulmadan arayüzü uygulama penceresi gibi açar

EXE NASIL OLUŞTURULUR?
1. Windows bilgisayara Node.js LTS kurun.
2. İnternet bağlantısını açın.
3. EXE_OLUSTUR.bat dosyasına çift tıklayın.
4. İlk çalıştırmada Electron paketleri indirilir.
5. İşlem bitince dist klasörü açılır.

OLUŞAN DOSYALAR
- Taşınabilir EXE: Kurulum gerektirmez; USB’den de çalıştırılabilir.
- Kurulum EXE: Masaüstü ve Başlat menüsü kısayolu oluşturabilir.

VERİLER NEREDE SAKLANIR?
Kayıtlı etiket formatları Electron/Chromium yerel uygulama verisinde tutulur.
Uygulamayı kapatıp açınca formatlar korunur. Windows kullanıcısı değişirse kayıtlar da değişir.

YAZDIRMA
Uygulama mevcut HTML baskı sistemini kullanır. Yazdırma penceresinde:
- Kağıt: 120 x 80 mm
- Yön: Yatay
- Ölçek: %100
- Kenar boşluğu: Yok
- Sayfaya sığdır: Kapalı

NOT
Doğrudan, yazdırma penceresini göstermeden Argox yazıcısına çıktı göndermek ayrı bir
yazıcı entegrasyonudur. Bu proje güvenli ve kontrol edilebilir biçimde Windows yazdırma
önizlemesini açar.
