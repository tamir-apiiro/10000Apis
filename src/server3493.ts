
const express = require('express')
import {handler3493} from "./handler3493";
const app = express()
app.get('/3493', handler3493)
app.listen(3000, () => {})
        