import path from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const configuration = {
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			$lib: path.resolve(__dirname, "./src/lib"),
			$components: path.resolve(__dirname, "./src/components"),
		},
	},
};

export default configuration;
