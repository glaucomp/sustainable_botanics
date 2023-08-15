type ArrayTwoOrMore<T> = {
  0: T;
  1: T;
} & Array<T>;

export default function classNames(
  ...classes: ArrayTwoOrMore<string | undefined | boolean>
) {
  return classes.filter(c => !!c).join(' ');
}
