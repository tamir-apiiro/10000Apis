
const express = require('express')
import {handler8683} from "./handler8683";
const app = express()
app.get('/8683', handler8683)
app.listen(3000, () => {})
        