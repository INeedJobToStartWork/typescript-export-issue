import { myFunction } from "@packages/test-package-1"

//----------------------
// Functions
//----------------------

/**
 * My function description.
 *
 * @example
 * import { myOtherFunction2 } from "test-package-2"
 *
 * const results = myOtherFunction2()
 */
export function myOtherFunction2(): void {

	// Want to use there myFunction which exist only in "@packages/test-package-2", but cant cuz "do not exist one"
	console.log("Hello from myOtherFunction2!");
}

export default myOtherFunction2;
