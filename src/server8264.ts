
const express = require('express')
import {handler8264} from "./handler8264";
const app = express()
app.get('/8264', handler8264)
app.listen(3000, () => {})
        