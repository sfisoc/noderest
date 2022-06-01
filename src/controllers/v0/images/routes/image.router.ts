import { Router, Request, Response } from 'express';

import { Image } from '../models/Image';

const router: Router = Router();


router.get('/', async (req: Request, res: Response) => {
});

router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await Image.findByPk(id);
    res.send(item);
});

export const ImageRouter: Router = router;