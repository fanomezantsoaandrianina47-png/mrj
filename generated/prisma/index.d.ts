
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Cours
 * 
 */
export type Cours = $Result.DefaultSelection<Prisma.$CoursPayload>
/**
 * Model Ecolage
 * 
 */
export type Ecolage = $Result.DefaultSelection<Prisma.$EcolagePayload>
/**
 * Model Choix
 * 
 */
export type Choix = $Result.DefaultSelection<Prisma.$ChoixPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Statut: {
  EN_COURS: 'EN_COURS',
  FINI: 'FINI'
};

export type Statut = (typeof Statut)[keyof typeof Statut]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cours`: Exposes CRUD operations for the **Cours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cours
    * const cours = await prisma.cours.findMany()
    * ```
    */
  get cours(): Prisma.CoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ecolage`: Exposes CRUD operations for the **Ecolage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ecolages
    * const ecolages = await prisma.ecolage.findMany()
    * ```
    */
  get ecolage(): Prisma.EcolageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choix`: Exposes CRUD operations for the **Choix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choixes
    * const choixes = await prisma.choix.findMany()
    * ```
    */
  get choix(): Prisma.ChoixDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Categorie: 'Categorie',
    Cours: 'Cours',
    Ecolage: 'Ecolage',
    Choix: 'Choix',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "categorie" | "cours" | "ecolage" | "choix" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Cours: {
        payload: Prisma.$CoursPayload<ExtArgs>
        fields: Prisma.CoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          findFirst: {
            args: Prisma.CoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          findMany: {
            args: Prisma.CoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>[]
          }
          create: {
            args: Prisma.CoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          createMany: {
            args: Prisma.CoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>[]
          }
          delete: {
            args: Prisma.CoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          update: {
            args: Prisma.CoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          deleteMany: {
            args: Prisma.CoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>[]
          }
          upsert: {
            args: Prisma.CoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursPayload>
          }
          aggregate: {
            args: Prisma.CoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCours>
          }
          groupBy: {
            args: Prisma.CoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursCountArgs<ExtArgs>
            result: $Utils.Optional<CoursCountAggregateOutputType> | number
          }
        }
      }
      Ecolage: {
        payload: Prisma.$EcolagePayload<ExtArgs>
        fields: Prisma.EcolageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EcolageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EcolageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>
          }
          findFirst: {
            args: Prisma.EcolageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EcolageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>
          }
          findMany: {
            args: Prisma.EcolageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>[]
          }
          create: {
            args: Prisma.EcolageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>
          }
          createMany: {
            args: Prisma.EcolageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EcolageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>[]
          }
          delete: {
            args: Prisma.EcolageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>
          }
          update: {
            args: Prisma.EcolageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>
          }
          deleteMany: {
            args: Prisma.EcolageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EcolageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EcolageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>[]
          }
          upsert: {
            args: Prisma.EcolageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EcolagePayload>
          }
          aggregate: {
            args: Prisma.EcolageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEcolage>
          }
          groupBy: {
            args: Prisma.EcolageGroupByArgs<ExtArgs>
            result: $Utils.Optional<EcolageGroupByOutputType>[]
          }
          count: {
            args: Prisma.EcolageCountArgs<ExtArgs>
            result: $Utils.Optional<EcolageCountAggregateOutputType> | number
          }
        }
      }
      Choix: {
        payload: Prisma.$ChoixPayload<ExtArgs>
        fields: Prisma.ChoixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          findFirst: {
            args: Prisma.ChoixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          findMany: {
            args: Prisma.ChoixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>[]
          }
          create: {
            args: Prisma.ChoixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          createMany: {
            args: Prisma.ChoixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoixCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>[]
          }
          delete: {
            args: Prisma.ChoixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          update: {
            args: Prisma.ChoixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          deleteMany: {
            args: Prisma.ChoixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoixUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>[]
          }
          upsert: {
            args: Prisma.ChoixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoixPayload>
          }
          aggregate: {
            args: Prisma.ChoixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoix>
          }
          groupBy: {
            args: Prisma.ChoixGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoixGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoixCountArgs<ExtArgs>
            result: $Utils.Optional<ChoixCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    categorie?: CategorieOmit
    cours?: CoursOmit
    ecolage?: EcolageOmit
    choix?: ChoixOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ecolages: number
    choixs: number
    messagesSent: number
    messagesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ecolages?: boolean | UserCountOutputTypeCountEcolagesArgs
    choixs?: boolean | UserCountOutputTypeCountChoixsArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEcolagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EcolageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChoixsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    cours: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | CategorieCountOutputTypeCountCoursArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountCoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursWhereInput
  }


  /**
   * Count Type CoursCountOutputType
   */

  export type CoursCountOutputType = {
    choixs: number
  }

  export type CoursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choixs?: boolean | CoursCountOutputTypeCountChoixsArgs
  }

  // Custom InputTypes
  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursCountOutputType
     */
    select?: CoursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursCountOutputType without action
   */
  export type CoursCountOutputTypeCountChoixsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    photo: string | null
    nom: string | null
    email: string | null
    mdp: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    photo: string | null
    nom: string | null
    email: string | null
    mdp: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    photo: number
    nom: number
    email: number
    mdp: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    photo?: true
    nom?: true
    email?: true
    mdp?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    photo?: true
    nom?: true
    email?: true
    mdp?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    photo?: true
    nom?: true
    email?: true
    mdp?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    photo: string | null
    nom: string
    email: string
    mdp: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    nom?: boolean
    email?: boolean
    mdp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ecolages?: boolean | User$ecolagesArgs<ExtArgs>
    choixs?: boolean | User$choixsArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    nom?: boolean
    email?: boolean
    mdp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    nom?: boolean
    email?: boolean
    mdp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    photo?: boolean
    nom?: boolean
    email?: boolean
    mdp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo" | "nom" | "email" | "mdp" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ecolages?: boolean | User$ecolagesArgs<ExtArgs>
    choixs?: boolean | User$choixsArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesReceived?: boolean | User$messagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ecolages: Prisma.$EcolagePayload<ExtArgs>[]
      choixs: Prisma.$ChoixPayload<ExtArgs>[]
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      messagesReceived: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      photo: string | null
      nom: string
      email: string
      mdp: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ecolages<T extends User$ecolagesArgs<ExtArgs> = {}>(args?: Subset<T, User$ecolagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    choixs<T extends User$choixsArgs<ExtArgs> = {}>(args?: Subset<T, User$choixsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesReceived<T extends User$messagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly photo: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly mdp: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ecolages
   */
  export type User$ecolagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    where?: EcolageWhereInput
    orderBy?: EcolageOrderByWithRelationInput | EcolageOrderByWithRelationInput[]
    cursor?: EcolageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EcolageScalarFieldEnum | EcolageScalarFieldEnum[]
  }

  /**
   * User.choixs
   */
  export type User$choixsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    cursor?: ChoixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.messagesReceived
   */
  export type User$messagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id: number | null
    categorie: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: number | null
    categorie: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    categorie: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id?: true
  }

  export type CategorieSumAggregateInputType = {
    id?: true
  }

  export type CategorieMinAggregateInputType = {
    id?: true
    categorie?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    categorie?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    categorie?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: number
    categorie: string
    createdAt: Date
    updatedAt: Date
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cours?: boolean | Categorie$coursArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id?: boolean
    categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categorie" | "createdAt" | "updatedAt", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cours?: boolean | Categorie$coursArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      cours: Prisma.$CoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categorie: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cours<T extends Categorie$coursArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$coursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id: FieldRef<"Categorie", 'Int'>
    readonly categorie: FieldRef<"Categorie", 'String'>
    readonly createdAt: FieldRef<"Categorie", 'DateTime'>
    readonly updatedAt: FieldRef<"Categorie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.cours
   */
  export type Categorie$coursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    where?: CoursWhereInput
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    cursor?: CoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Cours
   */

  export type AggregateCours = {
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  export type CoursAvgAggregateOutputType = {
    id: number | null
    id_categorie: number | null
  }

  export type CoursSumAggregateOutputType = {
    id: number | null
    id_categorie: number | null
  }

  export type CoursMinAggregateOutputType = {
    id: number | null
    titre: string | null
    video: string | null
    description: string | null
    id_categorie: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    video: string | null
    description: string | null
    id_categorie: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursCountAggregateOutputType = {
    id: number
    titre: number
    video: number
    description: number
    id_categorie: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoursAvgAggregateInputType = {
    id?: true
    id_categorie?: true
  }

  export type CoursSumAggregateInputType = {
    id?: true
    id_categorie?: true
  }

  export type CoursMinAggregateInputType = {
    id?: true
    titre?: true
    video?: true
    description?: true
    id_categorie?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursMaxAggregateInputType = {
    id?: true
    titre?: true
    video?: true
    description?: true
    id_categorie?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursCountAggregateInputType = {
    id?: true
    titre?: true
    video?: true
    description?: true
    id_categorie?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cours to aggregate.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cours
    **/
    _count?: true | CoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursMaxAggregateInputType
  }

  export type GetCoursAggregateType<T extends CoursAggregateArgs> = {
        [P in keyof T & keyof AggregateCours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCours[P]>
      : GetScalarType<T[P], AggregateCours[P]>
  }




  export type CoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursWhereInput
    orderBy?: CoursOrderByWithAggregationInput | CoursOrderByWithAggregationInput[]
    by: CoursScalarFieldEnum[] | CoursScalarFieldEnum
    having?: CoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursCountAggregateInputType | true
    _avg?: CoursAvgAggregateInputType
    _sum?: CoursSumAggregateInputType
    _min?: CoursMinAggregateInputType
    _max?: CoursMaxAggregateInputType
  }

  export type CoursGroupByOutputType = {
    id: number
    titre: string
    video: string
    description: string
    id_categorie: number
    createdAt: Date
    updatedAt: Date
    _count: CoursCountAggregateOutputType | null
    _avg: CoursAvgAggregateOutputType | null
    _sum: CoursSumAggregateOutputType | null
    _min: CoursMinAggregateOutputType | null
    _max: CoursMaxAggregateOutputType | null
  }

  type GetCoursGroupByPayload<T extends CoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursGroupByOutputType[P]>
            : GetScalarType<T[P], CoursGroupByOutputType[P]>
        }
      >
    >


  export type CoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    video?: boolean
    description?: boolean
    id_categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    choixs?: boolean | Cours$choixsArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type CoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    video?: boolean
    description?: boolean
    id_categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type CoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    video?: boolean
    description?: boolean
    id_categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cours"]>

  export type CoursSelectScalar = {
    id?: boolean
    titre?: boolean
    video?: boolean
    description?: boolean
    id_categorie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "video" | "description" | "id_categorie" | "createdAt" | "updatedAt", ExtArgs["result"]["cours"]>
  export type CoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    choixs?: boolean | Cours$choixsArgs<ExtArgs>
    _count?: boolean | CoursCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }
  export type CoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
  }

  export type $CoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cours"
    objects: {
      categorie: Prisma.$CategoriePayload<ExtArgs>
      choixs: Prisma.$ChoixPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      video: string
      description: string
      id_categorie: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cours"]>
    composites: {}
  }

  type CoursGetPayload<S extends boolean | null | undefined | CoursDefaultArgs> = $Result.GetResult<Prisma.$CoursPayload, S>

  type CoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursCountAggregateInputType | true
    }

  export interface CoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cours'], meta: { name: 'Cours' } }
    /**
     * Find zero or one Cours that matches the filter.
     * @param {CoursFindUniqueArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursFindUniqueArgs>(args: SelectSubset<T, CoursFindUniqueArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursFindUniqueOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindFirstArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursFindFirstArgs>(args?: SelectSubset<T, CoursFindFirstArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindFirstOrThrowArgs} args - Arguments to find a Cours
     * @example
     * // Get one Cours
     * const cours = await prisma.cours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cours
     * const cours = await prisma.cours.findMany()
     * 
     * // Get first 10 Cours
     * const cours = await prisma.cours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursWithIdOnly = await prisma.cours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursFindManyArgs>(args?: SelectSubset<T, CoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cours.
     * @param {CoursCreateArgs} args - Arguments to create a Cours.
     * @example
     * // Create one Cours
     * const Cours = await prisma.cours.create({
     *   data: {
     *     // ... data to create a Cours
     *   }
     * })
     * 
     */
    create<T extends CoursCreateArgs>(args: SelectSubset<T, CoursCreateArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cours.
     * @param {CoursCreateManyArgs} args - Arguments to create many Cours.
     * @example
     * // Create many Cours
     * const cours = await prisma.cours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursCreateManyArgs>(args?: SelectSubset<T, CoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cours and returns the data saved in the database.
     * @param {CoursCreateManyAndReturnArgs} args - Arguments to create many Cours.
     * @example
     * // Create many Cours
     * const cours = await prisma.cours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cours and only return the `id`
     * const coursWithIdOnly = await prisma.cours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cours.
     * @param {CoursDeleteArgs} args - Arguments to delete one Cours.
     * @example
     * // Delete one Cours
     * const Cours = await prisma.cours.delete({
     *   where: {
     *     // ... filter to delete one Cours
     *   }
     * })
     * 
     */
    delete<T extends CoursDeleteArgs>(args: SelectSubset<T, CoursDeleteArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cours.
     * @param {CoursUpdateArgs} args - Arguments to update one Cours.
     * @example
     * // Update one Cours
     * const cours = await prisma.cours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursUpdateArgs>(args: SelectSubset<T, CoursUpdateArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cours.
     * @param {CoursDeleteManyArgs} args - Arguments to filter Cours to delete.
     * @example
     * // Delete a few Cours
     * const { count } = await prisma.cours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursDeleteManyArgs>(args?: SelectSubset<T, CoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cours
     * const cours = await prisma.cours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursUpdateManyArgs>(args: SelectSubset<T, CoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cours and returns the data updated in the database.
     * @param {CoursUpdateManyAndReturnArgs} args - Arguments to update many Cours.
     * @example
     * // Update many Cours
     * const cours = await prisma.cours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cours and only return the `id`
     * const coursWithIdOnly = await prisma.cours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cours.
     * @param {CoursUpsertArgs} args - Arguments to update or create a Cours.
     * @example
     * // Update or create a Cours
     * const cours = await prisma.cours.upsert({
     *   create: {
     *     // ... data to create a Cours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cours we want to update
     *   }
     * })
     */
    upsert<T extends CoursUpsertArgs>(args: SelectSubset<T, CoursUpsertArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursCountArgs} args - Arguments to filter Cours to count.
     * @example
     * // Count the number of Cours
     * const count = await prisma.cours.count({
     *   where: {
     *     // ... the filter for the Cours we want to count
     *   }
     * })
    **/
    count<T extends CoursCountArgs>(
      args?: Subset<T, CoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursAggregateArgs>(args: Subset<T, CoursAggregateArgs>): Prisma.PrismaPromise<GetCoursAggregateType<T>>

    /**
     * Group by Cours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursGroupByArgs['orderBy'] }
        : { orderBy?: CoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cours model
   */
  readonly fields: CoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    choixs<T extends Cours$choixsArgs<ExtArgs> = {}>(args?: Subset<T, Cours$choixsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cours model
   */
  interface CoursFieldRefs {
    readonly id: FieldRef<"Cours", 'Int'>
    readonly titre: FieldRef<"Cours", 'String'>
    readonly video: FieldRef<"Cours", 'String'>
    readonly description: FieldRef<"Cours", 'String'>
    readonly id_categorie: FieldRef<"Cours", 'Int'>
    readonly createdAt: FieldRef<"Cours", 'DateTime'>
    readonly updatedAt: FieldRef<"Cours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cours findUnique
   */
  export type CoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours findUniqueOrThrow
   */
  export type CoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours findFirst
   */
  export type CoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours findFirstOrThrow
   */
  export type CoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cours.
     */
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours findMany
   */
  export type CoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter, which Cours to fetch.
     */
    where?: CoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cours to fetch.
     */
    orderBy?: CoursOrderByWithRelationInput | CoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cours.
     */
    cursor?: CoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cours.
     */
    skip?: number
    distinct?: CoursScalarFieldEnum | CoursScalarFieldEnum[]
  }

  /**
   * Cours create
   */
  export type CoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The data needed to create a Cours.
     */
    data: XOR<CoursCreateInput, CoursUncheckedCreateInput>
  }

  /**
   * Cours createMany
   */
  export type CoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cours.
     */
    data: CoursCreateManyInput | CoursCreateManyInput[]
  }

  /**
   * Cours createManyAndReturn
   */
  export type CoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * The data used to create many Cours.
     */
    data: CoursCreateManyInput | CoursCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cours update
   */
  export type CoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The data needed to update a Cours.
     */
    data: XOR<CoursUpdateInput, CoursUncheckedUpdateInput>
    /**
     * Choose, which Cours to update.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours updateMany
   */
  export type CoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cours.
     */
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyInput>
    /**
     * Filter which Cours to update
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to update.
     */
    limit?: number
  }

  /**
   * Cours updateManyAndReturn
   */
  export type CoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * The data used to update Cours.
     */
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyInput>
    /**
     * Filter which Cours to update
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cours upsert
   */
  export type CoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * The filter to search for the Cours to update in case it exists.
     */
    where: CoursWhereUniqueInput
    /**
     * In case the Cours found by the `where` argument doesn't exist, create a new Cours with this data.
     */
    create: XOR<CoursCreateInput, CoursUncheckedCreateInput>
    /**
     * In case the Cours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursUpdateInput, CoursUncheckedUpdateInput>
  }

  /**
   * Cours delete
   */
  export type CoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
    /**
     * Filter which Cours to delete.
     */
    where: CoursWhereUniqueInput
  }

  /**
   * Cours deleteMany
   */
  export type CoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cours to delete
     */
    where?: CoursWhereInput
    /**
     * Limit how many Cours to delete.
     */
    limit?: number
  }

  /**
   * Cours.choixs
   */
  export type Cours$choixsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    cursor?: ChoixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Cours without action
   */
  export type CoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cours
     */
    select?: CoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cours
     */
    omit?: CoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursInclude<ExtArgs> | null
  }


  /**
   * Model Ecolage
   */

  export type AggregateEcolage = {
    _count: EcolageCountAggregateOutputType | null
    _avg: EcolageAvgAggregateOutputType | null
    _sum: EcolageSumAggregateOutputType | null
    _min: EcolageMinAggregateOutputType | null
    _max: EcolageMaxAggregateOutputType | null
  }

  export type EcolageAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
    mois: number | null
    annee: number | null
  }

  export type EcolageSumAggregateOutputType = {
    id: number | null
    id_user: number | null
    mois: number | null
    annee: number | null
  }

  export type EcolageMinAggregateOutputType = {
    id: number | null
    id_user: number | null
    mois: number | null
    annee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EcolageMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
    mois: number | null
    annee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EcolageCountAggregateOutputType = {
    id: number
    id_user: number
    mois: number
    annee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EcolageAvgAggregateInputType = {
    id?: true
    id_user?: true
    mois?: true
    annee?: true
  }

  export type EcolageSumAggregateInputType = {
    id?: true
    id_user?: true
    mois?: true
    annee?: true
  }

  export type EcolageMinAggregateInputType = {
    id?: true
    id_user?: true
    mois?: true
    annee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EcolageMaxAggregateInputType = {
    id?: true
    id_user?: true
    mois?: true
    annee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EcolageCountAggregateInputType = {
    id?: true
    id_user?: true
    mois?: true
    annee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EcolageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ecolage to aggregate.
     */
    where?: EcolageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ecolages to fetch.
     */
    orderBy?: EcolageOrderByWithRelationInput | EcolageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EcolageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ecolages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ecolages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ecolages
    **/
    _count?: true | EcolageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EcolageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EcolageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EcolageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EcolageMaxAggregateInputType
  }

  export type GetEcolageAggregateType<T extends EcolageAggregateArgs> = {
        [P in keyof T & keyof AggregateEcolage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEcolage[P]>
      : GetScalarType<T[P], AggregateEcolage[P]>
  }




  export type EcolageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EcolageWhereInput
    orderBy?: EcolageOrderByWithAggregationInput | EcolageOrderByWithAggregationInput[]
    by: EcolageScalarFieldEnum[] | EcolageScalarFieldEnum
    having?: EcolageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EcolageCountAggregateInputType | true
    _avg?: EcolageAvgAggregateInputType
    _sum?: EcolageSumAggregateInputType
    _min?: EcolageMinAggregateInputType
    _max?: EcolageMaxAggregateInputType
  }

  export type EcolageGroupByOutputType = {
    id: number
    id_user: number
    mois: number
    annee: number
    createdAt: Date
    updatedAt: Date
    _count: EcolageCountAggregateOutputType | null
    _avg: EcolageAvgAggregateOutputType | null
    _sum: EcolageSumAggregateOutputType | null
    _min: EcolageMinAggregateOutputType | null
    _max: EcolageMaxAggregateOutputType | null
  }

  type GetEcolageGroupByPayload<T extends EcolageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EcolageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EcolageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EcolageGroupByOutputType[P]>
            : GetScalarType<T[P], EcolageGroupByOutputType[P]>
        }
      >
    >


  export type EcolageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    mois?: boolean
    annee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ecolage"]>

  export type EcolageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    mois?: boolean
    annee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ecolage"]>

  export type EcolageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    mois?: boolean
    annee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ecolage"]>

  export type EcolageSelectScalar = {
    id?: boolean
    id_user?: boolean
    mois?: boolean
    annee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EcolageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "mois" | "annee" | "createdAt" | "updatedAt", ExtArgs["result"]["ecolage"]>
  export type EcolageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EcolageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EcolageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EcolagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ecolage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
      mois: number
      annee: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ecolage"]>
    composites: {}
  }

  type EcolageGetPayload<S extends boolean | null | undefined | EcolageDefaultArgs> = $Result.GetResult<Prisma.$EcolagePayload, S>

  type EcolageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EcolageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EcolageCountAggregateInputType | true
    }

  export interface EcolageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ecolage'], meta: { name: 'Ecolage' } }
    /**
     * Find zero or one Ecolage that matches the filter.
     * @param {EcolageFindUniqueArgs} args - Arguments to find a Ecolage
     * @example
     * // Get one Ecolage
     * const ecolage = await prisma.ecolage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EcolageFindUniqueArgs>(args: SelectSubset<T, EcolageFindUniqueArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ecolage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EcolageFindUniqueOrThrowArgs} args - Arguments to find a Ecolage
     * @example
     * // Get one Ecolage
     * const ecolage = await prisma.ecolage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EcolageFindUniqueOrThrowArgs>(args: SelectSubset<T, EcolageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ecolage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcolageFindFirstArgs} args - Arguments to find a Ecolage
     * @example
     * // Get one Ecolage
     * const ecolage = await prisma.ecolage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EcolageFindFirstArgs>(args?: SelectSubset<T, EcolageFindFirstArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ecolage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcolageFindFirstOrThrowArgs} args - Arguments to find a Ecolage
     * @example
     * // Get one Ecolage
     * const ecolage = await prisma.ecolage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EcolageFindFirstOrThrowArgs>(args?: SelectSubset<T, EcolageFindFirstOrThrowArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ecolages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcolageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ecolages
     * const ecolages = await prisma.ecolage.findMany()
     * 
     * // Get first 10 Ecolages
     * const ecolages = await prisma.ecolage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ecolageWithIdOnly = await prisma.ecolage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EcolageFindManyArgs>(args?: SelectSubset<T, EcolageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ecolage.
     * @param {EcolageCreateArgs} args - Arguments to create a Ecolage.
     * @example
     * // Create one Ecolage
     * const Ecolage = await prisma.ecolage.create({
     *   data: {
     *     // ... data to create a Ecolage
     *   }
     * })
     * 
     */
    create<T extends EcolageCreateArgs>(args: SelectSubset<T, EcolageCreateArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ecolages.
     * @param {EcolageCreateManyArgs} args - Arguments to create many Ecolages.
     * @example
     * // Create many Ecolages
     * const ecolage = await prisma.ecolage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EcolageCreateManyArgs>(args?: SelectSubset<T, EcolageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ecolages and returns the data saved in the database.
     * @param {EcolageCreateManyAndReturnArgs} args - Arguments to create many Ecolages.
     * @example
     * // Create many Ecolages
     * const ecolage = await prisma.ecolage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ecolages and only return the `id`
     * const ecolageWithIdOnly = await prisma.ecolage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EcolageCreateManyAndReturnArgs>(args?: SelectSubset<T, EcolageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ecolage.
     * @param {EcolageDeleteArgs} args - Arguments to delete one Ecolage.
     * @example
     * // Delete one Ecolage
     * const Ecolage = await prisma.ecolage.delete({
     *   where: {
     *     // ... filter to delete one Ecolage
     *   }
     * })
     * 
     */
    delete<T extends EcolageDeleteArgs>(args: SelectSubset<T, EcolageDeleteArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ecolage.
     * @param {EcolageUpdateArgs} args - Arguments to update one Ecolage.
     * @example
     * // Update one Ecolage
     * const ecolage = await prisma.ecolage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EcolageUpdateArgs>(args: SelectSubset<T, EcolageUpdateArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ecolages.
     * @param {EcolageDeleteManyArgs} args - Arguments to filter Ecolages to delete.
     * @example
     * // Delete a few Ecolages
     * const { count } = await prisma.ecolage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EcolageDeleteManyArgs>(args?: SelectSubset<T, EcolageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ecolages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcolageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ecolages
     * const ecolage = await prisma.ecolage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EcolageUpdateManyArgs>(args: SelectSubset<T, EcolageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ecolages and returns the data updated in the database.
     * @param {EcolageUpdateManyAndReturnArgs} args - Arguments to update many Ecolages.
     * @example
     * // Update many Ecolages
     * const ecolage = await prisma.ecolage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ecolages and only return the `id`
     * const ecolageWithIdOnly = await prisma.ecolage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EcolageUpdateManyAndReturnArgs>(args: SelectSubset<T, EcolageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ecolage.
     * @param {EcolageUpsertArgs} args - Arguments to update or create a Ecolage.
     * @example
     * // Update or create a Ecolage
     * const ecolage = await prisma.ecolage.upsert({
     *   create: {
     *     // ... data to create a Ecolage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ecolage we want to update
     *   }
     * })
     */
    upsert<T extends EcolageUpsertArgs>(args: SelectSubset<T, EcolageUpsertArgs<ExtArgs>>): Prisma__EcolageClient<$Result.GetResult<Prisma.$EcolagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ecolages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcolageCountArgs} args - Arguments to filter Ecolages to count.
     * @example
     * // Count the number of Ecolages
     * const count = await prisma.ecolage.count({
     *   where: {
     *     // ... the filter for the Ecolages we want to count
     *   }
     * })
    **/
    count<T extends EcolageCountArgs>(
      args?: Subset<T, EcolageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EcolageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ecolage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcolageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EcolageAggregateArgs>(args: Subset<T, EcolageAggregateArgs>): Prisma.PrismaPromise<GetEcolageAggregateType<T>>

    /**
     * Group by Ecolage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EcolageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EcolageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EcolageGroupByArgs['orderBy'] }
        : { orderBy?: EcolageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EcolageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEcolageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ecolage model
   */
  readonly fields: EcolageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ecolage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EcolageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ecolage model
   */
  interface EcolageFieldRefs {
    readonly id: FieldRef<"Ecolage", 'Int'>
    readonly id_user: FieldRef<"Ecolage", 'Int'>
    readonly mois: FieldRef<"Ecolage", 'Int'>
    readonly annee: FieldRef<"Ecolage", 'Int'>
    readonly createdAt: FieldRef<"Ecolage", 'DateTime'>
    readonly updatedAt: FieldRef<"Ecolage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ecolage findUnique
   */
  export type EcolageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * Filter, which Ecolage to fetch.
     */
    where: EcolageWhereUniqueInput
  }

  /**
   * Ecolage findUniqueOrThrow
   */
  export type EcolageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * Filter, which Ecolage to fetch.
     */
    where: EcolageWhereUniqueInput
  }

  /**
   * Ecolage findFirst
   */
  export type EcolageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * Filter, which Ecolage to fetch.
     */
    where?: EcolageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ecolages to fetch.
     */
    orderBy?: EcolageOrderByWithRelationInput | EcolageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ecolages.
     */
    cursor?: EcolageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ecolages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ecolages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ecolages.
     */
    distinct?: EcolageScalarFieldEnum | EcolageScalarFieldEnum[]
  }

  /**
   * Ecolage findFirstOrThrow
   */
  export type EcolageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * Filter, which Ecolage to fetch.
     */
    where?: EcolageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ecolages to fetch.
     */
    orderBy?: EcolageOrderByWithRelationInput | EcolageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ecolages.
     */
    cursor?: EcolageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ecolages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ecolages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ecolages.
     */
    distinct?: EcolageScalarFieldEnum | EcolageScalarFieldEnum[]
  }

  /**
   * Ecolage findMany
   */
  export type EcolageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * Filter, which Ecolages to fetch.
     */
    where?: EcolageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ecolages to fetch.
     */
    orderBy?: EcolageOrderByWithRelationInput | EcolageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ecolages.
     */
    cursor?: EcolageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ecolages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ecolages.
     */
    skip?: number
    distinct?: EcolageScalarFieldEnum | EcolageScalarFieldEnum[]
  }

  /**
   * Ecolage create
   */
  export type EcolageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * The data needed to create a Ecolage.
     */
    data: XOR<EcolageCreateInput, EcolageUncheckedCreateInput>
  }

  /**
   * Ecolage createMany
   */
  export type EcolageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ecolages.
     */
    data: EcolageCreateManyInput | EcolageCreateManyInput[]
  }

  /**
   * Ecolage createManyAndReturn
   */
  export type EcolageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * The data used to create many Ecolages.
     */
    data: EcolageCreateManyInput | EcolageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ecolage update
   */
  export type EcolageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * The data needed to update a Ecolage.
     */
    data: XOR<EcolageUpdateInput, EcolageUncheckedUpdateInput>
    /**
     * Choose, which Ecolage to update.
     */
    where: EcolageWhereUniqueInput
  }

  /**
   * Ecolage updateMany
   */
  export type EcolageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ecolages.
     */
    data: XOR<EcolageUpdateManyMutationInput, EcolageUncheckedUpdateManyInput>
    /**
     * Filter which Ecolages to update
     */
    where?: EcolageWhereInput
    /**
     * Limit how many Ecolages to update.
     */
    limit?: number
  }

  /**
   * Ecolage updateManyAndReturn
   */
  export type EcolageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * The data used to update Ecolages.
     */
    data: XOR<EcolageUpdateManyMutationInput, EcolageUncheckedUpdateManyInput>
    /**
     * Filter which Ecolages to update
     */
    where?: EcolageWhereInput
    /**
     * Limit how many Ecolages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ecolage upsert
   */
  export type EcolageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * The filter to search for the Ecolage to update in case it exists.
     */
    where: EcolageWhereUniqueInput
    /**
     * In case the Ecolage found by the `where` argument doesn't exist, create a new Ecolage with this data.
     */
    create: XOR<EcolageCreateInput, EcolageUncheckedCreateInput>
    /**
     * In case the Ecolage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EcolageUpdateInput, EcolageUncheckedUpdateInput>
  }

  /**
   * Ecolage delete
   */
  export type EcolageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
    /**
     * Filter which Ecolage to delete.
     */
    where: EcolageWhereUniqueInput
  }

  /**
   * Ecolage deleteMany
   */
  export type EcolageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ecolages to delete
     */
    where?: EcolageWhereInput
    /**
     * Limit how many Ecolages to delete.
     */
    limit?: number
  }

  /**
   * Ecolage without action
   */
  export type EcolageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ecolage
     */
    select?: EcolageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ecolage
     */
    omit?: EcolageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EcolageInclude<ExtArgs> | null
  }


  /**
   * Model Choix
   */

  export type AggregateChoix = {
    _count: ChoixCountAggregateOutputType | null
    _avg: ChoixAvgAggregateOutputType | null
    _sum: ChoixSumAggregateOutputType | null
    _min: ChoixMinAggregateOutputType | null
    _max: ChoixMaxAggregateOutputType | null
  }

  export type ChoixAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_cours: number | null
  }

  export type ChoixSumAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_cours: number | null
  }

  export type ChoixMinAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_cours: number | null
    statut: $Enums.Statut | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoixMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_cours: number | null
    statut: $Enums.Statut | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoixCountAggregateOutputType = {
    id: number
    id_user: number
    id_cours: number
    statut: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoixAvgAggregateInputType = {
    id?: true
    id_user?: true
    id_cours?: true
  }

  export type ChoixSumAggregateInputType = {
    id?: true
    id_user?: true
    id_cours?: true
  }

  export type ChoixMinAggregateInputType = {
    id?: true
    id_user?: true
    id_cours?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoixMaxAggregateInputType = {
    id?: true
    id_user?: true
    id_cours?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoixCountAggregateInputType = {
    id?: true
    id_user?: true
    id_cours?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChoixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choix to aggregate.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choixes
    **/
    _count?: true | ChoixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoixMaxAggregateInputType
  }

  export type GetChoixAggregateType<T extends ChoixAggregateArgs> = {
        [P in keyof T & keyof AggregateChoix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoix[P]>
      : GetScalarType<T[P], AggregateChoix[P]>
  }




  export type ChoixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoixWhereInput
    orderBy?: ChoixOrderByWithAggregationInput | ChoixOrderByWithAggregationInput[]
    by: ChoixScalarFieldEnum[] | ChoixScalarFieldEnum
    having?: ChoixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoixCountAggregateInputType | true
    _avg?: ChoixAvgAggregateInputType
    _sum?: ChoixSumAggregateInputType
    _min?: ChoixMinAggregateInputType
    _max?: ChoixMaxAggregateInputType
  }

  export type ChoixGroupByOutputType = {
    id: number
    id_user: number
    id_cours: number
    statut: $Enums.Statut
    createdAt: Date
    updatedAt: Date
    _count: ChoixCountAggregateOutputType | null
    _avg: ChoixAvgAggregateOutputType | null
    _sum: ChoixSumAggregateOutputType | null
    _min: ChoixMinAggregateOutputType | null
    _max: ChoixMaxAggregateOutputType | null
  }

  type GetChoixGroupByPayload<T extends ChoixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoixGroupByOutputType[P]>
            : GetScalarType<T[P], ChoixGroupByOutputType[P]>
        }
      >
    >


  export type ChoixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_cours?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choix"]>

  export type ChoixSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_cours?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choix"]>

  export type ChoixSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_cours?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choix"]>

  export type ChoixSelectScalar = {
    id?: boolean
    id_user?: boolean
    id_cours?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChoixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "id_cours" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["choix"]>
  export type ChoixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }
  export type ChoixIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }
  export type ChoixIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cours?: boolean | CoursDefaultArgs<ExtArgs>
  }

  export type $ChoixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choix"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cours: Prisma.$CoursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
      id_cours: number
      statut: $Enums.Statut
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["choix"]>
    composites: {}
  }

  type ChoixGetPayload<S extends boolean | null | undefined | ChoixDefaultArgs> = $Result.GetResult<Prisma.$ChoixPayload, S>

  type ChoixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoixCountAggregateInputType | true
    }

  export interface ChoixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choix'], meta: { name: 'Choix' } }
    /**
     * Find zero or one Choix that matches the filter.
     * @param {ChoixFindUniqueArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoixFindUniqueArgs>(args: SelectSubset<T, ChoixFindUniqueArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Choix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoixFindUniqueOrThrowArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoixFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindFirstArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoixFindFirstArgs>(args?: SelectSubset<T, ChoixFindFirstArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Choix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindFirstOrThrowArgs} args - Arguments to find a Choix
     * @example
     * // Get one Choix
     * const choix = await prisma.choix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoixFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoixFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Choixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choixes
     * const choixes = await prisma.choix.findMany()
     * 
     * // Get first 10 Choixes
     * const choixes = await prisma.choix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choixWithIdOnly = await prisma.choix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoixFindManyArgs>(args?: SelectSubset<T, ChoixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Choix.
     * @param {ChoixCreateArgs} args - Arguments to create a Choix.
     * @example
     * // Create one Choix
     * const Choix = await prisma.choix.create({
     *   data: {
     *     // ... data to create a Choix
     *   }
     * })
     * 
     */
    create<T extends ChoixCreateArgs>(args: SelectSubset<T, ChoixCreateArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Choixes.
     * @param {ChoixCreateManyArgs} args - Arguments to create many Choixes.
     * @example
     * // Create many Choixes
     * const choix = await prisma.choix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoixCreateManyArgs>(args?: SelectSubset<T, ChoixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Choixes and returns the data saved in the database.
     * @param {ChoixCreateManyAndReturnArgs} args - Arguments to create many Choixes.
     * @example
     * // Create many Choixes
     * const choix = await prisma.choix.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Choixes and only return the `id`
     * const choixWithIdOnly = await prisma.choix.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoixCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Choix.
     * @param {ChoixDeleteArgs} args - Arguments to delete one Choix.
     * @example
     * // Delete one Choix
     * const Choix = await prisma.choix.delete({
     *   where: {
     *     // ... filter to delete one Choix
     *   }
     * })
     * 
     */
    delete<T extends ChoixDeleteArgs>(args: SelectSubset<T, ChoixDeleteArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Choix.
     * @param {ChoixUpdateArgs} args - Arguments to update one Choix.
     * @example
     * // Update one Choix
     * const choix = await prisma.choix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoixUpdateArgs>(args: SelectSubset<T, ChoixUpdateArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Choixes.
     * @param {ChoixDeleteManyArgs} args - Arguments to filter Choixes to delete.
     * @example
     * // Delete a few Choixes
     * const { count } = await prisma.choix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoixDeleteManyArgs>(args?: SelectSubset<T, ChoixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choixes
     * const choix = await prisma.choix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoixUpdateManyArgs>(args: SelectSubset<T, ChoixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choixes and returns the data updated in the database.
     * @param {ChoixUpdateManyAndReturnArgs} args - Arguments to update many Choixes.
     * @example
     * // Update many Choixes
     * const choix = await prisma.choix.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Choixes and only return the `id`
     * const choixWithIdOnly = await prisma.choix.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoixUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Choix.
     * @param {ChoixUpsertArgs} args - Arguments to update or create a Choix.
     * @example
     * // Update or create a Choix
     * const choix = await prisma.choix.upsert({
     *   create: {
     *     // ... data to create a Choix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choix we want to update
     *   }
     * })
     */
    upsert<T extends ChoixUpsertArgs>(args: SelectSubset<T, ChoixUpsertArgs<ExtArgs>>): Prisma__ChoixClient<$Result.GetResult<Prisma.$ChoixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Choixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixCountArgs} args - Arguments to filter Choixes to count.
     * @example
     * // Count the number of Choixes
     * const count = await prisma.choix.count({
     *   where: {
     *     // ... the filter for the Choixes we want to count
     *   }
     * })
    **/
    count<T extends ChoixCountArgs>(
      args?: Subset<T, ChoixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoixAggregateArgs>(args: Subset<T, ChoixAggregateArgs>): Prisma.PrismaPromise<GetChoixAggregateType<T>>

    /**
     * Group by Choix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoixGroupByArgs['orderBy'] }
        : { orderBy?: ChoixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choix model
   */
  readonly fields: ChoixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cours<T extends CoursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoursDefaultArgs<ExtArgs>>): Prisma__CoursClient<$Result.GetResult<Prisma.$CoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Choix model
   */
  interface ChoixFieldRefs {
    readonly id: FieldRef<"Choix", 'Int'>
    readonly id_user: FieldRef<"Choix", 'Int'>
    readonly id_cours: FieldRef<"Choix", 'Int'>
    readonly statut: FieldRef<"Choix", 'Statut'>
    readonly createdAt: FieldRef<"Choix", 'DateTime'>
    readonly updatedAt: FieldRef<"Choix", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Choix findUnique
   */
  export type ChoixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix findUniqueOrThrow
   */
  export type ChoixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix findFirst
   */
  export type ChoixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choixes.
     */
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix findFirstOrThrow
   */
  export type ChoixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choix to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choixes.
     */
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix findMany
   */
  export type ChoixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter, which Choixes to fetch.
     */
    where?: ChoixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choixes to fetch.
     */
    orderBy?: ChoixOrderByWithRelationInput | ChoixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choixes.
     */
    cursor?: ChoixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choixes.
     */
    skip?: number
    distinct?: ChoixScalarFieldEnum | ChoixScalarFieldEnum[]
  }

  /**
   * Choix create
   */
  export type ChoixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The data needed to create a Choix.
     */
    data: XOR<ChoixCreateInput, ChoixUncheckedCreateInput>
  }

  /**
   * Choix createMany
   */
  export type ChoixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choixes.
     */
    data: ChoixCreateManyInput | ChoixCreateManyInput[]
  }

  /**
   * Choix createManyAndReturn
   */
  export type ChoixCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * The data used to create many Choixes.
     */
    data: ChoixCreateManyInput | ChoixCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choix update
   */
  export type ChoixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The data needed to update a Choix.
     */
    data: XOR<ChoixUpdateInput, ChoixUncheckedUpdateInput>
    /**
     * Choose, which Choix to update.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix updateMany
   */
  export type ChoixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choixes.
     */
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyInput>
    /**
     * Filter which Choixes to update
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to update.
     */
    limit?: number
  }

  /**
   * Choix updateManyAndReturn
   */
  export type ChoixUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * The data used to update Choixes.
     */
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyInput>
    /**
     * Filter which Choixes to update
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choix upsert
   */
  export type ChoixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * The filter to search for the Choix to update in case it exists.
     */
    where: ChoixWhereUniqueInput
    /**
     * In case the Choix found by the `where` argument doesn't exist, create a new Choix with this data.
     */
    create: XOR<ChoixCreateInput, ChoixUncheckedCreateInput>
    /**
     * In case the Choix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoixUpdateInput, ChoixUncheckedUpdateInput>
  }

  /**
   * Choix delete
   */
  export type ChoixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
    /**
     * Filter which Choix to delete.
     */
    where: ChoixWhereUniqueInput
  }

  /**
   * Choix deleteMany
   */
  export type ChoixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choixes to delete
     */
    where?: ChoixWhereInput
    /**
     * Limit how many Choixes to delete.
     */
    limit?: number
  }

  /**
   * Choix without action
   */
  export type ChoixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choix
     */
    select?: ChoixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Choix
     */
    omit?: ChoixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoixInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "content" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      content: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly receiverId: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    photo: 'photo',
    nom: 'nom',
    email: 'email',
    mdp: 'mdp',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    categorie: 'categorie',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const CoursScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    video: 'video',
    description: 'description',
    id_categorie: 'id_categorie',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoursScalarFieldEnum = (typeof CoursScalarFieldEnum)[keyof typeof CoursScalarFieldEnum]


  export const EcolageScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    mois: 'mois',
    annee: 'annee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EcolageScalarFieldEnum = (typeof EcolageScalarFieldEnum)[keyof typeof EcolageScalarFieldEnum]


  export const ChoixScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    id_cours: 'id_cours',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoixScalarFieldEnum = (typeof ChoixScalarFieldEnum)[keyof typeof ChoixScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    photo?: StringNullableFilter<"User"> | string | null
    nom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    mdp?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ecolages?: EcolageListRelationFilter
    choixs?: ChoixListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    nom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ecolages?: EcolageOrderByRelationAggregateInput
    choixs?: ChoixOrderByRelationAggregateInput
    messagesSent?: MessageOrderByRelationAggregateInput
    messagesReceived?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    photo?: StringNullableFilter<"User"> | string | null
    nom?: StringFilter<"User"> | string
    mdp?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ecolages?: EcolageListRelationFilter
    choixs?: ChoixListRelationFilter
    messagesSent?: MessageListRelationFilter
    messagesReceived?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    nom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    nom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    mdp?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id?: IntFilter<"Categorie"> | number
    categorie?: StringFilter<"Categorie"> | string
    createdAt?: DateTimeFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeFilter<"Categorie"> | Date | string
    cours?: CoursListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cours?: CoursOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    categorie?: StringFilter<"Categorie"> | string
    createdAt?: DateTimeFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeFilter<"Categorie"> | Date | string
    cours?: CoursListRelationFilter
  }, "id">

  export type CategorieOrderByWithAggregationInput = {
    id?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _avg?: CategorieAvgOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
    _sum?: CategorieSumOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categorie"> | number
    categorie?: StringWithAggregatesFilter<"Categorie"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categorie"> | Date | string
  }

  export type CoursWhereInput = {
    AND?: CoursWhereInput | CoursWhereInput[]
    OR?: CoursWhereInput[]
    NOT?: CoursWhereInput | CoursWhereInput[]
    id?: IntFilter<"Cours"> | number
    titre?: StringFilter<"Cours"> | string
    video?: StringFilter<"Cours"> | string
    description?: StringFilter<"Cours"> | string
    id_categorie?: IntFilter<"Cours"> | number
    createdAt?: DateTimeFilter<"Cours"> | Date | string
    updatedAt?: DateTimeFilter<"Cours"> | Date | string
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    choixs?: ChoixListRelationFilter
  }

  export type CoursOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    video?: SortOrder
    description?: SortOrder
    id_categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categorie?: CategorieOrderByWithRelationInput
    choixs?: ChoixOrderByRelationAggregateInput
  }

  export type CoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursWhereInput | CoursWhereInput[]
    OR?: CoursWhereInput[]
    NOT?: CoursWhereInput | CoursWhereInput[]
    titre?: StringFilter<"Cours"> | string
    video?: StringFilter<"Cours"> | string
    description?: StringFilter<"Cours"> | string
    id_categorie?: IntFilter<"Cours"> | number
    createdAt?: DateTimeFilter<"Cours"> | Date | string
    updatedAt?: DateTimeFilter<"Cours"> | Date | string
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    choixs?: ChoixListRelationFilter
  }, "id">

  export type CoursOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    video?: SortOrder
    description?: SortOrder
    id_categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoursCountOrderByAggregateInput
    _avg?: CoursAvgOrderByAggregateInput
    _max?: CoursMaxOrderByAggregateInput
    _min?: CoursMinOrderByAggregateInput
    _sum?: CoursSumOrderByAggregateInput
  }

  export type CoursScalarWhereWithAggregatesInput = {
    AND?: CoursScalarWhereWithAggregatesInput | CoursScalarWhereWithAggregatesInput[]
    OR?: CoursScalarWhereWithAggregatesInput[]
    NOT?: CoursScalarWhereWithAggregatesInput | CoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cours"> | number
    titre?: StringWithAggregatesFilter<"Cours"> | string
    video?: StringWithAggregatesFilter<"Cours"> | string
    description?: StringWithAggregatesFilter<"Cours"> | string
    id_categorie?: IntWithAggregatesFilter<"Cours"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cours"> | Date | string
  }

  export type EcolageWhereInput = {
    AND?: EcolageWhereInput | EcolageWhereInput[]
    OR?: EcolageWhereInput[]
    NOT?: EcolageWhereInput | EcolageWhereInput[]
    id?: IntFilter<"Ecolage"> | number
    id_user?: IntFilter<"Ecolage"> | number
    mois?: IntFilter<"Ecolage"> | number
    annee?: IntFilter<"Ecolage"> | number
    createdAt?: DateTimeFilter<"Ecolage"> | Date | string
    updatedAt?: DateTimeFilter<"Ecolage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EcolageOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EcolageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EcolageWhereInput | EcolageWhereInput[]
    OR?: EcolageWhereInput[]
    NOT?: EcolageWhereInput | EcolageWhereInput[]
    id_user?: IntFilter<"Ecolage"> | number
    mois?: IntFilter<"Ecolage"> | number
    annee?: IntFilter<"Ecolage"> | number
    createdAt?: DateTimeFilter<"Ecolage"> | Date | string
    updatedAt?: DateTimeFilter<"Ecolage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EcolageOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EcolageCountOrderByAggregateInput
    _avg?: EcolageAvgOrderByAggregateInput
    _max?: EcolageMaxOrderByAggregateInput
    _min?: EcolageMinOrderByAggregateInput
    _sum?: EcolageSumOrderByAggregateInput
  }

  export type EcolageScalarWhereWithAggregatesInput = {
    AND?: EcolageScalarWhereWithAggregatesInput | EcolageScalarWhereWithAggregatesInput[]
    OR?: EcolageScalarWhereWithAggregatesInput[]
    NOT?: EcolageScalarWhereWithAggregatesInput | EcolageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ecolage"> | number
    id_user?: IntWithAggregatesFilter<"Ecolage"> | number
    mois?: IntWithAggregatesFilter<"Ecolage"> | number
    annee?: IntWithAggregatesFilter<"Ecolage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ecolage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ecolage"> | Date | string
  }

  export type ChoixWhereInput = {
    AND?: ChoixWhereInput | ChoixWhereInput[]
    OR?: ChoixWhereInput[]
    NOT?: ChoixWhereInput | ChoixWhereInput[]
    id?: IntFilter<"Choix"> | number
    id_user?: IntFilter<"Choix"> | number
    id_cours?: IntFilter<"Choix"> | number
    statut?: EnumStatutFilter<"Choix"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Choix"> | Date | string
    updatedAt?: DateTimeFilter<"Choix"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
  }

  export type ChoixOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_cours?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cours?: CoursOrderByWithRelationInput
  }

  export type ChoixWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChoixWhereInput | ChoixWhereInput[]
    OR?: ChoixWhereInput[]
    NOT?: ChoixWhereInput | ChoixWhereInput[]
    id_user?: IntFilter<"Choix"> | number
    id_cours?: IntFilter<"Choix"> | number
    statut?: EnumStatutFilter<"Choix"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Choix"> | Date | string
    updatedAt?: DateTimeFilter<"Choix"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cours?: XOR<CoursScalarRelationFilter, CoursWhereInput>
  }, "id">

  export type ChoixOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_cours?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChoixCountOrderByAggregateInput
    _avg?: ChoixAvgOrderByAggregateInput
    _max?: ChoixMaxOrderByAggregateInput
    _min?: ChoixMinOrderByAggregateInput
    _sum?: ChoixSumOrderByAggregateInput
  }

  export type ChoixScalarWhereWithAggregatesInput = {
    AND?: ChoixScalarWhereWithAggregatesInput | ChoixScalarWhereWithAggregatesInput[]
    OR?: ChoixScalarWhereWithAggregatesInput[]
    NOT?: ChoixScalarWhereWithAggregatesInput | ChoixScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Choix"> | number
    id_user?: IntWithAggregatesFilter<"Choix"> | number
    id_cours?: IntWithAggregatesFilter<"Choix"> | number
    statut?: EnumStatutWithAggregatesFilter<"Choix"> | $Enums.Statut
    createdAt?: DateTimeWithAggregatesFilter<"Choix"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Choix"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    senderId?: IntWithAggregatesFilter<"Message"> | number
    receiverId?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type UserCreateInput = {
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageCreateNestedManyWithoutUserInput
    choixs?: ChoixCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageUncheckedCreateNestedManyWithoutUserInput
    choixs?: ChoixUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUpdateManyWithoutUserNestedInput
    choixs?: ChoixUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUncheckedUpdateManyWithoutUserNestedInput
    choixs?: ChoixUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieCreateInput = {
    categorie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id?: number
    categorie: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cours?: CoursUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    id?: number
    categorie: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategorieUpdateManyMutationInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursCreateInput = {
    titre: string
    video: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categorie: CategorieCreateNestedOneWithoutCoursInput
    choixs?: ChoixCreateNestedManyWithoutCoursInput
  }

  export type CoursUncheckedCreateInput = {
    id?: number
    titre: string
    video: string
    description: string
    id_categorie: number
    createdAt?: Date | string
    updatedAt?: Date | string
    choixs?: ChoixUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieUpdateOneRequiredWithoutCoursNestedInput
    choixs?: ChoixUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id_categorie?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choixs?: ChoixUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type CoursCreateManyInput = {
    id?: number
    titre: string
    video: string
    description: string
    id_categorie: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id_categorie?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EcolageCreateInput = {
    mois: number
    annee: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEcolagesInput
  }

  export type EcolageUncheckedCreateInput = {
    id?: number
    id_user: number
    mois: number
    annee: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EcolageUpdateInput = {
    mois?: IntFieldUpdateOperationsInput | number
    annee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEcolagesNestedInput
  }

  export type EcolageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    mois?: IntFieldUpdateOperationsInput | number
    annee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EcolageCreateManyInput = {
    id?: number
    id_user: number
    mois: number
    annee: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EcolageUpdateManyMutationInput = {
    mois?: IntFieldUpdateOperationsInput | number
    annee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EcolageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    mois?: IntFieldUpdateOperationsInput | number
    annee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixCreateInput = {
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChoixsInput
    cours: CoursCreateNestedOneWithoutChoixsInput
  }

  export type ChoixUncheckedCreateInput = {
    id?: number
    id_user: number
    id_cours: number
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoixUpdateInput = {
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChoixsNestedInput
    cours?: CoursUpdateOneRequiredWithoutChoixsNestedInput
  }

  export type ChoixUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixCreateManyInput = {
    id?: number
    id_user: number
    id_cours: number
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoixUpdateManyMutationInput = {
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EcolageListRelationFilter = {
    every?: EcolageWhereInput
    some?: EcolageWhereInput
    none?: EcolageWhereInput
  }

  export type ChoixListRelationFilter = {
    every?: ChoixWhereInput
    some?: ChoixWhereInput
    none?: ChoixWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EcolageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoixOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CoursListRelationFilter = {
    every?: CoursWhereInput
    some?: CoursWhereInput
    none?: CoursWhereInput
  }

  export type CoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieCountOrderByAggregateInput = {
    id?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id?: SortOrder
    categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorieScalarRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type CoursCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    video?: SortOrder
    description?: SortOrder
    id_categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursAvgOrderByAggregateInput = {
    id?: SortOrder
    id_categorie?: SortOrder
  }

  export type CoursMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    video?: SortOrder
    description?: SortOrder
    id_categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    video?: SortOrder
    description?: SortOrder
    id_categorie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursSumOrderByAggregateInput = {
    id?: SortOrder
    id_categorie?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EcolageCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EcolageAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
  }

  export type EcolageMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EcolageMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EcolageSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    mois?: SortOrder
    annee?: SortOrder
  }

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type CoursScalarRelationFilter = {
    is?: CoursWhereInput
    isNot?: CoursWhereInput
  }

  export type ChoixCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_cours?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoixAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_cours?: SortOrder
  }

  export type ChoixMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_cours?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoixMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_cours?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoixSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_cours?: SortOrder
  }

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type EcolageCreateNestedManyWithoutUserInput = {
    create?: XOR<EcolageCreateWithoutUserInput, EcolageUncheckedCreateWithoutUserInput> | EcolageCreateWithoutUserInput[] | EcolageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EcolageCreateOrConnectWithoutUserInput | EcolageCreateOrConnectWithoutUserInput[]
    createMany?: EcolageCreateManyUserInputEnvelope
    connect?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
  }

  export type ChoixCreateNestedManyWithoutUserInput = {
    create?: XOR<ChoixCreateWithoutUserInput, ChoixUncheckedCreateWithoutUserInput> | ChoixCreateWithoutUserInput[] | ChoixUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutUserInput | ChoixCreateOrConnectWithoutUserInput[]
    createMany?: ChoixCreateManyUserInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EcolageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EcolageCreateWithoutUserInput, EcolageUncheckedCreateWithoutUserInput> | EcolageCreateWithoutUserInput[] | EcolageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EcolageCreateOrConnectWithoutUserInput | EcolageCreateOrConnectWithoutUserInput[]
    createMany?: EcolageCreateManyUserInputEnvelope
    connect?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
  }

  export type ChoixUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChoixCreateWithoutUserInput, ChoixUncheckedCreateWithoutUserInput> | ChoixCreateWithoutUserInput[] | ChoixUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutUserInput | ChoixCreateOrConnectWithoutUserInput[]
    createMany?: ChoixCreateManyUserInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EcolageUpdateManyWithoutUserNestedInput = {
    create?: XOR<EcolageCreateWithoutUserInput, EcolageUncheckedCreateWithoutUserInput> | EcolageCreateWithoutUserInput[] | EcolageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EcolageCreateOrConnectWithoutUserInput | EcolageCreateOrConnectWithoutUserInput[]
    upsert?: EcolageUpsertWithWhereUniqueWithoutUserInput | EcolageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EcolageCreateManyUserInputEnvelope
    set?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    disconnect?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    delete?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    connect?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    update?: EcolageUpdateWithWhereUniqueWithoutUserInput | EcolageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EcolageUpdateManyWithWhereWithoutUserInput | EcolageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EcolageScalarWhereInput | EcolageScalarWhereInput[]
  }

  export type ChoixUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChoixCreateWithoutUserInput, ChoixUncheckedCreateWithoutUserInput> | ChoixCreateWithoutUserInput[] | ChoixUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutUserInput | ChoixCreateOrConnectWithoutUserInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutUserInput | ChoixUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChoixCreateManyUserInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutUserInput | ChoixUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutUserInput | ChoixUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EcolageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EcolageCreateWithoutUserInput, EcolageUncheckedCreateWithoutUserInput> | EcolageCreateWithoutUserInput[] | EcolageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EcolageCreateOrConnectWithoutUserInput | EcolageCreateOrConnectWithoutUserInput[]
    upsert?: EcolageUpsertWithWhereUniqueWithoutUserInput | EcolageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EcolageCreateManyUserInputEnvelope
    set?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    disconnect?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    delete?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    connect?: EcolageWhereUniqueInput | EcolageWhereUniqueInput[]
    update?: EcolageUpdateWithWhereUniqueWithoutUserInput | EcolageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EcolageUpdateManyWithWhereWithoutUserInput | EcolageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EcolageScalarWhereInput | EcolageScalarWhereInput[]
  }

  export type ChoixUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChoixCreateWithoutUserInput, ChoixUncheckedCreateWithoutUserInput> | ChoixCreateWithoutUserInput[] | ChoixUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutUserInput | ChoixCreateOrConnectWithoutUserInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutUserInput | ChoixUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChoixCreateManyUserInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutUserInput | ChoixUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutUserInput | ChoixUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CoursCreateNestedManyWithoutCategorieInput = {
    create?: XOR<CoursCreateWithoutCategorieInput, CoursUncheckedCreateWithoutCategorieInput> | CoursCreateWithoutCategorieInput[] | CoursUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategorieInput | CoursCreateOrConnectWithoutCategorieInput[]
    createMany?: CoursCreateManyCategorieInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type CoursUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<CoursCreateWithoutCategorieInput, CoursUncheckedCreateWithoutCategorieInput> | CoursCreateWithoutCategorieInput[] | CoursUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategorieInput | CoursCreateOrConnectWithoutCategorieInput[]
    createMany?: CoursCreateManyCategorieInputEnvelope
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
  }

  export type CoursUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<CoursCreateWithoutCategorieInput, CoursUncheckedCreateWithoutCategorieInput> | CoursCreateWithoutCategorieInput[] | CoursUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategorieInput | CoursCreateOrConnectWithoutCategorieInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutCategorieInput | CoursUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: CoursCreateManyCategorieInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutCategorieInput | CoursUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutCategorieInput | CoursUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type CoursUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<CoursCreateWithoutCategorieInput, CoursUncheckedCreateWithoutCategorieInput> | CoursCreateWithoutCategorieInput[] | CoursUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: CoursCreateOrConnectWithoutCategorieInput | CoursCreateOrConnectWithoutCategorieInput[]
    upsert?: CoursUpsertWithWhereUniqueWithoutCategorieInput | CoursUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: CoursCreateManyCategorieInputEnvelope
    set?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    disconnect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    delete?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    connect?: CoursWhereUniqueInput | CoursWhereUniqueInput[]
    update?: CoursUpdateWithWhereUniqueWithoutCategorieInput | CoursUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: CoursUpdateManyWithWhereWithoutCategorieInput | CoursUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: CoursScalarWhereInput | CoursScalarWhereInput[]
  }

  export type CategorieCreateNestedOneWithoutCoursInput = {
    create?: XOR<CategorieCreateWithoutCoursInput, CategorieUncheckedCreateWithoutCoursInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutCoursInput
    connect?: CategorieWhereUniqueInput
  }

  export type ChoixCreateNestedManyWithoutCoursInput = {
    create?: XOR<ChoixCreateWithoutCoursInput, ChoixUncheckedCreateWithoutCoursInput> | ChoixCreateWithoutCoursInput[] | ChoixUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCoursInput | ChoixCreateOrConnectWithoutCoursInput[]
    createMany?: ChoixCreateManyCoursInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type ChoixUncheckedCreateNestedManyWithoutCoursInput = {
    create?: XOR<ChoixCreateWithoutCoursInput, ChoixUncheckedCreateWithoutCoursInput> | ChoixCreateWithoutCoursInput[] | ChoixUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCoursInput | ChoixCreateOrConnectWithoutCoursInput[]
    createMany?: ChoixCreateManyCoursInputEnvelope
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
  }

  export type CategorieUpdateOneRequiredWithoutCoursNestedInput = {
    create?: XOR<CategorieCreateWithoutCoursInput, CategorieUncheckedCreateWithoutCoursInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutCoursInput
    upsert?: CategorieUpsertWithoutCoursInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutCoursInput, CategorieUpdateWithoutCoursInput>, CategorieUncheckedUpdateWithoutCoursInput>
  }

  export type ChoixUpdateManyWithoutCoursNestedInput = {
    create?: XOR<ChoixCreateWithoutCoursInput, ChoixUncheckedCreateWithoutCoursInput> | ChoixCreateWithoutCoursInput[] | ChoixUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCoursInput | ChoixCreateOrConnectWithoutCoursInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutCoursInput | ChoixUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: ChoixCreateManyCoursInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutCoursInput | ChoixUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutCoursInput | ChoixUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type ChoixUncheckedUpdateManyWithoutCoursNestedInput = {
    create?: XOR<ChoixCreateWithoutCoursInput, ChoixUncheckedCreateWithoutCoursInput> | ChoixCreateWithoutCoursInput[] | ChoixUncheckedCreateWithoutCoursInput[]
    connectOrCreate?: ChoixCreateOrConnectWithoutCoursInput | ChoixCreateOrConnectWithoutCoursInput[]
    upsert?: ChoixUpsertWithWhereUniqueWithoutCoursInput | ChoixUpsertWithWhereUniqueWithoutCoursInput[]
    createMany?: ChoixCreateManyCoursInputEnvelope
    set?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    disconnect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    delete?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    connect?: ChoixWhereUniqueInput | ChoixWhereUniqueInput[]
    update?: ChoixUpdateWithWhereUniqueWithoutCoursInput | ChoixUpdateWithWhereUniqueWithoutCoursInput[]
    updateMany?: ChoixUpdateManyWithWhereWithoutCoursInput | ChoixUpdateManyWithWhereWithoutCoursInput[]
    deleteMany?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEcolagesInput = {
    create?: XOR<UserCreateWithoutEcolagesInput, UserUncheckedCreateWithoutEcolagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEcolagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEcolagesNestedInput = {
    create?: XOR<UserCreateWithoutEcolagesInput, UserUncheckedCreateWithoutEcolagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEcolagesInput
    upsert?: UserUpsertWithoutEcolagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEcolagesInput, UserUpdateWithoutEcolagesInput>, UserUncheckedUpdateWithoutEcolagesInput>
  }

  export type UserCreateNestedOneWithoutChoixsInput = {
    create?: XOR<UserCreateWithoutChoixsInput, UserUncheckedCreateWithoutChoixsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChoixsInput
    connect?: UserWhereUniqueInput
  }

  export type CoursCreateNestedOneWithoutChoixsInput = {
    create?: XOR<CoursCreateWithoutChoixsInput, CoursUncheckedCreateWithoutChoixsInput>
    connectOrCreate?: CoursCreateOrConnectWithoutChoixsInput
    connect?: CoursWhereUniqueInput
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type UserUpdateOneRequiredWithoutChoixsNestedInput = {
    create?: XOR<UserCreateWithoutChoixsInput, UserUncheckedCreateWithoutChoixsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChoixsInput
    upsert?: UserUpsertWithoutChoixsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChoixsInput, UserUpdateWithoutChoixsInput>, UserUncheckedUpdateWithoutChoixsInput>
  }

  export type CoursUpdateOneRequiredWithoutChoixsNestedInput = {
    create?: XOR<CoursCreateWithoutChoixsInput, CoursUncheckedCreateWithoutChoixsInput>
    connectOrCreate?: CoursCreateOrConnectWithoutChoixsInput
    upsert?: CoursUpsertWithoutChoixsInput
    connect?: CoursWhereUniqueInput
    update?: XOR<XOR<CoursUpdateToOneWithWhereWithoutChoixsInput, CoursUpdateWithoutChoixsInput>, CoursUncheckedUpdateWithoutChoixsInput>
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesReceivedInput, UserUpdateWithoutMessagesReceivedInput>, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type EcolageCreateWithoutUserInput = {
    mois: number
    annee: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EcolageUncheckedCreateWithoutUserInput = {
    id?: number
    mois: number
    annee: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EcolageCreateOrConnectWithoutUserInput = {
    where: EcolageWhereUniqueInput
    create: XOR<EcolageCreateWithoutUserInput, EcolageUncheckedCreateWithoutUserInput>
  }

  export type EcolageCreateManyUserInputEnvelope = {
    data: EcolageCreateManyUserInput | EcolageCreateManyUserInput[]
  }

  export type ChoixCreateWithoutUserInput = {
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    cours: CoursCreateNestedOneWithoutChoixsInput
  }

  export type ChoixUncheckedCreateWithoutUserInput = {
    id?: number
    id_cours: number
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoixCreateOrConnectWithoutUserInput = {
    where: ChoixWhereUniqueInput
    create: XOR<ChoixCreateWithoutUserInput, ChoixUncheckedCreateWithoutUserInput>
  }

  export type ChoixCreateManyUserInputEnvelope = {
    data: ChoixCreateManyUserInput | ChoixCreateManyUserInput[]
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
  }

  export type MessageCreateWithoutReceiverInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
  }

  export type EcolageUpsertWithWhereUniqueWithoutUserInput = {
    where: EcolageWhereUniqueInput
    update: XOR<EcolageUpdateWithoutUserInput, EcolageUncheckedUpdateWithoutUserInput>
    create: XOR<EcolageCreateWithoutUserInput, EcolageUncheckedCreateWithoutUserInput>
  }

  export type EcolageUpdateWithWhereUniqueWithoutUserInput = {
    where: EcolageWhereUniqueInput
    data: XOR<EcolageUpdateWithoutUserInput, EcolageUncheckedUpdateWithoutUserInput>
  }

  export type EcolageUpdateManyWithWhereWithoutUserInput = {
    where: EcolageScalarWhereInput
    data: XOR<EcolageUpdateManyMutationInput, EcolageUncheckedUpdateManyWithoutUserInput>
  }

  export type EcolageScalarWhereInput = {
    AND?: EcolageScalarWhereInput | EcolageScalarWhereInput[]
    OR?: EcolageScalarWhereInput[]
    NOT?: EcolageScalarWhereInput | EcolageScalarWhereInput[]
    id?: IntFilter<"Ecolage"> | number
    id_user?: IntFilter<"Ecolage"> | number
    mois?: IntFilter<"Ecolage"> | number
    annee?: IntFilter<"Ecolage"> | number
    createdAt?: DateTimeFilter<"Ecolage"> | Date | string
    updatedAt?: DateTimeFilter<"Ecolage"> | Date | string
  }

  export type ChoixUpsertWithWhereUniqueWithoutUserInput = {
    where: ChoixWhereUniqueInput
    update: XOR<ChoixUpdateWithoutUserInput, ChoixUncheckedUpdateWithoutUserInput>
    create: XOR<ChoixCreateWithoutUserInput, ChoixUncheckedCreateWithoutUserInput>
  }

  export type ChoixUpdateWithWhereUniqueWithoutUserInput = {
    where: ChoixWhereUniqueInput
    data: XOR<ChoixUpdateWithoutUserInput, ChoixUncheckedUpdateWithoutUserInput>
  }

  export type ChoixUpdateManyWithWhereWithoutUserInput = {
    where: ChoixScalarWhereInput
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyWithoutUserInput>
  }

  export type ChoixScalarWhereInput = {
    AND?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
    OR?: ChoixScalarWhereInput[]
    NOT?: ChoixScalarWhereInput | ChoixScalarWhereInput[]
    id?: IntFilter<"Choix"> | number
    id_user?: IntFilter<"Choix"> | number
    id_cours?: IntFilter<"Choix"> | number
    statut?: EnumStatutFilter<"Choix"> | $Enums.Statut
    createdAt?: DateTimeFilter<"Choix"> | Date | string
    updatedAt?: DateTimeFilter<"Choix"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type CoursCreateWithoutCategorieInput = {
    titre: string
    video: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choixs?: ChoixCreateNestedManyWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutCategorieInput = {
    id?: number
    titre: string
    video: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choixs?: ChoixUncheckedCreateNestedManyWithoutCoursInput
  }

  export type CoursCreateOrConnectWithoutCategorieInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutCategorieInput, CoursUncheckedCreateWithoutCategorieInput>
  }

  export type CoursCreateManyCategorieInputEnvelope = {
    data: CoursCreateManyCategorieInput | CoursCreateManyCategorieInput[]
  }

  export type CoursUpsertWithWhereUniqueWithoutCategorieInput = {
    where: CoursWhereUniqueInput
    update: XOR<CoursUpdateWithoutCategorieInput, CoursUncheckedUpdateWithoutCategorieInput>
    create: XOR<CoursCreateWithoutCategorieInput, CoursUncheckedCreateWithoutCategorieInput>
  }

  export type CoursUpdateWithWhereUniqueWithoutCategorieInput = {
    where: CoursWhereUniqueInput
    data: XOR<CoursUpdateWithoutCategorieInput, CoursUncheckedUpdateWithoutCategorieInput>
  }

  export type CoursUpdateManyWithWhereWithoutCategorieInput = {
    where: CoursScalarWhereInput
    data: XOR<CoursUpdateManyMutationInput, CoursUncheckedUpdateManyWithoutCategorieInput>
  }

  export type CoursScalarWhereInput = {
    AND?: CoursScalarWhereInput | CoursScalarWhereInput[]
    OR?: CoursScalarWhereInput[]
    NOT?: CoursScalarWhereInput | CoursScalarWhereInput[]
    id?: IntFilter<"Cours"> | number
    titre?: StringFilter<"Cours"> | string
    video?: StringFilter<"Cours"> | string
    description?: StringFilter<"Cours"> | string
    id_categorie?: IntFilter<"Cours"> | number
    createdAt?: DateTimeFilter<"Cours"> | Date | string
    updatedAt?: DateTimeFilter<"Cours"> | Date | string
  }

  export type CategorieCreateWithoutCoursInput = {
    categorie: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategorieUncheckedCreateWithoutCoursInput = {
    id?: number
    categorie: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategorieCreateOrConnectWithoutCoursInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutCoursInput, CategorieUncheckedCreateWithoutCoursInput>
  }

  export type ChoixCreateWithoutCoursInput = {
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChoixsInput
  }

  export type ChoixUncheckedCreateWithoutCoursInput = {
    id?: number
    id_user: number
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoixCreateOrConnectWithoutCoursInput = {
    where: ChoixWhereUniqueInput
    create: XOR<ChoixCreateWithoutCoursInput, ChoixUncheckedCreateWithoutCoursInput>
  }

  export type ChoixCreateManyCoursInputEnvelope = {
    data: ChoixCreateManyCoursInput | ChoixCreateManyCoursInput[]
  }

  export type CategorieUpsertWithoutCoursInput = {
    update: XOR<CategorieUpdateWithoutCoursInput, CategorieUncheckedUpdateWithoutCoursInput>
    create: XOR<CategorieCreateWithoutCoursInput, CategorieUncheckedCreateWithoutCoursInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutCoursInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutCoursInput, CategorieUncheckedUpdateWithoutCoursInput>
  }

  export type CategorieUpdateWithoutCoursInput = {
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorie?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixUpsertWithWhereUniqueWithoutCoursInput = {
    where: ChoixWhereUniqueInput
    update: XOR<ChoixUpdateWithoutCoursInput, ChoixUncheckedUpdateWithoutCoursInput>
    create: XOR<ChoixCreateWithoutCoursInput, ChoixUncheckedCreateWithoutCoursInput>
  }

  export type ChoixUpdateWithWhereUniqueWithoutCoursInput = {
    where: ChoixWhereUniqueInput
    data: XOR<ChoixUpdateWithoutCoursInput, ChoixUncheckedUpdateWithoutCoursInput>
  }

  export type ChoixUpdateManyWithWhereWithoutCoursInput = {
    where: ChoixScalarWhereInput
    data: XOR<ChoixUpdateManyMutationInput, ChoixUncheckedUpdateManyWithoutCoursInput>
  }

  export type UserCreateWithoutEcolagesInput = {
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    choixs?: ChoixCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutEcolagesInput = {
    id?: number
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    choixs?: ChoixUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutEcolagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEcolagesInput, UserUncheckedCreateWithoutEcolagesInput>
  }

  export type UserUpsertWithoutEcolagesInput = {
    update: XOR<UserUpdateWithoutEcolagesInput, UserUncheckedUpdateWithoutEcolagesInput>
    create: XOR<UserCreateWithoutEcolagesInput, UserUncheckedCreateWithoutEcolagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEcolagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEcolagesInput, UserUncheckedUpdateWithoutEcolagesInput>
  }

  export type UserUpdateWithoutEcolagesInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choixs?: ChoixUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutEcolagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choixs?: ChoixUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutChoixsInput = {
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutChoixsInput = {
    id?: number
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutChoixsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChoixsInput, UserUncheckedCreateWithoutChoixsInput>
  }

  export type CoursCreateWithoutChoixsInput = {
    titre: string
    video: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categorie: CategorieCreateNestedOneWithoutCoursInput
  }

  export type CoursUncheckedCreateWithoutChoixsInput = {
    id?: number
    titre: string
    video: string
    description: string
    id_categorie: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursCreateOrConnectWithoutChoixsInput = {
    where: CoursWhereUniqueInput
    create: XOR<CoursCreateWithoutChoixsInput, CoursUncheckedCreateWithoutChoixsInput>
  }

  export type UserUpsertWithoutChoixsInput = {
    update: XOR<UserUpdateWithoutChoixsInput, UserUncheckedUpdateWithoutChoixsInput>
    create: XOR<UserCreateWithoutChoixsInput, UserUncheckedCreateWithoutChoixsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChoixsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChoixsInput, UserUncheckedUpdateWithoutChoixsInput>
  }

  export type UserUpdateWithoutChoixsInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutChoixsInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CoursUpsertWithoutChoixsInput = {
    update: XOR<CoursUpdateWithoutChoixsInput, CoursUncheckedUpdateWithoutChoixsInput>
    create: XOR<CoursCreateWithoutChoixsInput, CoursUncheckedCreateWithoutChoixsInput>
    where?: CoursWhereInput
  }

  export type CoursUpdateToOneWithWhereWithoutChoixsInput = {
    where?: CoursWhereInput
    data: XOR<CoursUpdateWithoutChoixsInput, CoursUncheckedUpdateWithoutChoixsInput>
  }

  export type CoursUpdateWithoutChoixsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieUpdateOneRequiredWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutChoixsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id_categorie?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMessagesSentInput = {
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageCreateNestedManyWithoutUserInput
    choixs?: ChoixCreateNestedManyWithoutUserInput
    messagesReceived?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: number
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageUncheckedCreateNestedManyWithoutUserInput
    choixs?: ChoixUncheckedCreateNestedManyWithoutUserInput
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageCreateNestedManyWithoutUserInput
    choixs?: ChoixCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: number
    photo?: string | null
    nom: string
    email: string
    mdp: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ecolages?: EcolageUncheckedCreateNestedManyWithoutUserInput
    choixs?: ChoixUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUpdateManyWithoutUserNestedInput
    choixs?: ChoixUpdateManyWithoutUserNestedInput
    messagesReceived?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUncheckedUpdateManyWithoutUserNestedInput
    choixs?: ChoixUncheckedUpdateManyWithoutUserNestedInput
    messagesReceived?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUpdateManyWithoutUserNestedInput
    choixs?: ChoixUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ecolages?: EcolageUncheckedUpdateManyWithoutUserNestedInput
    choixs?: ChoixUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type EcolageCreateManyUserInput = {
    id?: number
    mois: number
    annee: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoixCreateManyUserInput = {
    id?: number
    id_cours: number
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: number
    receiverId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type EcolageUpdateWithoutUserInput = {
    mois?: IntFieldUpdateOperationsInput | number
    annee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EcolageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: IntFieldUpdateOperationsInput | number
    annee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EcolageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mois?: IntFieldUpdateOperationsInput | number
    annee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixUpdateWithoutUserInput = {
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cours?: CoursUpdateOneRequiredWithoutChoixsNestedInput
  }

  export type ChoixUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cours?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursCreateManyCategorieInput = {
    id?: number
    titre: string
    video: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursUpdateWithoutCategorieInput = {
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choixs?: ChoixUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choixs?: ChoixUncheckedUpdateManyWithoutCoursNestedInput
  }

  export type CoursUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixCreateManyCoursInput = {
    id?: number
    id_user: number
    statut?: $Enums.Statut
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoixUpdateWithoutCoursInput = {
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChoixsNestedInput
  }

  export type ChoixUncheckedUpdateWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoixUncheckedUpdateManyWithoutCoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}