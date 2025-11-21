# CodingChamp-17Nov25-m.rosyad
Repository mini project coding champ software engineer by revou

1. Kunjungan Pertama: Buka halaman Anda. Akan muncul pop-up minta nama. Masukkan nama Anda (misalnya "BAGAS"). Nama di halaman     akan berubah menjadi "BAGAS".

2. Kunjungan Kedua (Segarkan Halaman): Tekan F5 atau refresh browser. Pop-up tidak akan muncul, dan nama "BAGAS" akan langsung ditampilkan dari Local Storage.

💡 Bagaimana jika saya ingin mengganti nama yang sudah tersimpan?

Untuk keperluan testing atau jika Anda ingin reset nama, Anda bisa melakukannya melalui console browser (F12):

masukan kode dibawah ke baguan console + run

localStorage.removeItem('visitorName'); 
location.reload(); 

Dengan langkah ini, pop-up akan muncul kembali pada refresh berikutnya.