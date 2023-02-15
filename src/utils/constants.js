import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: "Succulents taiyaki paleo you probably haven't heard of them vibecession bruh. Disrupt wolf freegan seitan direct trade listicle cray 90's fanny pack austin.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Normcore yuccie iPhone cornhole cliche wayfarers green juice taiyaki bicycle rights yr vaporware quinoa listicle literally neutra. Fashion axe leggings polaroid flexitarian health goth crucifix.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Kombucha next level banjo raclette etsy activated charcoal. Subway tile raclette vinyl, swag cold-pressed selfies small batch mixtape knausgaard.',
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
