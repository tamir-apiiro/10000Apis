
const express = require('express')
import {handler2799} from "./handler2799";
const app = express()
app.get('/2799', handler2799)
app.listen(3000, () => {})
        