
const express = require('express')
import {handler4510} from "./handler4510";
const app = express()
app.get('/4510', handler4510)
app.listen(3000, () => {})
        