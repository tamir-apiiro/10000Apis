
const express = require('express')
import {handler6082} from "./handler6082";
const app = express()
app.get('/6082', handler6082)
app.listen(3000, () => {})
        