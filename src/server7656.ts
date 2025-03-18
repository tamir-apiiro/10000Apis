
const express = require('express')
import {handler7656} from "./handler7656";
const app = express()
app.get('/7656', handler7656)
app.listen(3000, () => {})
        