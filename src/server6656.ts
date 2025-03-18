
const express = require('express')
import {handler6656} from "./handler6656";
const app = express()
app.get('/6656', handler6656)
app.listen(3000, () => {})
        