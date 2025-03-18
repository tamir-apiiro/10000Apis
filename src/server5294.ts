
const express = require('express')
import {handler5294} from "./handler5294";
const app = express()
app.get('/5294', handler5294)
app.listen(3000, () => {})
        