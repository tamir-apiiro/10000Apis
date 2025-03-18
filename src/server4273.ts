
const express = require('express')
import {handler4273} from "./handler4273";
const app = express()
app.get('/4273', handler4273)
app.listen(3000, () => {})
        