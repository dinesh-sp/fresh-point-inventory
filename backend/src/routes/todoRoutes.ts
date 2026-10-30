import { Router } from 'express';
import { TodoController } from '../controllers/todoController';

const router = Router();

router.get('/', TodoController.list);
router.get('/:id', TodoController.getOne);
router.post('/', TodoController.create);
router.patch('/:id', TodoController.update);
router.delete('/:id', TodoController.remove);

export default router;
