
const express = require('express')
import {handler2136} from "./handler2136";
const app = express()
app.get('/2136', handler2136)
app.listen(3000, () => {})
        