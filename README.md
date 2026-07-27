# Etiket Tasarımcı — Windows EXE

120 × 80 mm Argox etiket tasarlama ve yazdırma uygulaması.

Bu depo, bilgisayara Node.js kurmadan **GitHub Actions** üzerinden iki Windows çıktısı üretir:

- `Etiket Tasarımcı-Taşınabilir-1.0.0-x64.exe`
- `Etiket Tasarımcı-Kurulum-1.0.0-x64.exe`

## Çevrim içi EXE oluşturma

1. GitHub'da yeni ve boş bir depo oluşturun.
2. Bu ZIP'i bilgisayarınızda klasöre çıkarın.
3. Çıkan klasörün **içindeki bütün dosya ve klasörleri** GitHub deposuna yükleyin.
   - `.github` klasörünün de yüklendiğinden emin olun.
   - ZIP dosyasını tek başına yüklemeyin.
4. GitHub'da deponun **Actions** sekmesini açın.
5. Solda **Windows EXE Oluştur** iş akışını seçin.
6. **Run workflow** → tekrar **Run workflow** düğmesine basın.
7. İşlem yeşil tik ile tamamlanınca çalıştırma kaydını açın.
8. Sayfanın altındaki **Artifacts** bölümünden `Etiket-Tasarimci-Windows-EXE` paketini indirin.
9. İndirilen ZIP'in içinde taşınabilir ve kurulumlu EXE bulunur.

## Sonraki arayüz güncellemeleri

Yeni HTML sürümünü `app/index.html` dosyasının yerine yükleyin. GitHub Actions otomatik çalışır ve güncel EXE'yi yeniden üretir.

## Windows uyarısı

Uygulama ticari kod imzası taşımadığı için Windows SmartScreen ilk açılışta uyarı gösterebilir. Dosyanın kendi GitHub derlemenizden geldiğini doğruladıktan sonra **Daha fazla bilgi → Yine de çalıştır** seçeneği kullanılabilir.
