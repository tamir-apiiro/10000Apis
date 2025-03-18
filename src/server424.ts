
const express = require('express')
import {handler424} from "./handler424";
const app = express()
app.get('/424', handler424)
app.listen(3000, () => {})
        