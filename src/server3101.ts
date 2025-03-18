
const express = require('express')
import {handler3101} from "./handler3101";
const app = express()
app.get('/3101', handler3101)
app.listen(3000, () => {})
        