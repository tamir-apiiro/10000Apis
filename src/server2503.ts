
const express = require('express')
import {handler2503} from "./handler2503";
const app = express()
app.get('/2503', handler2503)
app.listen(3000, () => {})
        