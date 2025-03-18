
const express = require('express')
import {handler3837} from "./handler3837";
const app = express()
app.get('/3837', handler3837)
app.listen(3000, () => {})
        