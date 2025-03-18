
const express = require('express')
import {handler2720} from "./handler2720";
const app = express()
app.get('/2720', handler2720)
app.listen(3000, () => {})
        