
const express = require('express')
import {handler8894} from "./handler8894";
const app = express()
app.get('/8894', handler8894)
app.listen(3000, () => {})
        