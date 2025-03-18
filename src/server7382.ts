
const express = require('express')
import {handler7382} from "./handler7382";
const app = express()
app.get('/7382', handler7382)
app.listen(3000, () => {})
        