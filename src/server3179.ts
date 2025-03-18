
const express = require('express')
import {handler3179} from "./handler3179";
const app = express()
app.get('/3179', handler3179)
app.listen(3000, () => {})
        