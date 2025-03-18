
const express = require('express')
import {handler6790} from "./handler6790";
const app = express()
app.get('/6790', handler6790)
app.listen(3000, () => {})
        