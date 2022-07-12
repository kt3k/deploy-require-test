import { createRequire } from "https://deno.land/std@0.147.0/node/module.ts";
import { serve } from "https://deno.land/std@0.147.0/http/server.ts";

const require = createRequire(import.meta.url);

const a = require("./a.js");

serve(() => new Response(a));
