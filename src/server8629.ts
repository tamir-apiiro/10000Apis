
const express = require('express')
import {handler8629} from "./handler8629";
const app = express()
app.get('/8629', handler8629)
app.listen(3000, () => {})
        