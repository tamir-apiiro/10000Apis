
const express = require('express')
import {handler3082} from "./handler3082";
const app = express()
app.get('/3082', handler3082)
app.listen(3000, () => {})
        