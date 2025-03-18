
const express = require('express')
import {handler8395} from "./handler8395";
const app = express()
app.get('/8395', handler8395)
app.listen(3000, () => {})
        