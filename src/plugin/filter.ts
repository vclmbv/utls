import { isUndefined } from "../basic";

interface CurrentV {
  prepare: (...args: any[]) => any;
  data?: object;
}

async function filterPlugins(
  plugins: CurrentV[],
  success: (data: object) => void = (): void => {},
  fallback: (data: object) => void = (): void => {}
): Promise<void> {
  async function waitNextBlock(
    currentV: CurrentV,
    success: (data: object) => void,
    fallback: (data: object) => void
  ): Promise<void> {
    try {
      await currentV.prepare(currentV.data);
      await success(!isUndefined(currentV.data) ? currentV.data : {});
    } catch (e) {
      fallback(!isUndefined(currentV.data) ? currentV.data : {});
    }
  }

  return plugins.reduce(async (previousV, currentV) => {
    await previousV;
    return waitNextBlock(currentV, success, fallback);
  }, Promise.resolve());
}

export { filterPlugins };
