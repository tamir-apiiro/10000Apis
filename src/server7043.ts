
const express = require('express')
import {handler7043} from "./handler7043";
const app = express()
app.get('/7043', handler7043)
app.listen(3000, () => {})
        