
const express = require('express')
import {handler8709} from "./handler8709";
const app = express()
app.get('/8709', handler8709)
app.listen(3000, () => {})
        