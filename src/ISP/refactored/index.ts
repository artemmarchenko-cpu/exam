import { SimplePrinter } from './SimplePrinter';
import { MultiFunctionDevice } from './MultiFunctionDevice';

const simple = new SimplePrinter();
simple.print('Звіт.pdf');

const mfd = new MultiFunctionDevice();
mfd.print('Договір.docx');
mfd.scan('Паспорт.pdf');
mfd.fax('Рахунок.pdf', '+380991234567');
