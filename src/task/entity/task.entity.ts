export class TaskEntity {
	constructor(
		public title: string,
		public status: boolean,
		public description?: string
	) {}
}
