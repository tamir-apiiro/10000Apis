
const express = require('express')
import {handler465} from "./handler465";
const app = express()
app.get('/465', handler465)
app.listen(3000, () => {})
        