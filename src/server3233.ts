
const express = require('express')
import {handler3233} from "./handler3233";
const app = express()
app.get('/3233', handler3233)
app.listen(3000, () => {})
        