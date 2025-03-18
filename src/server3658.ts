
const express = require('express')
import {handler3658} from "./handler3658";
const app = express()
app.get('/3658', handler3658)
app.listen(3000, () => {})
        