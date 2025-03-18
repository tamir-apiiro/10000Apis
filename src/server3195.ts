
const express = require('express')
import {handler3195} from "./handler3195";
const app = express()
app.get('/3195', handler3195)
app.listen(3000, () => {})
        