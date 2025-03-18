
const express = require('express')
import {handler4303} from "./handler4303";
const app = express()
app.get('/4303', handler4303)
app.listen(3000, () => {})
        