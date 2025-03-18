
const express = require('express')
import {handler4713} from "./handler4713";
const app = express()
app.get('/4713', handler4713)
app.listen(3000, () => {})
        