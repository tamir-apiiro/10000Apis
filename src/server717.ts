
const express = require('express')
import {handler717} from "./handler717";
const app = express()
app.get('/717', handler717)
app.listen(3000, () => {})
        