
const express = require('express')
import {handler8669} from "./handler8669";
const app = express()
app.get('/8669', handler8669)
app.listen(3000, () => {})
        