
const express = require('express')
import {handler6457} from "./handler6457";
const app = express()
app.get('/6457', handler6457)
app.listen(3000, () => {})
        