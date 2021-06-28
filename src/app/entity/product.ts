import { BaseEntity } from "./base-entity";

export abstract class Product extends BaseEntity {
    description: string;
	unit: string;
	unitPrice: number;
	stockQuantity: number;
	servingPerNormalSize: number;
}