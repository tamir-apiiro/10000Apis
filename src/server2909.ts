
const express = require('express')
import {handler2909} from "./handler2909";
const app = express()
app.get('/2909', handler2909)
app.listen(3000, () => {})
        