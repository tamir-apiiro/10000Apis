
const express = require('express')
import {handler2695} from "./handler2695";
const app = express()
app.get('/2695', handler2695)
app.listen(3000, () => {})
        