
const express = require('express')
import {handler8238} from "./handler8238";
const app = express()
app.get('/8238', handler8238)
app.listen(3000, () => {})
        