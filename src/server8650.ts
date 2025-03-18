
const express = require('express')
import {handler8650} from "./handler8650";
const app = express()
app.get('/8650', handler8650)
app.listen(3000, () => {})
        