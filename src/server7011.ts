
const express = require('express')
import {handler7011} from "./handler7011";
const app = express()
app.get('/7011', handler7011)
app.listen(3000, () => {})
        