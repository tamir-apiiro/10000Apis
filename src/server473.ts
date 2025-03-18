
const express = require('express')
import {handler473} from "./handler473";
const app = express()
app.get('/473', handler473)
app.listen(3000, () => {})
        