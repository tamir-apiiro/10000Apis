
const express = require('express')
import {handler3660} from "./handler3660";
const app = express()
app.get('/3660', handler3660)
app.listen(3000, () => {})
        