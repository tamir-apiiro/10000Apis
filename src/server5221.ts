
const express = require('express')
import {handler5221} from "./handler5221";
const app = express()
app.get('/5221', handler5221)
app.listen(3000, () => {})
        