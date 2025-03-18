
const express = require('express')
import {handler3210} from "./handler3210";
const app = express()
app.get('/3210', handler3210)
app.listen(3000, () => {})
        