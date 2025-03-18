
const express = require('express')
import {handler5489} from "./handler5489";
const app = express()
app.get('/5489', handler5489)
app.listen(3000, () => {})
        