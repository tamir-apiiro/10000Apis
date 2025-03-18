
const express = require('express')
import {handler899} from "./handler899";
const app = express()
app.get('/899', handler899)
app.listen(3000, () => {})
        