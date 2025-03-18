
const express = require('express')
import {handler3865} from "./handler3865";
const app = express()
app.get('/3865', handler3865)
app.listen(3000, () => {})
        