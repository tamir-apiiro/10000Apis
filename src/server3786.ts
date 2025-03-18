
const express = require('express')
import {handler3786} from "./handler3786";
const app = express()
app.get('/3786', handler3786)
app.listen(3000, () => {})
        