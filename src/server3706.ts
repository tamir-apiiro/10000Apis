
const express = require('express')
import {handler3706} from "./handler3706";
const app = express()
app.get('/3706', handler3706)
app.listen(3000, () => {})
        