
const express = require('express')
import {handler3042} from "./handler3042";
const app = express()
app.get('/3042', handler3042)
app.listen(3000, () => {})
        