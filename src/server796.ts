
const express = require('express')
import {handler796} from "./handler796";
const app = express()
app.get('/796', handler796)
app.listen(3000, () => {})
        