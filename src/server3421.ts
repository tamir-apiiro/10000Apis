
const express = require('express')
import {handler3421} from "./handler3421";
const app = express()
app.get('/3421', handler3421)
app.listen(3000, () => {})
        