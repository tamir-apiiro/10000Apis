
const express = require('express')
import {handler3662} from "./handler3662";
const app = express()
app.get('/3662', handler3662)
app.listen(3000, () => {})
        