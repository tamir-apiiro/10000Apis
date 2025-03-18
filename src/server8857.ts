
const express = require('express')
import {handler8857} from "./handler8857";
const app = express()
app.get('/8857', handler8857)
app.listen(3000, () => {})
        