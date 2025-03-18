
const express = require('express')
import {handler344} from "./handler344";
const app = express()
app.get('/344', handler344)
app.listen(3000, () => {})
        