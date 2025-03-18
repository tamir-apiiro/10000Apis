
const express = require('express')
import {handler8054} from "./handler8054";
const app = express()
app.get('/8054', handler8054)
app.listen(3000, () => {})
        