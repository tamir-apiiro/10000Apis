
const express = require('express')
import {handler5585} from "./handler5585";
const app = express()
app.get('/5585', handler5585)
app.listen(3000, () => {})
        