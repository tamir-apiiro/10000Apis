
const express = require('express')
import {handler3529} from "./handler3529";
const app = express()
app.get('/3529', handler3529)
app.listen(3000, () => {})
        