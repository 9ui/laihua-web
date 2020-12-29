const ignoredTranspilePatterns = [
  /^core-js.?/,
  /^@babel.?/,
  'bluebird',
  'util.promisify',
  'object-assign',
  'define-properties',
  'loader-utils',
  /^@vue.?/,
  /^@nuxt.?/,
  'nuxt',
];

// 检查模块名称是否不重复并且不受支持。

const checkModuleNameValid = (params: {
  moduleName: string;
  moduleNames: string[];
  ignoredTranspilePatterns: (string | RegExp)[];
}) => {
  // 如果模块名称列表中已包含模块名称，则返回false。
  if (params.moduleNames.includes(params.moduleName)) return false;
  // 如果模块名称与no-yang模式匹配，则返回false。
  let isIgnored = false;
  for (const ignoreRegex of ignoredTranspilePatterns) {
    if (new RegExp(ignoreRegex).test(params.moduleName)) {
      isIgnored = true;
      break;
    }
  }
  if (isIgnored) return false;
  return true;
};

/**
 * 收集需要捆绑的模块名称列表
 * @param ignoreRegexs
 */
const getDependencies = (ignoredTranspilePatterns: (string | RegExp)[]) => {
  const packageJson = require('./package.json');
  const dependencyNames = Object.keys(packageJson.dependencies);
  const result = [];
  for (const dependencyName of dependencyNames) {
    if (
      checkModuleNameValid({
        moduleName: dependencyName,
        ignoredTranspilePatterns,
        moduleNames: result,
      })
    ) {
      result.push(dependencyName);
    }
  }
  return result;
};

/**
 * 构建后，收集要应用Babel的目标。
 */
export const postbuild = () => {
  /**
   * 生产中使用的模块名称列表。
   */
  const productionModuleNames = getDependencies(ignoredTranspilePatterns);
  return productionModuleNames;
};

export default postbuild;
