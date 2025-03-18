
const express = require('express')
import {handler3264} from "./handler3264";
const app = express()
app.get('/3264', handler3264)
app.listen(3000, () => {})
        