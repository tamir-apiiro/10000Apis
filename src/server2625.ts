
const express = require('express')
import {handler2625} from "./handler2625";
const app = express()
app.get('/2625', handler2625)
app.listen(3000, () => {})
        