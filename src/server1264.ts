
const express = require('express')
import {handler1264} from "./handler1264";
const app = express()
app.get('/1264', handler1264)
app.listen(3000, () => {})
        