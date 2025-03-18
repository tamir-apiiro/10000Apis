
const express = require('express')
import {handler4775} from "./handler4775";
const app = express()
app.get('/4775', handler4775)
app.listen(3000, () => {})
        