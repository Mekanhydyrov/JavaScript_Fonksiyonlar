// Functions
function yashesapla(dogumyili) {
    return 2022 - dogumyili;
}

let val = yashesapla(1997);
console.log(val);




// Emeklilik

// function EmeklilikYili(dogumyili) {
//     let yas = yashesapla(dogumyili);
//     let ememklilik = 65 - yas;

//     if (ememklilik > 0) {
//         console.log(' Emekli Olmana ${ememklilik} Yıl Kaldı');

//     } else {
//         console.log('Emekli Oldunuz');
//     }
// }

// EmeklilikYili(1997);





// Para çekme Örnegi

var hesapA = {
    ad: 'Kıvanç Türkmen',
    hesapNo: '3541351351',
    bakiye: 4000,
    ekHesap: 1000

}

var hesapB = {
    ad: 'Bayram Türkmen',
    hesapNo: '9852313515',
    bakiye: 52221,
    ekHesap: 5440
}

function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`);

    if (hesap.bakiye >= miktar) {
        hesap.bakiye = hesap.bakiye - miktar;

        console.log('Paranızı Alabilirsiniz!!!');
    } else {
        var toplam = hesap.bakiye + hesap.ekHesap;
        if (toplam >= miktar) {
            if (confirm('Ek Hesabınızı Kullanmak İster misiniz? ')) {
                console.log('Paranızı Alabilirsiniz!!!');
                var bakiye = hesap.bakiye;
                var ekHesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekHesap - ekHesap;
            } else {
                console.log(`${hesap.hesapNo} Nolu hesabınızda ${miktar} TL bulunmamaktadır!!!`);
            }
        } else {
            console.log(' Bakiyeniz Yetersiz!!!');
        }
    }
}
paraCek(hesapA, 5000);
paraCek(hesapA, 2000);