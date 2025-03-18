
const express = require('express')
import {handler8214} from "./handler8214";
const app = express()
app.get('/8214', handler8214)
app.listen(3000, () => {})
        