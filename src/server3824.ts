
const express = require('express')
import {handler3824} from "./handler3824";
const app = express()
app.get('/3824', handler3824)
app.listen(3000, () => {})
        