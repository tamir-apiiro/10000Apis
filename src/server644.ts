
const express = require('express')
import {handler644} from "./handler644";
const app = express()
app.get('/644', handler644)
app.listen(3000, () => {})
        