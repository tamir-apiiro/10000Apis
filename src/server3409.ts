
const express = require('express')
import {handler3409} from "./handler3409";
const app = express()
app.get('/3409', handler3409)
app.listen(3000, () => {})
        