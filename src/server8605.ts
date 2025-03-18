
const express = require('express')
import {handler8605} from "./handler8605";
const app = express()
app.get('/8605', handler8605)
app.listen(3000, () => {})
        