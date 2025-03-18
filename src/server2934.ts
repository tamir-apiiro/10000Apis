
const express = require('express')
import {handler2934} from "./handler2934";
const app = express()
app.get('/2934', handler2934)
app.listen(3000, () => {})
        