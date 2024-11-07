import ridings from "./ridings.json";

type Riding = {
    rep: string;
    email: string;
    riding: string
};

type Ridings = {
    [key: string]: Riding;
};

export const ridingsTyped: Ridings = ridings;

export function getRidingDetails(slug: string) {
    return ridingsTyped[slug];
}

class District {
	selectedDistricts = $state([] as string[]);
    currentDistrict = $state(0);;

    toggleDistrict(district: string) {
        if (this.selectedDistricts.includes(district)) {
            this.selectedDistricts = this.selectedDistricts.filter(d => d !== district);
        } else {
            this.selectedDistricts = [...this.selectedDistricts, district];
        }
    }

    getNextDistrict() {
        this.currentDistrict += 1;
        if (this.currentDistrict === this.selectedDistricts.length) {
            this.currentDistrict = 0;
        }        
        return this.selectedDistricts[this.currentDistrict];
    }
    getPrevDistrict() {
        this.currentDistrict -= 1;
        if (this.currentDistrict === -1) {
            this.currentDistrict = this.selectedDistricts.length-1;
        }        
        return this.selectedDistricts[this.currentDistrict];
    }    
}

export const sharedDistrict = new District();