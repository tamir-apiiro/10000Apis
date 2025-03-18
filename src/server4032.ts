
const express = require('express')
import {handler4032} from "./handler4032";
const app = express()
app.get('/4032', handler4032)
app.listen(3000, () => {})
        