
const express = require('express')
import {handler4127} from "./handler4127";
const app = express()
app.get('/4127', handler4127)
app.listen(3000, () => {})
        