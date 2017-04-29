import { StorePermissions } from './ufs-store-permissions';

/**
 * UploadFS configuration
 */
export var Config: ConfigStatic;

interface ConfigOptions {
  defaultStorePermissions?: StorePermissions;
  https?: boolean;
  simulateReadDelay?: number;
  simulateUploadSpeed?: number;
  simulateWriteDelay?: number
  storesPath?: string;
  tmpDir?: string;
  tmpDirPermissions?: string;
}

interface ConfigStatic {
  new (
    options: ConfigOptions
  ): Config;
}

interface Config {
// export class Config {

  // constructor(
  //   options: ConfigOptions
  // );

  /**
   * Default store permissions
   * @type {UploadFS.StorePermissions}
   */
  defaultStorePermissions: StorePermissions;
  /**
   * Use or not secured protocol in URLS
   * @type {boolean}
   */
  https: boolean;
  /**
   * The simulation read delay
   * @type {Number}
   */
  simulateReadDelay: number;
  /**
   * The simulation upload speed
   * @type {Number}
   */
  simulateUploadSpeed: number;
  /**
   * The simulation write delay
   * @type {Number}
   */
  simulateWriteDelay: number;
  /**
   * The URL root path of stores
   * @type {string}
   */
  storesPath: string;
  /**
   * The temporary directory of uploading files
   * @type {string}
   */
  tmpDir: string
  /**
   * The permissions of the temporary directory
   * @type {string}
   */
  tmpDirPermissions: string;

}
