
const express = require('express')
import {handler8228} from "./handler8228";
const app = express()
app.get('/8228', handler8228)
app.listen(3000, () => {})
        