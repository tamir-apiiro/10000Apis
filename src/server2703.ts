
const express = require('express')
import {handler2703} from "./handler2703";
const app = express()
app.get('/2703', handler2703)
app.listen(3000, () => {})
        