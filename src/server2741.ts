
const express = require('express')
import {handler2741} from "./handler2741";
const app = express()
app.get('/2741', handler2741)
app.listen(3000, () => {})
        