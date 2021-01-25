// Obje oluşturmadan fonksiyonumuzu kullanmak istiyorsak static methodları kullanacağız

class Matematik {

    sqrt(x){
        console.log(x*x);
    }

    static cube(x){
        console.log(x*x*x);
    }

}



Matematik.cube(3);
// 27


const math = new Matematik();
math.sqrt(5);
// Obje oluşturmadan kullanamayız
/* Matematik.sqrt(5); // Hata */

console.log(math);
// prototype'de sadece sqrt methodu gözükür


/* math.cube(2); // Hata */
// Obje oluşturup bu obje üzerinden fonksiyonu(statik fonksiyonu) kullanamayız.
// Classın prototypeine yazılmıyor, obje üzerindne değil class üzerinden erişebiliriz.


// Statiklere örnek
/* 
Object.create();
Math.sqrt(3); 
*/