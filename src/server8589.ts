
const express = require('express')
import {handler8589} from "./handler8589";
const app = express()
app.get('/8589', handler8589)
app.listen(3000, () => {})
        