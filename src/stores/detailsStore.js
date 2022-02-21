
import { writable, get } from "svelte/store";

 function createFavTokens () {
    const { subscribe, set } = writable([]);

    function toggle(value) { 
        if(check(value)) {
            get(favs).splice(get(favs).indexOf(value), 1);
            set(get(favs));
        } else {
            set([...get(favs), value]);
        }
    }
    function check(value) {
        return get(favs).find((r) => r === value) !== undefined
    }

    return {
        subscribe,
        set,
        toggle,
        check,
        clear: () => { set([]) } 
    };
}

export const favs = createFavTokens();