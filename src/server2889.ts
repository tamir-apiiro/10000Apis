
const express = require('express')
import {handler2889} from "./handler2889";
const app = express()
app.get('/2889', handler2889)
app.listen(3000, () => {})
        