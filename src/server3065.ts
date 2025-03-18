
const express = require('express')
import {handler3065} from "./handler3065";
const app = express()
app.get('/3065', handler3065)
app.listen(3000, () => {})
        