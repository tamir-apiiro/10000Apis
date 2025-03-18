
const express = require('express')
import {handler3139} from "./handler3139";
const app = express()
app.get('/3139', handler3139)
app.listen(3000, () => {})
        