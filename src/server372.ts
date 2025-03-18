
const express = require('express')
import {handler372} from "./handler372";
const app = express()
app.get('/372', handler372)
app.listen(3000, () => {})
        