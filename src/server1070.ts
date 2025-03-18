
const express = require('express')
import {handler1070} from "./handler1070";
const app = express()
app.get('/1070', handler1070)
app.listen(3000, () => {})
        