
const express = require('express')
import {handler5238} from "./handler5238";
const app = express()
app.get('/5238', handler5238)
app.listen(3000, () => {})
        