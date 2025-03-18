
const express = require('express')
import {handler4284} from "./handler4284";
const app = express()
app.get('/4284', handler4284)
app.listen(3000, () => {})
        