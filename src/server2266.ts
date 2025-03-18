
const express = require('express')
import {handler2266} from "./handler2266";
const app = express()
app.get('/2266', handler2266)
app.listen(3000, () => {})
        