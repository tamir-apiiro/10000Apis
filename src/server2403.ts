
const express = require('express')
import {handler2403} from "./handler2403";
const app = express()
app.get('/2403', handler2403)
app.listen(3000, () => {})
        