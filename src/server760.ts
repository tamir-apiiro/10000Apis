
const express = require('express')
import {handler760} from "./handler760";
const app = express()
app.get('/760', handler760)
app.listen(3000, () => {})
        