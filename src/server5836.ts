
const express = require('express')
import {handler5836} from "./handler5836";
const app = express()
app.get('/5836', handler5836)
app.listen(3000, () => {})
        