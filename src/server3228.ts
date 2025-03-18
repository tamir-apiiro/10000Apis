
const express = require('express')
import {handler3228} from "./handler3228";
const app = express()
app.get('/3228', handler3228)
app.listen(3000, () => {})
        