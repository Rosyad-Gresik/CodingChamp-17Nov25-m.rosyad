document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact__form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Dapatkan semua input yang memiliki atribut 'required'
            const requiredInputs = contactForm.querySelectorAll('[required]');
            let formIsValid = true;

            requiredInputs.forEach(input => {
                if (input.value.trim() === '') {
                    // Jika ada input yang kosong, set formIsValid menjadi false
                    formIsValid = false;
                    // (Di sini Anda bisa menambahkan style error, misalnya border merah)
                    // input.style.border = '1px solid red'; 
                } else {
                    // input.style.border = ''; // Hapus style error
                }
            });

            if (!formIsValid) {
                // Mencegah formulir terkirim jika tidak valid
                event.preventDefault(); 
                
                // Opsional: Beri peringatan kepada pengguna (jika tidak menggunakan HTML5 required)
                // alert('Mohon lengkapi semua kolom yang wajib diisi.');
            }
            
            // Jika formIsValid true, formulir akan terkirim
        });
    }
});
// --- KODE JAVASCRIPT UNTUK POP-UP TERIMA KASIH ---

document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen-elemen penting
    const contactForm = document.querySelector('.contact__form');
    const modal = document.getElementById("thankYouModal");
    const span = document.getElementsByClassName("close-button")[0];

    if (contactForm && modal && span) {
        // Logika saat formulir di-submit
        contactForm.addEventListener('submit', function(event) {
            // Jika Anda tidak ingin halaman merefresh/berpindah (karena tidak ada backend), 
            // cegah aksi default submit
            event.preventDefault(); 

            // Cek apakah formulir valid (memanfaatkan validasi required dan type="email" dari HTML5)
            // Note: checkValidity() hanya berfungsi setelah preventDefault() dipanggil
            if (contactForm.checkValidity()) {
                // Tampilkan modal terima kasih
                modal.style.display = "flex"; 
                
                // Opsional: Reset formulir agar kolom kosong lagi setelah dikirim
                contactForm.reset();
                
            } else {
                // Jika validasi HTML5 gagal (misalnya kolom kosong), browser akan 
                // menampilkan pesan error bawaannya secara otomatis.
            }
        });

        // Logika untuk menutup modal ketika tombol 'x' diklik
        span.onclick = function() {
            modal.style.display = "none";
        }

        // Logika untuk menutup modal ketika pengguna mengklik di luar area modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});

// Pastikan kode welcomeMessage() dan kode JS lainnya juga ada di file ini.
// --- KODE JAVASCRIPT WELCOME MESSAGE DENGAN LOCAL STORAGE ---

// Panggil fungsi segera setelah script dimuat
welcomeMessage();

/**
 * Fungsi untuk memeriksa Local Storage, meminta nama (jika perlu), 
 * dan memperbarui tampilan.
 */
function welcomeMessage() {
    // Kunci yang digunakan untuk menyimpan nama di Local Storage
    const storageKey = 'visitorName';
    
    // 1. Cek apakah nama sudah ada di Local Storage
    let userName = localStorage.getItem(storageKey);

    if (!userName) {
        // 2. Jika nama belum ada, tampilkan pop-up prompt
        let inputName = prompt("Silahkan isi nama anda:");

        // Jika pengguna menekan "Batal" (null) atau meninggalkan kosong (''), 
        if (inputName === '' || inputName === null) {
            userName = "Guest";
        } else {
            userName = inputName;
        }
        
        // 3. Simpan nama yang baru dimasukkan ke Local Storage
        localStorage.setItem(storageKey, userName);
    }
    
    // 4. Perbarui tampilan di halaman dengan nama yang ditemukan/dimasukkan
    updateWelcomeMessage(userName);
}

/**
 * Fungsi untuk mengganti teks di elemen HTML yang sesuai.
 * @param {string} nama - Nama yang akan ditampilkan.
 */
function updateWelcomeMessage(nama) {
    // Dapatkan elemen <span> dengan ID 'nama-user'
    const namaElement = document.getElementById('nama-user');
    
    if (namaElement) {
        // Ganti teks pada elemen tersebut (menggunakan toUpperCase())
        namaElement.textContent = nama.toUpperCase(); 
        console.log(`Pesan selamat datang diperbarui. Nama: ${nama.toUpperCase()}`);
    } else {
        console.error("Elemen dengan ID 'nama-user' tidak ditemukan.");
    }
}

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .profil__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .profil__subtitle, .profil__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
