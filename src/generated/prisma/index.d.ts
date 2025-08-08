
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
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model MealPlan
 * 
 */
export type MealPlan = $Result.DefaultSelection<Prisma.$MealPlanPayload>
/**
 * Model PlannedMeal
 * 
 */
export type PlannedMeal = $Result.DefaultSelection<Prisma.$PlannedMealPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MealType: {
  breakfast: 'breakfast',
  lunch: 'lunch',
  dinner: 'dinner',
  snack: 'snack'
};

export type MealType = (typeof MealType)[keyof typeof MealType]

}

export type MealType = $Enums.MealType

export const MealType: typeof $Enums.MealType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recipes
 * const recipes = await prisma.recipe.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Recipes
   * const recipes = await prisma.recipe.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlan`: Exposes CRUD operations for the **MealPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlans
    * const mealPlans = await prisma.mealPlan.findMany()
    * ```
    */
  get mealPlan(): Prisma.MealPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plannedMeal`: Exposes CRUD operations for the **PlannedMeal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlannedMeals
    * const plannedMeals = await prisma.plannedMeal.findMany()
    * ```
    */
  get plannedMeal(): Prisma.PlannedMealDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Recipe: 'Recipe',
    MealPlan: 'MealPlan',
    PlannedMeal: 'PlannedMeal'
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
      modelProps: "recipe" | "mealPlan" | "plannedMeal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      MealPlan: {
        payload: Prisma.$MealPlanPayload<ExtArgs>
        fields: Prisma.MealPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findFirst: {
            args: Prisma.MealPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findMany: {
            args: Prisma.MealPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          create: {
            args: Prisma.MealPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          createMany: {
            args: Prisma.MealPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          delete: {
            args: Prisma.MealPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          update: {
            args: Prisma.MealPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          aggregate: {
            args: Prisma.MealPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlan>
          }
          groupBy: {
            args: Prisma.MealPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanCountAggregateOutputType> | number
          }
        }
      }
      PlannedMeal: {
        payload: Prisma.$PlannedMealPayload<ExtArgs>
        fields: Prisma.PlannedMealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlannedMealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlannedMealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>
          }
          findFirst: {
            args: Prisma.PlannedMealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlannedMealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>
          }
          findMany: {
            args: Prisma.PlannedMealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>[]
          }
          create: {
            args: Prisma.PlannedMealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>
          }
          createMany: {
            args: Prisma.PlannedMealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlannedMealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>[]
          }
          delete: {
            args: Prisma.PlannedMealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>
          }
          update: {
            args: Prisma.PlannedMealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>
          }
          deleteMany: {
            args: Prisma.PlannedMealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlannedMealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlannedMealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>[]
          }
          upsert: {
            args: Prisma.PlannedMealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannedMealPayload>
          }
          aggregate: {
            args: Prisma.PlannedMealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlannedMeal>
          }
          groupBy: {
            args: Prisma.PlannedMealGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlannedMealGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlannedMealCountArgs<ExtArgs>
            result: $Utils.Optional<PlannedMealCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    recipe?: RecipeOmit
    mealPlan?: MealPlanOmit
    plannedMeal?: PlannedMealOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    planned_meals: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planned_meals?: boolean | RecipeCountOutputTypeCountPlanned_mealsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountPlanned_mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedMealWhereInput
  }


  /**
   * Count Type MealPlanCountOutputType
   */

  export type MealPlanCountOutputType = {
    planned_meals: number
  }

  export type MealPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planned_meals?: boolean | MealPlanCountOutputTypeCountPlanned_mealsArgs
  }

  // Custom InputTypes
  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanCountOutputType
     */
    select?: MealPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeCountPlanned_mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedMealWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    origin: string | null
    instructions: string | null
    image_url: string | null
    video_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    origin: string | null
    instructions: string | null
    image_url: string | null
    video_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    title: number
    category: number
    origin: number
    instructions: number
    image_url: number
    video_url: number
    ingredients: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RecipeMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    origin?: true
    instructions?: true
    image_url?: true
    video_url?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    origin?: true
    instructions?: true
    image_url?: true
    video_url?: true
    created_at?: true
    updated_at?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    origin?: true
    instructions?: true
    image_url?: true
    video_url?: true
    ingredients?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    title: string
    category: string
    origin: string
    instructions: string
    image_url: string
    video_url: string | null
    ingredients: string[]
    created_at: Date
    updated_at: Date
    _count: RecipeCountAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    origin?: boolean
    instructions?: boolean
    image_url?: boolean
    video_url?: boolean
    ingredients?: boolean
    created_at?: boolean
    updated_at?: boolean
    planned_meals?: boolean | Recipe$planned_mealsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    origin?: boolean
    instructions?: boolean
    image_url?: boolean
    video_url?: boolean
    ingredients?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    origin?: boolean
    instructions?: boolean
    image_url?: boolean
    video_url?: boolean
    ingredients?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    origin?: boolean
    instructions?: boolean
    image_url?: boolean
    video_url?: boolean
    ingredients?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "origin" | "instructions" | "image_url" | "video_url" | "ingredients" | "created_at" | "updated_at", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planned_meals?: boolean | Recipe$planned_mealsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      planned_meals: Prisma.$PlannedMealPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      origin: string
      instructions: string
      image_url: string
      video_url: string | null
      ingredients: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planned_meals<T extends Recipe$planned_mealsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$planned_mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly category: FieldRef<"Recipe", 'String'>
    readonly origin: FieldRef<"Recipe", 'String'>
    readonly instructions: FieldRef<"Recipe", 'String'>
    readonly image_url: FieldRef<"Recipe", 'String'>
    readonly video_url: FieldRef<"Recipe", 'String'>
    readonly ingredients: FieldRef<"Recipe", 'String[]'>
    readonly created_at: FieldRef<"Recipe", 'DateTime'>
    readonly updated_at: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.planned_meals
   */
  export type Recipe$planned_mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    where?: PlannedMealWhereInput
    orderBy?: PlannedMealOrderByWithRelationInput | PlannedMealOrderByWithRelationInput[]
    cursor?: PlannedMealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlannedMealScalarFieldEnum | PlannedMealScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model MealPlan
   */

  export type AggregateMealPlan = {
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  export type MealPlanMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    description: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MealPlanMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    description: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MealPlanCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    description: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MealPlanMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type MealPlanMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type MealPlanCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MealPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlan to aggregate.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlans
    **/
    _count?: true | MealPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanMaxAggregateInputType
  }

  export type GetMealPlanAggregateType<T extends MealPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlan[P]>
      : GetScalarType<T[P], AggregateMealPlan[P]>
  }




  export type MealPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithAggregationInput | MealPlanOrderByWithAggregationInput[]
    by: MealPlanScalarFieldEnum[] | MealPlanScalarFieldEnum
    having?: MealPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanCountAggregateInputType | true
    _min?: MealPlanMinAggregateInputType
    _max?: MealPlanMaxAggregateInputType
  }

  export type MealPlanGroupByOutputType = {
    id: string
    user_id: string
    name: string
    description: string | null
    start_date: Date
    end_date: Date
    created_at: Date
    updated_at: Date
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  type GetMealPlanGroupByPayload<T extends MealPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    planned_meals?: boolean | MealPlan$planned_mealsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MealPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["mealPlan"]>
  export type MealPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planned_meals?: boolean | MealPlan$planned_mealsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MealPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MealPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlan"
    objects: {
      planned_meals: Prisma.$PlannedMealPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      name: string
      description: string | null
      start_date: Date
      end_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["mealPlan"]>
    composites: {}
  }

  type MealPlanGetPayload<S extends boolean | null | undefined | MealPlanDefaultArgs> = $Result.GetResult<Prisma.$MealPlanPayload, S>

  type MealPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanCountAggregateInputType | true
    }

  export interface MealPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlan'], meta: { name: 'MealPlan' } }
    /**
     * Find zero or one MealPlan that matches the filter.
     * @param {MealPlanFindUniqueArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanFindUniqueArgs>(args: SelectSubset<T, MealPlanFindUniqueArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanFindUniqueOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanFindFirstArgs>(args?: SelectSubset<T, MealPlanFindFirstArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlans
     * const mealPlans = await prisma.mealPlan.findMany()
     * 
     * // Get first 10 MealPlans
     * const mealPlans = await prisma.mealPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanFindManyArgs>(args?: SelectSubset<T, MealPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlan.
     * @param {MealPlanCreateArgs} args - Arguments to create a MealPlan.
     * @example
     * // Create one MealPlan
     * const MealPlan = await prisma.mealPlan.create({
     *   data: {
     *     // ... data to create a MealPlan
     *   }
     * })
     * 
     */
    create<T extends MealPlanCreateArgs>(args: SelectSubset<T, MealPlanCreateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlans.
     * @param {MealPlanCreateManyArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanCreateManyArgs>(args?: SelectSubset<T, MealPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlans and returns the data saved in the database.
     * @param {MealPlanCreateManyAndReturnArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlan.
     * @param {MealPlanDeleteArgs} args - Arguments to delete one MealPlan.
     * @example
     * // Delete one MealPlan
     * const MealPlan = await prisma.mealPlan.delete({
     *   where: {
     *     // ... filter to delete one MealPlan
     *   }
     * })
     * 
     */
    delete<T extends MealPlanDeleteArgs>(args: SelectSubset<T, MealPlanDeleteArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlan.
     * @param {MealPlanUpdateArgs} args - Arguments to update one MealPlan.
     * @example
     * // Update one MealPlan
     * const mealPlan = await prisma.mealPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanUpdateArgs>(args: SelectSubset<T, MealPlanUpdateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlans.
     * @param {MealPlanDeleteManyArgs} args - Arguments to filter MealPlans to delete.
     * @example
     * // Delete a few MealPlans
     * const { count } = await prisma.mealPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanDeleteManyArgs>(args?: SelectSubset<T, MealPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanUpdateManyArgs>(args: SelectSubset<T, MealPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans and returns the data updated in the database.
     * @param {MealPlanUpdateManyAndReturnArgs} args - Arguments to update many MealPlans.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlan.
     * @param {MealPlanUpsertArgs} args - Arguments to update or create a MealPlan.
     * @example
     * // Update or create a MealPlan
     * const mealPlan = await prisma.mealPlan.upsert({
     *   create: {
     *     // ... data to create a MealPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlan we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanUpsertArgs>(args: SelectSubset<T, MealPlanUpsertArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanCountArgs} args - Arguments to filter MealPlans to count.
     * @example
     * // Count the number of MealPlans
     * const count = await prisma.mealPlan.count({
     *   where: {
     *     // ... the filter for the MealPlans we want to count
     *   }
     * })
    **/
    count<T extends MealPlanCountArgs>(
      args?: Subset<T, MealPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealPlanAggregateArgs>(args: Subset<T, MealPlanAggregateArgs>): Prisma.PrismaPromise<GetMealPlanAggregateType<T>>

    /**
     * Group by MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanGroupByArgs} args - Group by arguments.
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
      T extends MealPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlan model
   */
  readonly fields: MealPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planned_meals<T extends MealPlan$planned_mealsArgs<ExtArgs> = {}>(args?: Subset<T, MealPlan$planned_mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MealPlan model
   */
  interface MealPlanFieldRefs {
    readonly id: FieldRef<"MealPlan", 'String'>
    readonly user_id: FieldRef<"MealPlan", 'String'>
    readonly name: FieldRef<"MealPlan", 'String'>
    readonly description: FieldRef<"MealPlan", 'String'>
    readonly start_date: FieldRef<"MealPlan", 'DateTime'>
    readonly end_date: FieldRef<"MealPlan", 'DateTime'>
    readonly created_at: FieldRef<"MealPlan", 'DateTime'>
    readonly updated_at: FieldRef<"MealPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealPlan findUnique
   */
  export type MealPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findUniqueOrThrow
   */
  export type MealPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findFirst
   */
  export type MealPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findFirstOrThrow
   */
  export type MealPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findMany
   */
  export type MealPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlans to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan create
   */
  export type MealPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlan.
     */
    data: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
  }

  /**
   * MealPlan createMany
   */
  export type MealPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlan createManyAndReturn
   */
  export type MealPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlan update
   */
  export type MealPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlan.
     */
    data: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
    /**
     * Choose, which MealPlan to update.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan updateMany
   */
  export type MealPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
  }

  /**
   * MealPlan updateManyAndReturn
   */
  export type MealPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
  }

  /**
   * MealPlan upsert
   */
  export type MealPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlan to update in case it exists.
     */
    where: MealPlanWhereUniqueInput
    /**
     * In case the MealPlan found by the `where` argument doesn't exist, create a new MealPlan with this data.
     */
    create: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
    /**
     * In case the MealPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
  }

  /**
   * MealPlan delete
   */
  export type MealPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter which MealPlan to delete.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan deleteMany
   */
  export type MealPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlans to delete
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to delete.
     */
    limit?: number
  }

  /**
   * MealPlan.planned_meals
   */
  export type MealPlan$planned_mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    where?: PlannedMealWhereInput
    orderBy?: PlannedMealOrderByWithRelationInput | PlannedMealOrderByWithRelationInput[]
    cursor?: PlannedMealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlannedMealScalarFieldEnum | PlannedMealScalarFieldEnum[]
  }

  /**
   * MealPlan without action
   */
  export type MealPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
  }


  /**
   * Model PlannedMeal
   */

  export type AggregatePlannedMeal = {
    _count: PlannedMealCountAggregateOutputType | null
    _avg: PlannedMealAvgAggregateOutputType | null
    _sum: PlannedMealSumAggregateOutputType | null
    _min: PlannedMealMinAggregateOutputType | null
    _max: PlannedMealMaxAggregateOutputType | null
  }

  export type PlannedMealAvgAggregateOutputType = {
    servings: number | null
  }

  export type PlannedMealSumAggregateOutputType = {
    servings: number | null
  }

  export type PlannedMealMinAggregateOutputType = {
    id: string | null
    meal_plan_id: string | null
    recipe_id: string | null
    date: Date | null
    meal_type: $Enums.MealType | null
    servings: number | null
    notes: string | null
    created_at: Date | null
  }

  export type PlannedMealMaxAggregateOutputType = {
    id: string | null
    meal_plan_id: string | null
    recipe_id: string | null
    date: Date | null
    meal_type: $Enums.MealType | null
    servings: number | null
    notes: string | null
    created_at: Date | null
  }

  export type PlannedMealCountAggregateOutputType = {
    id: number
    meal_plan_id: number
    recipe_id: number
    date: number
    meal_type: number
    servings: number
    notes: number
    created_at: number
    _all: number
  }


  export type PlannedMealAvgAggregateInputType = {
    servings?: true
  }

  export type PlannedMealSumAggregateInputType = {
    servings?: true
  }

  export type PlannedMealMinAggregateInputType = {
    id?: true
    meal_plan_id?: true
    recipe_id?: true
    date?: true
    meal_type?: true
    servings?: true
    notes?: true
    created_at?: true
  }

  export type PlannedMealMaxAggregateInputType = {
    id?: true
    meal_plan_id?: true
    recipe_id?: true
    date?: true
    meal_type?: true
    servings?: true
    notes?: true
    created_at?: true
  }

  export type PlannedMealCountAggregateInputType = {
    id?: true
    meal_plan_id?: true
    recipe_id?: true
    date?: true
    meal_type?: true
    servings?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type PlannedMealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlannedMeal to aggregate.
     */
    where?: PlannedMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedMeals to fetch.
     */
    orderBy?: PlannedMealOrderByWithRelationInput | PlannedMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlannedMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlannedMeals
    **/
    _count?: true | PlannedMealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlannedMealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlannedMealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlannedMealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlannedMealMaxAggregateInputType
  }

  export type GetPlannedMealAggregateType<T extends PlannedMealAggregateArgs> = {
        [P in keyof T & keyof AggregatePlannedMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlannedMeal[P]>
      : GetScalarType<T[P], AggregatePlannedMeal[P]>
  }




  export type PlannedMealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannedMealWhereInput
    orderBy?: PlannedMealOrderByWithAggregationInput | PlannedMealOrderByWithAggregationInput[]
    by: PlannedMealScalarFieldEnum[] | PlannedMealScalarFieldEnum
    having?: PlannedMealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlannedMealCountAggregateInputType | true
    _avg?: PlannedMealAvgAggregateInputType
    _sum?: PlannedMealSumAggregateInputType
    _min?: PlannedMealMinAggregateInputType
    _max?: PlannedMealMaxAggregateInputType
  }

  export type PlannedMealGroupByOutputType = {
    id: string
    meal_plan_id: string
    recipe_id: string
    date: Date
    meal_type: $Enums.MealType
    servings: number
    notes: string | null
    created_at: Date
    _count: PlannedMealCountAggregateOutputType | null
    _avg: PlannedMealAvgAggregateOutputType | null
    _sum: PlannedMealSumAggregateOutputType | null
    _min: PlannedMealMinAggregateOutputType | null
    _max: PlannedMealMaxAggregateOutputType | null
  }

  type GetPlannedMealGroupByPayload<T extends PlannedMealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlannedMealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlannedMealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlannedMealGroupByOutputType[P]>
            : GetScalarType<T[P], PlannedMealGroupByOutputType[P]>
        }
      >
    >


  export type PlannedMealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_plan_id?: boolean
    recipe_id?: boolean
    date?: boolean
    meal_type?: boolean
    servings?: boolean
    notes?: boolean
    created_at?: boolean
    meal_plan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedMeal"]>

  export type PlannedMealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_plan_id?: boolean
    recipe_id?: boolean
    date?: boolean
    meal_type?: boolean
    servings?: boolean
    notes?: boolean
    created_at?: boolean
    meal_plan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedMeal"]>

  export type PlannedMealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meal_plan_id?: boolean
    recipe_id?: boolean
    date?: boolean
    meal_type?: boolean
    servings?: boolean
    notes?: boolean
    created_at?: boolean
    meal_plan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plannedMeal"]>

  export type PlannedMealSelectScalar = {
    id?: boolean
    meal_plan_id?: boolean
    recipe_id?: boolean
    date?: boolean
    meal_type?: boolean
    servings?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type PlannedMealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meal_plan_id" | "recipe_id" | "date" | "meal_type" | "servings" | "notes" | "created_at", ExtArgs["result"]["plannedMeal"]>
  export type PlannedMealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_plan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type PlannedMealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_plan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type PlannedMealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal_plan?: boolean | MealPlanDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $PlannedMealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlannedMeal"
    objects: {
      meal_plan: Prisma.$MealPlanPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meal_plan_id: string
      recipe_id: string
      date: Date
      meal_type: $Enums.MealType
      servings: number
      notes: string | null
      created_at: Date
    }, ExtArgs["result"]["plannedMeal"]>
    composites: {}
  }

  type PlannedMealGetPayload<S extends boolean | null | undefined | PlannedMealDefaultArgs> = $Result.GetResult<Prisma.$PlannedMealPayload, S>

  type PlannedMealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlannedMealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlannedMealCountAggregateInputType | true
    }

  export interface PlannedMealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlannedMeal'], meta: { name: 'PlannedMeal' } }
    /**
     * Find zero or one PlannedMeal that matches the filter.
     * @param {PlannedMealFindUniqueArgs} args - Arguments to find a PlannedMeal
     * @example
     * // Get one PlannedMeal
     * const plannedMeal = await prisma.plannedMeal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlannedMealFindUniqueArgs>(args: SelectSubset<T, PlannedMealFindUniqueArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlannedMeal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlannedMealFindUniqueOrThrowArgs} args - Arguments to find a PlannedMeal
     * @example
     * // Get one PlannedMeal
     * const plannedMeal = await prisma.plannedMeal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlannedMealFindUniqueOrThrowArgs>(args: SelectSubset<T, PlannedMealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlannedMeal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedMealFindFirstArgs} args - Arguments to find a PlannedMeal
     * @example
     * // Get one PlannedMeal
     * const plannedMeal = await prisma.plannedMeal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlannedMealFindFirstArgs>(args?: SelectSubset<T, PlannedMealFindFirstArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlannedMeal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedMealFindFirstOrThrowArgs} args - Arguments to find a PlannedMeal
     * @example
     * // Get one PlannedMeal
     * const plannedMeal = await prisma.plannedMeal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlannedMealFindFirstOrThrowArgs>(args?: SelectSubset<T, PlannedMealFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlannedMeals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedMealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlannedMeals
     * const plannedMeals = await prisma.plannedMeal.findMany()
     * 
     * // Get first 10 PlannedMeals
     * const plannedMeals = await prisma.plannedMeal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plannedMealWithIdOnly = await prisma.plannedMeal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlannedMealFindManyArgs>(args?: SelectSubset<T, PlannedMealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlannedMeal.
     * @param {PlannedMealCreateArgs} args - Arguments to create a PlannedMeal.
     * @example
     * // Create one PlannedMeal
     * const PlannedMeal = await prisma.plannedMeal.create({
     *   data: {
     *     // ... data to create a PlannedMeal
     *   }
     * })
     * 
     */
    create<T extends PlannedMealCreateArgs>(args: SelectSubset<T, PlannedMealCreateArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlannedMeals.
     * @param {PlannedMealCreateManyArgs} args - Arguments to create many PlannedMeals.
     * @example
     * // Create many PlannedMeals
     * const plannedMeal = await prisma.plannedMeal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlannedMealCreateManyArgs>(args?: SelectSubset<T, PlannedMealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlannedMeals and returns the data saved in the database.
     * @param {PlannedMealCreateManyAndReturnArgs} args - Arguments to create many PlannedMeals.
     * @example
     * // Create many PlannedMeals
     * const plannedMeal = await prisma.plannedMeal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlannedMeals and only return the `id`
     * const plannedMealWithIdOnly = await prisma.plannedMeal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlannedMealCreateManyAndReturnArgs>(args?: SelectSubset<T, PlannedMealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlannedMeal.
     * @param {PlannedMealDeleteArgs} args - Arguments to delete one PlannedMeal.
     * @example
     * // Delete one PlannedMeal
     * const PlannedMeal = await prisma.plannedMeal.delete({
     *   where: {
     *     // ... filter to delete one PlannedMeal
     *   }
     * })
     * 
     */
    delete<T extends PlannedMealDeleteArgs>(args: SelectSubset<T, PlannedMealDeleteArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlannedMeal.
     * @param {PlannedMealUpdateArgs} args - Arguments to update one PlannedMeal.
     * @example
     * // Update one PlannedMeal
     * const plannedMeal = await prisma.plannedMeal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlannedMealUpdateArgs>(args: SelectSubset<T, PlannedMealUpdateArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlannedMeals.
     * @param {PlannedMealDeleteManyArgs} args - Arguments to filter PlannedMeals to delete.
     * @example
     * // Delete a few PlannedMeals
     * const { count } = await prisma.plannedMeal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlannedMealDeleteManyArgs>(args?: SelectSubset<T, PlannedMealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlannedMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedMealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlannedMeals
     * const plannedMeal = await prisma.plannedMeal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlannedMealUpdateManyArgs>(args: SelectSubset<T, PlannedMealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlannedMeals and returns the data updated in the database.
     * @param {PlannedMealUpdateManyAndReturnArgs} args - Arguments to update many PlannedMeals.
     * @example
     * // Update many PlannedMeals
     * const plannedMeal = await prisma.plannedMeal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlannedMeals and only return the `id`
     * const plannedMealWithIdOnly = await prisma.plannedMeal.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlannedMealUpdateManyAndReturnArgs>(args: SelectSubset<T, PlannedMealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlannedMeal.
     * @param {PlannedMealUpsertArgs} args - Arguments to update or create a PlannedMeal.
     * @example
     * // Update or create a PlannedMeal
     * const plannedMeal = await prisma.plannedMeal.upsert({
     *   create: {
     *     // ... data to create a PlannedMeal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlannedMeal we want to update
     *   }
     * })
     */
    upsert<T extends PlannedMealUpsertArgs>(args: SelectSubset<T, PlannedMealUpsertArgs<ExtArgs>>): Prisma__PlannedMealClient<$Result.GetResult<Prisma.$PlannedMealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlannedMeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedMealCountArgs} args - Arguments to filter PlannedMeals to count.
     * @example
     * // Count the number of PlannedMeals
     * const count = await prisma.plannedMeal.count({
     *   where: {
     *     // ... the filter for the PlannedMeals we want to count
     *   }
     * })
    **/
    count<T extends PlannedMealCountArgs>(
      args?: Subset<T, PlannedMealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlannedMealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlannedMeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedMealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlannedMealAggregateArgs>(args: Subset<T, PlannedMealAggregateArgs>): Prisma.PrismaPromise<GetPlannedMealAggregateType<T>>

    /**
     * Group by PlannedMeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannedMealGroupByArgs} args - Group by arguments.
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
      T extends PlannedMealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlannedMealGroupByArgs['orderBy'] }
        : { orderBy?: PlannedMealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlannedMealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlannedMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlannedMeal model
   */
  readonly fields: PlannedMealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlannedMeal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlannedMealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal_plan<T extends MealPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealPlanDefaultArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlannedMeal model
   */
  interface PlannedMealFieldRefs {
    readonly id: FieldRef<"PlannedMeal", 'String'>
    readonly meal_plan_id: FieldRef<"PlannedMeal", 'String'>
    readonly recipe_id: FieldRef<"PlannedMeal", 'String'>
    readonly date: FieldRef<"PlannedMeal", 'DateTime'>
    readonly meal_type: FieldRef<"PlannedMeal", 'MealType'>
    readonly servings: FieldRef<"PlannedMeal", 'Int'>
    readonly notes: FieldRef<"PlannedMeal", 'String'>
    readonly created_at: FieldRef<"PlannedMeal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlannedMeal findUnique
   */
  export type PlannedMealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * Filter, which PlannedMeal to fetch.
     */
    where: PlannedMealWhereUniqueInput
  }

  /**
   * PlannedMeal findUniqueOrThrow
   */
  export type PlannedMealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * Filter, which PlannedMeal to fetch.
     */
    where: PlannedMealWhereUniqueInput
  }

  /**
   * PlannedMeal findFirst
   */
  export type PlannedMealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * Filter, which PlannedMeal to fetch.
     */
    where?: PlannedMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedMeals to fetch.
     */
    orderBy?: PlannedMealOrderByWithRelationInput | PlannedMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlannedMeals.
     */
    cursor?: PlannedMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlannedMeals.
     */
    distinct?: PlannedMealScalarFieldEnum | PlannedMealScalarFieldEnum[]
  }

  /**
   * PlannedMeal findFirstOrThrow
   */
  export type PlannedMealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * Filter, which PlannedMeal to fetch.
     */
    where?: PlannedMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedMeals to fetch.
     */
    orderBy?: PlannedMealOrderByWithRelationInput | PlannedMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlannedMeals.
     */
    cursor?: PlannedMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedMeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlannedMeals.
     */
    distinct?: PlannedMealScalarFieldEnum | PlannedMealScalarFieldEnum[]
  }

  /**
   * PlannedMeal findMany
   */
  export type PlannedMealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * Filter, which PlannedMeals to fetch.
     */
    where?: PlannedMealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlannedMeals to fetch.
     */
    orderBy?: PlannedMealOrderByWithRelationInput | PlannedMealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlannedMeals.
     */
    cursor?: PlannedMealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlannedMeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlannedMeals.
     */
    skip?: number
    distinct?: PlannedMealScalarFieldEnum | PlannedMealScalarFieldEnum[]
  }

  /**
   * PlannedMeal create
   */
  export type PlannedMealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * The data needed to create a PlannedMeal.
     */
    data: XOR<PlannedMealCreateInput, PlannedMealUncheckedCreateInput>
  }

  /**
   * PlannedMeal createMany
   */
  export type PlannedMealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlannedMeals.
     */
    data: PlannedMealCreateManyInput | PlannedMealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlannedMeal createManyAndReturn
   */
  export type PlannedMealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * The data used to create many PlannedMeals.
     */
    data: PlannedMealCreateManyInput | PlannedMealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlannedMeal update
   */
  export type PlannedMealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * The data needed to update a PlannedMeal.
     */
    data: XOR<PlannedMealUpdateInput, PlannedMealUncheckedUpdateInput>
    /**
     * Choose, which PlannedMeal to update.
     */
    where: PlannedMealWhereUniqueInput
  }

  /**
   * PlannedMeal updateMany
   */
  export type PlannedMealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlannedMeals.
     */
    data: XOR<PlannedMealUpdateManyMutationInput, PlannedMealUncheckedUpdateManyInput>
    /**
     * Filter which PlannedMeals to update
     */
    where?: PlannedMealWhereInput
    /**
     * Limit how many PlannedMeals to update.
     */
    limit?: number
  }

  /**
   * PlannedMeal updateManyAndReturn
   */
  export type PlannedMealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * The data used to update PlannedMeals.
     */
    data: XOR<PlannedMealUpdateManyMutationInput, PlannedMealUncheckedUpdateManyInput>
    /**
     * Filter which PlannedMeals to update
     */
    where?: PlannedMealWhereInput
    /**
     * Limit how many PlannedMeals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlannedMeal upsert
   */
  export type PlannedMealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * The filter to search for the PlannedMeal to update in case it exists.
     */
    where: PlannedMealWhereUniqueInput
    /**
     * In case the PlannedMeal found by the `where` argument doesn't exist, create a new PlannedMeal with this data.
     */
    create: XOR<PlannedMealCreateInput, PlannedMealUncheckedCreateInput>
    /**
     * In case the PlannedMeal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlannedMealUpdateInput, PlannedMealUncheckedUpdateInput>
  }

  /**
   * PlannedMeal delete
   */
  export type PlannedMealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
    /**
     * Filter which PlannedMeal to delete.
     */
    where: PlannedMealWhereUniqueInput
  }

  /**
   * PlannedMeal deleteMany
   */
  export type PlannedMealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlannedMeals to delete
     */
    where?: PlannedMealWhereInput
    /**
     * Limit how many PlannedMeals to delete.
     */
    limit?: number
  }

  /**
   * PlannedMeal without action
   */
  export type PlannedMealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlannedMeal
     */
    select?: PlannedMealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlannedMeal
     */
    omit?: PlannedMealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannedMealInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    origin: 'origin',
    instructions: 'instructions',
    image_url: 'image_url',
    video_url: 'video_url',
    ingredients: 'ingredients',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const MealPlanScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    description: 'description',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MealPlanScalarFieldEnum = (typeof MealPlanScalarFieldEnum)[keyof typeof MealPlanScalarFieldEnum]


  export const PlannedMealScalarFieldEnum: {
    id: 'id',
    meal_plan_id: 'meal_plan_id',
    recipe_id: 'recipe_id',
    date: 'date',
    meal_type: 'meal_type',
    servings: 'servings',
    notes: 'notes',
    created_at: 'created_at'
  };

  export type PlannedMealScalarFieldEnum = (typeof PlannedMealScalarFieldEnum)[keyof typeof PlannedMealScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MealType'
   */
  export type EnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType'>
    


  /**
   * Reference to a field of type 'MealType[]'
   */
  export type ListEnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: UuidFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    category?: StringFilter<"Recipe"> | string
    origin?: StringFilter<"Recipe"> | string
    instructions?: StringFilter<"Recipe"> | string
    image_url?: StringFilter<"Recipe"> | string
    video_url?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: StringNullableListFilter<"Recipe">
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    planned_meals?: PlannedMealListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    origin?: SortOrder
    instructions?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrderInput | SortOrder
    ingredients?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    planned_meals?: PlannedMealOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    title?: StringFilter<"Recipe"> | string
    category?: StringFilter<"Recipe"> | string
    origin?: StringFilter<"Recipe"> | string
    instructions?: StringFilter<"Recipe"> | string
    image_url?: StringFilter<"Recipe"> | string
    video_url?: StringNullableFilter<"Recipe"> | string | null
    ingredients?: StringNullableListFilter<"Recipe">
    created_at?: DateTimeFilter<"Recipe"> | Date | string
    updated_at?: DateTimeFilter<"Recipe"> | Date | string
    planned_meals?: PlannedMealListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    origin?: SortOrder
    instructions?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrderInput | SortOrder
    ingredients?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Recipe"> | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    category?: StringWithAggregatesFilter<"Recipe"> | string
    origin?: StringWithAggregatesFilter<"Recipe"> | string
    instructions?: StringWithAggregatesFilter<"Recipe"> | string
    image_url?: StringWithAggregatesFilter<"Recipe"> | string
    video_url?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    ingredients?: StringNullableListFilter<"Recipe">
    created_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type MealPlanWhereInput = {
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    id?: UuidFilter<"MealPlan"> | string
    user_id?: StringFilter<"MealPlan"> | string
    name?: StringFilter<"MealPlan"> | string
    description?: StringNullableFilter<"MealPlan"> | string | null
    start_date?: DateTimeFilter<"MealPlan"> | Date | string
    end_date?: DateTimeFilter<"MealPlan"> | Date | string
    created_at?: DateTimeFilter<"MealPlan"> | Date | string
    updated_at?: DateTimeFilter<"MealPlan"> | Date | string
    planned_meals?: PlannedMealListRelationFilter
  }

  export type MealPlanOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    planned_meals?: PlannedMealOrderByRelationAggregateInput
  }

  export type MealPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    user_id?: StringFilter<"MealPlan"> | string
    name?: StringFilter<"MealPlan"> | string
    description?: StringNullableFilter<"MealPlan"> | string | null
    start_date?: DateTimeFilter<"MealPlan"> | Date | string
    end_date?: DateTimeFilter<"MealPlan"> | Date | string
    created_at?: DateTimeFilter<"MealPlan"> | Date | string
    updated_at?: DateTimeFilter<"MealPlan"> | Date | string
    planned_meals?: PlannedMealListRelationFilter
  }, "id">

  export type MealPlanOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MealPlanCountOrderByAggregateInput
    _max?: MealPlanMaxOrderByAggregateInput
    _min?: MealPlanMinOrderByAggregateInput
  }

  export type MealPlanScalarWhereWithAggregatesInput = {
    AND?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    OR?: MealPlanScalarWhereWithAggregatesInput[]
    NOT?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MealPlan"> | string
    user_id?: StringWithAggregatesFilter<"MealPlan"> | string
    name?: StringWithAggregatesFilter<"MealPlan"> | string
    description?: StringNullableWithAggregatesFilter<"MealPlan"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
  }

  export type PlannedMealWhereInput = {
    AND?: PlannedMealWhereInput | PlannedMealWhereInput[]
    OR?: PlannedMealWhereInput[]
    NOT?: PlannedMealWhereInput | PlannedMealWhereInput[]
    id?: UuidFilter<"PlannedMeal"> | string
    meal_plan_id?: UuidFilter<"PlannedMeal"> | string
    recipe_id?: UuidFilter<"PlannedMeal"> | string
    date?: DateTimeFilter<"PlannedMeal"> | Date | string
    meal_type?: EnumMealTypeFilter<"PlannedMeal"> | $Enums.MealType
    servings?: IntFilter<"PlannedMeal"> | number
    notes?: StringNullableFilter<"PlannedMeal"> | string | null
    created_at?: DateTimeFilter<"PlannedMeal"> | Date | string
    meal_plan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type PlannedMealOrderByWithRelationInput = {
    id?: SortOrder
    meal_plan_id?: SortOrder
    recipe_id?: SortOrder
    date?: SortOrder
    meal_type?: SortOrder
    servings?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    meal_plan?: MealPlanOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type PlannedMealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlannedMealWhereInput | PlannedMealWhereInput[]
    OR?: PlannedMealWhereInput[]
    NOT?: PlannedMealWhereInput | PlannedMealWhereInput[]
    meal_plan_id?: UuidFilter<"PlannedMeal"> | string
    recipe_id?: UuidFilter<"PlannedMeal"> | string
    date?: DateTimeFilter<"PlannedMeal"> | Date | string
    meal_type?: EnumMealTypeFilter<"PlannedMeal"> | $Enums.MealType
    servings?: IntFilter<"PlannedMeal"> | number
    notes?: StringNullableFilter<"PlannedMeal"> | string | null
    created_at?: DateTimeFilter<"PlannedMeal"> | Date | string
    meal_plan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type PlannedMealOrderByWithAggregationInput = {
    id?: SortOrder
    meal_plan_id?: SortOrder
    recipe_id?: SortOrder
    date?: SortOrder
    meal_type?: SortOrder
    servings?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PlannedMealCountOrderByAggregateInput
    _avg?: PlannedMealAvgOrderByAggregateInput
    _max?: PlannedMealMaxOrderByAggregateInput
    _min?: PlannedMealMinOrderByAggregateInput
    _sum?: PlannedMealSumOrderByAggregateInput
  }

  export type PlannedMealScalarWhereWithAggregatesInput = {
    AND?: PlannedMealScalarWhereWithAggregatesInput | PlannedMealScalarWhereWithAggregatesInput[]
    OR?: PlannedMealScalarWhereWithAggregatesInput[]
    NOT?: PlannedMealScalarWhereWithAggregatesInput | PlannedMealScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PlannedMeal"> | string
    meal_plan_id?: UuidWithAggregatesFilter<"PlannedMeal"> | string
    recipe_id?: UuidWithAggregatesFilter<"PlannedMeal"> | string
    date?: DateTimeWithAggregatesFilter<"PlannedMeal"> | Date | string
    meal_type?: EnumMealTypeWithAggregatesFilter<"PlannedMeal"> | $Enums.MealType
    servings?: IntWithAggregatesFilter<"PlannedMeal"> | number
    notes?: StringNullableWithAggregatesFilter<"PlannedMeal"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"PlannedMeal"> | Date | string
  }

  export type RecipeCreateInput = {
    id?: string
    title: string
    category: string
    origin: string
    instructions: string
    image_url: string
    video_url?: string | null
    ingredients?: RecipeCreateingredientsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    planned_meals?: PlannedMealCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    origin: string
    instructions: string
    image_url: string
    video_url?: string | null
    ingredients?: RecipeCreateingredientsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
    planned_meals?: PlannedMealUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: RecipeUpdateingredientsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    planned_meals?: PlannedMealUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: RecipeUpdateingredientsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    planned_meals?: PlannedMealUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    title: string
    category: string
    origin: string
    instructions: string
    image_url: string
    video_url?: string | null
    ingredients?: RecipeCreateingredientsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: RecipeUpdateingredientsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: RecipeUpdateingredientsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanCreateInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    planned_meals?: PlannedMealCreateNestedManyWithoutMeal_planInput
  }

  export type MealPlanUncheckedCreateInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    planned_meals?: PlannedMealUncheckedCreateNestedManyWithoutMeal_planInput
  }

  export type MealPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    planned_meals?: PlannedMealUpdateManyWithoutMeal_planNestedInput
  }

  export type MealPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    planned_meals?: PlannedMealUncheckedUpdateManyWithoutMeal_planNestedInput
  }

  export type MealPlanCreateManyInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedMealCreateInput = {
    id?: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
    meal_plan: MealPlanCreateNestedOneWithoutPlanned_mealsInput
    recipe: RecipeCreateNestedOneWithoutPlanned_mealsInput
  }

  export type PlannedMealUncheckedCreateInput = {
    id?: string
    meal_plan_id: string
    recipe_id: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
  }

  export type PlannedMealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_plan?: MealPlanUpdateOneRequiredWithoutPlanned_mealsNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutPlanned_mealsNestedInput
  }

  export type PlannedMealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_plan_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedMealCreateManyInput = {
    id?: string
    meal_plan_id: string
    recipe_id: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
  }

  export type PlannedMealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedMealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_plan_id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlannedMealListRelationFilter = {
    every?: PlannedMealWhereInput
    some?: PlannedMealWhereInput
    none?: PlannedMealWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlannedMealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    origin?: SortOrder
    instructions?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    ingredients?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    origin?: SortOrder
    instructions?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    origin?: SortOrder
    instructions?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MealPlanCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MealPlanMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MealPlanScalarRelationFilter = {
    is?: MealPlanWhereInput
    isNot?: MealPlanWhereInput
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type PlannedMealCountOrderByAggregateInput = {
    id?: SortOrder
    meal_plan_id?: SortOrder
    recipe_id?: SortOrder
    date?: SortOrder
    meal_type?: SortOrder
    servings?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type PlannedMealAvgOrderByAggregateInput = {
    servings?: SortOrder
  }

  export type PlannedMealMaxOrderByAggregateInput = {
    id?: SortOrder
    meal_plan_id?: SortOrder
    recipe_id?: SortOrder
    date?: SortOrder
    meal_type?: SortOrder
    servings?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type PlannedMealMinOrderByAggregateInput = {
    id?: SortOrder
    meal_plan_id?: SortOrder
    recipe_id?: SortOrder
    date?: SortOrder
    meal_type?: SortOrder
    servings?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type PlannedMealSumOrderByAggregateInput = {
    servings?: SortOrder
  }

  export type EnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type RecipeCreateingredientsInput = {
    set: string[]
  }

  export type PlannedMealCreateNestedManyWithoutRecipeInput = {
    create?: XOR<PlannedMealCreateWithoutRecipeInput, PlannedMealUncheckedCreateWithoutRecipeInput> | PlannedMealCreateWithoutRecipeInput[] | PlannedMealUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutRecipeInput | PlannedMealCreateOrConnectWithoutRecipeInput[]
    createMany?: PlannedMealCreateManyRecipeInputEnvelope
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
  }

  export type PlannedMealUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<PlannedMealCreateWithoutRecipeInput, PlannedMealUncheckedCreateWithoutRecipeInput> | PlannedMealCreateWithoutRecipeInput[] | PlannedMealUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutRecipeInput | PlannedMealCreateOrConnectWithoutRecipeInput[]
    createMany?: PlannedMealCreateManyRecipeInputEnvelope
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RecipeUpdateingredientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlannedMealUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<PlannedMealCreateWithoutRecipeInput, PlannedMealUncheckedCreateWithoutRecipeInput> | PlannedMealCreateWithoutRecipeInput[] | PlannedMealUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutRecipeInput | PlannedMealCreateOrConnectWithoutRecipeInput[]
    upsert?: PlannedMealUpsertWithWhereUniqueWithoutRecipeInput | PlannedMealUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: PlannedMealCreateManyRecipeInputEnvelope
    set?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    disconnect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    delete?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    update?: PlannedMealUpdateWithWhereUniqueWithoutRecipeInput | PlannedMealUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: PlannedMealUpdateManyWithWhereWithoutRecipeInput | PlannedMealUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: PlannedMealScalarWhereInput | PlannedMealScalarWhereInput[]
  }

  export type PlannedMealUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<PlannedMealCreateWithoutRecipeInput, PlannedMealUncheckedCreateWithoutRecipeInput> | PlannedMealCreateWithoutRecipeInput[] | PlannedMealUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutRecipeInput | PlannedMealCreateOrConnectWithoutRecipeInput[]
    upsert?: PlannedMealUpsertWithWhereUniqueWithoutRecipeInput | PlannedMealUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: PlannedMealCreateManyRecipeInputEnvelope
    set?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    disconnect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    delete?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    update?: PlannedMealUpdateWithWhereUniqueWithoutRecipeInput | PlannedMealUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: PlannedMealUpdateManyWithWhereWithoutRecipeInput | PlannedMealUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: PlannedMealScalarWhereInput | PlannedMealScalarWhereInput[]
  }

  export type PlannedMealCreateNestedManyWithoutMeal_planInput = {
    create?: XOR<PlannedMealCreateWithoutMeal_planInput, PlannedMealUncheckedCreateWithoutMeal_planInput> | PlannedMealCreateWithoutMeal_planInput[] | PlannedMealUncheckedCreateWithoutMeal_planInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutMeal_planInput | PlannedMealCreateOrConnectWithoutMeal_planInput[]
    createMany?: PlannedMealCreateManyMeal_planInputEnvelope
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
  }

  export type PlannedMealUncheckedCreateNestedManyWithoutMeal_planInput = {
    create?: XOR<PlannedMealCreateWithoutMeal_planInput, PlannedMealUncheckedCreateWithoutMeal_planInput> | PlannedMealCreateWithoutMeal_planInput[] | PlannedMealUncheckedCreateWithoutMeal_planInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutMeal_planInput | PlannedMealCreateOrConnectWithoutMeal_planInput[]
    createMany?: PlannedMealCreateManyMeal_planInputEnvelope
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
  }

  export type PlannedMealUpdateManyWithoutMeal_planNestedInput = {
    create?: XOR<PlannedMealCreateWithoutMeal_planInput, PlannedMealUncheckedCreateWithoutMeal_planInput> | PlannedMealCreateWithoutMeal_planInput[] | PlannedMealUncheckedCreateWithoutMeal_planInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutMeal_planInput | PlannedMealCreateOrConnectWithoutMeal_planInput[]
    upsert?: PlannedMealUpsertWithWhereUniqueWithoutMeal_planInput | PlannedMealUpsertWithWhereUniqueWithoutMeal_planInput[]
    createMany?: PlannedMealCreateManyMeal_planInputEnvelope
    set?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    disconnect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    delete?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    update?: PlannedMealUpdateWithWhereUniqueWithoutMeal_planInput | PlannedMealUpdateWithWhereUniqueWithoutMeal_planInput[]
    updateMany?: PlannedMealUpdateManyWithWhereWithoutMeal_planInput | PlannedMealUpdateManyWithWhereWithoutMeal_planInput[]
    deleteMany?: PlannedMealScalarWhereInput | PlannedMealScalarWhereInput[]
  }

  export type PlannedMealUncheckedUpdateManyWithoutMeal_planNestedInput = {
    create?: XOR<PlannedMealCreateWithoutMeal_planInput, PlannedMealUncheckedCreateWithoutMeal_planInput> | PlannedMealCreateWithoutMeal_planInput[] | PlannedMealUncheckedCreateWithoutMeal_planInput[]
    connectOrCreate?: PlannedMealCreateOrConnectWithoutMeal_planInput | PlannedMealCreateOrConnectWithoutMeal_planInput[]
    upsert?: PlannedMealUpsertWithWhereUniqueWithoutMeal_planInput | PlannedMealUpsertWithWhereUniqueWithoutMeal_planInput[]
    createMany?: PlannedMealCreateManyMeal_planInputEnvelope
    set?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    disconnect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    delete?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    connect?: PlannedMealWhereUniqueInput | PlannedMealWhereUniqueInput[]
    update?: PlannedMealUpdateWithWhereUniqueWithoutMeal_planInput | PlannedMealUpdateWithWhereUniqueWithoutMeal_planInput[]
    updateMany?: PlannedMealUpdateManyWithWhereWithoutMeal_planInput | PlannedMealUpdateManyWithWhereWithoutMeal_planInput[]
    deleteMany?: PlannedMealScalarWhereInput | PlannedMealScalarWhereInput[]
  }

  export type MealPlanCreateNestedOneWithoutPlanned_mealsInput = {
    create?: XOR<MealPlanCreateWithoutPlanned_mealsInput, MealPlanUncheckedCreateWithoutPlanned_mealsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutPlanned_mealsInput
    connect?: MealPlanWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutPlanned_mealsInput = {
    create?: XOR<RecipeCreateWithoutPlanned_mealsInput, RecipeUncheckedCreateWithoutPlanned_mealsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutPlanned_mealsInput
    connect?: RecipeWhereUniqueInput
  }

  export type EnumMealTypeFieldUpdateOperationsInput = {
    set?: $Enums.MealType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealPlanUpdateOneRequiredWithoutPlanned_mealsNestedInput = {
    create?: XOR<MealPlanCreateWithoutPlanned_mealsInput, MealPlanUncheckedCreateWithoutPlanned_mealsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutPlanned_mealsInput
    upsert?: MealPlanUpsertWithoutPlanned_mealsInput
    connect?: MealPlanWhereUniqueInput
    update?: XOR<XOR<MealPlanUpdateToOneWithWhereWithoutPlanned_mealsInput, MealPlanUpdateWithoutPlanned_mealsInput>, MealPlanUncheckedUpdateWithoutPlanned_mealsInput>
  }

  export type RecipeUpdateOneRequiredWithoutPlanned_mealsNestedInput = {
    create?: XOR<RecipeCreateWithoutPlanned_mealsInput, RecipeUncheckedCreateWithoutPlanned_mealsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutPlanned_mealsInput
    upsert?: RecipeUpsertWithoutPlanned_mealsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutPlanned_mealsInput, RecipeUpdateWithoutPlanned_mealsInput>, RecipeUncheckedUpdateWithoutPlanned_mealsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type NestedEnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlannedMealCreateWithoutRecipeInput = {
    id?: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
    meal_plan: MealPlanCreateNestedOneWithoutPlanned_mealsInput
  }

  export type PlannedMealUncheckedCreateWithoutRecipeInput = {
    id?: string
    meal_plan_id: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
  }

  export type PlannedMealCreateOrConnectWithoutRecipeInput = {
    where: PlannedMealWhereUniqueInput
    create: XOR<PlannedMealCreateWithoutRecipeInput, PlannedMealUncheckedCreateWithoutRecipeInput>
  }

  export type PlannedMealCreateManyRecipeInputEnvelope = {
    data: PlannedMealCreateManyRecipeInput | PlannedMealCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type PlannedMealUpsertWithWhereUniqueWithoutRecipeInput = {
    where: PlannedMealWhereUniqueInput
    update: XOR<PlannedMealUpdateWithoutRecipeInput, PlannedMealUncheckedUpdateWithoutRecipeInput>
    create: XOR<PlannedMealCreateWithoutRecipeInput, PlannedMealUncheckedCreateWithoutRecipeInput>
  }

  export type PlannedMealUpdateWithWhereUniqueWithoutRecipeInput = {
    where: PlannedMealWhereUniqueInput
    data: XOR<PlannedMealUpdateWithoutRecipeInput, PlannedMealUncheckedUpdateWithoutRecipeInput>
  }

  export type PlannedMealUpdateManyWithWhereWithoutRecipeInput = {
    where: PlannedMealScalarWhereInput
    data: XOR<PlannedMealUpdateManyMutationInput, PlannedMealUncheckedUpdateManyWithoutRecipeInput>
  }

  export type PlannedMealScalarWhereInput = {
    AND?: PlannedMealScalarWhereInput | PlannedMealScalarWhereInput[]
    OR?: PlannedMealScalarWhereInput[]
    NOT?: PlannedMealScalarWhereInput | PlannedMealScalarWhereInput[]
    id?: UuidFilter<"PlannedMeal"> | string
    meal_plan_id?: UuidFilter<"PlannedMeal"> | string
    recipe_id?: UuidFilter<"PlannedMeal"> | string
    date?: DateTimeFilter<"PlannedMeal"> | Date | string
    meal_type?: EnumMealTypeFilter<"PlannedMeal"> | $Enums.MealType
    servings?: IntFilter<"PlannedMeal"> | number
    notes?: StringNullableFilter<"PlannedMeal"> | string | null
    created_at?: DateTimeFilter<"PlannedMeal"> | Date | string
  }

  export type PlannedMealCreateWithoutMeal_planInput = {
    id?: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
    recipe: RecipeCreateNestedOneWithoutPlanned_mealsInput
  }

  export type PlannedMealUncheckedCreateWithoutMeal_planInput = {
    id?: string
    recipe_id: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
  }

  export type PlannedMealCreateOrConnectWithoutMeal_planInput = {
    where: PlannedMealWhereUniqueInput
    create: XOR<PlannedMealCreateWithoutMeal_planInput, PlannedMealUncheckedCreateWithoutMeal_planInput>
  }

  export type PlannedMealCreateManyMeal_planInputEnvelope = {
    data: PlannedMealCreateManyMeal_planInput | PlannedMealCreateManyMeal_planInput[]
    skipDuplicates?: boolean
  }

  export type PlannedMealUpsertWithWhereUniqueWithoutMeal_planInput = {
    where: PlannedMealWhereUniqueInput
    update: XOR<PlannedMealUpdateWithoutMeal_planInput, PlannedMealUncheckedUpdateWithoutMeal_planInput>
    create: XOR<PlannedMealCreateWithoutMeal_planInput, PlannedMealUncheckedCreateWithoutMeal_planInput>
  }

  export type PlannedMealUpdateWithWhereUniqueWithoutMeal_planInput = {
    where: PlannedMealWhereUniqueInput
    data: XOR<PlannedMealUpdateWithoutMeal_planInput, PlannedMealUncheckedUpdateWithoutMeal_planInput>
  }

  export type PlannedMealUpdateManyWithWhereWithoutMeal_planInput = {
    where: PlannedMealScalarWhereInput
    data: XOR<PlannedMealUpdateManyMutationInput, PlannedMealUncheckedUpdateManyWithoutMeal_planInput>
  }

  export type MealPlanCreateWithoutPlanned_mealsInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealPlanUncheckedCreateWithoutPlanned_mealsInput = {
    id?: string
    user_id: string
    name: string
    description?: string | null
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealPlanCreateOrConnectWithoutPlanned_mealsInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutPlanned_mealsInput, MealPlanUncheckedCreateWithoutPlanned_mealsInput>
  }

  export type RecipeCreateWithoutPlanned_mealsInput = {
    id?: string
    title: string
    category: string
    origin: string
    instructions: string
    image_url: string
    video_url?: string | null
    ingredients?: RecipeCreateingredientsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecipeUncheckedCreateWithoutPlanned_mealsInput = {
    id?: string
    title: string
    category: string
    origin: string
    instructions: string
    image_url: string
    video_url?: string | null
    ingredients?: RecipeCreateingredientsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecipeCreateOrConnectWithoutPlanned_mealsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutPlanned_mealsInput, RecipeUncheckedCreateWithoutPlanned_mealsInput>
  }

  export type MealPlanUpsertWithoutPlanned_mealsInput = {
    update: XOR<MealPlanUpdateWithoutPlanned_mealsInput, MealPlanUncheckedUpdateWithoutPlanned_mealsInput>
    create: XOR<MealPlanCreateWithoutPlanned_mealsInput, MealPlanUncheckedCreateWithoutPlanned_mealsInput>
    where?: MealPlanWhereInput
  }

  export type MealPlanUpdateToOneWithWhereWithoutPlanned_mealsInput = {
    where?: MealPlanWhereInput
    data: XOR<MealPlanUpdateWithoutPlanned_mealsInput, MealPlanUncheckedUpdateWithoutPlanned_mealsInput>
  }

  export type MealPlanUpdateWithoutPlanned_mealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealPlanUncheckedUpdateWithoutPlanned_mealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUpsertWithoutPlanned_mealsInput = {
    update: XOR<RecipeUpdateWithoutPlanned_mealsInput, RecipeUncheckedUpdateWithoutPlanned_mealsInput>
    create: XOR<RecipeCreateWithoutPlanned_mealsInput, RecipeUncheckedCreateWithoutPlanned_mealsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutPlanned_mealsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutPlanned_mealsInput, RecipeUncheckedUpdateWithoutPlanned_mealsInput>
  }

  export type RecipeUpdateWithoutPlanned_mealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: RecipeUpdateingredientsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateWithoutPlanned_mealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: RecipeUpdateingredientsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedMealCreateManyRecipeInput = {
    id?: string
    meal_plan_id: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
  }

  export type PlannedMealUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_plan?: MealPlanUpdateOneRequiredWithoutPlanned_mealsNestedInput
  }

  export type PlannedMealUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_plan_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedMealUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    meal_plan_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedMealCreateManyMeal_planInput = {
    id?: string
    recipe_id: string
    date: Date | string
    meal_type: $Enums.MealType
    servings?: number
    notes?: string | null
    created_at?: Date | string
  }

  export type PlannedMealUpdateWithoutMeal_planInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutPlanned_mealsNestedInput
  }

  export type PlannedMealUncheckedUpdateWithoutMeal_planInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlannedMealUncheckedUpdateManyWithoutMeal_planInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal_type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    servings?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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