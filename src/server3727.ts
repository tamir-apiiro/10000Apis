
const express = require('express')
import {handler3727} from "./handler3727";
const app = express()
app.get('/3727', handler3727)
app.listen(3000, () => {})
        