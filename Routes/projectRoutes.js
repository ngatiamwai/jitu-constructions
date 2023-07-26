const {Router} = require('express')
const {createProject, getOneProject, getProjects ,updateProject, deleteProject} = require('../Controllers/ProjectsController')

const projectrouter = Router()

projectrouter.post('/', createProject)
projectrouter.get('/', getProjects)
projectrouter.get('/:id', getOneProject)
projectrouter.put('/:id', updateProject)
projectrouter.delete('/:id', deleteProject)



module.exports = {
    projectrouter
}
