
const express = require('express')
import {handler4082} from "./handler4082";
const app = express()
app.get('/4082', handler4082)
app.listen(3000, () => {})
        