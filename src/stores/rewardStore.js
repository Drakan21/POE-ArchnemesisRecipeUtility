
import { derived, get, writable } from 'svelte/store';
import { tokens } from '../stores/tokenStore.js';

function createSelectedRewards() {
    const { subscribe, set } = writable([]);

    function toggle(value) { 
        if(check(value)) {
            get(selected).splice(get(selected).indexOf(value), 1);
            set(get(selected));
        } else {
            set([...get(selected), value]);
        }
    }
    function check(value) {
        return get(selected).find((r) => r === value) !== undefined
    }

    return {
        subscribe,
        set,
        toggle,
        check,
        clear: () => { set([]) } 
    };
}

export const rewards = derived(tokens, ($tokens, set) => {
    if($tokens !== undefined) {
        let rwds = []
        for(let ti in $tokens) {
            let rw = $tokens[ti].rewards;
            rw.forEach((rv) => { if(!rwds.find((r) => r.type === rv.type)) {
                rwds.push(rv);
            }});
        }
        set(rwds);
    }
    return () => {set([])}
})


export const selected = createSelectedRewards();