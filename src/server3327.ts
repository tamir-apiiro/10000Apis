
const express = require('express')
import {handler3327} from "./handler3327";
const app = express()
app.get('/3327', handler3327)
app.listen(3000, () => {})
        