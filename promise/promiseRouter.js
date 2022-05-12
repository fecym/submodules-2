export default [
  {
    path: "/promise",
    name: "Promise",
    component: () => import(/* webpackChunkName: "Promise" */ `./promiseList`),
  },
];
