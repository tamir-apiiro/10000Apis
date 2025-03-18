
const express = require('express')
import {handler6264} from "./handler6264";
const app = express()
app.get('/6264', handler6264)
app.listen(3000, () => {})
        