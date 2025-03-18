
const express = require('express')
import {handler8993} from "./handler8993";
const app = express()
app.get('/8993', handler8993)
app.listen(3000, () => {})
        