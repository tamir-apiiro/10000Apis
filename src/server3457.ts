
const express = require('express')
import {handler3457} from "./handler3457";
const app = express()
app.get('/3457', handler3457)
app.listen(3000, () => {})
        