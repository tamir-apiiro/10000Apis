
const express = require('express')
import {handler2520} from "./handler2520";
const app = express()
app.get('/2520', handler2520)
app.listen(3000, () => {})
        