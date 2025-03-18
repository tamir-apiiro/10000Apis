
const express = require('express')
import {handler8516} from "./handler8516";
const app = express()
app.get('/8516', handler8516)
app.listen(3000, () => {})
        