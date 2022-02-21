
import { derived, get, writable } from 'svelte/store';
import { _AT }from '../types/archToken';

export const url = writable('');

export const tokens = derived(url, ($url, set) => {
    const load = async() => {
        try {
            if($url !== '') {
                const rsp = await fetch(get(url));
                let jrsp = await rsp.json();
                let jdata = jrsp.tokens;
                let t = [];
                jdata.forEach((dt) => t.push(_AT.from(dt)));
                set(t);
            }
        } catch(e) {
            console.log(e)
        }        
    }   

    load();

    return () => {set([])}
})

export const ordered = derived(tokens, ($tokens, set) => {
    if($tokens !==undefined) {
        let tk = get(tokens)
        set(tk.sort((a, b) => {
            if(a._tier < b._tier) {
                return -1;           
            }
            if(a._tier > b._tier) {
                return 1;
            }
            if(a._name < b._name) {
                return -1
            }
            if(a._name > b._name) {
                return 1;
            }
            return 0;
        }))
    }
    return () => {set([])}
});


export function find_tokens(tokens_list) {
    const tks = get(tokens);
    if(tks !== undefined) {
        let tlist = []
        tokens_list.forEach(n => {
            for(let tk in tks) {
                if(tks[tk].name === n)
                    tlist.push(tks[tk]);
            }
        });
        return tlist;
    }
}