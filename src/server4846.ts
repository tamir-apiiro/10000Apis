
const express = require('express')
import {handler4846} from "./handler4846";
const app = express()
app.get('/4846', handler4846)
app.listen(3000, () => {})
        