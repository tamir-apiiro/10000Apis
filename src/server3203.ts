
const express = require('express')
import {handler3203} from "./handler3203";
const app = express()
app.get('/3203', handler3203)
app.listen(3000, () => {})
        