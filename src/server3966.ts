
const express = require('express')
import {handler3966} from "./handler3966";
const app = express()
app.get('/3966', handler3966)
app.listen(3000, () => {})
        