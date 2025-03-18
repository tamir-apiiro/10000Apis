
const express = require('express')
import {handler7924} from "./handler7924";
const app = express()
app.get('/7924', handler7924)
app.listen(3000, () => {})
        