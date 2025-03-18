
const express = require('express')
import {handler8464} from "./handler8464";
const app = express()
app.get('/8464', handler8464)
app.listen(3000, () => {})
        