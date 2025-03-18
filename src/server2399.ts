
const express = require('express')
import {handler2399} from "./handler2399";
const app = express()
app.get('/2399', handler2399)
app.listen(3000, () => {})
        