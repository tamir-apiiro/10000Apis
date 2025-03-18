
const express = require('express')
import {handler4228} from "./handler4228";
const app = express()
app.get('/4228', handler4228)
app.listen(3000, () => {})
        