const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const ActivitySchema = new Schema({
    title: {
        type: String,
        // required: [true, 'title field is required.']
    },
    order: {
        type: String,
    },
    location: {
        type: String,
    },
    context: {
        type: String,
        // required: [true, 'context field is required.']
    },
    image_web: {
        type: String,
        // required: [true, 'image_web field is required.']
    },
    register_web: {
        type: String,
    },
    start_date: {
        type: String,
        // required: [true, 'start_date field is required.']
    },
    end_date: {
        type: String,
        // required: [true, 'end_date field is required.']
    },
})

// Creating a table within database with the defined schema
const Activity = mongoose.model('activity', ActivitySchema)

// Exporting table for querying and mutating
module.exports = Activity
