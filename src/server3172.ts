
const express = require('express')
import {handler3172} from "./handler3172";
const app = express()
app.get('/3172', handler3172)
app.listen(3000, () => {})
        