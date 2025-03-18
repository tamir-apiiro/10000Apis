
const express = require('express')
import {handler5731} from "./handler5731";
const app = express()
app.get('/5731', handler5731)
app.listen(3000, () => {})
        