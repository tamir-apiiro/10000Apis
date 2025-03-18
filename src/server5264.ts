
const express = require('express')
import {handler5264} from "./handler5264";
const app = express()
app.get('/5264', handler5264)
app.listen(3000, () => {})
        