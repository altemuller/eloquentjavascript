function isEven(n) {
  if (n == 1)
    return false;
  else if (n == 0)
    return true;
  else
    return isEven(n - 2);
}
