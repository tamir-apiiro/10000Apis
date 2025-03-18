
const express = require('express')
import {handler8760} from "./handler8760";
const app = express()
app.get('/8760', handler8760)
app.listen(3000, () => {})
        