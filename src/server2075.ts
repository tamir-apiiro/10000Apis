
const express = require('express')
import {handler2075} from "./handler2075";
const app = express()
app.get('/2075', handler2075)
app.listen(3000, () => {})
        