import { PeoplesModule } from './peoples.module';

describe('PeoplesModule', () => {
  let peoplesModule: PeoplesModule;

  beforeEach(() => {
    peoplesModule = new PeoplesModule();
  });

  it('should create an instance', () => {
    expect(peoplesModule).toBeTruthy();
  });
});
