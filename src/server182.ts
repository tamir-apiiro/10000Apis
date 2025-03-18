
const express = require('express')
import {handler182} from "./handler182";
const app = express()
app.get('/182', handler182)
app.listen(3000, () => {})
        