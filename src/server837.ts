
const express = require('express')
import {handler837} from "./handler837";
const app = express()
app.get('/837', handler837)
app.listen(3000, () => {})
        