
const express = require('express')
import {handler2204} from "./handler2204";
const app = express()
app.get('/2204', handler2204)
app.listen(3000, () => {})
        