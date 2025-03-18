
const express = require('express')
import {handler3939} from "./handler3939";
const app = express()
app.get('/3939', handler3939)
app.listen(3000, () => {})
        