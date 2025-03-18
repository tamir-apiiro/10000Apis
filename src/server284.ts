
const express = require('express')
import {handler284} from "./handler284";
const app = express()
app.get('/284', handler284)
app.listen(3000, () => {})
        