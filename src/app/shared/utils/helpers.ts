import { formatCurrency as angularFormatCurrency, getCurrencySymbol } from '@angular/common';

export function formatCompactCurrency(
  value: number,
  currencyCode = 'USD',
  locale = 'en-US',
): string {
  if (value === null || isNaN(value)) {return '';}

  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixesIndex = 0;
  let num = value;

  while (num >= 1000 && suffixesIndex < suffixes.length - 1) {
    num /= 1000;
    suffixesIndex++;
  }

  const formattedNum = parseFloat(num.toFixed(1));
  const symbol = getCurrencySymbol(currencyCode, 'wide', locale);

  return `${angularFormatCurrency(formattedNum, locale, symbol, currencyCode, '1.0-1')}${suffixes[suffixesIndex]}`;
}
