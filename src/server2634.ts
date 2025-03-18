
const express = require('express')
import {handler2634} from "./handler2634";
const app = express()
app.get('/2634', handler2634)
app.listen(3000, () => {})
        