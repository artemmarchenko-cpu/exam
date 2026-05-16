# Тест 20 — Interface Segregation Principle (ISP)

## Суть

Клієнти не повинні залежати від методів, які вони не використовують.

## Антипатерн

`IMachine` — один великий інтерфейс з `print`, `scan`, `fax`, `staple`.
`BasicPrinter` вимушений реалізовувати scan/fax і кидати помилки — це неправильно.

## Рефакторинг

Розбиваємо на маленькі інтерфейси:
- `IPrinter` — тільки `print`
- `IScanner` — тільки `scan`
- `IFax` — тільки `fax`

`SimplePrinter` реалізує лише `IPrinter`.
`MultiFunctionDevice` реалізує всі три.

## Запуск

```bash
npm install
npm run antipattern
npm run refactored
```
