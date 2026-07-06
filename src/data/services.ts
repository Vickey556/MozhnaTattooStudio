import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'ТАТУЮВАННЯ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPCZJaIoFIifoLuuIa-dkMM-N95dPZGAbROlnEF=s1360-w1360-h1020-rw',
    prices: [
      { label: "Консультація", value: "0 грн" },
      { label: "Мінімалістичні татуювання до 10 см", value: "від 1500 грн" },
      { label: "Сеанс", value: "6000 грн" }
    ],
    desc: 'Художнє татуювання в будь-якому стилі. Розробка індивідуального ескізу або робота за вашою ідеєю.',
    link: '/tattoo'
  },
  {
    id: 2,
    title: 'ПІРСИНГ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipN3EmXKR8S4v_k0Ng9QNpr1cc20GGEbyBt9DEjc=s1360-w1360-h1020-rw',
    prices: [
      { label: "Консультація з пірсингу, лікування проколу, заміна прикраси", value: "200 грн" },
      { label: "Пірсинг", value: "від 300 грн" },
      { label: "Складний пірсинг", value: "від 1000 грн" }
    ],
    desc: 'Професійний прокол з використанням стерильних титанових прикрас. Безпечно та естетично.',
    link: '/piercing'
  },
  {
    id: 3,
    title: 'КУРСИ ТАТУ МАЙСТРА',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOBTGNXgPkzhLM8tSalF_iEeW6mhiAQORNfo4N8=s1360-w1360-h1020-rw',
    prices: [
      { label: "Базовий курс", value: "15000 грн" },
      { label: "Стандартний курс", value: "30000 грн" }
    ],
    desc: 'Навчання на тату майстра. Теорія та багато практики на моделях.',
    link: null
  },
  {
    id: 4,
    title: 'АРТ-СЕАНС',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGA3K7F9cL2Q547hzhMjKMYKZVseduNQFkcSBVTS9BFqAxCSR9-5eJQooBh3QK5VRMpV1BJ8VgNcOqMgwbcaJUwfuZd_BtRP9J4tUuzps7Bn0ypwsRre2c3QIp5yJyplFuGSXB0Mo7aW98j=s1360-w1360-h1020-rw',
    prices: [
      { label: "Арт-сеанс", value: "3000 грн" }
    ],
    desc: 'Арт сеанс — це одне практичне заняття, яке допоможе тобі зрозуміти, чи підходить тобі професія тату майстра.',
    link: null
  },
  {
    id: 5,
    title: 'ПОДАРУНКОВИЙ СЕРТИФІКАТ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipM-evGc62nJtuo0mnoe3qlMJPfpxgRrB16Ds1D3=s1360-w1360-h1020-rw',
    prices: [
      { label: "Сертифікат", value: "від 500 грн" }
    ],
    desc: 'Сертифікати на будь-яку послугу або суму. Ідеальний подарунок для сміливих.',
    link: null
  }
];
