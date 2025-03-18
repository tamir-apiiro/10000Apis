
const express = require('express')
import {handler1526} from "./handler1526";
const app = express()
app.get('/1526', handler1526)
app.listen(3000, () => {})
        