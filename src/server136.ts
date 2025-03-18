
const express = require('express')
import {handler136} from "./handler136";
const app = express()
app.get('/136', handler136)
app.listen(3000, () => {})
        