
const express = require('express')
import {handler4191} from "./handler4191";
const app = express()
app.get('/4191', handler4191)
app.listen(3000, () => {})
        