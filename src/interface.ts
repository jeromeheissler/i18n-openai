import { getPath } from './utils/path';

export type ObjectType = { [key: string]: string | any[] | any };

export type ObjectArrayOrString = ObjectType | string | any[];

export type ProcessFunction = (str: string) => Promise<string>;

export type Locales =
  | 'en'
  | 'ar'
  | 'cs'
  | 'de'
  | 'es'
  | 'fr'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'sk'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh';

export interface IConfig {
  skipLocales: string[];
  mainLocale: Locales;
  pathToLocalesFolders: string;
}

export interface IRuntimePaths {
  LOCALES_FOLDER: string;
  MAIN_LOCALE_FOLDER: string;
}

export interface IParsedArguments {
  locales?: string[];
  files?: string[];
}

export interface IFiltered {
  locales: string[];
  files: string[];
}

export interface IConfigWithPaths {
  config: IConfig;
  runtimePaths: IRuntimePaths;
}
