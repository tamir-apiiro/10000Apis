
const express = require('express')
import {handler672} from "./handler672";
const app = express()
app.get('/672', handler672)
app.listen(3000, () => {})
        