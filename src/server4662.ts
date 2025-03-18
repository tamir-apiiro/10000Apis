
const express = require('express')
import {handler4662} from "./handler4662";
const app = express()
app.get('/4662', handler4662)
app.listen(3000, () => {})
        