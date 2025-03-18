
const express = require('express')
import {handler5227} from "./handler5227";
const app = express()
app.get('/5227', handler5227)
app.listen(3000, () => {})
        