
const express = require('express')
import {handler3418} from "./handler3418";
const app = express()
app.get('/3418', handler3418)
app.listen(3000, () => {})
        