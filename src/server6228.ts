
const express = require('express')
import {handler6228} from "./handler6228";
const app = express()
app.get('/6228', handler6228)
app.listen(3000, () => {})
        