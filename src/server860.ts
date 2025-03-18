
const express = require('express')
import {handler860} from "./handler860";
const app = express()
app.get('/860', handler860)
app.listen(3000, () => {})
        