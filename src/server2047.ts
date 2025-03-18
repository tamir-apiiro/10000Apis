
const express = require('express')
import {handler2047} from "./handler2047";
const app = express()
app.get('/2047', handler2047)
app.listen(3000, () => {})
        