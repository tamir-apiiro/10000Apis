
const express = require('express')
import {handler4471} from "./handler4471";
const app = express()
app.get('/4471', handler4471)
app.listen(3000, () => {})
        