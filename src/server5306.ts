
const express = require('express')
import {handler5306} from "./handler5306";
const app = express()
app.get('/5306', handler5306)
app.listen(3000, () => {})
        