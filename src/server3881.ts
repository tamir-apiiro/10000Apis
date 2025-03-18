
const express = require('express')
import {handler3881} from "./handler3881";
const app = express()
app.get('/3881', handler3881)
app.listen(3000, () => {})
        