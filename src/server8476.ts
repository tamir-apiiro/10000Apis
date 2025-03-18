
const express = require('express')
import {handler8476} from "./handler8476";
const app = express()
app.get('/8476', handler8476)
app.listen(3000, () => {})
        