export class TaskEntity {
	constructor(
		public title: string,
		public status: 'completed' | 'pending',
		public description?: string
	) {}
}
