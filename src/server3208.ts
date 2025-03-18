
const express = require('express')
import {handler3208} from "./handler3208";
const app = express()
app.get('/3208', handler3208)
app.listen(3000, () => {})
        