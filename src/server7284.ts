
const express = require('express')
import {handler7284} from "./handler7284";
const app = express()
app.get('/7284', handler7284)
app.listen(3000, () => {})
        