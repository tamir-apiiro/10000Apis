
const express = require('express')
import {handler5432} from "./handler5432";
const app = express()
app.get('/5432', handler5432)
app.listen(3000, () => {})
        