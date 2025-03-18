
const express = require('express')
import {handler4353} from "./handler4353";
const app = express()
app.get('/4353', handler4353)
app.listen(3000, () => {})
        