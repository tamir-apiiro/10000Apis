
const express = require('express')
import {handler1228} from "./handler1228";
const app = express()
app.get('/1228', handler1228)
app.listen(3000, () => {})
        