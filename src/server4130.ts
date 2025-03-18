
const express = require('express')
import {handler4130} from "./handler4130";
const app = express()
app.get('/4130', handler4130)
app.listen(3000, () => {})
        