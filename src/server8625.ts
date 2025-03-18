
const express = require('express')
import {handler8625} from "./handler8625";
const app = express()
app.get('/8625', handler8625)
app.listen(3000, () => {})
        