import { Config, ConfigStatic } from './ufs-config';
import { Filter } from './ufs-filter';
import { Store } from './ufs-store';
import { StorePermissions } from './ufs-store-permissions';
import { Uploader } from './ufs-uploader';

// type ConfigClass = typeof Config;
// type FilterClass = typeof Filter;
// type StoreClass = typeof Store;
// type StorePermissionsClass = typeof StorePermissions;
// type UploaderClass = typeof Uploader;

export var UploadFS;
interface UploadFS {

  /**
   * UploadFS Configuration
   * @type {Config}
   */
  config: Config;

  /**
   * Contains all stores
   */
  store: {
    [name: string]: Store;
  };

    /**
   * Collection of tokens
   */
  tokens: Mongo.Collection<any>;

  /**
   * Adds the "etag" attribute to files
   * @param where
   */
  addETagAttributeToFiles(
    where: any
  ): void;

  /**
   * Adds the MIME type for an extension
   * @param extension
   * @param mime
   */
  addMimeType(
    extension: string,
    mime: string
  ): void;

  /**
   * Adds the "path" attribute to files
   * @param where
   */
  addPathAttributeToFiles(
    where: any
  ): void;

  /**
   * Registers the store
   * @param store
   */
  addStore(
    store: Store
  ): void;

  /**
   * Generates a unique ETag
   * @return {string}
   */
  generateEtag(
  ): string;

  /**
   * Returns the MIME type of the extension
   * @param extension
   * @returns {*}
   */
  getMimeType(
    extension: string
  ): string;

  /**
   * Returns all MIME types
   */
  getMimeTypes(
  ): {
    [extension: string]: string;
  };

  /**
   * Returns the store by its name
   * @param name
   * @return {UploadFS.Store}
   */
  getStore(
    name: string
  ): Store;

  /**
   * Returns all stores
   * @return {object}
   */
  getStores(
  ): {
    [name: string]: Store;
  };

  /**
   * Returns the temporary file path
   * @param fileId
   * @return {string}
   */
  getTempFilePath(
    fileId: string
  ): string;

  /**
   * Imports a file from a URL
   * @param url
   * @param file
   * @param store
   * @param callback
   */
  importFromURL(
    url: string,
    file,
    store: string | Store,
    callback: Function
  ): void;

  /**
   * Returns file and data as ArrayBuffer for each files in the event
   * @deprecated
   * @param event
   * @param callback
   */
  readAsArrayBuffer(
    event: any,
    callback: Function
  ): void;

  /**
   * Opens a dialog to select a single file
   * @param callback
   */
  selectFile(
    callback: Function
  ): void;

  /**
   * Opens a dialog to select multiple files
   * @param callback
   */
  selectFiles(
    callback: Function
  ): void;

  // const Config: ConfigClass;
  // const Filter: FilterClass;
  // const Store: StoreClass;
  // const StorePermissions: StorePermissionsClass;
  // const Uploader: UploaderClass;

  Config: ConfigStatic;

}
