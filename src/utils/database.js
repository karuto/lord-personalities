function bindAndInitDatabase(localThis) {
    localThis.db = window.localStorage;
    return localThis;
};

module.exports = {
    bindAndInitDatabase
};
