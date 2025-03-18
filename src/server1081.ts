
const express = require('express')
import {handler1081} from "./handler1081";
const app = express()
app.get('/1081', handler1081)
app.listen(3000, () => {})
        