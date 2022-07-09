import noUiSlider from 'nouislider';
type TSlider = {
    start: [number, number];
    connect: boolean;
    step: number;
    range: {
        min: number[];
        max: number[];
    };
};
const dateBox = document.createElement('div');
// const filterHead = document.querySelector('.filter-area');
noUiSlider.create(dateBox, {
    start: [2017, 2022],
    connect: true,
    step: 1,
    range: {
        min: [2017],
        max: [2022],
    },
});
export { dateBox };
