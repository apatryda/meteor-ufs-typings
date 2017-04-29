/**
 * Store permissions
 */
export var StorePermissions: StorePermissionsStatic;

interface StorePermissionsStatic {
  constructor(
    options: StorePermissionsOptions
  ): StorePermissions;
}

type StorePermissionsPermissionFunction = (
  userId: string,
  file,
  fields,
  modifiers
) => boolean;

interface StorePermissionsOptions {
  insert?: StorePermissionsPermissionFunction;
  remove?: StorePermissionsPermissionFunction;
  update?: StorePermissionsPermissionFunction;
}

interface StorePermissions {

  actions: {
    insert: StorePermissionsPermissionFunction;
    remove: StorePermissionsPermissionFunction;
    update: StorePermissionsPermissionFunction;
  };


  /**
   * Checks the permission for the action
   * @param action
   * @param userId
   * @param file
   * @param fields
   * @param modifiers
   * @return {*}
   */
  check(
    action: string,
    userId: string,
    file,
    fields,
    modifiers
  ): boolean;

  /**
   * Checks the insert permission
   * @param userId
   * @param file
   * @returns {*}
   */
  checkInsert(
    userId: string,
    file
  ): boolean;

  /**
   * Checks the remove permission
   * @param userId
   * @param file
   * @returns {*}
   */
  checkRemove(
    userId: string,
    file
  ): boolean;

  /**
   * Checks the update permission
   * @param userId
   * @param file
   * @param fields
   * @param modifiers
   * @returns {*}
   */
  checkUpdate(
    userId: string,
    file,
    fields,
    modifiers
  ): boolean;

}
