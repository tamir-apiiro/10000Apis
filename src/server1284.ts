
const express = require('express')
import {handler1284} from "./handler1284";
const app = express()
app.get('/1284', handler1284)
app.listen(3000, () => {})
        