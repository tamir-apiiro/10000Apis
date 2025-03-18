
const express = require('express')
import {handler3553} from "./handler3553";
const app = express()
app.get('/3553', handler3553)
app.listen(3000, () => {})
        