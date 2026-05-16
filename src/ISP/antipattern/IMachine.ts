// Порушення ISP: один великий інтерфейс
// BasicPrinter змушений реалізовувати scan/fax, яких у нього немає

export interface IMachine {
  print(doc: string): void;
  scan(doc: string): string;
  fax(doc: string, to: string): void;
  staple(pages: number): void;
}
