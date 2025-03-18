
const express = require('express')
import {handler4043} from "./handler4043";
const app = express()
app.get('/4043', handler4043)
app.listen(3000, () => {})
        