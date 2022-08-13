import { Message } from "@flatfile/configure";
import { FlatfileRecord } from "@flatfile/hooks";
import * as Ap from "fp-ts/Apply";
import * as E from "fp-ts/Either";
import * as NEA from "fp-ts/NonEmptyArray";

/**
 * Helper function to apply reduction to FF record class.
 *
 * @example
 * fold(fn1, fn2, fn3, ...)(record)
 */
export const fold =
  (...fns: Array<(x: FlatfileRecord) => void>) =>
  (x: FlatfileRecord) =>
    fns.map((f) => f(x));

export const sequenceValidationT = Ap.sequenceT(
  E.getApplicativeValidation(NEA.getSemigroup<Message>()),
);