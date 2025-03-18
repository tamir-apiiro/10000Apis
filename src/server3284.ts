
const express = require('express')
import {handler3284} from "./handler3284";
const app = express()
app.get('/3284', handler3284)
app.listen(3000, () => {})
        