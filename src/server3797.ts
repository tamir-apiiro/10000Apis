
const express = require('express')
import {handler3797} from "./handler3797";
const app = express()
app.get('/3797', handler3797)
app.listen(3000, () => {})
        