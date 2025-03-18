
const express = require('express')
import {handler3521} from "./handler3521";
const app = express()
app.get('/3521', handler3521)
app.listen(3000, () => {})
        