
const express = require('express')
import {handler8436} from "./handler8436";
const app = express()
app.get('/8436', handler8436)
app.listen(3000, () => {})
        