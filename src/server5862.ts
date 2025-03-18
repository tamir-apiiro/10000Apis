
const express = require('express')
import {handler5862} from "./handler5862";
const app = express()
app.get('/5862', handler5862)
app.listen(3000, () => {})
        