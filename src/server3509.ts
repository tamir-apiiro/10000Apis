
const express = require('express')
import {handler3509} from "./handler3509";
const app = express()
app.get('/3509', handler3509)
app.listen(3000, () => {})
        