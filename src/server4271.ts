
const express = require('express')
import {handler4271} from "./handler4271";
const app = express()
app.get('/4271', handler4271)
app.listen(3000, () => {})
        