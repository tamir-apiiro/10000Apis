
const express = require('express')
import {handler74} from "./handler74";
const app = express()
app.get('/74', handler74)
app.listen(3000, () => {})
        