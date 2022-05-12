export default [
  {
    path: "/accident",
    name: "Accident",
    component: () => import(/* webpackChunkName: "Accident" */ `./accidentList.vue`),
  },
];
