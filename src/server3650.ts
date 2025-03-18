
const express = require('express')
import {handler3650} from "./handler3650";
const app = express()
app.get('/3650', handler3650)
app.listen(3000, () => {})
        