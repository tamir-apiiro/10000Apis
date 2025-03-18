
const express = require('express')
import {handler1000} from "./handler1000";
const app = express()
app.get('/1000', handler1000)
app.listen(3000, () => {})
        