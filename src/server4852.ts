
const express = require('express')
import {handler4852} from "./handler4852";
const app = express()
app.get('/4852', handler4852)
app.listen(3000, () => {})
        