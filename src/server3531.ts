
const express = require('express')
import {handler3531} from "./handler3531";
const app = express()
app.get('/3531', handler3531)
app.listen(3000, () => {})
        