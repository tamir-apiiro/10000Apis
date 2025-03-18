
const express = require('express')
import {handler4595} from "./handler4595";
const app = express()
app.get('/4595', handler4595)
app.listen(3000, () => {})
        