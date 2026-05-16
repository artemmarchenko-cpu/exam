import { IMachine } from './IMachine';

export class BasicPrinter implements IMachine {
  print(doc: string): void {
    console.log(`Друкую: ${doc}`);
  }

  scan(_doc: string): string {
    throw new Error('Не підтримується');
  }

  fax(_doc: string, _to: string): void {
    throw new Error('Не підтримується');
  }

  staple(_pages: number): void {
    throw new Error('Не підтримується');
  }
}

const printer = new BasicPrinter();
printer.print('Звіт.pdf');
