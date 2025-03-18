
const express = require('express')
import {handler979} from "./handler979";
const app = express()
app.get('/979', handler979)
app.listen(3000, () => {})
        