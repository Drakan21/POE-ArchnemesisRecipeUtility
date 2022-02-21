
import { _RW } from './archReward.js'

export { _AT, _AT as default };

class _AT {
    constructor(name="", tier="", icon="", description="", modifier="", components=[], rewards=[]) {
        this._name = name;
        this._icon = icon;
        this._tier = tier;
        this._modifier = modifier;
        this._description = description;
        this._components = components;
        this._rewards = rewards;
    }
    
    static from(data) {
        return Object.assign(new _AT(), data);
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    set icon(value) {
        this._icon = value;
    }
    get icon() {
        return this._icon;
    }
    set tier(value) {
        this._tier = value;
    }
    get tier() {
        return this._tier;
    }
    set modifier(value) {
        this._modifier = value;
    }
    get modifier(){
        return this._modifier;
    }
    set description(value) {
        this._description = value;
    }
    get description() {
        return this._description;
    }
    set comp(value) {
        this._components = value;
    }
    get comp() {
        return this._components;
    }
    set rewards(value) {        
        if(!this._rewards)
            this._rewards = []

        for(const k in value) {
            let rw = (new _RW()).from(value[k])
            this._rewards.push(rw)
        }
    }
    get rewards() {
        return this._rewards;
    }
}

