
const express = require('express')
import {handler3441} from "./handler3441";
const app = express()
app.get('/3441', handler3441)
app.listen(3000, () => {})
        