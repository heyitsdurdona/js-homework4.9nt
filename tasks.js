// Mana, RegExp mavzusi bo’yicha bir nechta masalalar. Ularni hal qilish orqali o’rganganlaringni mustahkamlashing mumkin. Masalalar oson, o’rta va qiyin darajalarda berilgan.

// Oson daraja:

// 	1.	Masala: Faqat raqamlarni ajratish
// 	•	Shart: Berilgan matndan faqat raqamlarni ajratib ol.
// 	•	Input: "Men 25 yoshdaman, 2025 yil"
// 	•	Output: "25 2025"

// 	2.	Masala: Faqat harflarni ajratish
// 	•	Shart: Berilgan matndan faqat harflar (lotin alifbosidagi kichik va katta harflar) ajratib ol.
// 	•	Input: "Salom123 DUNYo!"
// 	•	Output: "SalomDUNYo"

// 	3.	Masala: Gapni bosh harf bilan boshlash
// 	•	Shart: Berilgan matnni boshidagi birinchi harfni aniqlab, agar u kichik harf bo’lsa, katta harfga almashtir.
// 	•	Input: "salom dunyo"
// 	•	Output: "Salom dunyo"

// 	4.	Masala: Faqat bo’sh joylarni sanash
// 	•	Shart: Berilgan matndagi bo’sh joylar sonini aniqlang.
// 	•	Input: "Bu yerda 5 ta bo'sh joy bor."
// 	•	Output: 5

// 	5.	Masala: E-mail validatsiya qilish
// 	•	Shart: E-mail manzilining to’g’ri formatdaligini tekshiruvchi RegExp yarating.
// 	•	Input: "test@domain.com"
// 	•	Output: true (e-mail formatida bo’lsa) yoki false (bo’lmasa)

// 	6.	Masala: Faqat katta harflarni ajratib olish
// 	•	Shart: Berilgan matndan faqat katta harflarni ajratib ol.
// 	•	Input: "Web DEVELOPER"
// 	•	Output: "WDEVELOPER"

// O’rta daraja:
// 	1.	Masala: Telefonda raqamlarni formatlash
// 	•	Shart: Berilgan telefon raqamini (raqamlar ko’rinishida) standart formatga keltiring (XXX-XXX-XXXX).
// 	•	Input: "998901234567"
// 	•	Output: "998-901-2345"

// 	2.	Masala: Raqam va harflarni ajratish
// 	•	Shart: Berilgan matndan harflar va raqamlarni ajratib, ularni alohida qaytaring.
// 	•	Input: "abc123xyz456"
// 	•	Output: "abcxyz 123456"

// 	3.	Masala: Bir xil ketma-ket takrorlangan belgilarni olib tashlash
// 	•	Shart: Berilgan matndagi ketma-ket takrorlangan harflarni bitta qilib qaytaring.
// 	•	Input: "aaabbbcccaaa"
// 	•	Output: "abc"

// 	4.	Masala: Foydalanuvchi nomi validatsiyasi
// 	•	Shart: Foydalanuvchi nomi faqat harflardan va raqamlardan iborat bo’lishi kerak va uzunligi 4 dan 10 gacha bo’lishi shart. Validatsiya qiling.
// 	•	Input: "user123"
// 	•	Output: true

// 	5.	Masala: Sana formatini tekshirish
// 	•	Shart: Berilgan matn sana formatida ekanligini tekshiruvchi RegExp yarating (masalan, DD/MM/YYYY yoki YYYY-MM-DD formatlari).
// 	•	Input: "2025-03-10"
// 	•	Output: true

// 	6.	Masala: Matndagi bo’sh joylarni o’zgartirish
// 	•	Shart: Berilgan matndagi bo’sh joylar o’rniga - belgisini qo’ying.
// 	•	Input: "RegExp masalalari juda qiziqarli!"
// 	•	Output: "RegExp-masalalari-juda-qiziqarli!"

// 	7.	Masala: Domen nomini ajratib olish
// 	•	Shart: Berilgan URL matnidan domen nomini ajratib oling.
// 	•	Input: "https://www.example.com/path/to/page"
// 	•	Output: "example.com"

// 	8.	Masala: Faqat so’zlarni ajratish
// 	•	Shart: Berilgan matndan faqat so’zlarni (raqamlar va maxsus belgilarni hisobga olmasdan) ajratib oling.
// 	•	Input: "Hello123, this is a test!"
// 	•	Output: "Hello this is a test"

// 	9.	Masala: Qavs ichidagi matnni olish
// 	•	Shart: Berilgan matndan faqat qavs ichidagi matnni ajratib oling.
// 	•	Input: "Bu matn (qavs ichida) joylashgan."
// 	•	Output: "qavs ichida"

// 	10.	Masala: Matndagi raqamlarni va belgilarni ajratish
// 	•	Shart: Berilgan matndan faqat raqamlarni va maxsus belgilarni ajratib ol.
// 	•	Input: "Salom! 123 @world."
// 	•	Output: "123 @"

// 	11.	Masala: IP manzilni tekshirish
// 	•	Shart: Berilgan matn IP manzili ekanligini tekshiruvchi RegExp yozing (IPv4 formatida: XXX.XXX.XXX.XXX).
// 	•	Input: "192.168.0.1"
// 	•	Output: true

// 	12.	Masala: URL formatini tekshirish
// 	•	Shart: Berilgan matn URL ekanligini tekshiruvchi RegExp yozing.
// 	•	Input: "https://www.google.com"
// 	•	Output: true

// Qiyin daraja:
// 	1.	Masala: Raqamlarni matnga kiritish
// 	•	Shart: Berilgan raqamlar ketma-ketligini matn orasiga joylashtiring. Har bir raqamning orqasidan so’z qo’shing (masalan, “raqam:”).
// 	•	Input: "123456"
// 	•	Output: "raqam:1 raqam:2 raqam:3 raqam:4 raqam:5 raqam:6"

// 	2.	Masala: Kredit karta raqamini tekshirish
// 	•	Shart: Kredit karta raqami to’g’ri formatda ekanligini tekshiruvchi RegExp yozing. Format XXXX-XXXX-XXXX-XXXX bo’lishi kerak.
// 	•	Input: "1234-5678-9012-3456"
// 	•	Output: true

// 	3.	Masala: Matndan maxsus belgilarni olib tashlash
// 	•	Shart: Berilgan matndan barcha maxsus belgilarni olib tashlang.
// 	•	Input: "Hello, World! @2025"
// 	•	Output: "Hello World 2025"

// 	4.	Masala: HTML teglarini olib tashlash
// 	•	Shart: Berilgan matndan barcha HTML teglarini olib tashlang.
// 	•	Input: "<div>Hello</div> <p>World</p>"
// 	•	Output: "Hello World"

// Ushbu masalalar bilan o’rgangan bilimlaringni yanada mustahkamlashing mumkin. Har bir shart RegExp asosida ishlangan bo’lib, amaliyot uchun yaxshi asos bo’ladi.
