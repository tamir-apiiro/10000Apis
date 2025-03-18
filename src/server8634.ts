
const express = require('express')
import {handler8634} from "./handler8634";
const app = express()
app.get('/8634', handler8634)
app.listen(3000, () => {})
        