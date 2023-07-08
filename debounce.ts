function debounce(f: Function, ms: number) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

const f = debounce(() => console.log("send"), 300);

f();
f();
f();
