import Asus from './Asus';
import MacBook from './MacBook';

let asus = new Asus('Zenbook', true, true);
console.log(asus);
asus.b();
asus.a();

let macbook = new MacBook(2017, false, false);
console.log(macbook);

macbook.a();
macbook.b();