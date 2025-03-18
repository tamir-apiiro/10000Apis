
const express = require('express')
import {handler7264} from "./handler7264";
const app = express()
app.get('/7264', handler7264)
app.listen(3000, () => {})
        