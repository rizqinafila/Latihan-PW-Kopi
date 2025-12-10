// MEMBERI TAHU MAHASISWA BAHWA SCRIPT BERHASIL DI-LOAD
alert('Selamat datang di Website Profile UMKM Anda!');

// MENAMPILKAN INFORMASI VARIABEL DI CONSOLE
const namaUMKM = 'Kopi Nusantara';
console.log ('Nama UMKM: ', namaUMKM);

// DEMONTRASI VARIABEL DAN OPERATOR
let produk = 3;
console.log('Jumlah produk saat ini: ', produk);
produk += 2;
console.log('Setelah penambahan:', produk);

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("formKontak");
    form.addEventListener("submit", function(event){
        let valid = true;

        const nama = document.getElementById("nama");
        const errorNama = document.getElementById("errorNama");
        if(nama.value.trim() === ""){
            errorNama.textContent = "Nama wajib diisi!";
            valid = false;
        } else{
            errorNama.textContent = "";
        }

        const email = document.getElementById("email");
        const errorEmail = document.getElementById("errorEmail");
        const emailPattern = /^[^ ]+@gmail.com$/i;
        if (!emailPattern.test(email.value)){
            errorEmail.textContent = "Email harus @gmail.com dan format benar!";
            valid = false;
        } else {
            errorEmail.textContent = "";
        }

        const kategori = document.getElementById("kategori");
        const errorKategori = document.getElementById("errorKategori");
        if (kategori.value === ""){
            errorKategori.textContent = "Pilih salah satu kategori!";
            valid = false;
        } else{
            errorKategori.textContent = "";
        }

        const pesan = document.getElementById("pesan");
        const errorPesan = document.getElementById("errorPesan");
        if (pesan.value.trim().length < 10){
            errorPesan.textContent = "Pesan minimal 10 karakter!";
            valid = false;
        } else{
            errorPesan.textContent = "";
        }
        if (!valid){
            event.preventDefault();
        } else{
            // alert("Pesan anda berhasil dikirim!");
            // form.reset();
        }
    })
});

document.getElementById("nama").addEventListener("blur", function(){
    const errorNama = document.getElementById("errorNama");
    if (this.value.trim() === ""){
        errorNama.textContent = "Nama wajib diisi!";
    } else{
        errorNama.textContent = "";
    }
});

document.getElementById("pesan").addEventListener("input", function(){
    const errorPesan = document.getElementById("errorPesan");
    if (this.value.trim().length < 10){
        errorPesan.textContent = "Pesan minimal 10 karakter!";
    } else{
        errorPesan.textContent = " ";
    }
});

document.addEventListener("DOMContentLoaded", function(){
    const produkInput = document.getElementById("produkInput");
    const tambahBtn = document.getElementById("tambahBtn");
    const daftarProduk = document.getElementById("daftarProduk");
    const previewProduk = document.getElementById("previewProduk");
    const temaSelect = document.getElementById("temaSelect");

    tambahBtn.addEventListener("click", function(e){
        e.preventDefault();
        const namaProduk = produkInput.value.trim();
        if (namaProduk !== ""){
            const li = document.createElement("li");
            li.textContent = namaProduk;

            //TAMBAHKAN EVENT HOVER (MOUSEOVER & MOUSEOUT)
            li.addEventListener("mouseover", () => li.style.backgroundColor = "#e0e0e0");
            li.addEventListener("mouseout", () => li.style.backgroundColor = "");

            //TAMBAHKAN EVENT HAPUS (DBLCLICK)
            li.addEventListener("dblclick", () => {
                if (confirm("Yakin ingin menghapus produk ini?")){
                    li.remove();
                }
            });

            daftarProduk.appendChild(li);
            produkInput.value = "";
            previewProduk.textContent = "";
        }
    });
    //EVENT 2: PREVIEW INPUT SECARA LANGSUNG (KEYUP)
    temaSelect.addEventListener("change", function(){
        document.body.style.backgroundColor = temaSelect.value;
    });
})