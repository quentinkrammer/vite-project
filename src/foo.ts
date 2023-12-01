export function foo() {
  return new Promise<string>((resolve) => {
    setTimeout(() => undefined, 2000);
    resolve("foo");
  });
}
const t = await foo();
console.log(t);
