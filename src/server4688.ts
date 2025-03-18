
const express = require('express')
import {handler4688} from "./handler4688";
const app = express()
app.get('/4688', handler4688)
app.listen(3000, () => {})
        