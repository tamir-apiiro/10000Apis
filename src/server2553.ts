
const express = require('express')
import {handler2553} from "./handler2553";
const app = express()
app.get('/2553', handler2553)
app.listen(3000, () => {})
        