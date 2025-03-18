
const express = require('express')
import {handler8072} from "./handler8072";
const app = express()
app.get('/8072', handler8072)
app.listen(3000, () => {})
        