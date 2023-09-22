import { assertEquals } from "$std/assert/mod.ts";
import { add } from "./main.ts";

Deno.test(() => {
  assertEquals(add(2, 3), 5);
});
