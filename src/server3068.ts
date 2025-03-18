
const express = require('express')
import {handler3068} from "./handler3068";
const app = express()
app.get('/3068', handler3068)
app.listen(3000, () => {})
        