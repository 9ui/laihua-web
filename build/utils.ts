import { networkInterfaces } from 'os';
import chalk from 'chalk';

function consoleFn(color: string, message: any) {
  // eslint-next-disable-line
  console.log(
    // eslint-disable-line
    chalk.blue.bold('********  ') +
      (chalk as any)[color].bold(message) +
      chalk.blue.bold('   **********')
  );
}

/**
 * warnConsole
 * @param message
 */
export function successConsole(message: any) {
  consoleFn('green', '✨ ' + message);
}

/**
 * warnConsole
 * @param message
 */
export function errorConsole(message: any) {
  consoleFn('red', '✨ ' + message);
}

/**
 * warnConsole
 * @param message message
 */
export function warnConsole(message: any) {
  consoleFn('yellow', '✨ ' + message);
}

export function getIPAddress() {
  const interfaces = networkInterfaces();
  for (const devName in interfaces) {
    const iFace = interfaces[devName];
    if (!iFace) return;
    for (let i = 0; i < iFace.length; i++) {
      const alias = iFace[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }

  return '';
}
