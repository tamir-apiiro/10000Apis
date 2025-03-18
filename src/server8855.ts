
const express = require('express')
import {handler8855} from "./handler8855";
const app = express()
app.get('/8855', handler8855)
app.listen(3000, () => {})
        