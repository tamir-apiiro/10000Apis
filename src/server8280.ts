
const express = require('express')
import {handler8280} from "./handler8280";
const app = express()
app.get('/8280', handler8280)
app.listen(3000, () => {})
        