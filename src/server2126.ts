
const express = require('express')
import {handler2126} from "./handler2126";
const app = express()
app.get('/2126', handler2126)
app.listen(3000, () => {})
        