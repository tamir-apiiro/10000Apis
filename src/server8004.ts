
const express = require('express')
import {handler8004} from "./handler8004";
const app = express()
app.get('/8004', handler8004)
app.listen(3000, () => {})
        