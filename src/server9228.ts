
const express = require('express')
import {handler9228} from "./handler9228";
const app = express()
app.get('/9228', handler9228)
app.listen(3000, () => {})
        