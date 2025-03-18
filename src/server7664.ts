
const express = require('express')
import {handler7664} from "./handler7664";
const app = express()
app.get('/7664', handler7664)
app.listen(3000, () => {})
        