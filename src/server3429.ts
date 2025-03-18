
const express = require('express')
import {handler3429} from "./handler3429";
const app = express()
app.get('/3429', handler3429)
app.listen(3000, () => {})
        