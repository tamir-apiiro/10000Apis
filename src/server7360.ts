
const express = require('express')
import {handler7360} from "./handler7360";
const app = express()
app.get('/7360', handler7360)
app.listen(3000, () => {})
        