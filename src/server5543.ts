
const express = require('express')
import {handler5543} from "./handler5543";
const app = express()
app.get('/5543', handler5543)
app.listen(3000, () => {})
        