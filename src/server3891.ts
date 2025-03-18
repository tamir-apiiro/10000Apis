
const express = require('express')
import {handler3891} from "./handler3891";
const app = express()
app.get('/3891', handler3891)
app.listen(3000, () => {})
        