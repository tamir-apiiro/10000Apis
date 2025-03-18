
const express = require('express')
import {handler5927} from "./handler5927";
const app = express()
app.get('/5927', handler5927)
app.listen(3000, () => {})
        