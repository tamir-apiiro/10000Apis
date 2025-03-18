
const express = require('express')
import {handler5528} from "./handler5528";
const app = express()
app.get('/5528', handler5528)
app.listen(3000, () => {})
        