
const express = require('express')
import {handler4841} from "./handler4841";
const app = express()
app.get('/4841', handler4841)
app.listen(3000, () => {})
        