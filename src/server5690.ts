
const express = require('express')
import {handler5690} from "./handler5690";
const app = express()
app.get('/5690', handler5690)
app.listen(3000, () => {})
        