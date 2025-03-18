
const express = require('express')
import {handler1135} from "./handler1135";
const app = express()
app.get('/1135', handler1135)
app.listen(3000, () => {})
        