
const express = require('express')
import {handler7993} from "./handler7993";
const app = express()
app.get('/7993', handler7993)
app.listen(3000, () => {})
        