
const express = require('express')
import {handler8981} from "./handler8981";
const app = express()
app.get('/8981', handler8981)
app.listen(3000, () => {})
        