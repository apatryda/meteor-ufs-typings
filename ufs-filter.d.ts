/**
 * File filter
 */
export var Filter: FilterStatic;

interface FilterOptions {
  contentTypes?: string[];
  extensions?: string[];
  minSize?: number;
  maxSize?: number;
  onCheck?: Function;
}

interface FilterStatic {
  new (
    options: FilterOptions
  ): Filter;
}

interface Filter {

  constructor(
    options: FilterOptions
  );

  /**
   * Checks the file
   * @param file
   */
  check(
    file
  ): void;

  /**
   * Returns the allowed content types
   * @return {Array}
   */
  getContentTypes(
  ): string[];

  /**
   * Returns the allowed extensions
   * @return {Array}
   */
  getExtensions(
  ): string[];

  /**
   * Returns the maximum file size
   * @return {Number}
   */
  getMaxSize(
  ): number;

  /**
   * Returns the minimum file size
   * @return {Number}
   */
  getMinSize(
  ): number;

  /**
   * Checks if content type is in the given list
   * @param type
   * @param list
   * @return {boolean}
   */
  isContentTypeInList(
    type: string,
    list: string[]
  ): boolean;

  /**
   * Checks if the file matches filter
   * @param file
   * @return {boolean}
   */
  isValid(
    file
  ): boolean;

  /**
   * Executes custom checks
   * @param file
   * @return {boolean}
   */
  onCheck(
    file
  ): boolean;

}
