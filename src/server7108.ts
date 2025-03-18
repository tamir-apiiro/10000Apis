
const express = require('express')
import {handler7108} from "./handler7108";
const app = express()
app.get('/7108', handler7108)
app.listen(3000, () => {})
        