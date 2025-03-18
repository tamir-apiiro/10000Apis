
const express = require('express')
import {handler4496} from "./handler4496";
const app = express()
app.get('/4496', handler4496)
app.listen(3000, () => {})
        