import mongoose, { Schema } from 'mongoose'
export const TaskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: 'No description',
		},
		status: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)

export const TaskModel = mongoose.model('Task', TaskSchema)
