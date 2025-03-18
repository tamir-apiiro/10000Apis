
const express = require('express')
import {handler4518} from "./handler4518";
const app = express()
app.get('/4518', handler4518)
app.listen(3000, () => {})
        