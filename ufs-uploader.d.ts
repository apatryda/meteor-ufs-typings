import { Store } from './ufs-store';

interface UploaderOptions {
  adaptive?: boolean;
  capacity?: number;
  chunkSize?: number;
  data?: Blob | File;
  file?: any;
  maxChunkSize?: number;
  maxTries?: number;
  onAbort?: Function;
  onComplete?: Function;
  onCreate?: Function;
  onError?: Function;
  onProgress?: Function;
  onStart?: Function;
  onStop?: Function;
  retryDelay?: number;
  store?: string | Store;
  transferDelay?: number;
}

/**
 * File uploader
 */
export class Uploader {

  adaptive: boolean;
  capacity: number;
  chunkSize: number;
  maxChunkSize: number;
  maxTries: number;
  retryDelay: number;
  transferDelay: number;

  constructor(
    options: UploaderOptions
  );

  /**
   * Aborts the current transfer
   */
  abort(
  ): void;

  /**
   * Returns the average speed in bytes per second
   * @returns {number}
   */
  getAverageSpeed(
  ): number;

  /**
   * Returns the elapsed time in milliseconds
   * @returns {number}
   */
  getElapsedTime(
  ): number;

  /**
   * Returns the file
   * @return {object}
   */
  getFile(
  ): any;

  /**
   * Returns the loaded bytes
   * @return {number}
   */
  getLoaded(
  ): number;

  /**
   * Returns current progress
   * @return {number}
   */
  getProgress(
  ): number;

  /**
   * Returns the remaining time in milliseconds
   * @returns {number}
   */
  getRemainingTime(
  ): number;

  /**
   * Returns the upload speed in bytes per second
   * @returns {number}
   */
  getSpeed(
  ): number;

  /**
   * Returns the total bytes
   * @return {number}
   */
  getTotal(
  ): number;

  /**
   * Checks if the transfer is complete
   * @return {boolean}
   */
  isComplete(
  ): boolean;

  /**
   * Checks if the transfer is active
   * @return {boolean}
   */
  isUploading(
  ): boolean;

  /**
   * Reads a portion of file
   * @param start
   * @param length
   * @param callback
   * @returns {Blob}
   */
  readChunk(
    start: number,
    length: number,
    callback: Function
  ): void;

  /**
   * Sends a file chunk to the store
   */
  sendChunk(
  ): void;

  /**
   * Starts or resumes the transfer
   */
  start(
  ): void;

  /**
   * Stops the transfer
   */
  stop(
  ): void;

  /**
   * Called when the file upload is aborted
   * @param file
   */
  onAbort(
    file
  ): void;

  /**
   * Called when the file upload is complete
   * @param file
   */
  onComplete(
    file
  ): void;

  /**
   * Called when the file is created in the collection
   * @param file
   */
  onCreate(
    file
  ): void;

  /**
   * Called when an error occurs during file upload
   * @param err
   * @param file
   */
  onError(
    err: any,
    file
  ): void;

  /**
   * Called when a file chunk has been sent
   * @param file
   * @param progress is a float from 0.0 to 1.0
   */
  onProgress(
    file,
    progress: number
  ): void;

  /**
   * Called when the file upload starts
   * @param file
   */
  onStart(
    file
  ): void;

  /**
   * Called when the file upload stops
   * @param file
   */
  onStop(
    file
  ): void;

}
