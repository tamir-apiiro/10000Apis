
const express = require('express')
import {handler8777} from "./handler8777";
const app = express()
app.get('/8777', handler8777)
app.listen(3000, () => {})
        