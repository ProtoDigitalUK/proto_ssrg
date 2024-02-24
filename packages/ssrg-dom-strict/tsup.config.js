import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	target: "es2022",
	dts: true,
	format: ["esm", "cjs"],
	shims: true,
	sourcemap: true,
	clean: true,
	metafile: true,
	skipNodeModulesBundle: true,
	bundle: true,
	minify: true,
	splitting: true,
});
