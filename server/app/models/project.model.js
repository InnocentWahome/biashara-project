const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: false,
  },
  description: {
    type: String,
  },
  lead: {
    // type: Schema.Types.ObjectId,
    // ref: 'Employee',
    required: false,
    type: String
  },
  category: {
    type: String,
    enum: ['blockchain', 'website', 'application'],
    default: 'application',
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  status: {
    type: String,
    enum: ['initiated', 'in-progress', 'completed', 'terminated'],
    default: 'initiated',
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
}, {
  timestamps: true,
});

module.exports = model('Project', ProjectSchema);
