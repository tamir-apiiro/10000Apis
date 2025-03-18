
const express = require('express')
import {handler8060} from "./handler8060";
const app = express()
app.get('/8060', handler8060)
app.listen(3000, () => {})
        