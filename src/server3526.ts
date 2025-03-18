
const express = require('express')
import {handler3526} from "./handler3526";
const app = express()
app.get('/3526', handler3526)
app.listen(3000, () => {})
        