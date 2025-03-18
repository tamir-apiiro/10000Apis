
const express = require('express')
import {handler3715} from "./handler3715";
const app = express()
app.get('/3715', handler3715)
app.listen(3000, () => {})
        