
const express = require('express')
import {handler3583} from "./handler3583";
const app = express()
app.get('/3583', handler3583)
app.listen(3000, () => {})
        