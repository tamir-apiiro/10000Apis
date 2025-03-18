
const express = require('express')
import {handler1125} from "./handler1125";
const app = express()
app.get('/1125', handler1125)
app.listen(3000, () => {})
        