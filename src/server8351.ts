
const express = require('express')
import {handler8351} from "./handler8351";
const app = express()
app.get('/8351', handler8351)
app.listen(3000, () => {})
        