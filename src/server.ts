import { prisma} from './lib/prisma'
import {fastify} from 'fastify'
import { getAllPrompts } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscription } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-completion'
import fastifyCors from '@fastify/cors'

const app = fastify()

app.register(fastifyCors, {
    origin:'*'
})

app.register(getAllPrompts)
app.register(uploadVideoRoute)
app.register(createTranscription)
app.register(generateAiCompletionRoute)

app.listen({
    port: 3333
}).then(()=> {
    console.log('Server On!!!');
    
})