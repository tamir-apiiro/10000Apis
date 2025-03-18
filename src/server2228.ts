
const express = require('express')
import {handler2228} from "./handler2228";
const app = express()
app.get('/2228', handler2228)
app.listen(3000, () => {})
        