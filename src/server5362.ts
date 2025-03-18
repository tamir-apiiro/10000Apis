
const express = require('express')
import {handler5362} from "./handler5362";
const app = express()
app.get('/5362', handler5362)
app.listen(3000, () => {})
        