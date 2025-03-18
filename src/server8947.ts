
const express = require('express')
import {handler8947} from "./handler8947";
const app = express()
app.get('/8947', handler8947)
app.listen(3000, () => {})
        