
const express = require('express')
import {handler4555} from "./handler4555";
const app = express()
app.get('/4555', handler4555)
app.listen(3000, () => {})
        