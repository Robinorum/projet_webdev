import { FiltreTachePipe } from './filtre-tache.pipe';
import {FiltreTacheundefinedPipe} from './filtre-tache.pipe';
import {FiltreTachependingPipe} from './filtre-tache.pipe';
import {FiltreTacheIPPipe} from './filtre-tache.pipe';
import {FiltreTacheCPPipe} from './filtre-tache.pipe';

describe('FiltreTachePipe', () => {
  it('create an instance', () => {
    const pipe = new FiltreTachePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('FiltreTacheundefinedPipe', () => {
  it('create an instance', () => {
    const pipe2 = new FiltreTacheundefinedPipe();
    expect(pipe2).toBeTruthy();
  });
});

describe('FiltreTachependingPipe', () => {
  it('create an instance', () => {
    const pipe3 = new FiltreTachependingPipe();
    expect(pipe3).toBeTruthy();
  });
});

describe('FiltreTacheIPPipe', () => {
  it('create an instance', () => {
    const pipe2 = new FiltreTacheIPPipe();
    expect(pipe2).toBeTruthy();
  });
});

describe('FiltreTacheCPPipe', () => {
  it('create an instance', () => {
    const pipe3 = new FiltreTacheCPPipe();
    expect(pipe3).toBeTruthy();
  });
});

