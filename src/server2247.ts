
const express = require('express')
import {handler2247} from "./handler2247";
const app = express()
app.get('/2247', handler2247)
app.listen(3000, () => {})
        