import { IPrinter } from './IPrinter';
import { IScanner } from './IScanner';
import { IFax } from './IFax';

export class MultiFunctionDevice implements IPrinter, IScanner, IFax {
  print(doc: string): void {
    console.log(`[MFD] Друк: ${doc}`);
  }

  scan(doc: string): string {
    console.log(`[MFD] Скан: ${doc}`);
    return `SCAN_${doc}`;
  }

  fax(doc: string, to: string): void {
    console.log(`[MFD] Факс до ${to}: ${doc}`);
  }
}
