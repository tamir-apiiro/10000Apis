
const express = require('express')
import {handler7865} from "./handler7865";
const app = express()
app.get('/7865', handler7865)
app.listen(3000, () => {})
        