
const express = require('express')
import {handler9264} from "./handler9264";
const app = express()
app.get('/9264', handler9264)
app.listen(3000, () => {})
        