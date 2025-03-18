
const express = require('express')
import {handler8517} from "./handler8517";
const app = express()
app.get('/8517', handler8517)
app.listen(3000, () => {})
        