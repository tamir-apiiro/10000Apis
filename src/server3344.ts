
const express = require('express')
import {handler3344} from "./handler3344";
const app = express()
app.get('/3344', handler3344)
app.listen(3000, () => {})
        