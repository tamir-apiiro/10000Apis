
const express = require('express')
import {handler8822} from "./handler8822";
const app = express()
app.get('/8822', handler8822)
app.listen(3000, () => {})
        