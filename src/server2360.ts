
const express = require('express')
import {handler2360} from "./handler2360";
const app = express()
app.get('/2360', handler2360)
app.listen(3000, () => {})
        