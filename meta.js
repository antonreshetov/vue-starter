module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'My Awesome Project'
    },
    author: {
      type: 'string',
      message: 'Author'
    }
  },
  completeMessage: 'Project Complete!'
}