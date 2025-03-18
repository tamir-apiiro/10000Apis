
const express = require('express')
import {handler7064} from "./handler7064";
const app = express()
app.get('/7064', handler7064)
app.listen(3000, () => {})
        