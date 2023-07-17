function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}
noReturn('123', '1', '3', '4');
