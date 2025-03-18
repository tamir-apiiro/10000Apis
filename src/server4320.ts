
const express = require('express')
import {handler4320} from "./handler4320";
const app = express()
app.get('/4320', handler4320)
app.listen(3000, () => {})
        