
import { derived, writable } from 'svelte/store';
import { ordered } from './tokenStore';
import { selected } from './rewardStore';

export const filter = writable('');

export const filtered = derived([filter, ordered, selected], ([$filter, $ordered, $selected], set) => {
    if($ordered !== undefined)
        set($ordered.filter((t) => {
            if (t._name.toLowerCase().includes($filter.toLowerCase()) || $filter === '' || $filter === undefined) {
                if($selected.length > 0) {
                    for(let rw in t._rewards) {
                        return ($selected.find(e => e === t._rewards[rw].type.toLowerCase()) !== undefined);
                    }                
                }
                return true;
                
            }
        }));
    return () => {set([])}
});