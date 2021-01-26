import { AppState } from '../AppState'
import { api } from './AxiosService'

class TaskService {
  async getById(taskId) {
    try {
      const res = await api.get('api/task/' + taskId)
      AppState.activetask = res.data
    } catch (error) {

    }
  }

  async getCommentsById(taskId) {
    try {
      const res = await api.get('api/task/' + taskId + '/comments')
      AppState.tasks = res.data
    } catch (error) {

    }
  }

  async create(task) {
    try {
      const res = await api.post('api/task', task)
      AppState.tasks.push(res.data)
    } catch (error) {

    }
  }

  async edit(updatedtask, taskId) {
    try {
      const res = await api.put('api/task/' + taskId, updatedtask)
      const index = AppState.tasks.findIndex(task => task.id === res.data.id)
      AppState.tasks.splice(index, 1, res.data)
    } catch (error) {

    }
  }

  async delete(taskId) {
    try {
      await api.put('api/task' + taskId)
      AppState.tasks.filter(task => (task.id !== taskId))
    } catch (error) {

    }
  }
}

export const taskService = new TaskService()