export class Product {
    constructor(
        public id: number,
        public name?: string,
		public version?: number,
		public type_license?: string,
		public license_period?: number,
		public id_company?: number
	) { }
}