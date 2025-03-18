
const express = require('express')
import {handler3300} from "./handler3300";
const app = express()
app.get('/3300', handler3300)
app.listen(3000, () => {})
        