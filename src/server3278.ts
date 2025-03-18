
const express = require('express')
import {handler3278} from "./handler3278";
const app = express()
app.get('/3278', handler3278)
app.listen(3000, () => {})
        