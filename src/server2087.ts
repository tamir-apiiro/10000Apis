
const express = require('express')
import {handler2087} from "./handler2087";
const app = express()
app.get('/2087', handler2087)
app.listen(3000, () => {})
        