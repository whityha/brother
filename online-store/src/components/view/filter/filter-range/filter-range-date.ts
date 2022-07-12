import noUiSlider from 'nouislider';
import './filter-range-date.sass';
import { TDSlider } from '../../../types/types';
type TSlider = {
    start: [number, number];
    connect: boolean;
    step: number;
    range: {
        min: number[];
        max: number[];
    };
};

class SliderDate {
    createSlider() {
        const sliderBox = document.createElement('div');
        const dateSlider = document.createElement('div');

        const valueBefore = document.createElement('div');
        const valueAfter = document.createElement('div');

        const createValuesBox = () => {
            const valuesBox = document.createElement('div');
            valuesBox.className = 'values-box';
            valueAfter.className = 'value';
            valueBefore.className = 'value';
            valuesBox.append(valueBefore, valueAfter);
            return valuesBox;
        };
        const valuesBox = createValuesBox();
        noUiSlider.create(dateSlider, {
            start: [2017, 2022],
            connect: true,
            step: 1,
            range: {
                min: [2017],
                max: [2022],
            },
        });
        ((dateSlider as unknown) as TDSlider).noUiSlider.on('update', (values: number[]) => {
            console.log(values);
            valueBefore.innerText = Math.round(values[0]).toString();
            valueAfter.innerText = Math.round(values[1]).toString();
        });

        sliderBox.append(dateSlider, valuesBox);
        return sliderBox;
    }
}

export { SliderDate };
