
const express = require('express')
import {handler3566} from "./handler3566";
const app = express()
app.get('/3566', handler3566)
app.listen(3000, () => {})
        