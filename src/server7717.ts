
const express = require('express')
import {handler7717} from "./handler7717";
const app = express()
app.get('/7717', handler7717)
app.listen(3000, () => {})
        