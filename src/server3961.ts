
const express = require('express')
import {handler3961} from "./handler3961";
const app = express()
app.get('/3961', handler3961)
app.listen(3000, () => {})
        