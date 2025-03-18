
const express = require('express')
import {handler264} from "./handler264";
const app = express()
app.get('/264', handler264)
app.listen(3000, () => {})
        