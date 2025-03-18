
const express = require('express')
import {handler852} from "./handler852";
const app = express()
app.get('/852', handler852)
app.listen(3000, () => {})
        