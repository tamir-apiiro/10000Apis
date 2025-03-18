
const express = require('express')
import {handler1022} from "./handler1022";
const app = express()
app.get('/1022', handler1022)
app.listen(3000, () => {})
        