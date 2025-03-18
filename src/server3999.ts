
const express = require('express')
import {handler3999} from "./handler3999";
const app = express()
app.get('/3999', handler3999)
app.listen(3000, () => {})
        