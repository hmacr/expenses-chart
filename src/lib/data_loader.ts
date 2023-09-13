import spendJson from '../assets/data.json';

export class SpendData {
  day!: string;
  amount!: number;
  percentOfMax!: number;
}

export function loadSpendData(): Array<SpendData> {
  const transformedData = spendJson.map(data => {
    const spendData = new SpendData();
    spendData.day = data.day;
    spendData.amount = data.amount;
    return spendData;
  });
  const maxAmount = Math.max(...transformedData.map(data => data.amount));
  transformedData.forEach(data => {
    data.percentOfMax = +((data.amount / maxAmount) * 100).toFixed(0);
  });
  return transformedData;
}
