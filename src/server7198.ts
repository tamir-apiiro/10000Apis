
const express = require('express')
import {handler7198} from "./handler7198";
const app = express()
app.get('/7198', handler7198)
app.listen(3000, () => {})
        