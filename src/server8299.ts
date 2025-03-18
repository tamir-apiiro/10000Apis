
const express = require('express')
import {handler8299} from "./handler8299";
const app = express()
app.get('/8299', handler8299)
app.listen(3000, () => {})
        