
const express = require('express')
import {handler831} from "./handler831";
const app = express()
app.get('/831', handler831)
app.listen(3000, () => {})
        