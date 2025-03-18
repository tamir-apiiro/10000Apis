
const express = require('express')
import {handler1285} from "./handler1285";
const app = express()
app.get('/1285', handler1285)
app.listen(3000, () => {})
        