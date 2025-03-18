
const express = require('express')
import {handler143} from "./handler143";
const app = express()
app.get('/143', handler143)
app.listen(3000, () => {})
        