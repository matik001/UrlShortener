/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'devextreme/ui': 'devextreme/esm/ui', /// https://supportcenter.devexpress.com/ticket/details/t1054272/vue3-react-vite-rollup-devextreme-fails-in-production-because-some-modules-do-not-pass
			'@storybook/jest': 'vitest' /// https://github.com/storybookjs/storybook/issues/17326
		}
	},
	build: {
		outDir: './build',
		sourcemap: true, //// mozna wylaczyc
		emptyOutDir: true,
		commonjsOptions: {
			defaultIsModuleExports(id) {
				try {
					const module = require(id);
					if (module?.default) {
						return false;
					}
					return 'auto';
				} catch (error) {
					return 'auto';
				}
			},
			transformMixedEsModules: true
		}
	}
});
