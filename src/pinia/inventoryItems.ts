import { defineStore } from 'pinia';
import { Item } from '@/types/item';

export const itemsStore = defineStore('items', {
    state: () => ({
        items: [
            {
                id: 1,
                quantity: 1,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="6" width="48" height="48" fill="#656CAA"/>
                                            <g filter="url(#filter0_b_0_31)">
                                              <rect x="6" width="48" height="48" fill="#7481ED" fill-opacity="0.35"/>
                                            </g>
                                            <defs>
                                              <filter id="filter0_b_0_31" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_31"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_31" result="shape"/>
                                              </filter>
                                            </defs>
                                          </svg>`,
            },
            {
                id: 2,
                quantity: 3,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="6" width="48" height="48" fill="#7FAA65"/>
                                        <g filter="url(#filter0_b_0_267)">
                                        <rect x="6" width="48" height="48" fill="#B8D998" fill-opacity="0.35"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_b_0_267" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_267"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_267" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
`,
            },
            {
                id: 3,
                quantity: 1,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="6" width="48" height="48" fill="#AA9765"/>
<g filter="url(#filter0_b_0_274)">
<rect x="6" width="48" height="48" fill="#D9BB98" fill-opacity="0.35"/>
</g>
<defs>
<filter id="filter0_b_0_274" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_274"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_274" result="shape"/>
</filter>
</defs>
</svg>
`,
            },
            {
                id: 4,
                quantity: 1,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="6" width="48" height="48" fill="#AA9765"/>
<g filter="url(#filter0_b_0_274)">
<rect x="6" width="48" height="48" fill="#D9BB98" fill-opacity="0.35"/>
</g>
<defs>
<filter id="filter0_b_0_274" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_274"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_274" result="shape"/>
</filter>
</defs>
</svg>
`,
            },
            {
                id: 5,
                quantity: 1,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="6" width="48" height="48" fill="#656CAA"/>
                                            <g filter="url(#filter0_b_0_31)">
                                              <rect x="6" width="48" height="48" fill="#7481ED" fill-opacity="0.35"/>
                                            </g>
                                            <defs>
                                              <filter id="filter0_b_0_31" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_31"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_31" result="shape"/>
                                              </filter>
                                            </defs>
                                          </svg>`,
            },
            {
                id: 6,
                quantity: 20,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="6" width="48" height="48" fill="#AA9765"/>
<g filter="url(#filter0_b_0_274)">
<rect x="6" width="48" height="48" fill="#D9BB98" fill-opacity="0.35"/>
</g>
<defs>
<filter id="filter0_b_0_274" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_274"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_274" result="shape"/>
</filter>
</defs>
</svg>
`,
            },
            {
                id: 7,
                quantity: 5,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="6" width="48" height="48" fill="#656CAA"/>
                                            <g filter="url(#filter0_b_0_31)">
                                              <rect x="6" width="48" height="48" fill="#7481ED" fill-opacity="0.35"/>
                                            </g>
                                            <defs>
                                              <filter id="filter0_b_0_31" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_31"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_31" result="shape"/>
                                              </filter>
                                            </defs>
                                          </svg>`,
            },
            {
                id: 8,
                quantity: 1,
                svg: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="6" width="48" height="48" fill="#AA9765"/>
<g filter="url(#filter0_b_0_274)">
<rect x="6" width="48" height="48" fill="#D9BB98" fill-opacity="0.35"/>
</g>
<defs>
<filter id="filter0_b_0_274" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_274"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_274" result="shape"/>
</filter>
</defs>
</svg>
`,
            },
            {
                id: 9,
                quantity: null,
                svg: null,
            },
            {
                id: 10,
                quantity: null,
                svg: null,
            },
            {
                id: 11,
                quantity: null,
                svg: null,
            },
            {
                id: 12,
                quantity: null,
                svg: null,
            },
            {
                id: 13,
                quantity: null,
                svg: null,
            },
            {
                id: 14,
                quantity: null,
                svg: null,
            },
            {
                id: 15,
                quantity: null,
                svg: null,
            },
            {
                id: 16,
                quantity: null,
                svg: null,
            },
            {
                id: 17,
                quantity: null,
                svg: null,
            },
            {
                id: 18,
                quantity: null,
                svg: null,
            },
            {
                id: 19,
                quantity: null,
                svg: null,
            },
            {
                id: 20,
                quantity: null,
                svg: null,
            },
            {
                id: 21,
                quantity: null,
                svg: null,
            },
            {
                id: 22,
                quantity: null,
                svg: null,
            },
            {
                id: 23,
                quantity: null,
                svg: null,
            },
            {
                id: 24,
                quantity: null,
                svg: null,
            },
            {
                id: 25,
                quantity: null,
                svg: null,
            },
        ] as Item[],
    }),

    actions: {
        deleteItem(item: Item, quantityForDelete: number) {
            const itemForUpdate = this.items.find(
                (currentItem) => currentItem.id === item.id,
            );
            if (itemForUpdate) {
                if (itemForUpdate.quantity) {
                    if (itemForUpdate.quantity <= quantityForDelete) {
                        itemForUpdate.svg = null;
                        itemForUpdate.quantity = null;
                    } else {
                        itemForUpdate.quantity -= quantityForDelete;
                    }
                }
            }
        },
    },

    getters: {},
});
