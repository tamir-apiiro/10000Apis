
const express = require('express')
import {handler3527} from "./handler3527";
const app = express()
app.get('/3527', handler3527)
app.listen(3000, () => {})
        