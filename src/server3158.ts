
const express = require('express')
import {handler3158} from "./handler3158";
const app = express()
app.get('/3158', handler3158)
app.listen(3000, () => {})
        