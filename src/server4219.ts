
const express = require('express')
import {handler4219} from "./handler4219";
const app = express()
app.get('/4219', handler4219)
app.listen(3000, () => {})
        