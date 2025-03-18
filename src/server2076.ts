
const express = require('express')
import {handler2076} from "./handler2076";
const app = express()
app.get('/2076', handler2076)
app.listen(3000, () => {})
        