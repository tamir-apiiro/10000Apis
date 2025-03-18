
const express = require('express')
import {handler4494} from "./handler4494";
const app = express()
app.get('/4494', handler4494)
app.listen(3000, () => {})
        