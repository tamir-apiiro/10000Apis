
const express = require('express')
import {handler489} from "./handler489";
const app = express()
app.get('/489', handler489)
app.listen(3000, () => {})
        