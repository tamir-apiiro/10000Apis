
const express = require('express')
import {handler3608} from "./handler3608";
const app = express()
app.get('/3608', handler3608)
app.listen(3000, () => {})
        