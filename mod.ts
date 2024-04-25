import type { Denops } from "https://deno.land/x/denops_std@v5.2.0/mod.ts";
import { v4 } from "npm:uuid@9.0.1";
import { execPodium } from "https://pax.deno.dev/Omochice/podeno@v1.0.0/src/lua.ts";
import {
  dedent,
  indent,
} from "https://raw.githubusercontent.com/Omochice/podeno/v1.1.0/src/indent.ts";
import { add } from "https://pax.deno.dev/Omochice-toybox/toy-release-please@v1.1.0";
import { is } from "https://pax.deno.dev/lambdalisue/deno-unknownutil@v3.10.0";
import { assert } from "https://raw.githubusercontent.com/lambdalisue/deno-unknownutil/v3.10.0/mod.ts";
import SysTray from "https://x.nest.land/systray@v0.2.0/mod.ts";
import { parse } from "jsr:@std/csv@0.224.0";

console.log("hi", v4());

console.log(add(1, 2));
