
const express = require('express')
import {handler5978} from "./handler5978";
const app = express()
app.get('/5978', handler5978)
app.listen(3000, () => {})
        