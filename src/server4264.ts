
const express = require('express')
import {handler4264} from "./handler4264";
const app = express()
app.get('/4264', handler4264)
app.listen(3000, () => {})
        