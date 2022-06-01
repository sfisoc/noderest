import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed/routes/feed.router';
import { UserRouter } from './users/routes/user.router';
import { ImageRouter } from './images/routes/image.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);
router.use('/images', ImageRouter);


router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;