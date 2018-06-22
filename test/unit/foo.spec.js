import { describe, before, beforeEach, after, afterEach, it } from "mocha";
import { assert, expect , timeout} from "chai";
import sinon from "sinon";
import { Foo } from "./../../src/Foo";

describe("foo", () => {

    let foo;

    before(() => {
        foo = new Foo;
    });

    describe("Methods", () => {
        it("has a hello", () => {
            assert.isFunction(foo.hello);
        });
    });

});