
const express = require('express')
import {handler3272} from "./handler3272";
const app = express()
app.get('/3272', handler3272)
app.listen(3000, () => {})
        