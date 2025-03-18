
const express = require('express')
import {handler3600} from "./handler3600";
const app = express()
app.get('/3600', handler3600)
app.listen(3000, () => {})
        