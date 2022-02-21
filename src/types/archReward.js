
export { _RW, _RW as default };

class _RW {
    constructor(type="", mod="", ico="") {
        this._type = type;
        this._modifier = mod;
        this._icon = ico;
    }
    from(data) {
        Object.assign(this, data)
        return this;
    }
    set type(value) {
        value = value.replaceAll(/([A-Z])/g, ' $1')
        this._type = value;
    }
    get type() {
        return this._type;
    }
    set modifier(value) {
        this._modifier = value;
    }
    get modifier() {
        return this._modifier;
    }
    set icon(value) {
        this._icon = value;
    }
    get icon() {
        return this._icon;
    }
}
