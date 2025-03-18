
const express = require('express')
import {handler5153} from "./handler5153";
const app = express()
app.get('/5153', handler5153)
app.listen(3000, () => {})
        