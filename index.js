const Lens = key => ({
  key
});

const view = lens => obj => obj[lens.key];
const over = lens => xform => obj => ({
  ...obj,
  [lens.key]: xform(obj[lens.key])
});
const set = lens => newVal => obj => ({ ...obj, [lens.key]: newVal });

module.exports = { Lens, view, over, set };
