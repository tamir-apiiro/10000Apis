
const express = require('express')
import {handler7228} from "./handler7228";
const app = express()
app.get('/7228', handler7228)
app.listen(3000, () => {})
        