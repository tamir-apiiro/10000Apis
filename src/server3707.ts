
const express = require('express')
import {handler3707} from "./handler3707";
const app = express()
app.get('/3707', handler3707)
app.listen(3000, () => {})
        