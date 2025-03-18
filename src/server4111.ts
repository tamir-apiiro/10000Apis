
const express = require('express')
import {handler4111} from "./handler4111";
const app = express()
app.get('/4111', handler4111)
app.listen(3000, () => {})
        