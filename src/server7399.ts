
const express = require('express')
import {handler7399} from "./handler7399";
const app = express()
app.get('/7399', handler7399)
app.listen(3000, () => {})
        