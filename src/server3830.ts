
const express = require('express')
import {handler3830} from "./handler3830";
const app = express()
app.get('/3830', handler3830)
app.listen(3000, () => {})
        