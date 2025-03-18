
const express = require('express')
import {handler8609} from "./handler8609";
const app = express()
app.get('/8609', handler8609)
app.listen(3000, () => {})
        