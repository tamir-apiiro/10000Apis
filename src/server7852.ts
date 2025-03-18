
const express = require('express')
import {handler7852} from "./handler7852";
const app = express()
app.get('/7852', handler7852)
app.listen(3000, () => {})
        