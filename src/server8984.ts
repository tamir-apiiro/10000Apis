
const express = require('express')
import {handler8984} from "./handler8984";
const app = express()
app.get('/8984', handler8984)
app.listen(3000, () => {})
        