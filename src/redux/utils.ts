import { history } from '../App';

export const makeActionCreator = (type: string, ...argNames: any) => {
  const action: any = { type };
  return function(...args: any) {
    argNames.forEach((arg: any, index: number) => {
      action[argNames[index]] = args[index];
    });

    return action;
  };
};

export function forwardTo(location: any) {
  history.push(location);
}
