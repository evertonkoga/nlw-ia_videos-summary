import cors from 'cors';
import express from 'express';

import { download } from './download.js';
import { transcribe } from './transcription.js';
import { summarize } from './summarize.js';

const app = express();
app.use(express.json())
app.use(cors());

app.get('/summary/:id', async (request, response) => {
    await download(request.params.id);
    
    const result = transcribe();

    return response.json({
        result,
    });
});

app.post('/summary', async (request, response) => {    
    const result = await summarize(request.body.text);

    return response.json({
        result,
    });
});

app.listen(3333, () => console.log("Server Running on port 3333"));