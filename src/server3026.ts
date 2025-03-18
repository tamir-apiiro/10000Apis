
const express = require('express')
import {handler3026} from "./handler3026";
const app = express()
app.get('/3026', handler3026)
app.listen(3000, () => {})
        