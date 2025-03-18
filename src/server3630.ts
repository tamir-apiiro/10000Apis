
const express = require('express')
import {handler3630} from "./handler3630";
const app = express()
app.get('/3630', handler3630)
app.listen(3000, () => {})
        