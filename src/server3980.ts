
const express = require('express')
import {handler3980} from "./handler3980";
const app = express()
app.get('/3980', handler3980)
app.listen(3000, () => {})
        