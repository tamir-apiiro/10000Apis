
const express = require('express')
import {handler4787} from "./handler4787";
const app = express()
app.get('/4787', handler4787)
app.listen(3000, () => {})
        