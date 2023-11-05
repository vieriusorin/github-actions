import { render as renderComponent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export * from "@testing-library/react";

export const render = (ui, options) => {
	return {
		...renderComponent(ui, options),
		user: userEvent.setup(),
	};
};
