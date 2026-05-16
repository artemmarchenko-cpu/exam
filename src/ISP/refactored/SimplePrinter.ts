import { IPrinter } from './IPrinter';

export class SimplePrinter implements IPrinter {
  print(doc: string): void {
    console.log(`Друкую: ${doc}`);
  }
}
