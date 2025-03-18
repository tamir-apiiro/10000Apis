
const express = require('express')
import {handler7899} from "./handler7899";
const app = express()
app.get('/7899', handler7899)
app.listen(3000, () => {})
        