
const express = require('express')
import {handler3007} from "./handler3007";
const app = express()
app.get('/3007', handler3007)
app.listen(3000, () => {})
        