
const express = require('express')
import {handler288} from "./handler288";
const app = express()
app.get('/288', handler288)
app.listen(3000, () => {})
        