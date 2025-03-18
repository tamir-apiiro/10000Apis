
const express = require('express')
import {handler1509} from "./handler1509";
const app = express()
app.get('/1509', handler1509)
app.listen(3000, () => {})
        