
const express = require('express')
import {handler8090} from "./handler8090";
const app = express()
app.get('/8090', handler8090)
app.listen(3000, () => {})
        