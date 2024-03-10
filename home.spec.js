import { mount } from '@vue/test-utils';
import home from "./src/FrontedLayout/home.vue"


test('affiche le message', () => {
  const wrapper = mount(home, {
    props: {
      msg: 'Bonjour tout le monde',
    },
  });
  const vm = wrapper.vm;
  // Vérifie le texte rendu du composant
  expect(vm.test(1,1)).toBe(2);
});