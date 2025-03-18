
const express = require('express')
import {handler2315} from "./handler2315";
const app = express()
app.get('/2315', handler2315)
app.listen(3000, () => {})
        