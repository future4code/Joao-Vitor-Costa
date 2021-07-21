const calculateSumTo = (n: number, acc: number = 0): number => {
    if (n === 0) {
      return acc;
    }
    return calculateSumTo(n - 1, acc + n);
  };