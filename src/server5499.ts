
const express = require('express')
import {handler5499} from "./handler5499";
const app = express()
app.get('/5499', handler5499)
app.listen(3000, () => {})
        