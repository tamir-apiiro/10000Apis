
const express = require('express')
import {handler8796} from "./handler8796";
const app = express()
app.get('/8796', handler8796)
app.listen(3000, () => {})
        