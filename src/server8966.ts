
const express = require('express')
import {handler8966} from "./handler8966";
const app = express()
app.get('/8966', handler8966)
app.listen(3000, () => {})
        