
const express = require('express')
import {handler1234} from "./handler1234";
const app = express()
app.get('/1234', handler1234)
app.listen(3000, () => {})
        