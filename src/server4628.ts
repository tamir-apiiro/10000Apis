
const express = require('express')
import {handler4628} from "./handler4628";
const app = express()
app.get('/4628', handler4628)
app.listen(3000, () => {})
        