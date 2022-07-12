import noUiSlider from 'nouislider';
import './filter-range-date.sass';
import { TDSlider } from '../../../types/types';

class Slider {
    start: number;
    end: number;
    min: number;
    max: number;
    className: string;
    headTitle: string;
    constructor(prop: number[], className: string, headTitle: string) {
        this.start = prop[0];
        this.end = prop[1];
        this.min = prop[2];
        this.max = prop[3];
        this.className = className;
        this.headTitle = headTitle;
    }
    createSlider() {
        const sliderBox = document.createElement('div');
        const sliderHead = document.createElement('div');
        const dateSlider = document.createElement('div');

        const valueBefore = document.createElement('div');
        const valueAfter = document.createElement('div');

        sliderHead.innerText = `${this.headTitle}`;
        sliderHead.className = 'slider-head';
        const createValuesBox = () => {
            const valuesBox = document.createElement('div');
            valuesBox.className = 'values-box';
            valueAfter.className = 'value';
            valueBefore.className = 'value';
            valuesBox.append(valueBefore, valueAfter);
            return valuesBox;
        };
        const valuesBox = createValuesBox();

        dateSlider.className = `slider-range slider-${this.className}`;
        noUiSlider.create(dateSlider, {
            start: [this.start, this.end],
            connect: true,
            step: 1,
            range: {
                min: [this.min],
                max: [this.max],
            },
        });
        ((dateSlider as unknown) as TDSlider).noUiSlider.on('update', (values: number[]) => {
            console.log(values);
            valueBefore.innerText = Math.round(values[0]).toString();
            valueAfter.innerText = Math.round(values[1]).toString();
        });

        sliderBox.append(sliderHead, dateSlider, valuesBox);
        return sliderBox;
    }
}
export { Slider };
