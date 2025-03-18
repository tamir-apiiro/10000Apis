
const express = require('express')
import {handler8852} from "./handler8852";
const app = express()
app.get('/8852', handler8852)
app.listen(3000, () => {})
        