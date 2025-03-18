
const express = require('express')
import {handler3199} from "./handler3199";
const app = express()
app.get('/3199', handler3199)
app.listen(3000, () => {})
        