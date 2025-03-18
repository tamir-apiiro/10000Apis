
const express = require('express')
import {handler3206} from "./handler3206";
const app = express()
app.get('/3206', handler3206)
app.listen(3000, () => {})
        