
const express = require('express')
import {handler7981} from "./handler7981";
const app = express()
app.get('/7981', handler7981)
app.listen(3000, () => {})
        