// src/words.js

const wordsList = [
    {
        word: "Araba",
        forbidden: ["Yol", "Sürmek", "Taşıt"]
    },
    {
        word: "Ada",
        forbidden: ["Deniz", "Tatil", "Kumsal"]
    },
    {
        word: "Anahtar",
        forbidden: ["Kapı", "Kilit", "Oda"]
    },
    {
        word: "Aslan",
        forbidden: ["Vahşi", "Orman", "Av"]
    },
    {
        word: "Ay",
        forbidden: ["Gökyüzü", "Gece", "Yıldız"]
    },
    {
        word: "At",
        forbidden: ["Yarış", "Binmek", "Bozkır"]
    },
    {
        word: "Ayna",
        forbidden: ["Yansıma", "Görmek", "Yüz"]
    },
    {
        word: "Ayakkabı",
        forbidden: ["Ayak", "Giymek", "Koşmak"]
    },
    {
        word: "Ayçiçeği",
        forbidden: ["Çiçek", "Tohum", "Güneş"]
    },
    {
        word: "Akşam",
        forbidden: ["Günbatımı", "Gece", "Yemek"]
    },
    {
        word: "Av",
        forbidden: ["Vahşi", "Silah", "Orman"]
    },
    {
        word: "Akvaryum",
        forbidden: ["Balık", "Su", "Cam"]
    },
    {
        word: "Armut",
        forbidden: ["Meyve", "Ağaç", "Dal"]
    },
    {
        word: "Arı",
        forbidden: ["Bal", "Çiçek", "Kovan"]
    },
    {
        word: "Anaokulu",
        forbidden: ["Okul", "Çocuk", "Eğitim"]
    },
    {
        word: "Ahşap",
        forbidden: ["Ağaç", "Mobilya", "Doğal"]
    },
    {
        word: "Aile",
        forbidden: ["Anne", "Baba", "Kardeş"]
    },
    {
        word: "Arka",
        forbidden: ["Ön", "Geri", "Yön"]
    },
    {
        word: "Ayı",
        forbidden: ["Kış", "Orman", "Bal"]
    },
    {
        word: "Anayasa",
        forbidden: ["Kanun", "Ülke", "Hükümet"]
    },
    {
        word: "Balık",
        forbidden: ["Deniz", "Suda", "Yüzgeç"]
    },
    {
        word: "Bisiklet",
        forbidden: ["Tekerlek", "Pedal", "Sürmek"]
    },
    {
        word: "Bakmak",
        forbidden: ["Göz", "İzlemek", "İz"]
    },
    {
        word: "Başlık",
        forbidden: ["Baş", "Başlık", "Kafa"]
    },
    {
        word: "Bardak",
        forbidden: ["Su", "İçmek", "Çay"]
    },
    {
        word: "Bilgisayar",
        forbidden: ["Ekran", "Klavye", "Mouse"]
    },
    {
        word: "Bahçe",
        forbidden: ["Çiçek", "Toprak", "Ağaç"]
    },
    {
        word: "Bahar",
        forbidden: ["Mevsim", "Çiçek", "Ağaç"]
    },
    {
        word: "Buz",
        forbidden: ["Soğuk", "Su", "Erimek"]
    },
    {
        word: "Bulut",
        forbidden: ["Gökyüzü", "Yağmur", "Beyaz"]
    },
    {
        word: "Beyaz",
        forbidden: ["Renk", "Siyah", "Gökyüzü"]
    },
    {
        word: "Böcek",
        forbidden: ["Küçük", "Kanat", "Hayvan"]
    },
    {
        word: "Bilgi",
        forbidden: ["Öğrenmek", "Bilgi", "Bilgisayar"]
    },
    {
        word: "Başlangıç",
        forbidden: ["Baş", "İlk", "Son"]
    },
    {
        word: "Boğaz",
        forbidden: ["Su", "Geçmek", "Köprü"]
    },
    {
        word: "Bacak",
        forbidden: ["Ayak", "Koşmak", "Yürümek"]
    },
    {
        word: "Büyük",
        forbidden: ["Küçük", "Boyut", "Geniş"]
    },
    {
        word: "Başkan",
        forbidden: ["Ülke", "Devlet", "Hükümet"]
    },
    {
        word: "Başarılı",
        forbidden: ["Başarı", "Başarmak", "Başlangıç"]
    },
    {
        word: "Bahane",
        forbidden: ["Özür", "Söylemek", "İstemek"]
    },
    {
        word: "Çocuk",
        forbidden: ["Çocukluk", "Oyun", "Okul"]
    },
    {
        word: "Çiçek",
        forbidden: ["Bahar", "Renk", "Toprak"]
    },
    {
        word: "Cevap",
        forbidden: ["Soru", "Doğru", "Yanlış"]
    },
    {
        word: "Cam",
        forbidden: ["Pencere", "Bardak", "Kırılmak"]
    },
    {
        word: "Cüzdan",
        forbidden: ["Para", "Kâğıt", "Cep"]
    },
    {
        word: "Ceviz",
        forbidden: ["Ağaç", "Meyve", "Kabuk"]
    },
    {
        word: "Cami",
        forbidden: ["Müslüman", "İbadet", "Namaz"]
    },
    {
        word: "Çatal",
        forbidden: ["Kaşık", "Yemek", "Tabak"]
    },
    {
        word: "Çanta",
        forbidden: ["Omuz", "Taşımak", "Deri"]
    },
    {
        word: "Cadde",
        forbidden: ["Sokak", "Araç", "Yol"]
    },
    {
        word: "Çalışmak",
        forbidden: ["İş", "Emek", "Çaba"]
    },
    {
        word: "Çay",
        forbidden: ["Bardak", "İçmek", "Çaydanlık"]
    },
    {
        word: "Çorap",
        forbidden: ["Ayak", "Giyim", "Kış"]
    },
    {
        word: "Çatı",
        forbidden: ["Ev", "Üst", "Çatlamak"]
    },
    {
        word: "Çayır",
        forbidden: ["Yeşil", "Ot", "Doğa"]
    },
    {
        word: "Çikolata",
        forbidden: ["Tatlı", "Kakao", "Kırılmak"]
    },
    {
        word: "Cenaze",
        forbidden: ["Ölü", "Defin", "Mezarlık"]
    },
    {
        word: "Cüz",
        forbidden: ["Kur'an", "Kitap", "Sayfa"]
    },
    {
        word: "Cinsiyet",
        forbidden: ["Erkek", "Dişi", "Hayvan"]
    },
    {
        word: "Ceza",
        forbidden: ["Suç", "Mahkeme", "Hapis"]
    },
    {
        word: "Deniz",
        forbidden: ["Su", "Mavi", "Dalga"]
    },
    {
        word: "Dünya",
        forbidden: ["Gezegen", "Gökyüzü", "Güneş"]
    },
    {
        word: "Dil",
        forbidden: ["Konuşmak", "Ana", "Sözcük"]
    },
    {
        word: "Doktor",
        forbidden: ["Hastane", "Sağlık", "Tedavi"]
    },
    {
        word: "Daire",
        forbidden: ["Ev", "Oda", "Köşe"]
    },
    {
        word: "Düşünmek",
        forbidden: ["Fikir", "Zihin", "Plan"]
    },
    {
        word: "Düşmek",
        forbidden: ["Yüksek", "Kalkmak", "Zemin"]
    },
    {
        word: "Duman",
        forbidden: ["Ateş", "Yangın", "İz"]
    },
    {
        word: "Dağ",
        forbidden: ["Yüksek", "Doğa", "Zirve"]
    },
    {
        word: "Dalga",
        forbidden: ["Deniz", "Su", "Kum"]
    },
    {
        word: "Dövmek",
        forbidden: ["Yumruk", "Vurmak", "Kavga"]
    },
    {
        word: "Diyet",
        forbidden: ["Sağlık", "Kilo", "Yemek"]
    },
    {
        word: "Dinlemek",
        forbidden: ["Ses", "Kulak", "Konuşmak"]
    },
    {
        word: "Düşman",
        forbidden: ["Savaş", "Rakip", "Barış"]
    },
    {
        word: "Düşünce",
        forbidden: ["Fikir", "Zihin", "Düşünmek"]
    },
    {
        word: "Düğün",
        forbidden: ["Evlenmek", "Gelin", "Nikah"]
    },
    {
        word: "Dönmek",
        forbidden: ["Döngü", "Yol", "Tur"]
    },
    {
        word: "Dergi",
        forbidden: ["Yazı", "Sayfa", "Basım"]
    },
    {
        word: "Doğru",
        forbidden: ["Yanlış", "Doğruluk", "Hakikat"]
    },
    {
        word: "Dilim",
        forbidden: ["Meyve", "Tatlı", "Kesmek"]
    },
    {
        word: "Elma",
        forbidden: ["Meyve", "Kırmızı", "Ağaç"]
    },
    {
        word: "Ev",
        forbidden: ["Yerleşim", "Konut", "Oda"]
    },
    {
        word: "Ekmek",
        forbidden: ["Un", "Fırın", "Yemek"]
    },
    {
        word: "El",
        forbidden: ["Parmak", "Kol", "Avuç"]
    },
    {
        word: "Eğitim",
        forbidden: ["Öğrenmek", "Okul", "Ders"]
    },
    {
        word: "Eski",
        forbidden: ["Yeni", "Geçmiş", "Zaman"]
    },
    {
        word: "Et",
        forbidden: ["Hayvan", "Yemek", "Protein"]
    },
    {
        word: "Eşya",
        forbidden: ["Nesne", "Malzeme", "Eş"]
    },
    {
        word: "Engel",
        forbidden: ["Yol", "Önlem", "Kısıtlama"]
    },
    {
        word: "Ejderha",
        forbidden: ["Efsane", "Canavar", "Uzun"]
    },
    {
        word: "Elbise",
        forbidden: ["Giyim", "Kumaş", "Moda"]
    },
    {
        word: "Evlenmek",
        forbidden: ["Nikah", "Evlilik", "Çift"]
    },
    {
        word: "Ekip",
        forbidden: ["Takım", "Grup", "İşbirliği"]
    },
    {
        word: "Ekran",
        forbidden: ["Bilgisayar", "Görüntü", "Monitör"]
    },
    {
        word: "Efsane",
        forbidden: ["Hikaye", "Mitoloji", "Gerçek"]
    },
    {
        word: "Elçi",
        forbidden: ["Temsilci", "Diplomat", "Ülke"]
    },
    {
        word: "Eğlence",
        forbidden: ["Eğlenmek", "Keyif", "Oyun"]
    },
    {
        word: "Elektrik",
        forbidden: ["Enerji", "Kablo", "Akım"]
    },
    {
        word: "Erkek",
        forbidden: ["Kadın", "Cinsiyet", "Adam"]
    },
    {
        word: "Emek",
        forbidden: ["Çalışma", "Zahmet", "Üretim"]
    },
    {
        word: "Futbol",
        forbidden: ["Top", "Oyun", "Saha"]
    },
    {
        word: "Fırsat",
        forbidden: ["Şans", "İmkan", "Zaman"]
    },
    {
        word: "Fırın",
        forbidden: ["Ekmek", "Pişirmek", "Isı"]
    },
    {
        word: "Fil",
        forbidden: ["Hayvan", "Asya", "Büyük"]
    },
    {
        word: "Fotoğraf",
        forbidden: ["Resim", "Kamera", "Anı"]
    },
    {
        word: "Festival",
        forbidden: ["Etkinlik", "Kültür", "Eğlence"]
    },
    {
        word: "Fasulye",
        forbidden: ["Sebze", "Yeşil", "Kuru"]
    },
    {
        word: "Fener",
        forbidden: ["Deniz", "Işık", "Yol"]
    },
    {
        word: "Fırça",
        forbidden: ["Boya", "Resim", "Tuval"]
    },
    {
        word: "Fırtına",
        forbidden: ["Rüzgar", "Kasırga", "Doğa"]
    },
    {
        word: "Felsefe",
        forbidden: ["Düşünce", "Fikir", "Felsefeci"]
    },
    {
        word: "Fırat",
        forbidden: ["Nehir", "Doğu", "Su"]
    },
    {
        word: "Fizik",
        forbidden: ["Bilim", "Madde", "Enerji"]
    },
    {
        word: "Fatura",
        forbidden: ["Ödeme", "Fiyat", "Faturalı"]
    },
    {
        word: "Fikir",
        forbidden: ["Düşünce", "Felsefe", "Fikirler"]
    },
    {
        word: "Fincan",
        forbidden: ["Kahve", "Çay", "Bardak"]
    },
    {
        word: "Fark",
        forbidden: ["Ayrım", "Farklı", "Benzer"]
    },
    {
        word: "Fıçı",
        forbidden: ["Ahşap", "Sıvı", "Depo"]
    },
    {
        word: "Ferman",
        forbidden: ["Buyruk", "Padişah", "Devlet"]
    },
    {
        word: "Fırlatmak",
        forbidden: ["Atmak", "Uzak", "Hızlı"]
    },
    {
        word: "Gökyüzü",
        forbidden: ["Mavi", "Bulut", "Uzay"]
    },
    {
        word: "Güneş",
        forbidden: ["Yıldız", "Sıcak", "Enerji"]
    },
    {
        word: "Göz",
        forbidden: ["Bakmak", "Gözlük", "Işık"]
    },
    {
        word: "Gel",
        forbidden: ["Git", "Gelmek", "Hareket"]
    },
    {
        word: "Gitar",
        forbidden: ["Müzik", "Tel", "Çalmak"]
    },
    {
        word: "Gül",
        forbidden: ["Çiçek", "Koku", "Bahçe"]
    },
    {
        word: "Gemi",
        forbidden: ["Deniz", "Taşıt", "Yolcu"]
    },
    {
        word: "Göl",
        forbidden: ["Su", "Doğa", "Balık"]
    },
    {
        word: "Gıda",
        forbidden: ["Besin", "Yemek", "Sağlık"]
    },
    {
        word: "Görev",
        forbidden: ["Görevli", "Sorumluluk", "Gözetim"]
    },
    {
        word: "Görünmek",
        forbidden: ["Göz", "Görmek", "Bakmak"]
    },
    {
        word: "Gizli",
        forbidden: ["Saklamak", "Gizem", "Bilinmeyen"]
    },
    {
        word: "Giyinmek",
        forbidden: ["Kıyafet", "Üst", "Moda"]
    },
    {
        word: "Gün",
        forbidden: ["Ay", "Gece", "Saat"]
    },
    {
        word: "Görevli",
        forbidden: ["Görev", "Sorumluluk", "Gözetim"]
    },
    {
        word: "Gözlük",
        forbidden: ["Göz", "Lens", "Görmek"]
    },
    {
        word: "Gürültü",
        forbidden: ["Ses", "Yüksek", "Rahatsızlık"]
    },
    {
        word: "Gökyüzü",
        forbidden: ["Mavi", "Bulut", "Uzay"]
    },
    {
        word: "Gizem",
        forbidden: ["Bilinmeyen", "Saklamak", "Gizli"]
    },
    {
        word: "Gazete",
        forbidden: ["Haber", "Basın", "Yazı"]
    },
    {
        word: "Hava",
        forbidden: ["Hava Durumu", "Gökyüzü", "Nefes"]
    },
    {
        word: "Hayat",
        forbidden: ["Yaşam", "Ömür", "İnsan"]
    },
    {
        word: "Hızlı",
        forbidden: ["Hız", "Yavaş", "Hızlanmak"]
    },
    {
        word: "Hediye",
        forbidden: ["Hediye Verme", "Kutlama", "Almak"]
    },
    {
        word: "Hasta",
        forbidden: ["Hastalık", "Sağlık", "Doktor"]
    },
    {
        word: "Hamburger",
        forbidden: ["Fast Food", "Et", "Ekmek"]
    },
    {
        word: "Havlu",
        forbidden: ["Banyo", "Kurutmak", "Kumaş"]
    },
    {
        word: "Hasta",
        forbidden: ["Hastalık", "Sağlık", "Doktor"]
    },
    {
        word: "Havaalanı",
        forbidden: ["Uçak", "Yolcu", "Hava"]
    },
    {
        word: "Hak",
        forbidden: ["Adalet", "Haklı", "Haksız"]
    },
    {
        word: "Harita",
        forbidden: ["Yol", "Şehir", "Ülke"]
    },
    {
        word: "Hırsız",
        forbidden: ["Çalmak", "Suç", "Hapse"]
    },
    {
        word: "Hastane",
        forbidden: ["Doktor", "Hasta", "Sağlık"]
    },
    {
        word: "Hız",
        forbidden: ["Hızlı", "Yavaş", "Hızlanmak"]
    },
    {
        word: "Hayvan",
        forbidden: ["Köpek", "Kedi", "Doğa"]
    },
    {
        word: "Hareket",
        forbidden: ["Koşmak", "Yürümek", "Dans"]
    },
    {
        word: "Haber",
        forbidden: ["Gazete", "Televizyon", "Radyo"]
    },
    {
        word: "Hücre",
        forbidden: ["Hapishane", "Hücre", "Hapis"]
    },
    {
        word: "Heykel",
        forbidden: ["Sanat", "Taş", "Heykeltıraş"]
    },
    {
        word: "Hastalık",
        forbidden: ["Hasta", "Sağlık", "Doktor"]
    },
    {
        word: "İstanbul",
        forbidden: ["Şehir", "Boğaziçi", "Tarih"]
    },
    {
        word: "İş",
        forbidden: ["Çalışma", "Meslek", "Görev"]
    },
    {
        word: "İnsan",
        forbidden: ["İnsanlık", "Birey", "Toplum"]
    },
    {
        word: "İyi",
        forbidden: ["Kötü", "Başarılı", "Hoş"]
    },
    {
        word: "İmza",
        forbidden: ["Kağıt", "Belge", "İmzalamak"]
    },
    {
        word: "İstek",
        forbidden: ["Dilemek", "Arzu", "Talep"]
    },
    {
        word: "İnek",
        forbidden: ["Hayvan", "Süt", "Çiftlik"]
    },
    {
        word: "İşlem",
        forbidden: ["İşlemek", "Hesap", "Bilgisayar"]
    },
    {
        word: "İşçi",
        forbidden: ["Çalışan", "Fabrika", "Emek"]
    },
    {
        word: "İşitme",
        forbidden: ["Duygu", "Ses", "Kulak"]
    },
    {
        word: "İz",
        forbidden: ["İzlemek", "Ayak", "Takip"]
    },
    {
        word: "İç",
        forbidden: ["Dış", "İçmek", "Yemek"]
    },
    {
        word: "İçki",
        forbidden: ["Alkol", "Bira", "Şarap"]
    },
    {
        word: "İstanbul",
        forbidden: ["Şehir", "Boğaziçi", "Tarih"]
    },
    {
        word: "İlaç",
        forbidden: ["Tedavi", "Hastalık", "Reçete"]
    },
    {
        word: "İyileşmek",
        forbidden: ["Sağlık", "Hastalık", "Tedavi"]
    },
    {
        word: "İhtiyaç",
        forbidden: ["Gereksinim", "Talep", "İstemek"]
    },
    {
        word: "İfade",
        forbidden: ["Söylemek", "Anlatmak", "Konuşmak"]
    },
    {
        word: "İdare",
        forbidden: ["Yönetim", "Kurum", "Devlet"]
    },

    {
        word: "Kedi",
        forbidden: ["Hayvan", "Ev", "Pamuk"]
    },
    {
        word: "Kalem",
        forbidden: ["Yazmak", "Kâğıt", "Kurşun"]
    },
    {
        word: "Kitap",
        forbidden: ["Okuma", "Yazar", "Sayfa"]
    },
    {
        word: "Kış",
        forbidden: ["Mevsim", "Soğuk", "Kar"]
    },
    {
        word: "Kahve",
        forbidden: ["İçecek", "Fincan", "Sıcak"]
    },
    {
        word: "Kapı",
        forbidden: ["Eşik", "Oda", "Giriş"]
    },
    {
        word: "Kan",
        forbidden: ["Kırmızı", "Vücut", "Hastalık"]
    },
    {
        word: "Korku",
        forbidden: ["Korkmak", "Heyecan", "Film"]
    },
    {
        word: "Kuş",
        forbidden: ["Kanat", "Uçmak", "Ötüş"]
    },
    {
        word: "Kum",
        forbidden: ["Deniz", "Plaj", "Sahil"]
    },
    {
        word: "Kasaba",
        forbidden: ["Köy", "Şehir", "Nüfus"]
    },
    {
        word: "Kurabiye",
        forbidden: ["Tatlı", "Fırın", "Hamur"]
    },
    {
        word: "Kart",
        forbidden: ["Oyun", "Banka", "Plastik"]
    },
    {
        word: "Kapalı",
        forbidden: ["Açık", "Kapı", "Kutu"]
    },
    {
        word: "Kurşun",
        forbidden: ["Metal", "Kalem", "Atış"]
    },
    {
        word: "Kutu",
        forbidden: ["Kutlama", "Ambalaj", "Kap"]
    },
    {
        word: "Köpek",
        forbidden: ["Hayvan", "Havlamak", "Ev"]
    },
    {
        word: "Kemik",
        forbidden: ["Vücut", "Yapı", "İskelet"]
    },
    {
        word: "Koku",
        forbidden: ["Koklamak", "Parfüm", "Güzel"]
    },
    {
        word: "Kültür",
        forbidden: ["Sanat", "Toplum", "Eğitim"]
    },
    {
        word: "Lamba",
        forbidden: ["Işık", "Oda", "Aydınlatma"]
    },
    {
        word: "Lale",
        forbidden: ["Çiçek", "Bahar", "Soğan"]
    },
    {
        word: "Limon",
        forbidden: ["Meyve", "Sarı", "Asit"]
    },
    {
        word: "Lise",
        forbidden: ["Okul", "Öğrenci", "Eğitim"]
    },
    {
        word: "Lezzet",
        forbidden: ["Tat", "Yemek", "Damak"]
    },
    {
        word: "Lokanta",
        forbidden: ["Restoran", "Yemek", "Masa"]
    },
    {
        word: "Lazer",
        forbidden: ["Işın", "Teknoloji", "Gösteri"]
    },
    {
        word: "Lavanta",
        forbidden: ["Çiçek", "Mor", "Bahçe"]
    },
    {
        word: "Limonata",
        forbidden: ["İçecek", "Limon", "Şeker"]
    },
    {
        word: "Lider",
        forbidden: ["Başkan", "Grup", "Yönetim"]
    },
    {
        word: "Laptop",
        forbidden: ["Bilgisayar", "Taşınabilir", "Ekran"]
    },
    {
        word: "Lale",
        forbidden: ["Çiçek", "Bahar", "Soğan"]
    },
    {
        word: "Lazer",
        forbidden: ["Işın", "Teknoloji", "Gösteri"]
    },
    {
        word: "Lezzet",
        forbidden: ["Tat", "Yemek", "Damak"]
    },
    {
        word: "Liman",
        forbidden: ["Deniz", "Gemi", "Yükleme"]
    },
    {
        word: "Lohusa",
        forbidden: ["Doğum", "Anne", "Bebe"]
    },
    {
        word: "Lisans",
        forbidden: ["Diploma", "Üniversite", "Mezun"]
    },
    {
        word: "Lojistik",
        forbidden: ["Taşıma", "Depo", "Yönetim"]
    },
    {
        word: "Limon",
        forbidden: ["Meyve", "Sarı", "Asit"]
    },
    {
        word: "Liderlik",
        forbidden: ["Yönetim", "Grup", "Başkan"]
    },
    {
        word: "Masa",
        forbidden: ["Sandalye", "Yemek", "Ahşap"]
    },
    {
        word: "Meyve",
        forbidden: ["Elma", "Portakal", "Sebze"]
    },
    {
        word: "Müzik",
        forbidden: ["Nota", "Enstrüman", "Dinlemek"]
    },
    {
        word: "Martı",
        forbidden: ["Kuş", "Deniz", "Uçmak"]
    },
    {
        word: "Meyhane",
        forbidden: ["Lokanta", "Alkol", "Eğlence"]
    },
    {
        word: "Makine",
        forbidden: ["Motor", "Üretim", "Endüstri"]
    },
    {
        word: "Mantık",
        forbidden: ["Akıl", "Düşünce", "Çıkarım"]
    },
    {
        word: "Masa",
        forbidden: ["Sandalye", "Yemek", "Ahşap"]
    },
    {
        word: "Meydan",
        forbidden: ["Alan", "Savaş", "Toplantı"]
    },
    {
        word: "Mücadele",
        forbidden: ["Savaş", "Direnç", "Karşı"]
    },
    {
        word: "Müze",
        forbidden: ["Sanat", "Tarih", "Sergi"]
    },
    {
        word: "Makro",
        forbidden: ["Bilgisayar", "Kod", "Programlama"]
    },
    {
        word: "Muhallebi",
        forbidden: ["Tatlı", "Süt", "Puding"]
    },
    {
        word: "Manzara",
        forbidden: ["Doğa", "Görüntü", "Manzara"]
    },
    {
        word: "Mektup",
        forbidden: ["Posta", "Yazı", "Mektup"]
    },
    {
        word: "Mavi",
        forbidden: ["Renk", "Gökyüzü", "Deniz"]
    },
    {
        word: "Mucize",
        forbidden: ["Olağanüstü", "İnanılmaz", "Doğaüstü"]
    },
    {
        word: "Motor",
        forbidden: ["Araba", "Taşıt", "Hız"]
    },
    {
        word: "Makro",
        forbidden: ["Bilgisayar", "Kod", "Programlama"]
    },
    {
        word: "Meydan",
        forbidden: ["Alan", "Savaş", "Toplantı"]
    },
    {
        word: "Nefes",
        forbidden: ["Solunum", "Hava", "Akciğer"]
    },
    {
        word: "Nasıl",
        forbidden: ["Soru", "Yol", "İfadeler"]
    },
    {
        word: "Nokta",
        forbidden: ["Son", "İşaret", "Yer"]
    },
    {
        word: "Neden",
        forbidden: ["Soru", "Sebep", "Neden Olur"]
    },
    {
        word: "Nakit",
        forbidden: ["Para", "El", "Kasa"]
    },
    {
        word: "Nar",
        forbidden: ["Meyve", "Kırmızı", "Taneler"]
    },
    {
        word: "Namlu",
        forbidden: ["Silah", "Tüfek", "Tabanca"]
    },
    {
        word: "Noktalama",
        forbidden: ["Virgül", "Nokta", "Ünlem"]
    },
    {
        word: "Nehir",
        forbidden: ["Su", "Akış", "Kıyı"]
    },
    {
        word: "Narin",
        forbidden: ["İnce", "Zayıf", "Hassas"]
    },
    {
        word: "Nöbet",
        forbidden: ["Görev", "Vardiya", "Nöbetçi"]
    },
    {
        word: "Nüfus",
        forbidden: ["Kişi", "Ülke", "Sayı"]
    },
    {
        word: "Neşe",
        forbidden: ["Mutluluk", "Sevinç", "Keyif"]
    },
    {
        word: "Nisan",
        forbidden: ["Ay", "Düğün", "Bahar"]
    },
    {
        word: "Narenciye",
        forbidden: ["Meyve", "Portakal", "Limon"]
    },
    {
        word: "Nükleer",
        forbidden: ["Enerji", "Silah", "Reaktör"]
    },
    {
        word: "Nefis",
        forbidden: ["Lezzetli", "Yemek", "Tat"]
    },
    {
        word: "Nevruz",
        forbidden: ["Bahar", "Festival", "Kutlama"]
    },
    {
        word: "Nalbant",
        forbidden: ["At", "Ayak", "Demir"]
    },
    {
        word: "Nöroloji",
        forbidden: ["Beyin", "Sinir", "Hastalık"]
    },
    {
        word: "Orman",
        forbidden: ["Ağaç", "Doğa", "Yeşil"]
    },
    {
        word: "Oyun",
        forbidden: ["Oynamak", "Eğlence", "Çocuk"]
    },
    {
        word: "Okul",
        forbidden: ["Öğrenci", "Sınıf", "Ders"]
    },
    {
        word: "Otobüs",
        forbidden: ["Taşıt", "Şehir", "Yolcu"]
    },
    {
        word: "Oda",
        forbidden: ["Yatak", "Mobilya", "Ev"]
    },
    {
        word: "Orkestra",
        forbidden: ["Müzik", "Enstrüman", "Konser"]
    },
    {
        word: "Operasyon",
        forbidden: ["Cerrah", "Hastane", "Ameliyat"]
    },
    {
        word: "Otoban",
        forbidden: ["Yol", "Araba", "Hızlı"]
    },
    {
        word: "Okyanus",
        forbidden: ["Deniz", "Su", "Dalış"]
    },
    {
        word: "Oyun",
        forbidden: ["Oynamak", "Eğlence", "Çocuk"]
    },
    {
        word: "Otel",
        forbidden: ["Konaklama", "Turist", "Yatak"]
    },
    {
        word: "Otomobil",
        forbidden: ["Araba", "Taşıt", "Motor"]
    },
    {
        word: "Ordu",
        forbidden: ["Asker", "Savaş", "Ülke"]
    },
    {
        word: "Olimpiyat",
        forbidden: ["Spor", "Oyun", "Madalya"]
    },
    {
        word: "Oda",
        forbidden: ["Yatak", "Mobilya", "Ev"]
    },
    {
        word: "Oyun",
        forbidden: ["Oynamak", "Eğlence", "Çocuk"]
    },
    {
        word: "Opera",
        forbidden: ["Müzik", "Sahne", "Şarkı"]
    },
    {
        word: "Orman",
        forbidden: ["Ağaç", "Doğa", "Yeşil"]
    },
    {
        word: "Otlak",
        forbidden: ["Hayvan", "Yem", "Doğa"]
    },
    {
        word: "Oksijen",
        forbidden: ["Solunum", "Hava", "Gaz"]
    },
    {
        word: "Ördek",
        forbidden: ["Kuş", "Gölet", "Su"]
    },
    {
        word: "Öğrenci",
        forbidden: ["Okul", "Ders", "Sınıf"]
    },
    {
        word: "Öğretmen",
        forbidden: ["Ders", "Okul", "Sınıf"]
    },
    {
        word: "Özgürlük",
        forbidden: ["Bağımsızlık", "Hürriyet", "Serbest"]
    },
    {
        word: "Ödev",
        forbidden: ["Okul", "Ders", "Çalışma"]
    },
    {
        word: "Ölçek",
        forbidden: ["Harita", "Büyüklük", "Boyut"]
    },
    {
        word: "Öksürük",
        forbidden: ["Hasta", "Boğaz", "Soğuk"]
    },
    {
        word: "Örümcek",
        forbidden: ["Ağ", "Sekiz", "Böcek"]
    },
    {
        word: "Önyargı",
        forbidden: ["Düşünce", "Karar", "Önceden"]
    },
    {
        word: "Özür",
        forbidden: ["Af", "Hata", "Kusur"]
    },
    {
        word: "Örnek",
        forbidden: ["Model", "Numune", "Temsil"]
    },
    {
        word: "Öykü",
        forbidden: ["Hikaye", "Anlatı", "Yazı"]
    },
    {
        word: "Özgüven",
        forbidden: ["Kendine", "İnanmak", "Başarı"]
    },
    {
        word: "Ömür",
        forbidden: ["Hayat", "Yaşam", "Ölüm"]
    },
    {
        word: "Önlem",
        forbidden: ["Tedbir", "Koruma", "Güvenlik"]
    },
    {
        word: "Önder",
        forbidden: ["Lider", "Yönetici", "Başkan"]
    },
    {
        word: "Örüş",
        forbidden: ["Örgü", "İplik", "Doku"]
    },
    {
        word: "Özen",
        forbidden: ["Dikkat", "Titizlik", "İlgi"]
    },
    {
        word: "Ödül",
        forbidden: ["Başarı", "Madalya", "Kazanç"]
    },
    {
        word: "Özet",
        forbidden: ["Kısa", "Önemli", "Detay"]
    },
    {
        word: "Patates",
        forbidden: ["Sebze", "Kızartma", "Yemek"]
    },
    {
        word: "Pasta",
        forbidden: ["Tatlı", "Doğum Günü", "Krema"]
    },
    {
        word: "Palto",
        forbidden: ["Kaban", "Kış", "Giysi"]
    },
    {
        word: "Papatya",
        forbidden: ["Çiçek", "Beyaz", "Sarı"]
    },
    {
        word: "Para",
        forbidden: ["Kâğıt", "Nakit", "Değer"]
    },
    {
        word: "Palmiye",
        forbidden: ["Ağaç", "Tropik", "Yaprak"]
    },
    {
        word: "Piknik",
        forbidden: ["Doğa", "Yemek", "Açık Hava"]
    },
    {
        word: "Pilav",
        forbidden: ["Yemek", "Pirinç", "Yanında"]
    },
    {
        word: "Palet",
        forbidden: ["Yüzmek", "Ayak", "Dalmak"]
    },
    {
        word: "Piyano",
        forbidden: ["Müzik", "Tuş", "Enstrüman"]
    },
    {
        word: "Porselen",
        forbidden: ["Tabak", "Kırılmak", "Çini"]
    },
    {
        word: "Puset",
        forbidden: ["Bebek", "Arabası", "Taşıma"]
    },
    {
        word: "Palyaço",
        forbidden: ["Sirk", "Komik", "Kostüm"]
    },
    {
        word: "Portakal",
        forbidden: ["Meyve", "Turuncu", "Vitamin"]
    },
    {
        word: "Plaj",
        forbidden: ["Deniz", "Kum", "Güneş"]
    },
    {
        word: "Peynir",
        forbidden: ["Süt", "Kahvaltı", "Beyaz"]
    },
    {
        word: "Perde",
        forbidden: ["Pencere", "Kumaş", "Gölge"]
    },
    {
        word: "Posta",
        forbidden: ["Mektup", "Göndermek", "Zarf"]
    },
    {
        word: "Pipo",
        forbidden: ["Tütün", "İçmek", "Sigara"]
    },
    {
        word: "Pazar",
        forbidden: ["Alışveriş", "Meyve", "Sebze"]
    },
    {
        word: "Radyo",
        forbidden: ["Müzik", "Dinlemek", "Frekans"]
    },
    {
        word: "Raf",
        forbidden: ["Kitap", "Dolap", "Yüksek"]
    },
    {
        word: "Raket",
        forbidden: ["Tenis", "Spor", "Top"]
    },
    {
        word: "Renk",
        forbidden: ["Mavi", "Kırmızı", "Yeşil"]
    },
    {
        word: "Rende",
        forbidden: ["Mutfak", "Alet", "Sebze"]
    },
    {
        word: "Resim",
        forbidden: ["Çizim", "Sanat", "Tablo"]
    },
    {
        word: "Reçel",
        forbidden: ["Kahvaltı", "Tatlı", "Meyve"]
    },
    {
        word: "Ritim",
        forbidden: ["Müzik", "Dans", "Tempo"]
    },
    {
        word: "Roket",
        forbidden: ["Uzay", "Fırlatma", "NASA"]
    },
    {
        word: "Ruh",
        forbidden: ["Beden", "Can", "Ölüm"]
    },
    {
        word: "Roman",
        forbidden: ["Kitap", "Yazar", "Hikaye"]
    },
    {
        word: "Rozet",
        forbidden: ["Takmak", "Madalyon", "Başarı"]
    },
    {
        word: "Reklam",
        forbidden: ["Tanıtım", "Televizyon", "Ürün"]
    },
    {
        word: "Rüzgar",
        forbidden: ["Esinti", "Hava", "Fırtına"]
    },
    {
        word: "Reçete",
        forbidden: ["Doktor", "İlaç", "Hastane"]
    },
    {
        word: "Ranza",
        forbidden: ["Yatak", "Üst", "Alt"]
    },
    {
        word: "Reyon",
        forbidden: ["Mağaza", "Bölüm", "Ürün"]
    },
    {
        word: "Ruhsat",
        forbidden: ["İzin", "Belge", "Araç"]
    },
    {
        word: "Randevu",
        forbidden: ["Buluşma", "Zaman", "Tarih"]
    },
    {
        word: "Ray",
        forbidden: ["Tren", "Demir", "Yol"]
    },
    {
        word: "Sabun",
        forbidden: ["Temizlik", "Köpük", "Banyo"]
    },
    {
        word: "Saç",
        forbidden: ["Baş", "Kıl", "Şampuan"]
    },
    {
        word: "Sandalye",
        forbidden: ["Oturmak", "Masa", "Mobilya"]
    },
    {
        word: "Sanat",
        forbidden: ["Resim", "Heykel", "Müzik"]
    },
    {
        word: "Sarılmak",
        forbidden: ["Kucaklamak", "Sevgi", "Yakın"]
    },
    {
        word: "Sarı",
        forbidden: ["Renk", "Güneş", "Sıcak"]
    },
    {
        word: "Savaş",
        forbidden: ["Asker", "Çatışma", "Barış"]
    },
    {
        word: "Sebze",
        forbidden: ["Meyve", "Yemek", "Tarla"]
    },
    {
        word: "Ses",
        forbidden: ["Duyma", "Kulak", "Müzik"]
    },
    {
        word: "Sıcak",
        forbidden: ["Soğuk", "Mevsim", "Yaz"]
    },
    {
        word: "Sigara",
        forbidden: ["Duman", "Nikotin", "İçmek"]
    },
    {
        word: "Silgi",
        forbidden: ["Kalem", "Yazı", "Kağıt"]
    },
    {
        word: "Sinema",
        forbidden: ["Film", "Ekran", "İzlemek"]
    },
    {
        word: "Simit",
        forbidden: ["Çay", "Yemek", "Peynir"]
    },
    {
        word: "Sınıf",
        forbidden: ["Okul", "Öğrenci", "Ders"]
    },
    {
        word: "Spor",
        forbidden: ["Egzersiz", "Futbol", "Basketbol"]
    },
    {
        word: "Su",
        forbidden: ["İçmek", "Sıvı", "Deniz"]
    },
    {
        word: "Süt",
        forbidden: ["Beyaz", "İçmek", "İnek"]
    },
    {
        word: "Şeker",
        forbidden: ["Tatlı", "Yemek", "Çay"]
    },
    {
        word: "Şapka",
        forbidden: ["Kafa", "Güneş", "Giyinmek"]
    },
    {
        word: "Şemsiye",
        forbidden: ["Yağmur", "Koruma", "Açmak"]
    },
    {
        word: "Şarkı",
        forbidden: ["Müzik", "Söz", "Melodi"]
    },
    {
        word: "Şeker",
        forbidden: ["Tatlı", "Yemek", "Çay"]
    },
    {
        word: "Şapka",
        forbidden: ["Kafa", "Güneş", "Giyinmek"]
    },
    {
        word: "Şehir",
        forbidden: ["Kasaba", "Büyük", "Yerleşim"]
    },
    {
        word: "Şişe",
        forbidden: ["Su", "Cam", "Kap"]
    },
    {
        word: "Şans",
        forbidden: ["Talih", "Kader", "Şanslı"]
    },
    {
        word: "Şömine",
        forbidden: ["Ateş", "Isı", "Odun"]
    },
    {
        word: "Şoför",
        forbidden: ["Araba", "Sürmek", "Taşıt"]
    },
    {
        word: "Şaka",
        forbidden: ["Gülmek", "Komik", "Şakacı"]
    },
    {
        word: "Şelale",
        forbidden: ["Su", "Düşmek", "Doğa"]
    },
    {
        word: "Şirket",
        forbidden: ["İş", "Kurum", "Ticaret"]
    },
    {
        word: "Şaşkın",
        forbidden: ["Hayret", "Şaşırmak", "Şok"]
    },
    {
        word: "Şampiyon",
        forbidden: ["Birinci", "Kazanan", "Yarış"]
    },
    {
        word: "Şekerleme",
        forbidden: ["Tatlı", "Yemek", "Şeker"]
    },
    {
        word: "Şahin",
        forbidden: ["Kuş", "Avcı", "Kanat"]
    },
    {
        word: "Şair",
        forbidden: ["Şiir", "Yazar", "Edebiyat"]
    },
    {
        word: "Şal",
        forbidden: ["Kumaş", "Giyinmek", "Kış"]
    },
    {
        word: "Şampanya",
        forbidden: ["İçki", "Baloncuk", "Kutlama"]
    },
    {
        word: "Şaşı",
        forbidden: ["Göz", "Bakmak", "Görme"]
    },
    {
        word: "Tatlı",
        forbidden: ["Şeker", "Yemek", "Tat"]
    },
    {
        word: "Tavan",
        forbidden: ["Çatı", "Oda", "Yukarı"]
    },
    {
        word: "Tarla",
        forbidden: ["Toprak", "Çiftçi", "Ekin"]
    },
    {
        word: "Takım",
        forbidden: ["Spor", "Grup", "Birlik"]
    },
    {
        word: "Tat",
        forbidden: ["Dil", "Yemek", "Lezzet"]
    },
    {
        word: "Telefon",
        forbidden: ["Aramak", "Konuşmak", "Cep"]
    },
    {
        word: "Tavuk",
        forbidden: ["Kümes", "Hayvan", "Yemek"]
    },
    {
        word: "Televizyon",
        forbidden: ["Ekran", "İzlemek", "Program"]
    },
    {
        word: "Terlik",
        forbidden: ["Ayak", "Ev", "Giyinmek"]
    },
    {
        word: "Tencere",
        forbidden: ["Mutfak", "Yemek", "Kap"]
    },
    {
        word: "Tekerlek",
        forbidden: ["Araba", "Dönmek", "Yol"]
    },
    {
        word: "Tabak",
        forbidden: ["Yemek", "Mutfak", "Kap"]
    },
    {
        word: "Tahta",
        forbidden: ["Ahşap", "Masa", "Sandalye"]
    },
    {
        word: "Tarif",
        forbidden: ["Yemek", "Reçete", "Hazırlamak"]
    },
    {
        word: "Tatil",
        forbidden: ["Dinlenmek", "Seyahat", "Yaz"]
    },
    {
        word: "Tiyatro",
        forbidden: ["Sahne", "Oyun", "Aktör"]
    },
    {
        word: "Tuval",
        forbidden: ["Resim", "Çizim", "Sanat"]
    },
    {
        word: "Taksi",
        forbidden: ["Araba", "Şoför", "Yolcu"]
    },
    {
        word: "Trafik",
        forbidden: ["Araba", "Yol", "Lamba"]
    },
    {
        word: "Tabanca",
        forbidden: ["Silah", "Mermi", "Polis"]
    },
    {
        word: "Uçak",
        forbidden: ["Havaalanı", "Pilot", "Gökyüzü"]
    },
    {
        word: "Uçurtma",
        forbidden: ["Rüzgar", "Gökyüzü", "Uçmak"]
    },
    {
        word: "Usta",
        forbidden: ["Tecrübeli", "İşçi", "Meslek"]
    },
    {
        word: "Uyku",
        forbidden: ["Gece", "Rüya", "Yatak"]
    },
    {
        word: "Uçurum",
        forbidden: ["Yüksek", "Tehlike", "Kenarı"]
    },
    {
        word: "Umut",
        forbidden: ["Beklenti", "Gelecek", "İnanç"]
    },
    {
        word: "Uykusuz",
        forbidden: ["Yorgun", "Gece", "Göz"]
    },
    {
        word: "Ulusal",
        forbidden: ["Ülke", "Bayrak", "Milli"]
    },
    {
        word: "Uzay",
        forbidden: ["Astronot", "Roket", "Yıldız"]
    },
    {
        word: "Uzak",
        forbidden: ["Mesafe", "Yakın", "Uç"]
    },
    {
        word: "Uygulama",
        forbidden: ["Program", "Telefon", "Bilgisayar"]
    },
    {
        word: "Ucuz",
        forbidden: ["Fiyat", "Pahalı", "İndirim"]
    },
    {
        word: "Uyandırmak",
        forbidden: ["Uyanmak", "Sabah", "Alarm"]
    },
    {
        word: "Uçuş",
        forbidden: ["Havalanmak", "Yolculuk", "Pilot"]
    },
    {
        word: "Unutmak",
        forbidden: ["Hatırlamak", "Bellek", "Zihin"]
    },
    {
        word: "Uluslararası",
        forbidden: ["Ülke", "Küresel", "Sınır"]
    },
    {
        word: "Uğur",
        forbidden: ["Şans", "İyi", "Talisman"]
    },
    {
        word: "Uykulu",
        forbidden: ["Yorgun", "Göz", "Sabah"]
    },
    {
        word: "Uyum",
        forbidden: ["Birlik", "Denge", "Ahenk"]
    },
    {
        word: "Ulaşım",
        forbidden: ["Taşıma", "Araç", "Yol"]
    },
    {
        word: "Ümit",
        forbidden: ["Umut", "Beklenti", "Gelecek"]
    },
    {
        word: "Ünlü",
        forbidden: ["Şöhret", "Tanınmış", "Kariyer"]
    },
    {
        word: "Üzgün",
        forbidden: ["Mutsuz", "Ağlamak", "Duygu"]
    },
    {
        word: "Üniversite",
        forbidden: ["Eğitim", "Öğrenci", "Fakülte"]
    },
    {
        word: "Üçgen",
        forbidden: ["Geometri", "Şekil", "Kenar"]
    },
    {
        word: "Ücret",
        forbidden: ["Para", "Ödeme", "Maaş"]
    },
    {
        word: "Üretmek",
        forbidden: ["Fabrika", "Malzeme", "İmalat"]
    },
    {
        word: "Üzgün",
        forbidden: ["Mutsuz", "Ağlamak", "Hüzün"]
    },
    {
        word: "Ünlü",
        forbidden: ["Şöhret", "Tanınmış", "Popüler"]
    },
    {
        word: "Üzüm",
        forbidden: ["Meyve", "Bağ", "Şarap"]
    },
    {
        word: "Ütü",
        forbidden: ["Kıyafet", "Düzeltmek", "Sıcak"]
    },
    {
        word: "Ülke",
        forbidden: ["Devlet", "Sınır", "Harita"]
    },
    {
        word: "Ücra",
        forbidden: ["Uzak", "Tenha", "Issız"]
    },
    {
        word: "Ülser",
        forbidden: ["Mide", "Hastalık", "Ağrı"]
    },
    {
        word: "Üretici",
        forbidden: ["Çiftçi", "Fabrika", "İmalatçı"]
    },
    {
        word: "Üzülmek",
        forbidden: ["Hüzün", "Ağlamak", "Duygusal"]
    },
    {
        word: "Ün",
        forbidden: ["Şöhret", "Tanınmış", "Popüler"]
    },
    {
        word: "Üşümek",
        forbidden: ["Soğuk", "Hava", "Kış"]
    },
    {
        word: "Üs",
        forbidden: ["Askeri", "Merkez", "Operasyon"]
    },
    {
        word: "Üst",
        forbidden: ["Alt", "Yukarı", "Kıyafet"]
    },
    {
        word: "Valiz",
        forbidden: ["Bavul", "Seyahat", "Taşımak"]
    },
    {
        word: "Vapur",
        forbidden: ["Deniz", "Gemi", "İstanbul"]
    },
    {
        word: "Var",
        forbidden: ["Mevcut", "Olmak", "Yok"]
    },
    {
        word: "Varyant",
        forbidden: ["Değişiklik", "Farklı", "Versiyon"]
    },
    {
        word: "Vatan",
        forbidden: ["Ülke", "Millet", "Yurt"]
    },
    {
        word: "Vazo",
        forbidden: ["Çiçek", "Dekor", "Kap"]
    },
    {
        word: "Veri",
        forbidden: ["Bilgi", "Data", "Bilgisayar"]
    },
    {
        word: "Vergi",
        forbidden: ["Devlet", "Ödeme", "Para"]
    },
    {
        word: "Vesikalık",
        forbidden: ["Fotoğraf", "Kimlik", "Resim"]
    },
    {
        word: "Veteriner",
        forbidden: ["Hayvan", "Doktor", "Klinik"]
    },
    {
        word: "Vejetaryen",
        forbidden: ["Et", "Sebze", "Diyet"]
    },
    {
        word: "Vites",
        forbidden: ["Araba", "Debriyaj", "Hız"]
    },
    {
        word: "Vitamin",
        forbidden: ["Sağlık", "Besin", "Hap"]
    },
    {
        word: "Volkan",
        forbidden: ["Yanardağ", "Lav", "Patlama"]
    },
    {
        word: "Vurmak",
        forbidden: ["Çarpmak", "Kırmak", "Darbe"]
    },
    {
        word: "Vücut",
        forbidden: ["Beden", "Fizik", "Sağlık"]
    },
    {
        word: "Vizyon",
        forbidden: ["Görüş", "Hedef", "Film"]
    },
    {
        word: "Varlık",
        forbidden: ["Mevcut", "Mülk", "Mal"]
    },
    {
        word: "Vakum",
        forbidden: ["Hava", "Boşluk", "Emmek"]
    },
    {
        word: "Vali",
        forbidden: ["Yönetici", "Şehir", "İdare"]
    },
    {
        word: "Yaz",
        forbidden: ["Mevsim", "Sıcak", "Dört mevsim"]
    },
    {
        word: "Yemek",
        forbidden: ["Pişirme", "Yiyecek", "Mutfak"]
    },
    {
        word: "Yelken",
        forbidden: ["Deniz", "Tekne", "Rüzgar"]
    },
    {
        word: "Yüz",
        forbidden: ["Yüzme", "Yüzey", "Yüzey"]
    },
    {
        word: "Yarış",
        forbidden: ["Koşmak", "Kazanan", "Bitiş"]
    },
    {
        word: "Yıl",
        forbidden: ["Tarih", "Yılbaşı", "Takvim"]
    },
    {
        word: "Yıldız",
        forbidden: ["Gökyüzü", "Parlak", "Astronomi"]
    },
    {
        word: "Yorgun",
        forbidden: ["Uykusuz", "Enerji", "Dinlenmek"]
    },
    {
        word: "Yol",
        forbidden: ["Yürümek", "Araba", "Gidiş"]
    },
    {
        word: "Yüksek",
        forbidden: ["Düşük", "Bina", "Yükseklik"]
    },
    {
        word: "Yumurta",
        forbidden: ["Tavuk", "Kahvaltı", "Pişirmek"]
    },
    {
        word: "Yel",
        forbidden: ["Rüzgar", "Deniz", "Yelken"]
    },
    {
        word: "Yüzme",
        forbidden: ["Havuz", "Spor", "Su"]
    },
    {
        word: "Yatak",
        forbidden: ["Uyku", "Oda", "Yorgan"]
    },
    {
        word: "Yem",
        forbidden: ["Hayvan", "Beslenme", "Yemek"]
    },
    {
        word: "Yosun",
        forbidden: ["Deniz", "Yeşil", "Bitki"]
    },
    {
        word: "Yük",
        forbidden: ["Ağır", "Taşımak", "Kargo"]
    },
    {
        word: "Yat",
        forbidden: ["Deniz", "Tekne", "Yatmak"]
    },
    {
        word: "Yakmak",
        forbidden: ["Ateş", "Odun", "Yangın"]
    },
    {
        word: "Yasa",
        forbidden: ["Kanun", "Hukuk", "Yasak"]
    }
];

export default wordsList;