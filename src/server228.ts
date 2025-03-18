
const express = require('express')
import {handler228} from "./handler228";
const app = express()
app.get('/228', handler228)
app.listen(3000, () => {})
        