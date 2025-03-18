
const express = require('express')
import {handler8979} from "./handler8979";
const app = express()
app.get('/8979', handler8979)
app.listen(3000, () => {})
        