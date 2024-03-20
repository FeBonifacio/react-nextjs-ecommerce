export function formatValue(valueInCents: number) {
    const valorEmReais = valueInCents / 100;
    return valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}