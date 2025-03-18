
const express = require('express')
import {handler7325} from "./handler7325";
const app = express()
app.get('/7325', handler7325)
app.listen(3000, () => {})
        