import { mount } from '@vue/test-utils';
import LoadNewImage from '../../src/components/LoadNewImage.vue';

describe('LoadNewImage', () => {
  const wrapper = mount(LoadNewImage);
  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true);
  });
  it('input isn"t active', () => {
    expect(wrapper.contains('.btn-to-load')).toBe(false);
  });
  it('input is active', () => {
    const inputsForData = wrapper.findAll('.input-text');
    inputsForData.setValue('bla-bla');
    expect(wrapper.contains('.btn-to-load')).toBe(true);
  });
});
