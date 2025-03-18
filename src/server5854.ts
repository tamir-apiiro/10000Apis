
const express = require('express')
import {handler5854} from "./handler5854";
const app = express()
app.get('/5854', handler5854)
app.listen(3000, () => {})
        