
const express = require('express')
import {handler8353} from "./handler8353";
const app = express()
app.get('/8353', handler8353)
app.listen(3000, () => {})
        