
// declare module "meteor/jalik:ufs" {
  // interface Uploader {
  //   start(): void;
  //   stop(): void;
  //   abort(): void;
  // }
  import * as STREAM from 'stream';

  export module UploadFS {

    class Filter {
      constructor( options: any );
    }

    class Store {
      constructor( options: any );
      copy( fileId: string, store: Store, callback?: Function ): void;
      create( file: any, callback?: Function );
      generateToken( pattern: string ): string;
      getCollection(): Mongo.Collection<any>;
      getName(): string;
      getReadStream( fileId: string, file: any, options?: any ): STREAM.Readable;
      getWriteStream( fileId: string, file: any, options?: any ): STREAM.Writable;
      write( rs: STREAM.Readable, fileId: string, callback?: Function );
    }

    class StorePermissions {
      constructor( options: any );
    }

    class Uploader {
      constructor( options: any );
      start(): void;
      stop(): void;
      abort(): void;
    }
    const store: { [storeName: string]: any };

    function getStore( name: string ): Store;
    function getStores(): { [name:string]: Store };

    function selectFile( f: ( file: any ) => void ): void;
    function selectFiles( f: ( file: any ) => void ): void;
  }

  // export var UploadFS;
// }
