
const express = require('express')
import {handler8009} from "./handler8009";
const app = express()
app.get('/8009', handler8009)
app.listen(3000, () => {})
        