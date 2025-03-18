
const express = require('express')
import {handler4981} from "./handler4981";
const app = express()
app.get('/4981', handler4981)
app.listen(3000, () => {})
        