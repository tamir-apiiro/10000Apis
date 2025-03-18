
const express = require('express')
import {handler7453} from "./handler7453";
const app = express()
app.get('/7453', handler7453)
app.listen(3000, () => {})
        