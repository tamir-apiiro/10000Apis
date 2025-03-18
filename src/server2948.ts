
const express = require('express')
import {handler2948} from "./handler2948";
const app = express()
app.get('/2948', handler2948)
app.listen(3000, () => {})
        