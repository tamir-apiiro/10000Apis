
const express = require('express')
import {handler526} from "./handler526";
const app = express()
app.get('/526', handler526)
app.listen(3000, () => {})
        