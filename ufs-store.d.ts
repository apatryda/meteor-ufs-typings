import { Mongo } from 'meteor/mongo';
import { Readable, Writable } from 'stream';
import { Filter } from './ufs-filter';
import { StorePermissions } from './ufs-store-permissions';

/**
 * File store
 */
export var Store: StoreStatic;

interface StoreOptions {
  collection?: Mongo.Collection<any>;
  filter?: Filter;
  name?: string;
  onCopyError?: Function;
  onFinishUpload?: Function;
  onRead?: Function;
  onReadError?: Function;
  onValidate?: Function;
  onWriteError?: Function;
  permissions: StorePermissions;
  transformRead: Function;
  transformWrite: Function;
}

interface StoreStatic {
  new (
    options: StoreOptions
  ): Store;
}

interface Store {

  /**
   * Deletes a file async
   * @param fileId
   * @param callback
   */
  delete(
    fileId: string,
    callback: Function
  ): void;

  /**
   * Generates a random token
   * @param pattern
   * @return {string}
   */
  generateToken(
    pattern: string
  ): string;

  /**
   * Returns the collection
   * @return {Mongo.Collection}
   */
  getCollection(
  ): Mongo.Collection<any>;

  /**
   * Returns the file URL
   * @param fileId
   * @return {string|null}
   */
  getFileRelativeURL(
    fileId: string
  ): string;

  /**
   * Returns the file URL
   * @param fileId
   * @return {string|null}
   */
  getFileURL(
    fileId: string
  ): string;

  /**
   * Returns the file filter
   * @return {UploadFS.Filter}
   */
  getFilter(
  ): Filter;

  /**
   * Returns the store name
   * @return {string}
   */
  getName(
  ): string;

  /**
   * Returns the file read stream
   * @param fileId
   * @param file
   */
  getReadStream(
    fileId: string,
    file
  ): Readable;

  /**
   * Returns the store relative URL
   * @param path
   * @return {string}
   */
  getRelativeURL(
    path: string
  ): string;

  /**
   * Returns the store absolute URL
   * @param path
   * @return {string}
   */
  getURL(
    path: string
  ): string;

  /**
   * Returns the file write stream
   * @param fileId
   * @param file
   */
  getWriteStream(
    fileId: string,
    file
  ): Writable;

  /**
   * Completes the file upload
   * @param url
   * @param file
   * @param callback
   */
  importFromURL(
    url: string,
    file,
    callback: Function
  ): void;

  /**
   * Called when a copy error happened
   * @param err
   * @param fileId
   * @param file
   */
  onCopyError(
    err,
    fileId: string,
    file
  ): void;

  /**
   * Called when a file has been uploaded
   * @param file
   */
  onFinishUpload(
    file
  ): void;

  /**
   * Called when a file is read from the store
   * @param fileId
   * @param file
   * @param request
   * @param response
   * @return boolean
   */
  onRead(
    fileId: string,
    file,
    request,
    response
  ): boolean;

  /**
   * Called when a read error happened
   * @param err
   * @param fileId
   * @param file
   * @return boolean
   */
  onReadError(
    err,
    fileId: string,
    file
  ): boolean;

  /**
   * Called when file is being validated
   * @param file
   */
  onValidate(
    file
  ): void;

  /**
   * Called when a write error happened
   * @param err
   * @param fileId
   * @param file
   * @return boolean
   */
  onWriteError(
    err,
    fileId: string,
    file
  ): boolean;

  /**
   * Sets the store permissions
   * @param permissions
   */
  setPermissions(
    permissions
  ): void;

  /**
   * Transforms the file on reading
   * @param readStream
   * @param writeStream
   * @param fileId
   * @param file
   * @param request
   * @param headers
   */
  transformRead(
    readStream: Readable,
    writeStream: Writable,
    fileId: string,
    file,
    request,
    headers
  ): void;

  /**
   * Transforms the file on writing
   * @param readStream
   * @param writeStream
   * @param fileId
   * @param file
   */
  transformWrite(
    readStream: Readable,
    writeStream: Writable,
    fileId: string,
    file
  ): void;

  /**
   * Validates the file
   * @param file
   */
  validate(
    file
  ): void;

}
