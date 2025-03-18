
const express = require('express')
import {handler4380} from "./handler4380";
const app = express()
app.get('/4380', handler4380)
app.listen(3000, () => {})
        