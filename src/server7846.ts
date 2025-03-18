
const express = require('express')
import {handler7846} from "./handler7846";
const app = express()
app.get('/7846', handler7846)
app.listen(3000, () => {})
        