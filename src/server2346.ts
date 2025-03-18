
const express = require('express')
import {handler2346} from "./handler2346";
const app = express()
app.get('/2346', handler2346)
app.listen(3000, () => {})
        