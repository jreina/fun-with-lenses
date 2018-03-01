const { compose } = require("ramda");
const Lens = (getter, setter) => ({
  getter,
  setter
});

const view = lens => obj => lens.getter(obj);
const over = lens => xform => obj =>
  compose(lens.setter, xform, lens.getter)(obj)(obj);
const set = lens => newVal => obj => lens.setter(newVal)(obj);

module.exports = { Lens, view, over, set };
