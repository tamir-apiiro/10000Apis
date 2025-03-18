
const express = require('express')
import {handler4114} from "./handler4114";
const app = express()
app.get('/4114', handler4114)
app.listen(3000, () => {})
        