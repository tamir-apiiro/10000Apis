
const express = require('express')
import {handler8370} from "./handler8370";
const app = express()
app.get('/8370', handler8370)
app.listen(3000, () => {})
        