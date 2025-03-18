
const express = require('express')
import {handler3543} from "./handler3543";
const app = express()
app.get('/3543', handler3543)
app.listen(3000, () => {})
        