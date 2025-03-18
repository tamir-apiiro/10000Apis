
const express = require('express')
import {handler1183} from "./handler1183";
const app = express()
app.get('/1183', handler1183)
app.listen(3000, () => {})
        