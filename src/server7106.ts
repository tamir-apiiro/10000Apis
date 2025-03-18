
const express = require('express')
import {handler7106} from "./handler7106";
const app = express()
app.get('/7106', handler7106)
app.listen(3000, () => {})
        