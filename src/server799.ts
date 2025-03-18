
const express = require('express')
import {handler799} from "./handler799";
const app = express()
app.get('/799', handler799)
app.listen(3000, () => {})
        