
const express = require('express')
import {handler4868} from "./handler4868";
const app = express()
app.get('/4868', handler4868)
app.listen(3000, () => {})
        