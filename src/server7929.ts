
const express = require('express')
import {handler7929} from "./handler7929";
const app = express()
app.get('/7929', handler7929)
app.listen(3000, () => {})
        