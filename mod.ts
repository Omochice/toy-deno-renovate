import type { Denops } from "https://deno.land/x/denops_std@v3.0.0/mod.ts";
import { v4 } from "npm:uuid@9.0.1";
import { execPodium } from "https://pax.deno.dev/Omochice/podeno@v1.0.0/src/lua.ts"
import { indent, dedent } from "https://raw.githubusercontent.com/Omochice/podeno/v1.0.0/src/indent.ts"

console.log("hi", v4());
