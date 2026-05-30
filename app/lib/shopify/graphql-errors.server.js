/**
 * @param {Array<{ message?: string }> | undefined} errors
 * @param {string} [context]
 */
export function throwIfGraphqlErrors(errors, context = "GraphQL request") {
  if (errors?.length) {
    const message = errors
      .map((error) => error.message || "Unknown GraphQL error")
      .join(", ");
    throw new Error(`${context}: ${message}`);
  }
}
