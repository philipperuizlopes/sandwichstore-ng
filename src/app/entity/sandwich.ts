import { SandwichSize } from "./sandwich-size";
import { SandwichType } from "./sandwich-type";
import { Topping } from "./topping";

export class Sandwich {
    size: SandwichSize;
	type: SandwichType;
	totalPrice: number;
	toppings: Topping [];
}