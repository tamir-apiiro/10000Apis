
const express = require('express')
import {handler35} from "./handler35";
const app = express()
app.get('/35', handler35)
app.listen(3000, () => {})
        