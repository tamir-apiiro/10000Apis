
const express = require('express')
import {handler3070} from "./handler3070";
const app = express()
app.get('/3070', handler3070)
app.listen(3000, () => {})
        