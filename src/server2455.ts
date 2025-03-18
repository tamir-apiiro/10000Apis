
const express = require('express')
import {handler2455} from "./handler2455";
const app = express()
app.get('/2455', handler2455)
app.listen(3000, () => {})
        