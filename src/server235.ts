
const express = require('express')
import {handler235} from "./handler235";
const app = express()
app.get('/235', handler235)
app.listen(3000, () => {})
        