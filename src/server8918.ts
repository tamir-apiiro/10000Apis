
const express = require('express')
import {handler8918} from "./handler8918";
const app = express()
app.get('/8918', handler8918)
app.listen(3000, () => {})
        