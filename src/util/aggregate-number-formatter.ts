export const AggregateNumberFormatter = (number: number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toFixed(2).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(2).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toFixed(2).toString() + "K";
  } else {
    return number.toString();
  }
};
