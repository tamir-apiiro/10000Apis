
const express = require('express')
import {handler8073} from "./handler8073";
const app = express()
app.get('/8073', handler8073)
app.listen(3000, () => {})
        