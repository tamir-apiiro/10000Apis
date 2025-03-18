
const express = require('express')
import {handler5664} from "./handler5664";
const app = express()
app.get('/5664', handler5664)
app.listen(3000, () => {})
        