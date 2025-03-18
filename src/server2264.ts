
const express = require('express')
import {handler2264} from "./handler2264";
const app = express()
app.get('/2264', handler2264)
app.listen(3000, () => {})
        