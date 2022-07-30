import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10, 3, -5, 0]);
const characters = new CharactersCollection('FadoG');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(0);

numbers.sort();
characters.sort();
linkedList.sort();

console.log(numbers.data);
console.log(characters.data);
linkedList.print();
