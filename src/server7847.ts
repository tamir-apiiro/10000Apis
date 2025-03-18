
const express = require('express')
import {handler7847} from "./handler7847";
const app = express()
app.get('/7847', handler7847)
app.listen(3000, () => {})
        