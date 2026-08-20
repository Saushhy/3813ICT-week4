import express from 'express';
import cors from 'cors';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { workshop5 } from './routes.js';

const APP = express();
const PORT = 3000;
const SITEROOT = path.dirname(fileURLToPath(import.meta.url));
const httpServer = http.createServer(APP);

APP.use(express.static(path.join(SITEROOT, '../dist/week4tut/browser')));

APP.use(cors());

APP.use(express.json());

workshop5(APP);

httpServer.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
