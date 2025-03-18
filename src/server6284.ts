
const express = require('express')
import {handler6284} from "./handler6284";
const app = express()
app.get('/6284', handler6284)
app.listen(3000, () => {})
        