import { expect } from 'chai';
import { mutations } from '../../src/store/store';

const {
  fetchDataProcess,
  addDataToStore,
  fetchError,
  deleteDataFromStore,
  addNewImageToStore,
} = mutations;

describe('mutations', () => {
  it('fetchDataProcess', () => {
    const state = { fetchDataProcess: false };
    fetchDataProcess(state);
    expect(state.fetchDataProcess).to.equal(true);
  });

  it('addDataToStore', () => {
    const state = {
      blogPictures: [],
      counterToCreateID: 0,
    };
    addDataToStore(state, [1, 2, 3]);
    expect(state.blogPictures).to.be.eql([1, 2, 3]);
    expect(state.counterToCreateID).to.equal(3);
  });

  it('fetchError', () => {
    const state = { error: false };
    fetchError(state);
    expect(state.error).to.equal(true);
  });

  it('deleteDataFromStore', () => {
    const state = { blogPictures: [{ a: 1, id: 0 }, { b: 1, id: 1 }, { c: 1, id: 2 }] };
    deleteDataFromStore(state, 1);
    expect(state.blogPictures).to.eql([{ a: 1, id: 0 }, { c: 1, id: 2 }]);
  });
  it('addNewImageToStore', () => {
    const state = { blogPictures: [] };
    addNewImageToStore(state, { a: 1, foo: 'bar', id: 1 });
    expect(state.blogPictures).to.eql([{ a: 1, foo: 'bar', id: 1 }]);
  });
});
