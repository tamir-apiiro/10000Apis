
const express = require('express')
import {handler2544} from "./handler2544";
const app = express()
app.get('/2544', handler2544)
app.listen(3000, () => {})
        