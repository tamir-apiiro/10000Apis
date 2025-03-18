
const express = require('express')
import {handler5256} from "./handler5256";
const app = express()
app.get('/5256', handler5256)
app.listen(3000, () => {})
        